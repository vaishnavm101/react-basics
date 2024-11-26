import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import Home from "./components/Home";
import Register from "./components/Register";
import Login from "./components/Login";
import Profile from "./components/Profile";
import AuthComponent from "./components/AuthComponent";
import AdminLogin from "./components/AdminLogin";
import AdminProfile from "./components/AdminProfile";
import AdminAuth from "./components/AdminAuthComponent";
import AddProduct from "./components/AddProduct";
import LoginTwo from "./components/LoginTwo";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<LoginTwo />} />
            <Route path="/register" element={<Register />} />
            <Route path="/profile" element={<AuthComponent><Profile /></AuthComponent>} />
            <Route path="/admin-login" element={<AdminLogin />} />
            <Route path="/admin-profile" element={<AdminAuth><AdminProfile /></AdminAuth>} />
            <Route path="/add-product" element={<AddProduct />} />
        </Route>
    )
)
export default router