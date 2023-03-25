import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import ConstructionIcon from '@mui/icons-material/Construction';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import MoreVertRoundedIcon from '@mui/icons-material/MoreVertRounded';

export const Navbar = () => {
  return (
    <div className='navMain'>
        <div>
            <div className='logoDiv'><img src="https://deepthought.education/assets/images/logo/logo.svg" alt="" style={{width:'150%'}}/></div>
        </div>
        <div className='iconsDiv'>
            <HomeIcon style={{color:"blue",fontSize:'1.8rem'}}/>
            <ConstructionIcon style={{color:"blue",fontSize:'1.8rem'}}/>
            <NotificationsActiveIcon style={{color:"blue",fontSize:'1.8rem'}}/>
            <AccountCircleRoundedIcon style={{color:"blue",fontSize:'1.8rem'}}/>
            <MoreVertRoundedIcon style={{color:"blue",fontSize:'1.8rem'}}/>
        </div>
    </div>
  )
}
