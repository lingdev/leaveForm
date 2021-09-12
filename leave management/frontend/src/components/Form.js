import React, { useState } from "react";
import { Grid, Paper, Avatar, TextField, Button,  } from '@material-ui/core'
import ListAltIcon from '@material-ui/icons/ListAlt';
import "react-datepicker/dist/react-datepicker.css";
import history from './history';

const Form = () => {

    const [fromDate, setfromDate] = useState('')
    const [toDate, settodate] = useState('')
    const [reason, setreason] = useState('')




    const paperStyle = { padding: 20, height: '70vh', width: 280, margin: "20px auto" }
    const avatarStyle = { backgroundColor: '#1bbd7e' }
    const btnstyle = { margin: '8px 0' }

    const leave = async () => {


        alert("Request Send")


 

            const payload = {userId:1,fromDate, toDate,reason };
            
            console.log(payload,"llll");
            const uri = `http://localhost:1337/api/leave`
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
                // history.push('/Form')
                // window.location.reload();
            }

        
    }


    return (
        <Grid>
            <Paper elevation={10} style={paperStyle}>
                <Grid align='center'>
                    <Avatar style={avatarStyle}><ListAltIcon /></Avatar>
                    <h2>leave Form</h2>
                </Grid>
                
                <form >

                    <TextField
                        id="date"
                        label="From"
                        type="date"
                        defaultValue="2017-05-24"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        onChange={(event) =>setfromDate(event.target.value)} />
                </form>
                <form >
                    <TextField
                        id="date"
                        label="To"
                        type="date"
                        defaultValue="2017-05-24"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        onChange={(event) =>settodate(event.target.value)} />
                </form>
                <TextField label='Reason For Leave' placeholder='Enter username' fullWidth required
                onChange={(event) =>setreason(event.target.value)} />






                <Button type='submit' 
                onClick={leave}
                color='primary' variant="contained" style={btnstyle} fullWidth>Send Request</Button>

            </Paper>
        </Grid>
    )
}

export default Form