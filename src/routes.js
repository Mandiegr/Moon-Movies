import { RootLayout } from "./views/RootLayout";
import { Home } from "./views/Home";
import { Movies } from "./views/Movies";
import { MovieDetails } from "./views/MoveDetails";
import { createBrowserRouter } from "react-router-dom";
import Genre from "./views/Genres";

export const routes =  createBrowserRouter([

    {
        path:"/",
        element: <RootLayout/>,
        children: [
            {
            path: "/",
            element: <Home/>,
            },

            {
                path:"/movies",
                element: <Movies/>
            },
            {
                path:"/movies/:id",
                element: <MovieDetails/>
            },

            {
                path: "/category/:category/:genre", 
                element: <Genre />,
            },
            
            
           
        ]
    }
])