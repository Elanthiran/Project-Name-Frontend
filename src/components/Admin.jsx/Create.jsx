import { useState, useEffect } from "react";
import { useThisContext } from "../../context/usercontext";
import axios from "axios";
import { Link } from "react-router-dom";


function Create() {
    const { title, domain, head, price, setTitle, setDomain, setHead, setPrice, image, setImage } = useThisContext();
    
    
    

    

    const handleSubmit = async (e) => {
        e.preventDefault();
       
        const itemData = { title, domain, head, price, image};
        try {
            await axios.post("https://project-name-backend-1-5zgo.onrender.com/getItem", itemData);
            console.log("Item created successfully!");
            // Reset form fields after submission
            setTitle('');
            setDomain('');
            setHead('');
            setPrice('');
            setImage('');
            
        } catch (error) {
            console.error("Error creating item:", error);
        }
    };

    return (
        <div className="container my-5">
            <div className="row">
                <div className="col-12">
                    <div className="col-md-10 mx-auto col-lg-5 form-control">
                        <h2 className="display-4 fw-bold lh-1 text-light mb-4">
                            <span className="text-danger">Create New Item</span>
                        </h2>
                        <form className="p-4 p-md-5 border rounded" onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label htmlFor="title">Product-Slogan</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="titleInput"
                                    value={title}
                                    placeholder="slogan"
                                    onChange={(e) => setTitle(e.target.value)}
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="domain">Domain</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="domainInput"
                                    placeholder="domain"
                                    value={domain}
                                    onChange={(e) => setDomain(e.target.value)}
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="head">Product</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="headInput"
                                    placeholder="product"
                                    value={head}
                                    onChange={(e) => setHead(e.target.value)}
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="price">Price</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    id="priceInput"
                                    placeholder="price"
                                    value={price}
                                    onChange={(e) => setPrice(e.target.value)}
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="image" >ImageUrl</label>
                                <input type="text" placeholder="imageUrl"  id="imageInput" className="form-control" value={image} onChange={(e) => setImage(e.target.value)} />
                            </div>
                            
                           <Link to={"/Crud"}><button className="btn btn-primary w-100" type="submit">
                                
                                Add Product
                            </button></Link> 

                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Create;
