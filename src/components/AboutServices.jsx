import React from 'react';
import clock from '../img/clock.svg';
import diaphragm from '../img/diaphragm.svg';
import money from '../img/money.svg';
import teamwork from '../img/teamwork.svg';
import home2 from '../img/home2.png';
import styled from 'styled-components';
import { useInView } from 'react-intersection-observer';
import { About, Description, Image } from '../components/styles';
import { useAnimation } from 'framer-motion';
import { fade } from '../animation';

const AboutServices = () => {
  const controls = useAnimation();
  const [element, view] = useInView({ threshold: 0.3 });
  if (view) {
    controls.start('show');
  } else {
    controls.start('hidden');
  }
  return (
    <Services
      animate={controls}
      variants={fade}
      ref={element}
    >
      <Description>
        <h2>
          High <span>quality</span> services.
        </h2>
        <Cards className='cards'>
          <Card>
            <div className='icon'>
              <img
                src={clock}
                alt=''
              />
              <h3>Efficient</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </Card>
          <Card>
            <div className='icon'>
              <img
                src={teamwork}
                alt='icon'
              />
              <h3>Team Work</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </Card>
          <Card>
            <div className='icon'>
              <img
                src={diaphragm}
                alt='icon'
              />
              <h3>Diaphragm</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </Card>
          <Card>
            <div className='icon'>
              <img
                src={money}
                alt='icon'
              />
              <h3>Affordable</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </Card>
        </Cards>
      </Description>
      <Image>
        <img
          src={home2}
          alt='icon'
        />
      </Image>
    </Services>
  );
};

// Styled Components
const Services = styled(About)`
  h2 {
    padding-bottom: 5rem;
  }
  p {
    width: 70%;
    padding: 2rem 0rem 4rem 0rem;
  }
`;

const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 2rem;
  @media (max-width: 1300px) {
    grid-template-columns: 1fr;
    align-items: center;
    justify-items: center;
    width: 100%;
  }
`;
const Card = styled.div`
  flex-basis: 20rem;
  .icon {
    display: flex;
    align-items: center;
  }

  h3 {
    margin-left: 1rem;
    background: white;
    color: black;
    padding: 1rem;
  }
`;
export default AboutServices;
