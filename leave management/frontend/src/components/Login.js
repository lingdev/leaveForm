import {React ,useState }from 'react'
import { Grid,Paper, Avatar, TextField, Button, } from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { Link } from "react-router-dom";
import history from './history';


const Login=()=>{
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')

    const paperStyle={padding :20,height:'70vh',width:280, margin:"20px auto"}
    const avatarStyle={backgroundColor:'#1bbd7e'}
    const btnstyle={margin:'8px 0'}
    const submit = async () => {

 
         if (email !== "" && password !== "") {
 
             const payload = {email, password };
             console.log(payload,"llll");
             const uri = `http://localhost:1337/api/login`
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

                 console.log("hhhhhhhhhhhh");
                 if(data.role==='user') {
                    history.push('/Form')
               window.location.reload();


                 }
                 else{
                    history.push('/Management')
                    window.location.reload();



                 }

             }
 
         }
      
 
 
     };    return(
        <Grid>
            <Paper elevation={10} style={paperStyle}>
                <Grid align='center'>
                     <Avatar style={avatarStyle}><LockOutlinedIcon/></Avatar>
                    <h2>Sign In</h2>
                </Grid>
                <TextField label='Email' placeholder='Enter username' fullWidth required
                 onChange={(event) =>setemail(event.target.value)}/>
                <TextField label='Password' placeholder='Enter password' fullWidth required
                 onChange={(event) =>setpassword(event.target.value)}/>

              


                
               <Button type='submit'
               onClick={submit}
               color='primary' variant="contained" style={btnstyle} >Sign in</Button> 
         
            </Paper>
        </Grid>
    )
}

export default Login