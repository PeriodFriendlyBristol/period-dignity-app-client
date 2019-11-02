import React from 'react';
import Search from '../search/search'
import human3 from '../../assets/humaaan_3.svg'
import greyCircle from '../../assets/circle_grey.svg'
import './landing.css'

class Landing extends React.Component {
  render () {
    return (
        <div className="container-landing">
            <div className="container-home">
                <div className="landing-text-1 padding-top-2">
                    Free menstrual products for people in Bristol
                </div>
            <div className="text-wrapper">
                {/* <ul>
                <li>Get free products when you need them</li>
                <li>Donate products to help others</li>
                </ul> */}
            </div>
            </div>
                <img src={human3} className="human3 padding-left-" />
            <div className="search-box-wrapper">
                <Search />
            </div>
        </div>
    )
  }
}

export default Landing;