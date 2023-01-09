
import { Container } from '@mui/material';
import { Grid } from '@mui/material';
import { makeStyles } from '@material-ui/styles';
import { Typography } from '@mui/material';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import WorkIcon from '@mui/icons-material/Work';
import TapasIcon from '@mui/icons-material/Tapas';
import ComputerIcon from '@mui/icons-material/Computer';
import FlightIcon from '@mui/icons-material/Flight';
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';
import { fontSize } from '@mui/system';
import SchoolIcon from '@mui/icons-material/School';
import TranslateIcon from '@mui/icons-material/Translate';
import Skills from '../components/Skills';
import Image from 'next/image';
import CV2 from '../public/CV2.jpg';
import DownloadIcon from '@mui/icons-material/Download';
import { Button } from '@mui/material';
import  mongo from '../public/mongodb.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHtml5 } from '@fortawesome/free-brands-svg-icons';
import { faCss3 } from '@fortawesome/free-brands-svg-icons';
import { faNodeJs } from '@fortawesome/free-brands-svg-icons';
import { faJs } from '@fortawesome/free-brands-svg-icons';
import { faReact } from '@fortawesome/free-brands-svg-icons';
import { faAws } from '@fortawesome/free-brands-svg-icons';
import vsc from '../public/vsc.svg';
import mysql from '../public/mysql.svg';
import { faPython } from '@fortawesome/free-brands-svg-icons';
import { faGitAlt } from '@fortawesome/free-brands-svg-icons';


export default function About() {


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
          padding: '10px 20px',
          textAlign: 'justify',
          // margin:'15px',

          
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
            padding: '10px 20px',
            textAlign: 'justify',
            // margin:'15px'
            
 
          },
          col3: {
            // boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
            color: 'white',
            height: '500px',
            display: 'flex',
            justifyContent: 'center',
            alignItems:'center' ,
            padding: '10px 20px',
            textAlign: 'center',
            
           

          },
       
        col0: {
          // backgroundColor: 'rgba(241,141,193,0.85)',
        //   boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
          color: 'white',
          // height: '700px',
          // display: 'flex',
          justifyContent: 'center',
          alignItems:'center',
          borderRadius:'30px',
          textAlign: 'center',
          padding: '10px 20px',

          
        },

      
        cvimg: {
          boxShadow: '2px 4px 6px 3px rgba(255, 105, 135, .3)',
          display: 'block',
          marginLeft: 'auto',
          marginRight: 'auto',
          width: '30%',
          borderRadius:'30%',
          transition: 'all 1000ms ease',
          '&:hover': {
            transform: 'rotate(360deg) scale(1.1)',
            transition: 'all 1000ms ease'
            
          }, 
          
        },
        grid:{
          alignItems:"center",
          alignContent: 'center',
          justifyContent:"center",
          minHeight: '100vh',
          backgroundColor: 'rgba(200,200,200,0.45)',
        },
        
        
        about:{
          alignItems:"center",
          alignContent: 'center',
          justifyContent:"center",
          margin: '0px',
          backgroundColor: 'rgba(200,200,200,0.45)',

        },
        h3: {
          textAlign: 'center',
        
          textShadow: '2px 2px #2677C9',
          border: '1px dashed',
          fontSize: '1.5rem'
        },
        p:{
          textAlign: 'justify',
          textShadow: '2px 2px #2677C9',
          fontSize: '1.1rem',
        },
        
        plane:{
          transition: 'all 10500ms ease',
          '&:hover': {
            transform: 'translateX(200px) translateY(-5000px) rotate(135deg) scale(0.3) ',
            transition: 'all 10500ms ease'
            
          }, 
        },

        cap:{
          transition: 'all 1000ms ease',
          '&:hover': {
            transform: ' rotate(360deg) scale(1.5) ',
            transition: 'all 1000ms ease'
            
          }, 
        },
        pc:{
          transition: 'all 1000ms ease',
          '&:hover': {
            transform: '  scale(1.5) ',
            color: 'turquoise',
            transition: 'all 1000ms ease'
            
          }, 
        },

        lan:{
          
          transition: 'all 2000ms ease',
          '&:hover': {
            transform: ' skew(35deg)  scale(1.3)',
            color: 'teal',
            transition: 'all 2000ms ease',
            maxWidth:'50%'
          }, 
        },
        icons:{
          fontSize:'5rem',
          padding: '4rem 2rem',
          transition: 'all 2000ms ease',
          '&:hover': {
            transform: 'scale(1.1)',
            transition: 'all 1000ms ease',
          }, 
        }
    
      });
      
      const classes = useStyles();
    
    return (
        
    <>
        
    <Grid  container spacing={{ xs: 0, md: 0, lg:0}} className={classes.about} sx={{height: '20rem'}} >
    <div className="main-about">
        <h1>About Me!</h1>
    </div>
    </Grid>
    
    <Grid  container spacing={{ xs: 0, md: 0, lg:0}} columnSpacing={1} className={classes.grid}  sx={{padding: '2rem 0'}}>
        
      <Grid item xs={12} sm={12} md={6} lg={6} className={classes.col0} sx={{borderRadius:'50%'}}>
        <Image className={classes.cvimg}
        src={CV2}
        width={350}
        height={350}
        alt="Picture of the author"
        />
      </Grid>
      <Grid item xs={12} sm={12} md={12} lg={12} className={classes.col0} >
        <FontAwesomeIcon className={classes.icons} style={{color:'#e34c26'}} icon={faHtml5} />
        <FontAwesomeIcon className={classes.icons} style={{color:'#264de4'}} icon={faCss3} />
        <FontAwesomeIcon className={classes.icons} style={{color: '#3C873A'}} icon={faNodeJs} />
        <FontAwesomeIcon className={classes.icons} style={{color: '#F0DB4F'}} icon={faJs} />
        <FontAwesomeIcon className={classes.icons} style={{color: '#61DBFB'}} icon={faReact} />
        <FontAwesomeIcon className={classes.icons} style={{color: '#F1502F'}} icon={faGitAlt} />
        <FontAwesomeIcon className={classes.icons} style={{color: '#FF9900'}} icon={faAws} />
        <FontAwesomeIcon className={classes.icons} style={{color: '#306998'}} icon={faPython} />
        <Image className={classes.icons} src={mongo} height={208} width={110}/>
        <Image className={classes.icons} src={vsc} height={208} width={110}/>
        <Image className={classes.icons} src={mysql} height={208} width={220}/>

      </Grid>



      <Grid item xs={11} sm={11} md={12} lg={12} className={classes.col0} sx={{margin: '3.5rem 0'}}>
      <Button variant="contained" size= 'large' style={{color:'gold'}} startIcon={<DownloadIcon />}><span><a href='/Javier_Prieto_CV_EN.pdf' download="JavierPC_CV_EN">Download my CV!</a></span></Button>
      

      </Grid>


      <Grid item xs={11} sm={11} md={6} lg={6} className={classes.col1}>
          <div className='text-div'>
          <h3 className={classes.h3}>Javier <span style={{color:'yellow'}}>Prieto</span></h3>
          <p className={classes.p}>Hello! My name is Javier and I am a 28-year-old Spanish guy natural from Córdoba, in the marvellous region of Andalusia.
          And before you ask: yes, I do like tapas a lot! <span></span><TapasIcon sx={{fontSize: '1.8rem',color:'brown',textAlign:'center'}}/></p> 
          <p className={classes.p}>I am living and working in The Netherlands since January 2022, for a new adventure!</p>
          <p className={classes.p}>I consider myself a self-taught amateur Software Engineer
            looking forward to entering the IT sector!
            I have always liked computing, but I never thought of making a living from it until now. How wrong have I been!</p>
          </div>
      </Grid>
      <Grid item xs={11} sm={11} md={6} lg={6} className={classes.col3}>
        <EmojiPeopleIcon sx={{fontSize: '10rem',color:'teal'}}></EmojiPeopleIcon>      
      </Grid>
        <Grid item xs={11} sm={11} md={6} lg={6} className={classes.col3}>
        <FlightIcon sx={{fontSize: '10rem',color:'yellow'}} className={classes.plane}></FlightIcon>      
      </Grid>
      
      <Grid item xs={11} sm={11} md={6} lg={6} className={classes.col2}>
      <div className='text-div'>
          <h3 className={classes.h3}>My <span style={{color:'yellow'}}>Story</span></h3>
          <p className={classes.p}>Currently I am living and working in The Netherlands, as a Technical Consultant at ASML, the number one High-Tech company devoted to the creation of machines
          for Chip-making creation.</p>
          <p className={classes.p}>Until March 2022 I worked as Technical Consultant in the aviation field. I developed Technical documentation for aircrafts, but trust me, I have my feets on the ground!</p>
          <p className={classes.p}> Although I work with a computer as a daily basis, you might think this has nothing to do with Web Developing...and you'd be right!</p>
          <p className={classes.p}>Anyway, I have always been learning programming and developing my own apps for University projects, but especially for
          personal projects. Some years ago, I realised I'd rather work on something I really like and started to enroll in many developing courses!</p>
          </div>
      </Grid>
      
      <Grid item xs={11} sm={11} md={6} lg={6} className={classes.col1}>
      <div className='text-div'>
          <h3 className={classes.h3}>IT <span style={{color:'yellow'}}>Formation</span> <SchoolIcon sx={{fontSize: '1.8rem',color:'black',textAlign:'center'}} /></h3>
          <ul>
            <li> <p className={classes.p}>Ultimate AWS Certified Solutions Architect Associate 2021 <span style={{textShadow:'none',color:'blue',float:'right'}}>   Ongoing</span></p></li>
            <li> <p className={classes.p}>The Ultimate MySQL Bootcamp: Go from SQL Beginner to Expert <span style={{textShadow:'none',color:'blue',float:'right'}}> 2021</span></p></li>
            <li> <p className={classes.p}>The Advanced Web Developer Bootcamp <span style={{textShadow:'none',color:'blue',float:'right'}}> 2021</span></p></li>
            <li><p className={classes.p}>The Modern React Bootcamp <span style={{textShadow:'none',color:'blue',float:'right'}}>   2021</span></p></li>
            <li> <p className={classes.p}>The Web Developer Bootcamp 2021<span style={{textShadow:'none',color:'blue',float:'right'}}>  2021</span></p></li>
            <li> <p className={classes.p}>Bootstrap 5 from Scratch <span style={{textShadow:'none',color:'blue',float:'right'}}>  2019</span></p></li>
            <li> <p className={classes.p}>Web Design: from Scratch to Advanced <span style={{textShadow:'none',color:'blue',float:'right'}}>  2019</span></p></li>
            <li> <p className={classes.p}>Deep Learning with Python and Keras <span style={{textShadow:'none',color:'blue',float:'right'}}>  2018</span></p></li>
            <li> <p className={classes.p}>Python for Data Science and Machine Learning Bootcamp <span style={{textShadow:'none',color:'blue',float:'right'}}>  2017</span></p></li>
          </ul>

          </div>
      
      </Grid>
      <Grid item xs={11} sm={11} md={6} lg={6} className={classes.col3}>
        <SchoolIcon sx={{fontSize: '10rem',color:'brown'}} className={classes.cap}></SchoolIcon>      
        </Grid>
        <Grid item xs={11} sm={11} md={6} lg={6} className={classes.col3}>
        <ComputerIcon sx={{fontSize: '10rem',color:'orchid'}} className={classes.pc}></ComputerIcon>      
        </Grid>      
        
        <Grid item xs={11} sm={11} md={6} lg={6} className={classes.col2}>
      <div className='text-div'>
          <h3 className={classes.h3}>E<span style={{color:'yellow'}}>ducation</span> <SchoolIcon sx={{fontSize: '1.8rem',color:'black',textAlign:'center'}} /></h3>
          <ul>
            <li><p className={classes.p}>Bsc in Civil Engineering - University of Granada (Spain) <span style={{textShadow:'none',color:'blue',float:'right'}}>2012-2017</span></p></li>
            <li> <p className={classes.p}>Bsc in Civil Engineering - Erasmus + Studies - Instituto Superior de Engenharia do Porto (Oporto, Portugal) -- <span style={{textShadow:'none',fontWeight:'bold',color:'teal', textShadow:'none'}}>Final Capstone: 'Forecast of water consumption through Neural Networks'</span><span style={{textShadow:'none',color:'blue',float:'right'}}>2016-2017</span></p></li>
            <li> <p className={classes.p}>Msc in Building Information Modeling Management in Civil Engineering, Infrastructures and Geographic Information Systems - Zigurat Global Institute of Technology (Spain) <span style={{textShadow:'none',color:'blue',float:'right'}}>2018-2019</span></p></li>
            <li> <p className={classes.p}>Vocational Training in Web Developing and Software Engineering (Spain) <span style={{textShadow:'none',color:'blue',float:'right'}}>Jan 2022 - present</span></p></li>
          </ul>
          
         
         
          </div>
      </Grid>
      
      <Grid item xs={11} sm={11} md={12} lg={12} className={classes.col0} style={{margin:'10px'}}>
      <div className='text-div'>
          <h3 className={classes.h3} >S<span style={{color:'red'}}>kills </span><ComputerIcon sx={{fontSize: '1.8rem',color:'black',textAlign:'center'}}/></h3>   
      </div>
      
      </Grid> 
        <Skills />
        {/* <Grid item xs={12} sm={10} md={6} lg={6} className={classes.col0}></Grid> */}
        <Grid item xs={11} sm={11} md={6} lg={6} className={classes.col1}>
          <div className='text-div'>
              <h3 className={classes.h3}>Work <span style={{color:'yellow'}}>Experience</span> <WorkIcon sx={{fontSize: '1.8rem',color:'black',textAlign:'center'}} /></h3>
              <p className={classes.p}>Technical Consultant at ASML / WEB Eindhoven<p style={{textShadow:'none',color:'blue'}}>   March 2022 - Present</p></p>
                <p className={classes.p}>Technical Consultant at ATEXIS Spain<p style={{textShadow:'none',color:'blue'}}>   March 2019 - Present</p></p>
                <p className={classes.p}>Technical Consultant at ATEXIS France<p style={{textShadow:'none',color:'blue'}}>   March 2019 - July 2019</p></p>
                <p className={classes.p}>GIS Technician Internship at Ferrovial Servicios (Madrid, Spain) <p style={{textShadow:'none',color:'blue'}}> June 2018 - December 2018</p></p>
         
            </div>
      
      </Grid>
      <Grid item xs={11} sm={11} md={6} lg={6} className={classes.col3}>
        <WorkIcon sx={{fontSize: '10rem',color:'tan'}}></WorkIcon>      </Grid>
        <Grid item xs={12} sm={10} md={6} lg={6} className={classes.col3}>
        <TranslateIcon sx={{fontSize: '10rem',color:'turquoise'}} className={classes.lan}></TranslateIcon>      </Grid>
      <Grid item xs={11} sm={11} md={6} lg={6} className={classes.col2}>
      <div className='text-div'>
          <h3 className={classes.h3}>L<span style={{color:'yellow'}}>anguages</span> <TranslateIcon sx={{fontSize: '1.8rem',color:'black',textAlign:'center'}} /></h3>
          <ul>
            <li><p className={classes.p}>Spanish <span style={{textShadow:'none',color:'brown',float:'right',margin:'0px 15px'}}>Native</span></p></li>
            <li><p className={classes.p}>English <span style={{textShadow:'none',color:'brown',float:'right',margin:'0px 15px'}}>C2 (certified)</span></p></li>
            <li><p className={classes.p}>Portuguese<span style={{textShadow:'none',color:'brown',float:'right',margin:'0px 15px'}}>C1 (certified)</span></p></li>
            <li><p className={classes.p}>French<span style={{textShadow:'none',color:'brown',float:'right',margin:'0px 15px'}}>B1/B2</span></p></li>
          </ul>
          
         
         
          </div>
      </Grid>
    </Grid>

    </>
    )


}
