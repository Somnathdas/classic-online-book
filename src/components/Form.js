import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import { Alert } from '@material-ui/lab';

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const Form = React.memo(props => {
  const classes = useStyles();
  const [selectedValue, setValue] = React.useState('Controlled');

  const [enteredTitle, setenteredTitle] = useState('');
  const [enteredAuther, setenteredAuther] = useState('');
  const [enteredQuantity, setenteredQuantity] = useState('');
  const [enteredDesc, setenteredDesc] = useState('');
  const [enteredAlert, setenteredAlert] = useState('');
  const submitHandler = event => {
    event.preventDefault();
    alert =null;
    props.onAddBook(
      {
        title: enteredTitle,
        descriptions: enteredDesc,
        count: enteredQuantity,
        auther: enteredAuther
      }
      
    );
    setenteredAlert(<Alert onClose={() => {setenteredAlert('')}}>Book has been successfully added</Alert>);
    setenteredTitle("");
    setenteredAuther("");
    setenteredQuantity("");
    setenteredDesc("");

  };

  const inputProps = {
    min:1,
    max:10,
    step: 1,
  };
  return (
    
    <Grid container spacing={1} >
        <CssBaseline />
        <div className={classes.paper}>
        <Typography component="h1" variant="h5" >
          Add Book
        </Typography>
        <form className={classes.form} onSubmit={submitHandler}>
          <Grid container spacing={2}>
          {enteredAlert}
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="title"
                label="Title"
                name="title"
                autoComplete="title"
                value={enteredTitle}
                onChange={event => {
                  setenteredTitle(event.target.value);
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="auther"
                label="Auther"
                name="auther"
                autoComplete="auther"
                value={enteredAuther}
                onChange={event => {
                  setenteredAuther(event.target.value);
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
              id="outlined-number"
              label="Number"
              type="number"
              variant="outlined"
              inputProps={inputProps}
              value={enteredQuantity}
              onChange={event => {
                  setenteredQuantity(event.target.value);
              }}
            />
            </Grid>
            <Grid item xs={12}>
              <TextField
              id="description"
              label="Multiline"
              fullWidth
              required
              multiline
              rows="4"
              defaultValue=""
              variant="outlined"
              value={enteredDesc}
              onChange={event => {
                  setenteredDesc(event.target.value);
              }}
              />
            </Grid>
            
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Add
          </Button>
        
        </form>
        </div>
      </Grid>
   
  );
});

export default Form;