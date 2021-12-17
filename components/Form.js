import styles from './ContactForm.module.css'
import { useState } from 'react';
import { Grid } from '@mui/material';
import { makeStyles } from '@material-ui/styles';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

export default function Form() {

    const useStyles = makeStyles({
       

          form:{
            display: 'flex',
            justifyContent: 'center',
            alignItems:'center' ,
            alignContent:'center',
            padding: '10px 10px',
            margin:'auto'
          }
    
      });
      
      const classes = useStyles();

    // Input states
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [purpose, setPurpose] = useState('');
    const [message, setMessage] = useState('');

    // Form submit handler
    const submitForm = async (e) => {
    e.preventDefault();
    const res = await fetch('https://javierpc.herokuapp.com//api/submit-form', {
        method: 'POST',
        body: JSON.stringify({ name, email, purpose, message }),
    });
    // Success if status code is 201
    if (res.status === 201) {
        toast('Thank you for contacting me!', { type: 'success' });
    } else {
        toast('Please, re-check your inputs.', { type: 'error' });
    }
    };
    
  
  
    return (
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
              placeholder="Hi there! I want you on my team!"
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
    );
  }







