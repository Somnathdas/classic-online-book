
import * as actionTypes from '../Actions/actionTypes';


const initialState = {
    books:[{
    title: "Designing Applications with Spring Boot 2.2 and React JS",
    descriptions: "Designing Application with Spring Boot 2 & React JS is divided into three parts. The first part introduces you to the essentials of the Spring Boot 2.2 Framework and you will learn how to create REST APIs and how to secure REST APIs. Part 2 steps behind the front end application development with React JS and discuss React features and its advantages toward the front end application development. Part 3 expands on that by showing how to deploy backend and frontend application the PaaS platform and also will discuss how to deploy application container technologies such as Docker. TAGLINE Let us full stack development with Spring Boot and React JS. ",
    count: 5,
    auther: "Dinesh Rajput"
    }],
    purchased: null
    
};

const addBook = ( state, action ) => {
    console.log(state);
    return {
        ...state,
        books:[...state.books,action.payloadData]
    };
};
const fetchBook = (state, action) => {
    return state;
};

const bookReducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.ADD_BOOK: return addBook(state, action );
        case actionTypes.FETCH_BOOK: return fetchBook(state, action);
        default: return state;
    }
};

export default bookReducer;