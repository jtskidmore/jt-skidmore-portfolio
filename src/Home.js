import React from 'react'
import './App.css';
import { Grid, Cell } from 'react-mdl';

export default class Home extends React.Component {
    render() {
        return (
            <div style={{ width: "100%", margin: 'auto' }}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <div className="left-container">
                            <div className="banner-text">
                                <img id="homepage-logo" src="jt_logo.png" alt="logo" />
                                <h1>Web Developer</h1>
                                <hr />
                                <p>
                                    Javascript | React | Ruby | Ruby on Rails | HTML | CSS
                            </p>
                                <div className="social-links">

                                    {/* LinkedIn */}
                                    <a className="hvr-float-shadow" href="https://www.linkedin.com/in/johntoddskidmore/" rel="noopener noreferrer" target="_blank">
                                        <i className="fa fa-linkedin-square" aria-hidden="true" />
                                    </a>

                                    {/* Github */}
                                    <a className="hvr-float-shadow" href="https://www.linkedin.com/in/johntoddskidmore/" rel="noopener noreferrer" target="_blank">
                                        <i className="fa fa-github-square" aria-hidden="true" />
                                    </a>

                                    {/* Medium */}
                                    <a className="hvr-float-shadow" href="https://www.linkedin.com/in/johntoddskidmore/" rel="noopener noreferrer" target="_blank">
                                        <i className="fa fa-medium" aria-hidden="true" />
                                    </a>

                                </div>
                            </div>
                        </div>
                    </Cell>
                    <Cell>
                        <div className="graphic">
                            <div className="right-container">
                                <img id="homepage-graphic" src="graphic2.png" alt="logo" />
                            </div>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}