import { Outlet } from "react-router-dom";

function Event(){
    return (
        <div>
            <h4>이벤트 페이지</h4>
            <Outlet></Outlet>
        </div>
    );
}

export default Event;