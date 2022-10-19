import React from 'react'
import clock from '../img/clock.svg';
import diaphragm from '../img/diaphragm.svg';
import money from '../img/money.svg';
import teamwork from '../img/teamwork.svg';
import home2 from '../img/home2.png';
const AboutServices = () => {
  return (
    <div className="services">
        <div className="description">
            <h2>High <span>quality</span> services.</h2>
            <div className="cards">
                <div className="card">
                    <div className="icon">
                        <img src={clock} alt="" />
                        </div>
                    <h3>Efficient</h3>
                    <p>Lorem ipsum dolor sit amet.</p>
                </div>
                <div className="card">
                    <div className="icon">
                        <img src={teamwork} alt="icon" />
                        </div>
                    <h3>Team Work</h3>
                    <p>Lorem ipsum dolor sit amet.</p>
                </div>
                <div className="card">
                    <div className="icon">
                        <img src={diaphragm} alt="icon" />
                        </div>
                    <h3>Diaphragm</h3>
                    <p>Lorem ipsum dolor sit amet.</p>
                </div>
                <div className="card">
                    <div className="icon">
                        <img src={money} alt="icon" />
                        </div>
                    <h3>Affordable</h3>
                    <p>Lorem ipsum dolor sit amet.</p>
                </div>
                </div>
            </div>
            <div className="image">
                <img src={home2} alt="icon" />
            </div>
    </div>
  )
}

export default AboutServices