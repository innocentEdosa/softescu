import React from 'react';
import PropTypes from 'prop-types';
import TableList from 'components/TableList';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import icons from 'fixtures/icons';
import ToggleComponent from 'HOC/ToggleComponent';
import CircularProgress from '@material-ui/core/CircularProgress';
import useStyles from './style';


const ProductList = ({ products, fetchingProducts }) => {
  const classes = useStyles();

  return (
    <div className={classes.productListWrapper}>
      <ToggleComponent check={fetchingProducts} component={<CircularProgress color="primary" />} />
      <ToggleComponent
        check={!fetchingProducts}
        component={(
          <TableList headers={['Serial', 'Title', 'Author', 'Published date', '']}>
            {products.map(({
              id, title, author, publishedAt,
            }, index) => (
              <TableRow key={title}>
                <TableCell component="th" scope="row">
                  {index + 1}
                </TableCell>
                <TableCell align="right">{title}</TableCell>
                <TableCell align="right">{author}</TableCell>
                <TableCell align="right">{new Date(publishedAt).toDateString()}</TableCell>
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
    )}
      />
    </div>
  );
};

ProductList.propTypes = {
  products: PropTypes.shape([]).isRequired,
  fetchingProducts: PropTypes.bool.isRequired,
};
export default ProductList;
