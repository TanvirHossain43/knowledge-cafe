import React from 'react';
import './QuestionAnswer.css'

const QuestionAnswer = () => {
    return (
        <div className='question-section'>
            <h3>Difference between Props and  state?</h3>
            <p>Generally Props and state used for storing data .Although it has some differce like props are immutable and state is mutale.Props are used to pass data from parent to child components.whereas state is managed within the components it is declared in.</p>

            <h3>How does useState work?</h3>
            <p> useState is used to store and update the component's state. It takes a single argument which is the initial state, and returns an array containing the current state and a function that can be used to update it.</p>

            <h3>What is the Purpose of useEffect other than fetching data?</h3>
            <p>useEffect can be used for a variety of tasks such as setting up  timers, and event handlers. It can also be used to perform side effects, such as updating the DOM or making API calls.</p>

            <h3>How Does React work?</h3>
            <p>React works by rendering components in an efficient and declarative manner. It uses a virtual DOM to keep track of changes, and re-renders components whenever the state of the application changes. The virtual DOM is a JavaScript representation of the actual DOM, and it allows React to make updates to the UI in an efficient way.</p>
        </div>
    );
};

export default QuestionAnswer;