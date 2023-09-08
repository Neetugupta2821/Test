import './RightBar.css'
import FileCopyIcon from '@mui/icons-material/FileCopy';
import ChecklistIcon from '@mui/icons-material/Checklist';
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';
import DeleteIcon from '@mui/icons-material/Delete';
import LocalActivityIcon from '@mui/icons-material/LocalActivity'
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
import LocationSearchingIcon from '@mui/icons-material/LocationSearching'
import PrivacyTipIcon from '@mui/icons-material/PrivacyTip';
import { Link } from 'react-router-dom';
function RightBar(){
    return(
        <div className="RightBar_header">
            <Link className='Right_Flex' to="/Addmin/Visiter">
                <FileCopyIcon/>
                <p className='right_icone'>Visiter</p>
               
            </Link>
            
            <div className='Right_Flex'>
                <ChecklistIcon />
                <p className='right_icone'>HostList</p>
            </div>
         
            <div className='Right_Flex'>
            <PermContactCalendarIcon   />
                <p className='right_icone'>Pages</p>
            </div>
          
            <div className='Right_Flex'>
                <DeleteIcon />
                <p className='right_icone'>Pages</p>
            </div>
            
            <div className='Right_Flex'>
                <LocalActivityIcon />
                <p className='right_icone'>Pages</p>
            </div>
             
            <div className='Right_Flex'>
                <CompareArrowsIcon  />
                <p className='right_icone'>Pages</p>
            </div>
            
            <div className='Right_Flex'>
                <LocationSearchingIcon/>
                <p className='right_icone'>Pages</p>
            </div>
           
            <div className='Right_Flex'>
                <PrivacyTipIcon/>
                <p className='right_icone'>Pages</p>
            </div>
             
        </div>
    )
}
export default RightBar;