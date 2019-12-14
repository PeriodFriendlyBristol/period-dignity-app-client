import React from 'react';
import Search from '../search/search'
import { ReactComponent as Logo } from './svg/period_logo.svg'

class Landing extends React.Component {
  render () {
    return (
        <div>
            <div className="container-circle container-height row">
                <div className="landing-title row">
                    <h1>Free period products for people in Bristol who need them</h1>
                </div>
                <div className="invisible column"></div>
                <div className="text-wrapper column">
                    <ul className="top-list landing-bullet-list">
                        <li>Pick up points all over the city</li>
                        <li className="landing-list">Donate products to help others</li>
                        <li className="no-bullet">
                            <Logo className="logo" />
                        </li>
                    </ul>
                </div>
            </div>
                <Search />
        </div>
    )
  }
}

export default Landing;
