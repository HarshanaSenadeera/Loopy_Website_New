import {Route, Routes} from "react-router-dom";
import {Home} from "../../page/Home/Home";

export function MainContext() {
    return (
        <div className="">

            <Routes>
                <Route path="/" Component={Home}></Route>
               {/* <Route path="/about" Component={About}></Route>
                <Route path="/tour" Component={Tour}></Route>
                <Route path="/tour/:id" Component={ClickTourDetail}></Route>
                <Route path="/login" Component={Login}></Route>*/}
            </Routes>
        </div>    );
}