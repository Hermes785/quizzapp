import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import QuizApp from "./Components/QuizzApp1";
import Home from "./Components/Home"

const AppRouter = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/topic1" element={<QuizApp />} />

                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default AppRouter;
