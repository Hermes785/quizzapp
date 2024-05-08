import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import QuizApp1 from "./Components/QuizzApp1";
import QuizzApp2 from "./Components/QuizzApp2";
import Home from "./Components/Home"

const AppRouter = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/topic1" element={<QuizApp1 />} />
                    <Route path="/topic2" element={<QuizzApp2 />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default AppRouter;
