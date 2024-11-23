import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import Home from "./components/Home";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route>
            <Route path="/" element={<Home />}/>
        </Route>
    )
)
export default router