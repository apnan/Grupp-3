import React from "react"
import { Navigate, Outlet } from "react-router-dom"

let loggedIn = false;
const useAuth = () => {
    console.log(loggedIn)
    return loggedIn;
}
export const updateLoggedIn = () => {
    console.log('Update logged in');
  loggedIn = !loggedIn;
  console.log(loggedIn)
}
const ProtectedRoutes = () => {
  console.log(useAuth())
  return useAuth() ? <Outlet /> : <Navigate to={"/login"}></Navigate>;
};

export default ProtectedRoutes