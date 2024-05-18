import React, { useState } from "react";
import { RouterProvider } from "react-router-dom";
import { defaultRoutes } from "./routes/defaultRoutes.js";
import { MainAppContext } from "./context/mainAppContext.js";
import { FavPopupWindow } from "./UI/FavPopupWindow.jsx";
import './style/main.css';

export const App = () => {
    const [favMovies, setFavMovies] = useState([]);
    const [isFavPopup, setFavPopup] = useState(false);

    const toFav = (movie) => {
        const isAlreadyFav = favMovies.some((el) => el.id === movie.id);
        const updatedFavMovies = isAlreadyFav 
            ? favMovies.filter((el) => el.id !== movie.id) 
            : [...favMovies, { ...movie }];

        setFavMovies(updatedFavMovies);
    };

    const router = defaultRoutes;

    return (
        <MainAppContext.Provider value={{ favMovies, toFav, isFavPopup, setFavPopup }}>
            {isFavPopup && <FavPopupWindow favData={favMovies} setFavPopup={setFavPopup} />}
            <React.StrictMode>
                <RouterProvider router={router} />
            </React.StrictMode>
        </MainAppContext.Provider>
    );
};
