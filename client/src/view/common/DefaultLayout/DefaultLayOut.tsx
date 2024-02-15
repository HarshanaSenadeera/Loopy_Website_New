import {NavBar} from "../NavBar/NavBar";
import {Footer} from "../Footer/Footer";
import {Home} from "../../page/Home/Home";
import React from "react";
import {Photography} from "../../page/Photograpy/Photography";

export function DefaultLayOut() {
    return (
        <>
            <NavBar/>
            <Photography/>
            <Footer/>
        </>

    );
}