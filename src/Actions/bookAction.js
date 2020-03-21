import * as actionTypes from './actionTypes';


export const addBook = ( formData ) => {
    return {
        type: actionTypes.ADD_BOOK,
        payloadData: formData
    };
};

export const fetchBook = (  ) => {
    return {
        type: actionTypes.FETCH_BOOK
    };
};