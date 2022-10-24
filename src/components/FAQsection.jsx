import React from "react";
import styled from "styled-components";
import { About } from "./styles";
import Toggle from "./Toggle";
import { AnimateSharedLayout } from "framer-motion";
import { scrollReveal } from "../animation";
import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
const FAQSec = () => {
  const controls = useAnimation();
  const [element, view] = useInView({ threshold: 0.3 });
  if(view){
    controls.start("show");
  }
  else{
    controls.start("hidden");
  }
  return (
    <Faq variants={scrollReveal} ref={element} animate={controls} initial='hidden'>
      <h2>
        Any Questions <span>FAQ</span>
      </h2>
      <AnimateSharedLayout>
      <Toggle  title="How Do I Start?">
      <div className="question">
        <div className="answer">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni,
            corporis!
          </p>
        </div>
        </div>
      </Toggle>
      <Toggle title="Daily Schedule">
      <div className="question">
        <div className="answer">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni,
            corporis!
          </p>
        </div>
      
      </div>
      </Toggle>
      <Toggle title="Different Payment Methods">
      <div className="question">
        <div className="answer">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni,
            corporis!
          </p>
        </div>
 
      </div>
      </Toggle>
      <Toggle title="What Products do you offer.">
      <div className="question">
        <div className="answer">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni,
            corporis!
          </p>
        </div>
      </div>
      </Toggle>
      </AnimateSharedLayout>
    </Faq>
  );
};

// Styled Components
const Faq = styled(About)`
display: block;
span{
    display: block;
}

h2{
    padding-bottom: 2rem;
    font-weight: lighter;
}
h4{
    font-size: 2rem;
}
.faq-line{
    background: #cccccc;
    height: 0.2rem;
    margin: 2rem 0rem;
    width: 100%;
}
.question{
    padding: 3rem 0rem;
    cursor: pointer;
}
.answer{
    padding: 2rem 0rem;
    p{
        padding: 1rem 0rem;
    }
}

@media (max-width: 1300px){
    display: block;
    padding: 2rem 2rem;
    text-align: center;
    span{
        font-size: 2rem;
    }

}

`;

export default FAQSec;
