import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

function Laptop() {
    const location = useLocation();
    const [laptops, setLaptops] = useState(undefined);
    useEffect(() => {
    
      fetch("http://127.0.0.1:8000/laptop/category_id/" + location.state.id)
        .then((response) => response.json())
        .then((data) => {
          setLaptops(data);
          console.log("vkgkgc ----")
          console.log(data)
        });
    }, []);
  
    const handleAddOrder = (value, laptop) => {
      value.preventDefault();
      const list = JSON.parse(window.localStorage.getItem("order1"))||[];
     console.log(list);
    
      list.push(laptop);
      window.localStorage.setItem("order1", JSON.stringify(list));
    };


    return (
     <div>
        <div class="page-header">
        <div class="container">
          <div class="row">
            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <div class="page-caption">
                <h2 class="page-title">Laptop List</h2>
                <div class="page-breadcrumb">
                  <ol class="breadcrumb">
                    <li><a href="index.html">Home</a></li>
                    <li class="active">Log in</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="content">
        <div className="container">
          <div className="row">
            <div className="col-md-offset-2 col-md-8">
              <div className="mb60 text-center section-title">
                <h3>to register online, please select a services</h3>
              </div>
            </div>
          </div>
          <div className="row block_category">
            {laptops?.map((laptop) => {
              return (
                <div
                  key={laptop.id}
                  className="col-lg-4 col-md-4 col-sm-4 col-xs-12 form-all"
                >
                  <div className="service-block">
                    <div className="service-icon">
                      <img
                        src={laptop.picture}
                        className="img-category"
                        alt=" "
                      />
                    </div>

                    <div className="service-content">
                      <h2>
                        <Link to="#" className="title">
                          {laptop.name}
                        </Link>
                      </h2>
                      <p>{laptop.description}</p>
                      
                      <div className="price"> {laptop.price}&#x24;</div>
                    </div>
                  

                  <div className="button_conf">
                    <a
                      href="#"
                      className="button_AddOrder"
                      onClick={
                        (value) => handleAddOrder(value, laptop)
                      }
                    >
                      {" "}
                      Add to orders{" "}
                    </a>
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
    
    export default Laptop;