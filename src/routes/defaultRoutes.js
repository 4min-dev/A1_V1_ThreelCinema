import { createBrowserRouter } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import { FullMoviePage } from "../pages/FullMoviePage";
import { NotFoundPage } from "../pages/NotFoundPage";

export const defaultRoutes = createBrowserRouter([
    {
        path:'/',
        element:<HomePage/>,
        errorElement:<NotFoundPage/>
    },
    {
        path:`/movie/:id`,
        element:<FullMoviePage/>
    }
])