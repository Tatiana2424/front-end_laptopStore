import React, { useState } from "react";
import { Link } from "react-router-dom";



import { useNavigate } from "react-router-dom";



 function Orders() {
  let navigate = useNavigate();
  
  const [orders, setOrders] = useState(
    JSON.parse(window.localStorage.getItem("order1")) || []
  );
  
  const[postOrder,setPostOrder]=useState({
    userId: 1,
    serviceId: 1,
    placeId: 1,
    data_time: "2020-08-20 23:02:02",
  });
  const [showBoard, setShowBoard] = useState(false);
  const [showErrorBoard, setShowErrorBoard] = useState(false);
  let openWind=false;
  
 

   
  

 

  return (
    <div>
      <div className="content back-photo">
        <div className="container">
          <div className="row back-white">
            <div className="login-field order-size">
              <h1>Orders</h1>
              <p className="log-regist-p">
                {" "}
                Please order the services you prefer.
              </p>
              <form>
                <div className="row">
                  <div>
                    <div className="modal-body">
                      <table className="table table-image">
                        <thead>
                          <tr>
                            <th scope="col"></th>
                            <th scope="col">Product</th>
                            <th scope="col">Count</th>
                            <th scope="col">Price</th>
                          </tr>
                        </thead>

                        {orders?.map((order) => {
                          return (
                            <tbody>
                              <tr>
                                <td className="w-25">
                                  <img
                                    src={order.picture}
                                    className="img-fluid img-thumbnail"
                                    alt=" "
                                  />
                                </td>
                                <td className="order-text">{order.name}</td>
                                <td
                                  className="order-text"
                                
                                >
                                
                                </td>
                                <td
                                  className="order-text price1"
                                //   onLoad={count = count + order.price}
                                >
                                  {order.price}${" "}
                                </td>
                                
                                <td className="butcent">
                                  <button
                                    className="btn btn-danger btn-sm delete_btn"
                                    onClick={() => {
                                      const newOrder = orders.filter(
                                        (el) => el.id !== order.id
                                      );
                                      console.log(newOrder);
                                      setOrders(newOrder);
                                      window.localStorage.setItem(
                                        "order1",
                                        JSON.stringify(newOrder)
                                      );
                                      console.log(JSON.stringify(newOrder));
                                    }}
                                  >
                                    Delete
                                  </button>
                               
                                </td>
                              </tr>
                            </tbody>
                            
                          );
                        })}
                      </table>
                      <div className="d-flex justify-content-end">
                        <h5 className=" justify-content-end">
                          Total:{" "}
                          <span className="price text-success">{"count"}$</span>
                        </h5>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="orders-plus">
                      <Link to="/categoryList" className="button-plus">
                        +
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-lg-12 col-sm-12 col-md-12 col-xs-12 text-center login-register-button">
                  {orders.length != 0 && <a
                    href="#"
                    className="btn btn-default btn-place-order login_button order_button"
                    onClick={() => {
                      
                      console.log(window.localStorage);
                      if(window.localStorage.getItem("userData")==null || window.localStorage.getItem("userData")=='"E"')
                      {
                        alert("You aren't logged in");
                        navigate("/login");
                      }
                     
                     
                    }
                   
                    }
                  >
                    {" "}
                    Place your order{" "}
                                  </a>
                    }  
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Orders;

