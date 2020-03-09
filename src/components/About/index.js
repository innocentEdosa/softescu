import React from 'react';
import Paper from '@material-ui/core/Paper';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import faker from 'faker';
import useStyles from './style';

const About = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper className={classes.showcase} elevation={3}>
        <p className={classes.title}>
          <span className="title-main">
            <MenuBookIcon />
            Active
          </span>
          {' '}
          Learning
        </p>
      </Paper>
      <div className={classes.descriptions}>
        <div className="description">
          {faker.lorem.paragraphs()}

        </div>
        <div className="description">
          {faker.lorem.paragraphs()}

        </div>
        <div className="description">
          {faker.lorem.paragraphs()}

        </div>
      </div>
    </div>
  );
};

export default About;
