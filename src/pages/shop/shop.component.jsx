import React, { Component } from 'react';
import CollectionPreview from '../../components/collection-preview/collection-preview.component'
import SHOP_DATA from  './Shop.data';
export class ShopPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            collections: SHOP_DATA
        }
    }
    render() {
    
        return (
            <div className="shop-page">
                SHOP PAGE
                {
                    this.state.collections.map(({id, ...otherCollectionProps}) => (
                        <CollectionPreview key= {id} {...otherCollectionProps}  />
                    ))
                }
            </div>
        );
    }
}

export default ShopPage;
