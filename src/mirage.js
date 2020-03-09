import {
  Server, Model, Response, Factory,
} from 'miragejs';
import jwt from 'jsonwebtoken';
import faker from 'faker';


const makeServer = ({ environment = 'development' } = {}) => {
  const images = [
    'https://res.cloudinary.com/dqw7jnfgo/image/upload/q_30/v1583778496/Softescu/images.png',
    'https://res.cloudinary.com/dqw7jnfgo/image/upload/q_30/v1583778493/Softescu/1_PjxaUpMULTLqXNpqCtz0kg.png',
    'https://res.cloudinary.com/dqw7jnfgo/image/upload/q_30/v1583778449/Softescu/download.jpg',
    'https://res.cloudinary.com/dqw7jnfgo/image/upload/q_30/v1583778447/Softescu/images_1.png',
    'https://res.cloudinary.com/dqw7jnfgo/image/upload/q_30/v1583778444/Softescu/download_1.jpg',
    'https://res.cloudinary.com/dqw7jnfgo/image/upload/q_30/v1583778938/Softescu/download_2.jpg',
    'https://res.cloudinary.com/dqw7jnfgo/image/upload/q_30/v1583778939/Softescu/images_2.png',
  ];
  const products = [
    'Javascript dummies',
    'Software basics',
    'Technical documentation',
    'Professional git',
    'AI learning',
    'Machine learning',
    'Softescu project',
    'I need sleep',
    'Working vigil',
    'products title',
  ];
  const server = new Server({
    environment,

    models: {
      user: Model,
      product: Model,
    },

    factories: {
      user: Factory.extend({
        email() {
          return faker.internet.email();
        },
        username() {
          return faker.internet.userName();
        },
        phoneNumber() {
          return faker.phone.phoneNumber();
        },
        firstName() {
          return faker.name.firstName();
        },
        lastName() {
          return faker.name.lastName();
        },
        password() {
          return faker.internet.password();
        },
        isStaff() {
          return false;
        },
      }),
      product: Factory.extend({
        title() {
          return products[Math.floor(Math.random() * 10)];
        },
        author() {
          return faker.name.findName();
        },
        publishedAt() {
          return faker.date.recent();
        },
        imgUrl(i) {
          return images[i];
        },
        isPremium() {
          return false;
        },
      }),
    },

    seeds(server) {
      server.createList('user', 10);
      server.createList('product', 6);
      server.create('product', {
        title: 'Premium software',
        author: faker.name.findName(),
        publishedAt: faker.date.recent(),
        imgUrl: images[Math.floor(Math.random() * 5)],
        isPremium: true,
      });
      server.create('product', {
        title: 'Advanced React',
        author: faker.name.findName(),
        publishedAt: faker.date.recent(),
        imgUrl: images[Math.floor(Math.random() * 5)],
        isPremium: true,
      });
      server.create('user', {
        email: 'softuscu@gmail.com',
        username: 'adminusername',
        phoneNumber: '0809789987',
        firstName: 'softman',
        lastName: 'softWoman',
        password: 'password',
        isStaff: true,
      });
      server.create('user', {
        email: 'softuscu@gmail.com',
        username: 'username',
        phoneNumber: '0809789987',
        firstName: 'softman',
        lastName: 'softWoman',
        password: 'password',
        isStaff: false,
      });
    },

    routes() {
      this.namespace = 'api';
      this.passthrough(
        'https://api.cloudinary.com/v1_1/dqw7jnfgo/image/upload',
      );
      this.passthrough(
        'https://source.unsplash.com/collection/1163637/480x480/',
      );

      this.post(
        '/signup',
        async (schema, request) => {
          const {
            username,
            phoneNumber,
            firstName,
            lastName,
            password,
            email,
            isStaff,
          } = JSON.parse(request.requestBody);
          schema.users.create({
            email,
            username,
            firstName,
            lastName,
            phoneNumber,
            password,
            isStaff: isStaff || false,
          });
          const userToken = await jwt.sign(
            {
              email,
              isStaff: isStaff || false,
            },
            'someSecretPasswordThatShouldNotBeHere',
          );
          return {
            userToken,
            email,
            username,
            firstName,
            lastName,
            phoneNumber,
          };
        },
        { timing: 3000 },
      );

      this.post(
        '/login',
        async (schema, request) => {
          const { username, password } = JSON.parse(request.requestBody);
          const user = await schema.users.findBy({ username, password });
          if (user) {
            const {
              email, firstName, lastName, phoneNumber, isStaff,
            } = user;
            const userToken = jwt.sign(
              {
                email,
                isStaff,
              },
              'someSecretPasswordThatSisStaffhouldNotBeHere',
            );
            return {
              userToken,
              email,
              firstName,
              lastName,
              phoneNumber,
              username,
              isStaff,
            };
          }
          return new Response(400);
        },
        { timing: 3000 },
      );

      this.get('/products', (schema) => schema.products.all(), { timing: 2000 });

      this.post('/addproduct', async (schema, request) => {
        const {
          isPremium, title, author, imgUrl,
        } = JSON.parse(
          request.requestBody,
        );
        const product = schema.products.create({
          isPremium,
          title,
          author,
          imgUrl,
          publishedAt: faker.date.recent(),
        });
        return product;
      });

      this.delete('/deleteproduct/:productid', (schema, request) => {
        const { productid } = request.params;
        return schema.products.find(productid).destroy();
      });

      this.patch('/editproduct', (schema, request) => {
        const {
          id,
          isPremium,
          title,
          author,
          imgUrl,
          publishedAt,
        } = JSON.parse(request.requestBody);
        const product = schema.products.find(id);
        return product.update({
          isPremium,
          title,
          author,
          imgUrl,
          publishedAt,
        });
      });
    },
  });

  return server;
};

export default makeServer;
