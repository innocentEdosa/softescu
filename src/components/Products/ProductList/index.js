/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useHistory } from 'react-router-dom';
import CircularProgress from '@material-ui/core/CircularProgress';
import icons from 'fixtures/icons';
import PropTypes from 'prop-types';
import React from 'react';
import routes from 'fixtures/routes';
import TableCell from '@material-ui/core/TableCell';
import TableList from 'components/TableList';
import TableRow from '@material-ui/core/TableRow';
import ToggleComponent from 'HOC/ToggleComponent';
import { useTranslation } from 'react-i18next';

import useStyles from './style';

const ProductList = ({ products, fetchingProducts }) => {
  const classes = useStyles();
  const { push } = useHistory();
  const { t } = useTranslation();

  return (
    <div className={classes.productListWrapper}>
      <ToggleComponent
        check={fetchingProducts}
        component={<CircularProgress color="primary" />}
      />
      <ToggleComponent
        check={!fetchingProducts}
        component={(
          <TableList
            headers={[t('heading.serial'), t('heading.title'), t('heading.author'), t('heading.datePublished'), '']}
          >
            {products.map(({
              id, title, author, publishedAt,
            }, index) => (
              <TableRow key={title + id}>
                <TableCell component="th" scope="row">
                  {index + 1}
                </TableCell>
                <TableCell align="right">{title}</TableCell>
                <TableCell align="right">{author}</TableCell>
                <TableCell align="right">
                  {new Date(publishedAt).toDateString()}
                </TableCell>
                <TableCell align="right">
                  <span
                    role="alert"
                    className={classes.listIconWrapper}
                    onClick={() => push(routes.editProduct, {
                      ...products[index],
                    })}
                  >
                    <FontAwesomeIcon size="1x" icon={icons.edit} />
                  </span>
                  <span
                    onClick={() => push(routes.deleteProduct, {
                      type: 'Product',
                      name: title,
                      identifier: id,
                    })}
                    role="alert"
                    className={classes.listIconWrapper}
                  >
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
