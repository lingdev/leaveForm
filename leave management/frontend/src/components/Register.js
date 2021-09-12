import {React ,useState }from 'react'
import { Grid,Paper, Avatar, TextField, Button, } from '@material-ui/core'
import EventNoteIcon from '@material-ui/icons/EventNote';
import { Link } from "react-router-dom";


const Register=()=>{
    const [userName, setuserName] = useState('')
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')




    const paperStyle={padding :20,height:'70vh',width:280, margin:"20px auto"}
    const avatarStyle={backgroundColor:'#1bbd7e'}
    const btnstyle={margin:'8px 0'}
   const loginDetail = async () => {

       alert("dsdsd")

        if (email !== "" && password !== "") {

            const payload = {userName, email, password };
            console.log(payload,"llll");
            const uri = `http://localhost:1337/api/register`
            const headers = {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            };

            let options = {
                method: 'POST',
                headers,
                body: JSON.stringify(payload),
            };
            

            const response = await fetch(uri, options);
            console.log(response,"kkkk");
            const status = response.status;
            const data = await response.json();
            console.log(data,"ppp");
            if (status === 200) {
            }

        }
     


    };
 

    return(

        
        <Grid>
            <Paper elevation={10} style={paperStyle}>
                <Grid align='center'>
                     <Avatar style={avatarStyle}><EventNoteIcon/></Avatar>
                    <h2>Leave Request</h2>
                </Grid>
                <TextField label='Username' placeholder='Enter username' fullWidth required 
                onChange={(event) =>setuserName(event.target.value)}/>
                 
                <TextField label='email' placeholder='Enter Rule' fullWidth required  
                onChange={(event) => setemail(event.target.value)}
                
/>

                <TextField label='Password' placeholder='Enter password' type='password' fullWidth required
                                onChange={(event) => setpassword(event.target.value)}
                                />

          
                <Link to="/Form" ><Button type='submit' 
                 onClick={loginDetail}
                 color='primary' variant="contained" style={btnstyle} >Sign in</Button> </Link>
           
            </Paper>
        </Grid>
    )
}

export default Register