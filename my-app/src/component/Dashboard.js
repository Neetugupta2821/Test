import Heade from "./Heade";
import SideBar from "./SideBar";
import RightBar from "./RightBar";

import './Dashboard.css'
function Dashboard() {

    return (
        <div>

            <Heade />
            <div className="setFlex">
                <RightBar />
                <SideBar />
            </div>


        </div>
    )
}
export default Dashboard;