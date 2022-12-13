import { Grid } from '@mui/material';
import { makeStyles } from '@material-ui/styles';
import LinkedInIcon from '@mui/icons-material/LinkedIn'; 
import EmailIcon from '@mui/icons-material/Email';
import TelegramIcon from '@mui/icons-material/Telegram';
import Link from 'next/link';

export default function Footer() {

    const useStyles = makeStyles({
      footer: {
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        color: 'white',
        height: 50,
        textAlign: 'center',
        // verticalAlign: 'middle',
        // lineHeight: '50px',
        padding: '12.5px 2rem'
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
  
  
    return (
        <Grid  container spacing={{ xs: 0, md: 0, lg:0}} columnSpacing={1}  >
            <Grid item xs={12} sm={12} md={12} lg={12} className={classes.footer}>
                <span style={{ fontSize: '1.1rem', color:'white', textAlign:'center'}}>© 2023</span>
                <Link href='https://www.linkedin.com/in/javierprietocano/'><a target="_blank"><LinkedInIcon className={classes.icon} style={{ fontSize: '2rem', color:'white',
                    float:'right',padding:'0 0.5rem' }}/> </a></Link>
                <Link href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=javierprietcan@gmail.com&body=Hi Javier! I'm interested in your profile!"><a target="_blank"> <EmailIcon className={classes.icon} style={{ fontSize: '2rem', color:'white', float:'right',padding:'0 0.5rem' }}/></a></Link>
                <Link href="https://t.me/javierprietcan"><a target="_blank"> <TelegramIcon className={classes.icon} style={{ fontSize: '2rem', color:'white', float:'right',padding:'0 0.5rem' }}/></a></Link>
            </Grid>

            
        
        </Grid>
    );
  }
  