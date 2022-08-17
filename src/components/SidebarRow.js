import HomeIcon from '@mui/icons-material/Home';
import MailIcon from '@mui/icons-material/Mail';
import GridViewIcon from '@mui/icons-material/GridView';
import GroupIcon from '@mui/icons-material/Group';
import CollectionsIcon from '@mui/icons-material/Collections';
import React from 'react';


export default SidebarRow = [
    {
        title: "Home",
        icon: <HomeIcon />,
        link: "/home"
    },
    {
        title: "Mailbox",
        icon: <MailIcon />,
        link: "/mail"
    },
    {
        title: "Dashboard",
        icon: <GridViewIcon />,
        link: "/dashboard"
    },
    {
        title: "Friends",
        icon: <GroupIcon />,
        link: "/friends"
    },
    {
        title: "Gallery",
        icon: <CollectionsIcon />,
        link: "/gallery"
    }
];