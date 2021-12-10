import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { makeStyles } from '@material-ui/core/styles';
import Link from 'next/link';
import React, { useState } from 'react';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useRouter } from "next/router";


export default function Navbar() {

  const useStyles = makeStyles({
    appbar: {
      background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
      boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
      color: 'white',
      height: 60,
      width: '100%',
      textAlign: 'center',
      fontamily: 'Alef'

    },
    active:{
      textDecoration:'3px underline #8bfe6b',
      color: 'white',
      fontWeight:'bold'
    },
    
  
  });

  const classes = useStyles();

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const isMobile = useMediaQuery('(min-width:600px)');

 
  
  const router = useRouter();


  return (
    <Box sx={{ flexGrow: 1 }} sx={{width:'100%'}}>
      <AppBar position="sticky" className={classes.appbar} >
     
        <Toolbar>
        { !isMobile ? (
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={() => setIsDrawerOpen(true)}
          >
            <MenuIcon />
          </IconButton>
          ): (
            <>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}  >
            <Link href='/'><Button><a 
            className={router.pathname == "/" ? classes.active : ""}
            >Home</a></Button></Link>
            
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Link href='/contact' ><Button><a 
          className={router.pathname == "/contact" ? classes.active : ""}>
            Contact</a></Button></Link>
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Link href='/about'><Button><a 
          className={router.pathname == "/about" ? classes.active : ""}>About Me</a></Button></Link>
          </Typography>
          </>
          )}
          <Drawer open={isDrawerOpen} onClose={() => setIsDrawerOpen(false)}>
          <List className={classes.drawer}>
            <ListItem button>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <Link href='/'><Button>Home</Button></Link>
            
              </Typography>
            </ListItem>

            <ListItem button>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                <Link href='/contact'><Button>Contact</Button></Link>
              </Typography>

            </ListItem>

            <ListItem button>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                <Link href='/about'><Button>About Me</Button></Link>
               </Typography>
            </ListItem>
          </List>
        </Drawer>
        
          
        </Toolbar>
      </AppBar>
    </Box>
  );
}
