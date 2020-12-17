import React from "react";
import './App.css';

export default class Card extends React.Component {
    render() {
        return (
            <div className="card">
                <img className="card-img-top" src={this.props.project.picture} alt="Card cap"/>
                    <div className="card-body">
                        <h5 className="card-title">{this.props.project.title}</h5>
                        <p className="card-text">{this.props.project.description}</p>
                        <a href="#" className="btn btn-primary">GitHub Repo</a>
                        <a href="#" className="btn btn-primary">Demo</a>
                    </div>
            </div>
                )
    }
}