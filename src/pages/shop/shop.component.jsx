import React, { Component } from 'react'
import CollectionPreview from '../../components/preview-collection/preview-collection.component';
import SHOP_DATA from "./shop.data"

export default class ShopPage extends Component {
    constructor(props){
        super(props)

        this.state = {
            collections : SHOP_DATA,
        }
    }
    render() {
        const {collections} =this.state;
        return (
            <div className="shop-page">
                {collections.map(({id, ...otherCollectionProps}) =>(
                    <CollectionPreview key={id} {...otherCollectionProps}></CollectionPreview>
                ))}
            </div>
        )
    }
}
