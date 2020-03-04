import { Server, Model } from 'miragejs';

const makeServer = ({ environment = 'development' } = {}) => {
  const server = new Server({
    environment,

    models: {
      user: Model,
    },

    // seeds(server) {
    //   server.create('user', { name: 'Bob' });
    //   server.create('user', { name: 'Alice' });
    // },

    routes() {
      this.namespace = 'api';

      this.get('/users', (schema) => schema.users.all());
    },
  });

  return server;
};

export default makeServer;
