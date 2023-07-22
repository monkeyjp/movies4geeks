import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import "../../styles/userPage.css"
import { Context } from "../store/appContext";



export const UserPage = () => {
  const {store,actions}=useContext(Context)

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

console.log(store?.userName)
console.log(store?.userLastName)
  return (
    <>
      <div className="container userPage-container">
        <div className="aside-user col-lg-3 col-12 ">
          <p className="fw-bold">{store?.userName}</p>
          <Link to="/" className="personal-aside-user"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person" viewBox="0 0 16 16">
            <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z" />
          </svg>Personal information</Link>
          <Link to="/editUser" className="edit-user fw-bold"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person" viewBox="0 0 16 16">
            <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z" />
          </svg>Edit information</Link>
          
        </div>
        <div className="main-user col-lg-9 col-12">
          <form className="form-user">
            <div className="row">
              <div className="mb-3 col-lg-6 col-md-6 col-sm-12">
                <label htmlFor="userName" className="form-label">Name</label>
                <input type="text" className="form-control input-user" id="userName" value={store?.userName} disabled />
              </div>
              <div className="mb-3 col-lg-6 col-md-6 col-sm-12">
                <label htmlFor="userSurname" className="form-label">Surname</label>
                <input type="text" className="form-control input-user" id="userSurname" value={store?.userLastName} disabled aria-describedby="emailHelp" />
              </div>
            </div>


            <div className="row">
              <div className="mb-3 col-lg-6 col-md-6 col-sm-12">
                <label htmlFor="exampleInputEmail1" className="form-label">Nickname</label>
                <input type="text" className="form-control input-user" id="exampleInputEmail1" disabled value={store?.nickname} />

              </div>
              <div className="mb-3 col-lg-6 col-md-6 col-sm-12">
                <label htmlFor="birthday" className="form-label">Birthday</label>
                <input type="date" className="form-control input-user" id="birthday" value={store?.userBirthday} />
              </div>
            </div>
           
            <div className="mb-3 form-check">

            </div>
           
          </form>
        </div>
      </div>

    </>

  );
}