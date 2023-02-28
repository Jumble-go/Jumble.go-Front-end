import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import ListAltIcon from '@mui/icons-material/ListAlt';
import InventoryIcon from '@mui/icons-material/Inventory';
import LoyaltyIcon from '@mui/icons-material/Loyalty';
import ForumIcon from '@mui/icons-material/Forum';
import MediaCard from './HomeCard';
import '../styleFolder/HomePage.css'
import { useNavigate } from 'react-router-dom'
import { useContext, useEffect, useState } from "react"
import Context from '../Context/Contex';
// import {MuiTheme}



const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: `-${drawerWidth}px`,
        ...(open && {
            transition: theme.transitions.create('margin', {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
            marginLeft: 0,
        }),
    }),
);

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: `${drawerWidth}px`,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
}));

export default function TestDrawer() {
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const navigate = useNavigate()
    const { user, setUser } = useContext(Context) // []
    const { posts, setAllPosts } = useContext(Context) // []
    const { active, setActive } = useContext(Context)


    useEffect(() => {
        fetch(`http://localhost:8000/user_posts`)
            .then(response => response.json())
            .then(data => {
                setAllPosts(data)
            })
    }, [])



    function caseOne(e) {
        e.preventDefault()

        fetch(`http://localhost:8000/user_posts`)
            .then(response => response.json())
            .then(data => {
                setAllPosts(data)
            })

    }
    function caseTwo(e) {
        e.preventDefault()

        fetch(`http://localhost:8000/My_Post`, {
            method: "POST",
            body: JSON.stringify({
                id: user.id
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
            .then(response => response.json())
            .then(data => {
                setAllPosts(data)
            })
    }

    function caseThree(e) {
        e.preventDefault(e)
        e.preventDefault()
        console.log('case two running')
        fetch('http://localhost:8000/User_Wish_List', {
            method: "POST",
            body: JSON.stringify({
                userId: user.id
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
            .then(response => response.json())
            .then(data => {
                if (data.message) {
                    alert('Can not load data')
                } else {
                    setAllPosts(data)
                }
            })

    }

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };


    return (
        <Box sx={{
            display: 'flex',
        }}>
            <CssBaseline />
            <AppBar position="fixed" open={open}>
                <Toolbar style={{ backgroundColor: "#82a6b1" }}>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        sx={{ mr: 2, ...(open && { display: 'none' }) }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h5" noWrap component="div">
                        Jumble
                    </Typography>
                </Toolbar>
            </AppBar  >
            <Drawer
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                    },
                }}
                variant="persistent"
                anchor="left"
                open={open}
            >
                <DrawerHeader style={{ backgroundColor: "#82a6b1" }}>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                    </IconButton>
                </DrawerHeader>
                <Divider />
                <List>
                    {[{ text: 'All Post', func: caseOne, icon: <ListAltIcon /> }, { text: 'My Post', func: caseTwo, icon: <InventoryIcon /> }, { text: 'Wish List', func: caseThree, icon: <LoyaltyIcon /> }, { text: 'Messages', func: caseTwo, icon: <ForumIcon /> }].map((obj) => (
                        <ListItem key={obj.text} disablePadding className="Display-Card" >
                            <ListItemButton onClick={(e) => { obj.func(e) }} >
                                <ListItemIcon >
                                    {obj.icon}
                                </ListItemIcon>
                                <ListItemText primary={obj.text} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
                <Divider />
                <List>
                    {['All mail', 'Trash', 'Spam'].map((text, index) => (
                        <ListItem key={text} disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                                </ListItemIcon>
                                <ListItemText primary={text} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            </Drawer>
            <Main open={open}>
                <DrawerHeader />
                <Typography >
                    <div className='Test-Container'>

                        <div class="child1">
                            <center>
                                {active && posts.filter((x, index) => index % 2 !== 0).map(post => { return <MediaCard id={post.id} user={post.user_id} userName={post.username_Poster} image={post.image} des={post.description} price={post.price} date={post.datetime} tittle={post.tittle} /> })}
                            </center>
                        </div>
                        <div class="child2">
                            {active && posts.filter((x, index) => index % 2 === 0).map(post => { return <MediaCard id={post.id} user={post.user_id} image={post.image} userName={post.username_Poster} des={post.description} price={post.price} date={post.datetime} tittle={post.tittle} /> })}
                        </div>


                    </div>
                </Typography>

            </Main>
        </Box >
    );
}