import React from "react";
import "./product.css";

import Dropdown from "../dropdown/Dropdown"

import { ProductSearchBar, ProductAddButton, ProductExportButton } from "./components";



const Product = props => {
    const locations = [
        {
            label: "Date added",
            value: "1",
        },
        {
            label: "A - Z",
            value: "2",
        },
        {
            label: "Z - A",
            value: "3",
        }
    ];

    const onChange = (item, name) => {
        // TODO: add sort 
        console.log(item, name)
    }

    return (
        <div className="products__product-toolbar">
            <span className="products__sort-label">SORT BY</span>
            <Dropdown
                name="location"
                title="Select location"
                list={locations}
                onChange={onChange}
                select={{ value: "1" }}
            />
            <div className="products__right-tool-align">
                <ProductSearchBar />
                <span className="products__button-wrapper">
                    <ProductAddButton />
                    <ProductExportButton />
                </span>
            </div>
        </div>
    )
}

export default Product;