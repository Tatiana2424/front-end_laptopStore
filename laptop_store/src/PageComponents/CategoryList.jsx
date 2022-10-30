import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
function CategoryList() {
  const [categories, setCategories] = useState(undefined);
  useEffect(() => {
    fetch("http://127.0.0.1:8000/category/")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setCategories(data);
      });
  }, []);

  return (
    <div>
    <div className="page-header">
    <div className="container">
      <div className="row">
        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
          <div className="page-caption">
            <h2 className="page-title">Laptop List</h2>
            <div className="page-breadcrumb">
              <ol className="breadcrumb">
                <li><a  className="home" href="index.html">Home</a></li>
                <li className="active">Log in</li>
              </ol>
            </div>
          </div>
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
            className="col-lg-4 col-md-4 col-sm-4 col-xs-12 ">
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

export default CategoryList;