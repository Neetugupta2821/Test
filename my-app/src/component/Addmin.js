import Heade from "./Heade";
import RightBar from "./RightBar";
import SideBar from "./SideBar";
import Visiter from "./Visiter";

function Addmin(){
    return(
        <div>
            <Heade/>
            <div style={{display:"flex"}}>
                <RightBar />
                <SideBar />
            </div>
        </div>
    )
}
export default Addmin;