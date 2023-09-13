import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ShowOne = () => {
    const [product, setProduct] = useState({});
    const { id } = useParams();

    useEffect(() => {
        axios
            .get(`http://localhost:8000/api/products/${id}`)
            .then((response) => {
                setProduct(response.data);
            })
            .catch((err) => console.log(err));
    }, [id]);

    return (
        <div>
            {product ? (
                <>
                    <h1>{product.title}</h1>
                    <h2>{product.price}</h2>
                    <h3>{product.description}</h3>
                </>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default ShowOne;
