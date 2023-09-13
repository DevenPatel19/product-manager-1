import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const CreateForm = () => {
	const [title, setTitle] = useState("");
	const [price, setPrice] = useState(0.01);
	const [description, setDescription] = useState("");

	const navigate = useNavigate();

	const handleSubmit = (e) => {
		e.preventDefault();

		axios
			.post("http://localhost:8000/api/products",
			{
				title, 
				price, 
				description,
		})
		.then(
			navigate('/products'))
		
		.catch((err)=>console.log(err));


	}	

  return (
	<div>
		<form onSubmit={handleSubmit}>

			<div>
				<label>Product Title : </label>
				<input type="text" value={title} onChange={(e)=>setTitle(e.target.value)} />
			</div>
			<br />
			<div>
				<label>Product Price : </label>
				<input type="number" value={price} onChange={(e)=>setPrice(e.target.value)} />
			</div>
			<br />
			<div>
				<label> Description : </label>
				<textarea value={description} rows="5" cols="20" onChange={(e) => setDescription(e.target.value)}>{description}</textarea>
			</div>

			<button>Submit Product</button>
		</form>
	</div>
  )
}

export default CreateForm