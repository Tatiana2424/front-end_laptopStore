import React from "react";
import { Link } from "react-router-dom";

export default function NavBarUnloged() {
    return (
        <div className="header">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <a href="home.html"
                ><img
                  src="./image/logo1.jpeg"
                 
              /></a>
            </div>
            <div className="col-lg-8">
              <div className="navigation">
                <div id="navigation">
                  <ul>
                    <li className="active">
                        <Link  title="Home" to={"/home"}>Home</Link>
                    </li>
                   
                    <li>
                      <Link to={"/categoryList"} title="Category">Category</Link>
                    </li>
                    <li>
                        <Link to={"/login"} title="Login">Log in</Link>
                    </li>
                    <li>
                      <Link   to={"/registration"} title="Registration">Registration</Link>
                    </li>
                    <li>
                        <Link to={"/orders"} title="Orders">Orders</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>




    );
}