// import react and reactdom
import React from 'react';
import ReactDOM from 'react-dom';



// create a react component
const App = () => {
    return <div>Hi there!</div>;
};


// show react componet on the screen

ReactDOM.render(
    <App />, 
    document.querySelector('#root')
)