import { Button, Form, Alert } from 'react-bootstrap';
import React, {useState, useEffect} from 'react';
import axios from 'axios'

function Products() {
	const [products,setProducts] = useState([]);
	const [error,setError] = useState(false);
	const [message,setMessage] = useState('');
	useEffect(()=>{
		console.log("called")
		// axios.get("http://localhost:3001/products")
		// 	 .then(response =>{
		// 	 	setProducts(response.data.data)
		// 	 })
		// 	 .catch(err =>{

		// 	 })

	})

	return (
	    <div className="container">
	    	<div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
	    		{products.map(function(product,index){
	    			return (
	    					<div className="col mb-2" key={index}>
						        <div className="card shadow-sm">
						            <svg className="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>
						            <div className="card-body">
						              <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
						             
						            </div>
						        </div>
						    </div>
	    				)
	    		})}
		       
	        </div>
	      
	    </div>
	);
}

export default Products;
