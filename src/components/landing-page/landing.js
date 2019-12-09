import React from 'react';
import Search from '../search/search'
import { ReactComponent as Logo } from './svg/period_logo.svg'

class Landing extends React.Component {
  render () {
    return (
        <div className="container-circle">
            <div className="container-home">
                <div className="landing-text-1 home-container-padding-top">
                Free period products for people in Bristol who need them
                </div>
                <div className="text-wrapper">
                    <ul className="top-list custom-bullet-list">
                        <li>Pick up points all over the city</li>
                        <li>Donate products to help others</li>
                        <li>
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