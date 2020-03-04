import React from 'react';
import TableList from 'components/TableList';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import icons from 'fixtures/icons';
import useStyles from './style';

const ProductList = () => {
  const classes = useStyles();

  function createData(name, calories, fat, carbs, protein) {
    return {
      name, calories, fat, carbs,
    };
  }

  const rows = [
    createData('Javascript', 'eguene', 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
  ];

  return (
    <div className={classes.productListWrapper}>
      <TableList headers={['Book title', 'Author', 'Published date', '']}>
        {rows.map((row) => (
          <TableRow key={row.name}>
            <TableCell component="th" scope="row">
              {row.name}
            </TableCell>
            <TableCell align="right">{row.calories}</TableCell>
            <TableCell align="right">{row.fat}</TableCell>
            <TableCell align="right">
              <span className={classes.listIconWrapper}>
                <FontAwesomeIcon size="1x" icon={icons.edit} />
              </span>
              <span className={classes.listIconWrapper}>
                <FontAwesomeIcon size="1x" icon={icons.trash} />
              </span>
            </TableCell>
          </TableRow>
        ))}
      </TableList>
    </div>
  );
};

export default ProductList;
