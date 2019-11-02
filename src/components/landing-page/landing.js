import React from 'react';
import SearchComponent from '../../SearchComponent'
import human3 from '../../assets/humaaan_3.svg'
import greyCircle from '../../assets/circle_grey.svg'

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
            <img src={greyCircle} className="circle" />
            </div>
                <img src={human3} className="human3 padding-left-" />
            <div className="search-box-wrapper">
                <SearchComponent />
            </div>
        </div>
    )
  }
}

export default Landing;