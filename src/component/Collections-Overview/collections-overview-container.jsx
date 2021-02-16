import {connect} from 'react-redux';

import { createStructuredSelector } from 'reselect';
import {compose  } from 'redux';
import { selectIsCollectionFetching } from '../../redux/shop/shop.selector';

import WithSpinner from '../with-spinner/with-spinner.component';

import CollectionsOverview from './Collections-Overview.component';

const mapStateToProps = createStructuredSelector({
    isloading: selectIsCollectionFetching
});

const CollectionOverviewContainer = compose( 
     connect(mapStateToProps),
     WithSpinner
     )(CollectionsOverview);

export default CollectionOverviewContainer;