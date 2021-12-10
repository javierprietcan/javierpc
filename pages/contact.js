import LinkedInIcon from '@mui/icons-material/LinkedIn'; 
import EmailIcon from '@mui/icons-material/Email';
import { Container } from '@mui/material';
import { Grid } from '@mui/material';
import { makeStyles } from '@material-ui/styles';
import styles from '../styles/contactForm.module.css';
import Link from 'next/link';
import TelegramIcon from '@mui/icons-material/Telegram';
// For handling input states
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons';

// For display toasts  
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

export default function Contact() {

// Input states
const [name, setName] = useState('');
const [email, setEmail] = useState('');
const [purpose, setPurpose] = useState('');
const [message, setMessage] = useState('');

 // Form submit handler
 const submitForm = async (e) => {
   e.preventDefault();
   const res = await fetch('http://localhost:3000/api/submit-form', {
     method: 'POST',
     body: JSON.stringify({ name, email, purpose, message }),
   });
   // Success if status code is 201
   if (res.status === 201) {
     toast('Thank you for contacting me!', { type: 'success' });
   } else {
     toast('Please re-check your inputs.', { type: 'error' });
   }
 };
    

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

      const text = "Are you interested in my profile? Are you looking for a new web developer to be part of your team? Or perhaps you're a IT recruiter? Otherwise, are you just interested in my portfolio and want to know more about it or about me? In any case, you can reach me out through the platforms below!"
      
      
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
        
        <Grid item xs={12} sm={12} md={10} lg={8} sx={{height:'20rem'}}></Grid>
        <Grid item xs={12} sm={12} md={10} lg={8} className={classes.form}>
        <div className={styles.container} style={{justifyContent:'center'}}>
        <ToastContainer />
        <form className={styles.form} onSubmit={submitForm}>
          <h1 className={styles.title}>Get in Touch</h1>
          <div>
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className={styles.inputs}>
            <div>
              <label htmlFor="email">E-Mail</label>
              <input
                type="email"
                name="email"
                placeholder="youremail@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="purpose">Subject</label>
              <select
                name="purpose"
                id="purpose"
                value={purpose}
                onChange={(e) => setPurpose(e.target.value)}
              >
                <option value="" disabled required>
                  Select one
                </option>
                <option value="Web Development">Web Development</option>
                <option value="App Development">App Development</option>
                <option value="Query / Question">Query / Question</option>
                <option value="Feedback / Message">Feedback / Message</option>
              </select>
            </div>
          </div>
          <div>
            <label htmlFor="message">Message</label>
            <textarea
              name="message"
              id="message"
              rows="5"
              placeholder="Hi there!"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>
          </div>
          <button className={styles.btn} type="submit">
            Submit!
          </button>
        </form>
      </div>
      </Grid>
      <Grid item xs={12} sm={12} md={10} lg={8} sx={{height:'150px'}}></Grid>
      </Grid>
    </>

            )
    


}


