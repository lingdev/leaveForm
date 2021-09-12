import { React, useEffect, useState } from 'react'
import { Grid, Paper, Avatar, Button } from '@material-ui/core'
import SpeakerNotesIcon from '@material-ui/icons/SpeakerNotes';
const Management = () => {

    const paperStyle = { padding: 100, height: '90vh', width: 590, margin: "300px auto" }
    const avatarStyle = { backgroundColor: '#1bbd7e' }
    const btnstyle = { margin: '10px 0' }
    const [leavedata, setleavedata] = useState('')
    useEffect(() => {
        leave()

    })

    const leave = async () => {



        const uri = `http://localhost:1337/api/leave-data`
        const headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        };

        let options = {
            method: 'GET',
            headers,
        };


        const response = await fetch(uri, options);
        console.log(response, "kkkk");
        const status = response.status;
        const data = await response.json();
        console.log(data, "ppp");
        if (status === 200) {
            setleavedata(data)
        }





    };


    const Manage = async () => {



        const payload = { userid: 1 };
        console.log(payload, "llll");
        const uri = `http://localhost:1337/api/approve`
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
        console.log(response, "kkkk");
        const status = response.status;
        const data = await response.json();
        console.log(data, "ppp");
        if (status === 200) {
        }





    };
    return (

        <Grid>
            <Paper elevation={10} style={paperStyle}>
                <Grid align='center'>
                    <Avatar style={avatarStyle}><SpeakerNotesIcon /></Avatar>
                    <h2>Leave Request</h2>
                    {leavedata.length > 0 &&
                        <div>
                            {leavedata.map((e) => (
                                <table><th><tr>From Date:<td>{e.fromDate}</td></tr></th>
                                    <th><tr>To Date:<td>{e.toDate}</td></tr></th>
                                    <tr> <th> Reason:</th><td> {e.reason}</td></tr>
                                </table>
                            )
                            )}<br></br></div>
                    }



                </Grid>



                <Button type='submit' color='primary' variant="contained" style={btnstyle} fullWidthonClick={() => this.props.history.replace('/Register')}>Approved</Button>

            </Paper>
        </Grid>
    )
}

export default Management