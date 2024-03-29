import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { Link } from 'react-router-dom';

const NavList = () => {

    const navList = [
        {
            id: 1,
            name: "Notes",
            icon: <LightbulbOutlinedIcon />,
            route: '/'
        },
        {
            id: 2,
            name: "Archive",
            icon: <ArchiveOutlinedIcon />,
            route: '/archive'
        },
        {
            id: 3,
            name: "Trash",
            icon: <DeleteOutlineIcon />,
            route: '/delete'
        }
    ]
    return (
        <>
            <List>
                {
                    navList.map(list => (
                        <ListItem key={list.id} >
                            <Link to={list.route} style={{textDecoration: 'none', display: 'flex', color: 'inherit'}}>
                                <ListItemIcon style={{alignItems: 'center'}}>
                                    {list.icon}
                                </ListItemIcon>
                                <ListItemText primary={list.name} />
                            </Link>
                        </ListItem>
                    ))}
            </List>
        </>
    )
}
export default NavList;