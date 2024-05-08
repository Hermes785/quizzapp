import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import QuizApp1 from "./Components/QuizzApp1";
import QuizzApp2 from "./Components/QuizzApp2";
import QuizzApp3 from "./Components/QuizzApp3";
import QuizzApp4 from "./Components/QuizzApp4"
import QuizzApp5 from "./Components/QuizzApp5";
import Home from "./Components/Home"

const AppRouter = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/topic1" element={<QuizApp1 />} />
                    <Route path="/topic2" element={<QuizzApp2 />} />
                    <Route path="/topic3" element={<QuizzApp3 />} />
                    <Route path="/topic4" element={<QuizzApp4 />} />
                    <Route path="/topic5" element={<QuizzApp5 />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default AppRouter;
