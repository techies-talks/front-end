import { Button, Form, Alert } from 'react-bootstrap';
import React, {useState, useEffect} from 'react';
import axios from 'axios'
import './index.css';

function Products() {
	const [products,setProducts] = useState([]);
	const [error,setError] = useState(false);
	const [message,setMessage] = useState('');
	useEffect(()=>{
		
		axios.get("http://localhost:3001/products")
			 .then(response =>{
			 	setProducts(response.data.data)
			 })
			 .catch(err =>{

			 })

	},[])
	function calculte_amount(price,discount){
		if(discount > 0){
			return price - (price * (discount/100))
		}else{
			return price;
		}
	}

	return (
	    <div className="container">
	    	<div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
	    		{products.map(function(product,index){
	    			return (
	    					<div className="col mb-2" key={index}>
						        <div className="card shadow-sm">
						        	{product.product_image != '' &&
						        		<img src={product.product_image} width="100%" height="238"/>
						            
						        	}
						        	{product.product_image === '' &&
						        		<svg className="bd-placeholder-img card-img-top" width="100%" height="238" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>
						            
						        	}
						            <div className="card-body">
						              <p className="card-text">{product.product_name}</p>
						              <span className="card-text"><b>&#8377;{calculte_amount(product.product_price,product.product_discount)}</b><s className="p-2 actual-price-text">{product.product_price}</s><b className="p-2 discount-text">{product.product_discount}% Off</b></span>
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
