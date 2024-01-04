import { TextField, Typography,Button} from '@mui/material';
import React from 'react';


const Comment = () => {
    return (
        <div className='regs'>
        <h1>Restuarant Registration</h1><br/>
            <form>
            <TextField id="outlined-basic" label="Restuarant Name" variant="outlined" /><br/><br/>
            <TextField id="outlined-basic" label="Cuisine Type" variant="outlined" /><br/><br/>
            <TextField id="outlined-basic" label="Contact no:" variant="outlined" /><br/><br/>
            <TextField id="outlined-basic" label="Manager" variant="outlined" /><br/><br/>
            <TextField id="outlined-basic" label="Country" variant="outlined" /><br/><br/>
            <TextField id="outlined-basic" label="state" variant="outlined" /><br/><br/>
            <TextField id="outlined-basic" label="District" variant="outlined" /><br/><br/>
            <TextField id="outlined-basic" label="user id" variant="outlined" /><br/><br/>
            <Button variant="outlined">Register</Button>
            </form>
        </div>
    );
};

export default Comment;