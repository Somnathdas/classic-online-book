import React, { Component } from 'react';
import { connect } from 'react-redux';
import Form from '../components/Form';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import * as bookAction from '../Actions/bookAction';
import { useDispatch, useSelector } from "react-redux";

export const BooksContainer = () => {
   

    const dispatch = useDispatch();

    const addBookHandler = book => {
        dispatch(bookAction.addBook(book));
    };

        return (
            <div>
            <Form onAddBook={addBookHandler}/>
            </div>
        );
     
}




export default BooksContainer;