import React from 'react'
import './App.css';

export default class Contact extends React.Component {
    render () {
        return (
            <div className="contact-container">
                <h1>This is the contact page</h1>
                <ul>
                    <a href="https://github.com/jtskidmore"><li>Github</li></a>
                    <a href="https://www.linkedin.com/in/johntoddskidmore/"><li>LinkedIn</li></a>
                    <a href="https://johntoddskidmore.medium.com/"><li>Medium</li></a>
                    <li>johntoddskidmore@gmail.com</li>
                </ul>
            </div>
        )
    }
}