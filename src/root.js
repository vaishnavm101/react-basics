import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Users from "./pages/Users";
import UserDetail from "./components/UserDetail";

export const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path="/" element={<App />}>
                <Route path="/home" element={<Home />} />
                <Route path="/contact" element={<Contact />}>
                    <Route path="form" element={<h1>Display Contact us Form</h1>} />
                    <Route path="details" element={<h1>Display Contact Details..</h1>} />
                </Route>
            </Route>
            <Route path="/users" element={<Users />}>
                <Route path=":id" element={<UserDetail />}/>
            </Route>
        </>
    )
)