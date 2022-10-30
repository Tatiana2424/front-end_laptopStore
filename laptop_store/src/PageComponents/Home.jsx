import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Home(){
    const [categories, setCategories] = useState(undefined);
    useEffect(() => {
      fetch("http://127.0.0.1:8000/category/")
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          setCategories(data);
        });
    }, []);

 return(
    <div>
        
    <div className="hero-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
            <h1 className="hero-title">Laptop Store</h1>
            <p className="hero-text">
              Don't be the same be better
            </p>
          </div>
        </div>
      </div>
    </div>
    <div className="space-medium">
      <div className="container">
        <div classNameName="row">
          <div classNameName="col-md-offset-2 col-md-8">
            <div classNameName="mb60 text-center section-title">
              <h1>Laptop Brands</h1>
              <h5 classNameName="small-title ">
                 please select Laptop Brand to buy one
              </h5>
            </div>
          </div>
        </div>
          <div className="row block_category">
          {categories?.map((category) => {
              return (
            <div 
            key={category.id}
            className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
              <div className="service-block">
               
                <div className="service-content">
                  <h2>
                    <Link 
                        to={"/laptop/" + category.id} 
                        className="title"
                        state={{ id: category.id }}>
                          {category.brand} 
                          </Link>
                  </h2>
                </div>
              </div>
           </div>
       );
    })}
        </div>

      </div>
    </div>
   
    </div>





    );
}

export default Home;