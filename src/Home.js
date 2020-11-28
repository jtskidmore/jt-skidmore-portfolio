import React from 'react'
import './App.css';
import { Grid, Cell } from 'react-mdl';

export default class Home extends React.Component {
    render () {
        return (
            <div style={{width: "100%", margin: 'auto'}}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        
                        <div className="banner-text">
                            <h1>Web Developer</h1>
                            <hr/>
                            <p>
                               Javascript | React | Ruby | Ruby on Rails | HTML | CSS 
                            </p>
                            <div className="social-links">

                                {/* LinkedIn */}
                                <a href="https://www.linkedin.com/in/johntoddskidmore/" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-linkedin-square" aria-hidden="true"/>
                                </a>

                                {/* Github */}
                                <a href="https://www.linkedin.com/in/johntoddskidmore/" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-github-square" aria-hidden="true"/>
                                </a>

                                {/* Medium */}
                                <a href="https://www.linkedin.com/in/johntoddskidmore/" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-medium" aria-hidden="true"/>
                                </a>

                            </div>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}