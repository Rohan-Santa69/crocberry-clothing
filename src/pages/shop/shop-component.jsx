import React from 'react';
import { Route } from 'react-router-dom';

import CollectionsOverview from '../../component/Collections-Overview/Collections-Overview.component';

import CollectionPage from '../collection/Collection-Page.component';


const ShopPage = ({ match }) => (
  <div className='shop-page'>
    <Route exact path={`${match.path}`} component={CollectionsOverview} />
    <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
  </div>
);

export default ShopPage;