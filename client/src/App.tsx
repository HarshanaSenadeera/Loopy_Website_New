import React from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {DefaultLayOut} from "./view/common/DefaultLayout/DefaultLayOut";
function App() {
    return (

        <>

            <BrowserRouter>
                <Routes>
                    <Route path="/*" Component={DefaultLayOut} ></Route>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
