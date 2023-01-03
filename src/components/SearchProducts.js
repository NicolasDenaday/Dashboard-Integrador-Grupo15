import React, { useState, useEffect, useRef } from 'react';

function SearchMovies(){
	const [products, setProducts] = useState([]);
	const [keyword, setKeyword] = useState('');

	const inputTag = useRef();
	
	useEffect(() => {
		const endpoint = `http://localhost:3030/api/products/search?product=${keyword}`;
		fetch(endpoint)
		  .then((response) => response.json())
		  .then((data) => {
			setProducts(data.data);
		  })
		  .catch((error) => console.log(error));
	  }, [keyword]);

	const searchProduct = e => {
		e.preventDefault();
		const inputValue = inputTag.current.value;
		setKeyword(inputValue);
		inputTag.current.value = '';
	}

	return (
		<div className="container-fluid bg-secondary">
		  <>
			<div className="row my-4">
			  <div className="col-12 col-md-6">
				<form method="GET" onSubmit={searchProduct}>
				  <div className="form-group">
					<label htmlFor="">Buscar por título:</label>
					<input ref={inputTag} type="text" className="form-control" />
				  </div>
				  <button className="btn btn-warning text-dark font-weight-bold">
					Search
				  </button>
				</form>
			  </div>
			</div>
			<div className="row">
			  <div className="col-12">
				<h2>Resultados para la palabra: {keyword}</h2>
			  </div>
			  {products.length > 0 &&
				products.map((product, i) => {
				  return (
					<div className="col-sm-6 col-md-3 my-4" key={i}>
					  <div className="card shadow mb-4">
						<div className="card-header py-3">
						  <h5 className="m-0 font-weight-bold text-gray-800">
							{product.name}
						  </h5>
						</div>
						<div className="card-body">
						  <div className="text-center">
							<img
							  className="img-fluid px-3 px-sm-4 mt-3 mb-4"
							  src={
								"http://localhost:3030/img/imagenes-cafes/" +
								product.image
								}
							  alt={product.name}
							  style={{
								width: "150%",
								height: "200px",
								objectFit: "cover",
							  }}
							/>
						  </div>
						  <p>intensity: {product.intensity}</p>
						</div>
					  </div>
					</div>
				  );
				})}
			</div>
			{products.length === 0 && (
			  <div className="alert alert-warning text-center">
				No se encontraron películas
			  </div>
			)}
		  </>
		</div>
	  );
	}

export default SearchMovies;
