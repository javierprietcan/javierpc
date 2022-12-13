import {Bar} from 'react-chartjs-2'
import { Grid } from '@mui/material'
import { makeStyles } from '@material-ui/styles';



export default function Skills() {

   

    const Alldata = {
        dataScience: {
            'Python': 85,
            'Pandas':95,
            'Numpy':90,
            'Keras (DL)':80,
            'Scikit learn':80,
            'Tensorflow':60
            
            },
        frontEnd: {
            'Javascript':85,
            'React': 90, 
            'Next.js': 95, 
            'HTML5': 95,
            'CSS': 85,
            'Material UI': 75,
            'Bootsrap': 90,
            'JSX': 95, 
            'Sass': 85,
            'Chart.js': 85
         
        } ,
        backEnd: {
          'PHP':95,
          'Node.js':65,
          'Axios': 95, 
          'Express': 80, 
          'MongoDB': 75,
          'Mongoose': 75,
          'Javascript': 85,
          'MySQL': 95
        },
        projects: {
          'Scrum':95,
          'Teams': 100, 
          'Slack': 95, 
          'GitHub': 75,
          'VS Code': 90
        }
    }
  
  const labels = []
  const field = []
  for (let area in Alldata){
    field.push(Alldata[area])
    }
  
    const skills = field.map(m=>{
      let skill =Object.keys(m)
      labels.push(skill)
    }
    )

  const values = []

    const value = field.map(n=>{
      let val = Object.values(n)
      values.push(val)
    })
    
    const useStyles = makeStyles({
     
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
        margin: '0 0 1.5rem 0'
        
      }})

    const classes = useStyles();


   

    const data1 = {
            labels:Object.keys(Alldata.dataScience),
            datasets: [
              {
              data: Object.values(Alldata.dataScience),
              fill: true,
              backgroundColor: 'rgba(255, 99, 132,0.75)',
              borderColor: 'rgb(255, 99, 132)',
              borderWidth: 3
            }]}
    const data2 = {
            labels:Object.keys(Alldata.frontEnd),
            datasets:[
            {
                
                labels: Object.keys(Alldata.frontEnd),
                label: "Frontend",
                fill: true,
                data:Object.values(Alldata.frontEnd),
                backgroundColor: 'rgba(255, 159, 64, 0.75)',
                borderColor: 'rgb(255, 159, 64)',
                borderWidth: 3

    
            }]}
    const data3 = {
      labels:Object.keys(Alldata.backEnd),
      datasets:[
            {
              labels: Object.keys(Alldata.backEnd),
                label: "Backend",
                fill: false,
                data:Object.values(Alldata.backEnd),
                backgroundColor: 'rgba(255, 205, 86, 0.75)',
                borderColor:  'rgb(255, 205, 86)',
                borderWidth: 3
                

            }]}
    const data4 = {
      labels:Object.keys(Alldata.projects),
      datasets:[
            {                
                labels: Object.keys(Alldata.projects),
                label: "Projects",
                fill: false,
                data:Object.values(Alldata.projects),
                backgroundColor: 'rgba(75, 192, 192, 0.75)',
                borderColor:'rgb(75, 192, 192)',
                borderWidth: 3
                
            }

        ]
        
      }

      const options = {
        indexAxis: 'y',
        plugins:{
          legend:{
            display:false
          }
        },
        fontColor: 'white',
        responsive: true,
        legend:{
          labels:{
            fontColor: 'white'
          }
        },  
        scales:{
          y:{
            grid:{
              display:false,
              offset: true,
              
            },
            ticks: {
              beginAtZero:true,
              max : 100,
            }
          },  
        },

        tooltips: {
          enabled: true,
        },
       
      }
  
    return (

       <>
        <Grid item xs={11} sm={10} md={6} lg={5} className={classes.col0}>
        <h3>Frontend Skills</h3>
         <Bar 
          data={data2}
          options={options}
        />
        </Grid>
        <Grid item xs={11} sm={10} md={6} lg={5} className={classes.col0}>
        <h3>Backend Skills</h3>
         <Bar 
          data={data3}
          options={options}
        />
        </Grid>
        <Grid item xs={11} sm={10} md={6} lg={5} className={classes.col0}>
        <h3>Project Skills</h3>
         <Bar 
          data={data4}
          options={options}
        />
        </Grid>
        <Grid item xs={11} sm={10} md={6} lg={5} className={classes.col0}>
        <h3>Data Science Skills</h3>
        <Bar 
          data={data1}
          options={options}
          
        />

        </Grid>
      </>
    )  
     
  }

 
  

