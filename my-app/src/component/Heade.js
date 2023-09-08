import MenuIcon from '@mui/icons-material/Menu'
import SearchIcon from '@mui/icons-material/Search'
import MessageIcon from '@mui/icons-material/Message'
import NotificationsIcon from '@mui/icons-material/Notifications'
import LightModeIcon from '@mui/icons-material/LightMode'
import SettingsPowerIcon from '@mui/icons-material/SettingsPower';
import "./Header.css"
function Heade({}) {
    const handleDAek=()=>{}
     

    return (
        <>
        <div className='header_item'>
            <div className='header_one'> 
            <MenuIcon/>
            <p>Dashboard</p>
            </div>
            <div className='header_two'>
                <input type='text'/><span></span>
                 <SearchIcon/>  
            </div>
            <div className='header_three'>
            <LightModeIcon/>
                <MessageIcon onClick={handleDAek}/>
                <NotificationsIcon>

                </NotificationsIcon>
                
                <SettingsPowerIcon />
                 
            </div>

            </div>
            <hr></hr>

        </>
    )
}
export default Heade;  