import React from 'react'
import './App.css';
import Card from './Card.js';

export default class Projects extends React.Component {
    render() {
        return (
            <div className="outer-container">
                <div className="card-container">
                    <Card project={this.props.projects[0]}></Card>
                    <Card project={this.props.projects[1]}></Card>
                    <Card project={this.props.projects[2]}></Card>
                </div>
            </div>
        )
    }
}