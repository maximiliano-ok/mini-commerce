import React from "react";
import Json from "../Example/listproduct.json"
import {Product} from "./product"



export const ListProduct = () => {
    const products = Json.products;


    return(
        <div className="Products">
            {products.map((product, index) => <Product key={index} item={product} />)}
        </div>
    );

};