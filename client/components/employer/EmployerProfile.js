import PieContainer from './PieContainer';
import EmployerProfileNav from './EmployerProfileNav';
import { useEffect, useState } from 'react';
import WorkerList from './WorkerList.js';
import Messages from './Messages.js';
import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MailIcon from '@material-ui/icons/Mail';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import PeopleIcon from '@material-ui/icons/People';
import { Link } from 'react-router-dom';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

export default function EmployerProfile() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const [currentTab, setCurrentTab] = useState('data');

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  console.log(classes);

  const changeMessageTab = () => {
    setCurrentTab('messages');
  };
  const changeDataTab = () => {
    setCurrentTab('data');
  };
  const changeWorkerTab = () => {
    setCurrentTab('workers');
  };

  //DATA TAB////////////////////
  if (currentTab === 'data') {
    return (
      <div>
        <div className={classes.root}>
          <CssBaseline />
          <AppBar
            position='fixed'
            className={clsx(classes.appBar, {
              [classes.appBarShift]: open,
            })}
          >
            <Toolbar>
              <IconButton
                color='inherit'
                aria-label='open drawer'
                onClick={handleDrawerOpen}
                edge='start'
                className={clsx(classes.menuButton, {
                  [classes.hide]: open,
                })}
              >
                <MenuIcon />
              </IconButton>
              <Typography variant='h6' noWrap>
                Employer Profile
              </Typography>
            </Toolbar>
          </AppBar>
          <Drawer
            variant='permanent'
            className={clsx(classes.drawer, {
              [classes.drawerOpen]: open,
              [classes.drawerClose]: !open,
            })}
            classes={{
              paper: clsx({
                [classes.drawerOpen]: open,
                [classes.drawerClose]: !open,
              }),
            }}
          >
            <div className={classes.toolbar}>
              <IconButton onClick={handleDrawerClose}>
                {theme.direction === 'rtl' ? (
                  <ChevronRightIcon />
                ) : (
                  <ChevronLeftIcon />
                )}
              </IconButton>
            </div>
            <Divider />
            <List>
              <ListItem button key='Data' onClick={changeDataTab}>
                <ListItemIcon>{<DonutLargeIcon />}</ListItemIcon>
                <ListItemText primary='Data' />
              </ListItem>

              <ListItem button key='Responses' onClick={changeMessageTab}>
                <ListItemIcon>{<MailIcon />}</ListItemIcon>
                <ListItemText primary='Responses' />
              </ListItem>

              <ListItem button key='Employees' onClick={changeWorkerTab}>
                <ListItemIcon>{<PeopleIcon />}</ListItemIcon>
                <ListItemText primary='Employees' />
              </ListItem>
              {/* </Link> */}
            </List>
            <Divider />
          </Drawer>
          <main className={classes.content}>
            <div className={classes.toolbar} />
          </main>
        </div>
        <div>
          <PieContainer />
        </div>
      </div>
    );
  }

  //MESSAGES///////////////
  if (currentTab === 'messages') {
    return (
      <div>
        <div className={classes.root}>
          <CssBaseline />
          <AppBar
            position='fixed'
            className={clsx(classes.appBar, {
              [classes.appBarShift]: open,
            })}
          >
            <Toolbar>
              <IconButton
                color='inherit'
                aria-label='open drawer'
                onClick={handleDrawerOpen}
                edge='start'
                className={clsx(classes.menuButton, {
                  [classes.hide]: open,
                })}
              >
                <MenuIcon />
              </IconButton>
              <Typography variant='h6' noWrap>
                Employer Profile
              </Typography>
            </Toolbar>
          </AppBar>
          <Drawer
            variant='permanent'
            className={clsx(classes.drawer, {
              [classes.drawerOpen]: open,
              [classes.drawerClose]: !open,
            })}
            classes={{
              paper: clsx({
                [classes.drawerOpen]: open,
                [classes.drawerClose]: !open,
              }),
            }}
          >
            <div className={classes.toolbar}>
              <IconButton onClick={handleDrawerClose}>
                {theme.direction === 'rtl' ? (
                  <ChevronRightIcon />
                ) : (
                  <ChevronLeftIcon />
                )}
              </IconButton>
            </div>
            <Divider />
            <List>
              <ListItem button key='Data' onClick={changeDataTab}>
                <ListItemIcon>{<DonutLargeIcon />}</ListItemIcon>
                <ListItemText primary='Data' />
              </ListItem>

              <ListItem button key='Responses' onClick={changeMessageTab}>
                <ListItemIcon>{<MailIcon />}</ListItemIcon>
                <ListItemText primary='Responses' />
              </ListItem>

              <ListItem button key='Employees' onClick={changeWorkerTab}>
                <ListItemIcon>{<PeopleIcon />}</ListItemIcon>
                <ListItemText primary='Employees' />
              </ListItem>
              {/* </Link> */}
            </List>
            <Divider />
          </Drawer>
          <main className={classes.content}>
            <div className={classes.toolbar} />
          </main>
        </div>
        <div>
          <Messages />
        </div>
      </div>
    );
  }
  /////////workers//////////
  if (currentTab === 'workers') {
    return (
      <div>
        <div className={classes.root}>
          <CssBaseline />
          <AppBar
            position='fixed'
            className={clsx(classes.appBar, {
              [classes.appBarShift]: open,
            })}
          >
            <Toolbar>
              <IconButton
                color='inherit'
                aria-label='open drawer'
                onClick={handleDrawerOpen}
                edge='start'
                className={clsx(classes.menuButton, {
                  [classes.hide]: open,
                })}
              >
                <MenuIcon />
              </IconButton>
              <Typography variant='h6' noWrap>
                Employer Profile
              </Typography>
            </Toolbar>
          </AppBar>
          <Drawer
            variant='permanent'
            className={clsx(classes.drawer, {
              [classes.drawerOpen]: open,
              [classes.drawerClose]: !open,
            })}
            classes={{
              paper: clsx({
                [classes.drawerOpen]: open,
                [classes.drawerClose]: !open,
              }),
            }}
          >
            <div className={classes.toolbar}>
              <IconButton onClick={handleDrawerClose}>
                {theme.direction === 'rtl' ? (
                  <ChevronRightIcon />
                ) : (
                  <ChevronLeftIcon />
                )}
              </IconButton>
            </div>
            <Divider />
            <List>
              <ListItem button key='Data' onClick={changeDataTab}>
                <ListItemIcon>{<DonutLargeIcon />}</ListItemIcon>
                <ListItemText primary='Data' />
              </ListItem>

              <ListItem button key='Responses' onClick={changeMessageTab}>
                <ListItemIcon>{<MailIcon />}</ListItemIcon>
                <ListItemText primary='Responses' />
              </ListItem>

              <ListItem button key='Employees' onClick={changeWorkerTab}>
                <ListItemIcon>{<PeopleIcon />}</ListItemIcon>
                <ListItemText primary='Employees' />
              </ListItem>
            </List>
            <Divider />
          </Drawer>
          <main className={classes.content}>
            <div className={classes.toolbar} />
          </main>
        </div>
        <div>
          <WorkerList />
        </div>
      </div>
    );
  }
}
