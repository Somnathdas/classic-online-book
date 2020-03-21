import React, { useState, useEffect, useCallback, useRef} from 'react';
import { connect } from 'react-redux';
import List from '../components/List';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { useDispatch, useSelector } from "react-redux";


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
  
export const BooksContainer = () => {
   
    const books = useSelector(state => state.onlineBook.books);
    const [displayBook, setdisplayBook] = useState([]);
    const [enteredFilter, setEnteredFilter] = useState('');

    const inputRef = useRef();
  
    const filterValue = (event) =>{
      setEnteredFilter(event.target.value);
      const result = displayBook.filter(book => book.title == inputRef.current.value);
      setdisplayBook(result);
    }
   

     
    useEffect(() => {
      console.log('render books', books);
      setdisplayBook(books);
    }, [books]);

    const classes = useStyles();
        return (
        <Grid container spacing={1} >
        <CssBaseline />
        <div className={classes.paper}>
        
        
          <Grid container spacing={2}>
            
            
            <Grid item xs={12}>
            <TextField
            variant="outlined"
            fullWidth
            label="Enter your book title"
            ref={inputRef}
            type="text"
            value={enteredFilter}
            onChange={event => 
              {
              setEnteredFilter(event.target.value);
              const result = displayBook.filter(book => book.title == event.target.value);
              setdisplayBook(result);
              }

            }
            />
            </Grid>
            
            <List listOfBooks={displayBook}/>
            <br/>
          </Grid>
          
        
        
        </div>
      </Grid>
            
        );
    
}

export default BooksContainer;