import LinkedInIcon from '@mui/icons-material/LinkedIn'; 
import EmailIcon from '@mui/icons-material/Email';
import { Container } from '@mui/material';
import { Grid } from '@mui/material';
import { makeStyles } from '@material-ui/styles';


import Link from 'next/link';
import TelegramIcon from '@mui/icons-material/Telegram';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons';


import Form from '../components/Form';


export default function Contact() {


    

    const useStyles = makeStyles({
        col1: {
          backgroundColor: 'rgba(241,141,193,0.85)',
        //   boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
          color: 'white',
          height: '500px',
          display: 'flex',
          justifyContent: 'center',
          alignItems:'center',
          borderRadius:'30px',
          padding: '10px 10px',
          textAlign: 'justify'
          
        },
        col2: {
            backgroundColor: 'rgba(200,141,055,0.85)',
            // boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
            color: 'white',
            height: '500px',
            display: 'flex',
            justifyContent: 'center',
            alignItems:'center',
            borderRadius:'30px',
            padding: '10px 10px',
            textAlign: 'justify'
 
          },
          col3: {
            // boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
            color: 'white',
            height: '500px',
            display: 'flex',
            justifyContent: 'center',
            alignItems:'center' ,
            padding: '10px 10px 0px 10px',
            textAlign: 'center',
          },
          col4: {
            // boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
            color: 'white',
            height: '300px',
            display: 'flex',
            justifyContent: 'center',
            alignItems:'center' ,
            padding: '10px 10px 20px 10px',
            textAlign: 'center',
          },

          form:{
            display: 'flex',
            justifyContent: 'center',
            alignItems:'center' ,
            alignContent:'center',
            padding: '10px 10px',
            margin:'auto'
          },

      
       
       
        img: {
          display: 'block',
          marginLeft: 'auto',
          marginRight: 'auto',
          width: '50%',
          
        },
        grid:{
          alignItems:"center",
          alignContent: 'center',
          justifyContent:"center",
          margin: '0px',
          backgroundColor: 'rgba(200,200,200,0.45)',
          textShadow: '2px 2px #2677C9',
          color: 'white',

        },
        contact:{
          alignItems:"center",
          alignContent: 'center',
          justifyContent:"center",
          margin: '0px',
          backgroundColor: 'rgba(200,200,200,0.45)',

        },
        icon:{
          transition: 'all 500ms ease',
          cursor:'pointer',
          '&:hover': {
            transform: 'scale(1.5)',
            transition: 'all 1000ms ease',
          }, 
        }
    
      });
      
      const classes = useStyles();

      const text = "Are you interested in my profile? Are you looking for a new Software Engineer to be part of your team? Or perhaps you're a IT recruiter? Otherwise, are you just interested in my portfolio and want to know more about it or about me? In any case, you can reach me out through the platforms below!"
      
      
    return (
    <>
        
        
        <Grid  container spacing={{ xs: 0, md: 0, lg:0}} className={classes.contact} sx={{height: '20rem'}} >
            <div className="main-about">
                <h1>Contact Me!</h1>
            </div>
        </Grid>
        <Grid  container spacing={{ xs: 0, md: 0, lg:0}} className={classes.grid}  >
        <Grid item xs={12} sm={12} md={12} lg={12} className={classes.col4}>
          <FontAwesomeIcon style={{color:'brown',fontSize:'15rem'}} icon= {faLaptopCode} />

        </Grid>
        <Grid item xs={12} sm={12} md={10} lg={8} className={classes.col3}>
        <div className="main-div">
            <div className="text"> 
            <h3><span className='span-talk'>Let's talk!</span></h3>
                <p className="description">{text}</p>
            </div>
            <div className="icons">
              <Link href='https://www.linkedin.com/in/javierprietocano/'><a target="_blank"><LinkedInIcon className={classes.icon} style={{ fontSize: 50, color:'rgb(9, 49, 136)',padding:'1rem' }}/></a></Link>
              <Link href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=javierprietcan@gmail.com&body=Hi Javier! I'm interested in your profile!"><a target="_blank"><EmailIcon className={classes.icon} style={{ fontSize: 50, color:'#EEE8AA',padding:'1rem' }}/></a></Link>
              <Link href="https://t.me/javierprietcan"><a target="_blank"><TelegramIcon className={classes.icon} style={{ fontSize: 50, color:'white',padding:'1rem' }}/></a></Link>
            </div>
           
            <div className="text"> 
                <p className="description">In addition, you can contact me directly by submitting the form below!</p>
            </div>

        </div>
        </Grid>
        
        <Grid item xs={12} sm={12} md={10} lg={8} sx={{height:'25rem'}}></Grid>
        <Form />
      <Grid item xs={12} sm={12} md={10} lg={8} sx={{height:'150px'}}></Grid>
      </Grid>
    </>

            )
    


}


