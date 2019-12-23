import React, {Component, useEffect} from 'react';
import {withStyles} from '@material-ui/core/styles';
import reducer from './store/reducer/index';
import {useSelector, useDispatch} from 'react-redux';
import withReducer from 'app/store/withReducer';
import * as Actions from './store/actions/ingredients.actions';

const styles = theme => ({
    layoutRoot: {}
});

const Product = () => {

    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(Actions.getIngredients());
    },[dispatch]);

    const komposisi = useSelector(({Product}) => {
        return Product == null ? '' : Product.ingredients }
    );

    console.log(JSON.stringify(komposisi))

    return(
            <div>Product</div>
    )
}

export default withReducer('Product', reducer)(Product);