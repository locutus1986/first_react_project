// import react and reactdom
import React from 'react';
import ReactDOM from 'react-dom';


// create a react component
const App = () => {
    const buttonText = 'click me';
    return( 
        <div>
            <label className="label" htmlFor="name">Enter Name: </label>
            <input id="name" type="text" />
            <button style={{ backgroundColor: 'blue', color: 'white' }}>{buttonText}</button>
        </div>
    );
};


// show react componet on the screen

ReactDOM.render(
    <App />, 
    document.querySelector('#root')
)