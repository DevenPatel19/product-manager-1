import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const UpdateForm = () => {
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState(0.01);
    const [description, setDescription] = useState("");
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        axios
            .get(`http://localhost:8000/api/products/${id}`)
            .then((response) => {
                const oneProduct = response.data;
                setTitle(oneProduct.title);
                setPrice(oneProduct.price);
                setDescription(oneProduct.description);
            })
            .catch((err) => console.log(err));
    }, [id]); // Add id as a dependency

    const handleSubmit = (e) => {
        e.preventDefault();

        axios
            .put(`http://localhost:8000/api/products/${id}/edit`, {
                title,
                price,
                description,
            })
            .then((res) => {
                const updateProductId = res.data._id;
                navigate("/products/" + updateProductId);
            })
            .catch((err) => console.log(err));
    };

    const handleDelete = () => {
        axios.delete(`http://localhost:8000/api/products/${id}`)
			.then(navigate("/products"))
			.catch((err) => console.log(err));
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Product Title: </label>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>
                <br />
                <div>
                    <label>Product Price: </label>
                    <input
                        type="number"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                    />
                </div>
                <br />
                <div>
                    <label>Description: </label>
                    <textarea
                        value={description}
                        rows="5"
                        cols="20"
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </div>
                <button type="submit">Submit Edited Product</button> {"| "}
                <button onClick={handleDelete}>Delete Product</button>
            </form>
        </div>
    );
};

export default UpdateForm;
