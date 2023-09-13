import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
    const [productList, setProductList] = useState([]);

    useEffect(() => {
        axios
            .get("http://localhost:8000/api/products")
            .then((response) => setProductList(response.data))
            .catch((err) => console.log(err));
    }, []);

    return (
        <div>
            {productList.map((oneProduct, idx) => {
                return (
                    <div key={idx}>
                        <h3> Product Title : {oneProduct.title}</h3>
                        <h4> Product Price : ${oneProduct.price}</h4>
                        <h5> Product Description: {oneProduct.description} </h5>
                        <Link to={`/products/${oneProduct._id}`}>Show Product</Link> {"  |  "}
                        <Link to={`/products/${oneProduct._id}/edit`}>Edit Product</Link>
                    </div>
                );
            })}
        </div>
    );
};

export default Dashboard;
