import Image from 'next/image'
import bee from '../public/bee.svg';
import tent from '../public/tent.svg';
import Grid from '@mui/material/Grid';
import Link from 'next/link'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { makeStyles } from '@material-ui/core/styles';
import emoji from '../public/emoji.svg';
import check from '../public/checklist.png';
import palette from '../public/palette.svg';
import  mongo from '../public/mongodb.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHtml5 } from '@fortawesome/free-brands-svg-icons';
import { faCss3 } from '@fortawesome/free-brands-svg-icons';
import { faNodeJs } from '@fortawesome/free-brands-svg-icons';
import { faJs } from '@fortawesome/free-brands-svg-icons';
import { faReact } from '@fortawesome/free-brands-svg-icons';
import { faAws } from '@fortawesome/free-brands-svg-icons';
import vsc from '../public/vsc.svg';
import { faPython } from '@fortawesome/free-brands-svg-icons';
import { faGitAlt } from '@fortawesome/free-brands-svg-icons';



export default function Home() {
  



  const useStyles = makeStyles({
    button: {
      margin: 'auto',
      background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
      borderRadius: 5,
      boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
      color: 'white',
      height: '3rem',
      padding: '0 30px',
      zIndex: 10,
      transition: 'all 1000ms ease',
      '&:hover': {
        backgroundColor:'rgba(255,155,100,0.8)',
        borderColor: 'white',
        transform: 'scale(1.2)',
        transition: 'all 1000ms ease'
        
      }, 
    },
    text: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      margin: 'auto',
      textShadow: '2px 2px #2677C9',
      color: 'white',
      textAlign: 'center',
      border: '1px dashed'

    },
    CardStyles: {
      margin: '50px 30px 50px 30px',
      // display:'flex',
      // flexDirection:'column',
      // justifyContent: 'space-between',
      // alignItems: 'center',
      // alignContent: 'center',
      
      backgroundColor: 'rgba(255,155,100,0.7)',
      border: '2px solid',
      maxHeight: '25em',
      minHeight:'25em',
      width: '100%',
      height: '100%',
      transition: 'all 1000ms ease',
      '&:hover': {
        backgroundColor:'rgba(255,155,100,0.8)',
        borderColor: 'white',
        cursor:'pointer'
      }, 
    }, 
    
    img: {
      display: 'block',
      marginLeft: 'auto',
      marginRight: 'auto',
      maxHeight: '250px',
      width: 'auto',
      maxWidth: '250px',
      transition: 'all 1000ms ease',
      '&:hover': {
        transform: 'rotate(360deg)',
        transition: 'all 1000ms'
      }, 
     
      
    },
    grid:{
      alignItems:"center",
      alignContent:'center',
      justifyContent:"center",
      minHeight: '100vh',
      margin: '2rem 0px 4.5rem 0px',
    },
    icons:{
      fontSize:'5rem',
      padding: '4rem 2rem',
      transition: 'all 2000ms ease',
      '&:hover': {
        transform: 'scale(1.2)',
        transition: 'all 1000ms ease',
      }, 
    },

    col0: {
      
      color: 'white',
      justifyContent: 'center',
      alignItems:'center',
      borderRadius:'30px',
      textAlign: 'center',
      padding: '10px 20px',

      
    },


  });
  
  const classes = useStyles();

 
  
  return (
    <>
    
    <Grid  container spacing={{ xs: 0, md: 0, lg:0}}  className={classes.grid}  >
    
    <Grid item xs={12} sm={12} md={12} lg={12} className={classes.col0} >
        <FontAwesomeIcon className={classes.icons} style={{color:'#e34c26'}} icon={faHtml5} />
        <FontAwesomeIcon className={classes.icons} style={{color:'blue'}} icon={faCss3} />
        <FontAwesomeIcon className={classes.icons} style={{color: 'green'}} icon={faNodeJs} />
        <FontAwesomeIcon className={classes.icons} style={{color: '#F0DB4F'}} icon={faJs} />
        <FontAwesomeIcon className={classes.icons} style={{color: '#61DBFB'}} icon={faReact} />
        <FontAwesomeIcon className={classes.icons} style={{color: '#F1502F'}} icon={faGitAlt} />
        <FontAwesomeIcon className={classes.icons} style={{color: '#FF9900'}} icon={faAws} />
        <FontAwesomeIcon className={classes.icons} style={{color: '#F0DB4F'}} icon={faPython} />
        <Image className={classes.icons} src={mongo} height={208} width={110}/>
        <Image className={classes.icons} src={vsc} height={208} width={110}/>
      </Grid>



      <Grid item xs={11} sm={11} md={6} lg={5} xl={3} style={{display: 'flex'}} >
      <Link href="https://beecoiner-app.herokuapp.com/" >
        <a target="_blank" style={{display:'flex', width:'100%'}}>
        <Card style={{display: 'flex', justifyContent: 'space-between', flexDirection: 'column'}}className={classes.CardStyles} style={{ height: '100%' }}>
        
         
        
        <CardContent >
           <div className={classes.img}><Image
          src={bee}
          height={250}
          width={250}
          layout='responsive'
          />
          </div>
         
          <Typography gutterBottom variant="h5" component="div" className={classes.text}>
            Beecoiner
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{textAlign:'center'}}>
            An awesomic cryptocurrency searching App!
          </Typography>
        
        </CardContent>
        <CardActions>
        <Button className={classes.button}><Link href="https://beecoiner-app.herokuapp.com/"><a target="_blank">Enter this Site!</a></Link></Button>
        
        </CardActions>
        </Card>
        </a>
        </Link>
      
        
      </Grid>
      <Grid item xs={11} sm={11} md={6} lg={5} xl={3} style={{display: 'flex'}}>
        <Link href="https://joker-dad.herokuapp.com/">
          <a target="_blank" style={{display:'flex', width:'100%'}}>
        <Card style={{display: 'flex', justifyContent: 'space-between', flexDirection: 'column'}}className={classes.CardStyles} style={{ height: '100%' }} >
        
         
        
        <CardContent>
        <div className={classes.img}><Image className={classes.img}
          src={emoji}
          height={250}
          width={250}
          layout='responsive'

          />
        </div>
        
          <Typography gutterBottom variant="h5" component="div" className={classes.text}>
            Dad's Jokes
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{textAlign:'center'}}>
            A hilarious dad's jokes fetching App!
          </Typography>
        </CardContent>
        <CardActions>
        <Button className={classes.button}><Link href="https://joker-dad.herokuapp.com/"><a target="_blank">Enter this Site!</a></Link></Button>
        </CardActions>
        </Card>
        </a>
        </Link>
      
        
      </Grid>
      
        
      <Grid item xs={11} sm={11} md={6} lg={5} xl={3} style={{display: 'flex'}}>
        <Link href="https://ultimate-todo-list-app.herokuapp.com/">
          <a target="_blank" style={{display:'flex', width:'100%'}}>
        <Card style={{display: 'flex', justifyContent: 'space-between', flexDirection: 'column'}}className={classes.CardStyles} style={{ height: '100%' }}>
        
       
        
        <CardContent>
        <div className={classes.img}>
          
          <Image className={classes.img}
          src={check}
          height={200}
          width={200}
          layout='responsive'

          />
        </div>
          <Typography gutterBottom variant="h5" component="div" className={classes.text}>
            Ultimate To-do List
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{textAlign:'center'}}>
            The final To-do list App!
          </Typography>
        </CardContent>
        <CardActions>
        <Button className={classes.button}><Link href="https://ultimate-todo-list-app.herokuapp.com/"><a target="_blank">Enter this Site!</a></Link></Button>
        </CardActions>
        </Card>
        </a>
        </Link>
        
      </Grid>

      <Grid item xs={11} sm={11} md={6} lg={5} xl={3} style={{display: 'flex'}}>
        <Link href="https://palettecreator.vercel.app/">
          <a target="_blank" style={{display:'flex', width:'100%'}}>
        <Card style={{display: 'flex', justifyContent: 'space-between', flexDirection: 'column'}}className={classes.CardStyles} style={{ height: '100%' }}>
        
       
        
        <CardContent>
        <div className={classes.img}>
          
          <Image className={classes.img}
          src={palette}
          height={100}
          width={100}
          layout='responsive'

          />
        </div>
          <Typography gutterBottom variant="h5" component="div" className={classes.text}>
            Awesomic Palette Creator
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{textAlign:'center'}}>
            An amazing Color Palette Creator App!
          </Typography>
        </CardContent>
        <CardActions>
        <Button className={classes.button}><Link href="https://palettecreator.vercel.app/"><a target="_blank">Enter this Site!</a></Link></Button>
        </CardActions>
        </Card>
        </a>
        </Link>
        
      </Grid>
     
      <Grid item xs={11} sm={11} md={6} lg={5} xl={3} style={{display: 'flex'}}>
        <Link href="https://campseeker.herokuapp.com/">
          <a target="_blank" style={{display:'flex', width:'100%'}}>
        <Card style={{display: 'flex', justifyContent: 'space-between', flexDirection: 'column'}}className={classes.CardStyles} style={{ height: '100%' }}>
        
       
        
        <CardContent>
        <div className={classes.img}>
          
          <Image className={classes.img}
          src={tent}
          height={100}
          width={100}
          layout='responsive'

          />
        </div>
          <Typography gutterBottom variant="h5" component="div" className={classes.text}>
            CampSeeker
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{textAlign:'center'}}>
          A Full-stack campsite hub App!
          </Typography>
        </CardContent>
        <CardActions>
        <Button className={classes.button}><Link href="https://campseeker.herokuapp.com/"><a target="_blank">Enter this Site!</a></Link></Button>
        </CardActions>
        </Card>
        </a>
        </Link>
        
      </Grid>
     
      
  </Grid>
  </>
  )
}
