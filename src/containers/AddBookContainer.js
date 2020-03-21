import React from 'react';
import Form from '../components/Form';
import * as bookAction from '../Actions/bookAction';
import { useDispatch } from "react-redux";

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