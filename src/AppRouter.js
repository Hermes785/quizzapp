import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import QuizApp from "./Components/QuizzApp1";
import Home from "./Components/Home"
import Correction1 from "./Components/Correc1";



const AppRouter = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/topic1" element={<QuizApp />} />
                    <Route path="/correction1" element={< Correction1 />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default AppRouter;
