import React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import MailIcon from '@mui/icons-material/Mail';
import SettingsIcon from '@mui/icons-material/Settings';
import ShareIcon from '@mui/icons-material/Share';
import InfoIcon from '@mui/icons-material/Info';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';

export const SidebarData = [
    {
        title:"Home",
        icon:<HomeIcon/>,
        link:"/home"
    },
    {
        title:"Mailbox",
        icon:<MailIcon/>,
        link:"/mailbox"
    },
    {
        title:"Share",
        icon:<ShareIcon/>,
        link:"/share"
    },
    {
        title:"About",
        icon:<InfoIcon/>,
        link:"/about"
    },
    {
        title:"Settings",
        icon:<SettingsIcon/>,
        link:"/settings"
    },
    {
        title:"Feedback",
        icon:<ThumbUpAltIcon/>,
        link:"/feedback"
    },

] 
  