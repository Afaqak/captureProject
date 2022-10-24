import React from 'react'
import styled from 'styled-components'
import {MovieState} from '../movieState';
import { useState } from 'react';
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { pageAnimation } from '../animation';
const Moviedetail = () => {
    const url=window.location.pathname;
    const [movies, _] = useState(MovieState);
    const [movie, setMovie] = useState(null);

    useEffect(()=>{
        const currentMovie=movies.filter((stateMovie)=>stateMovie.url===url);
        setMovie(currentMovie[0]);
    },[movies,url]);
 
  return (
    <Detail  
    exit='exit'
    variants={pageAnimation}
    initial='hidden'
    animate='show'>
    
       <Headline>
             {movie && (
                    <>
                        <h2>{movie.title}</h2>
                        <img src={movie.mainImg} alt={movie.title}/>
                    </>
             )}
       </Headline>
         <Awards>
                {movie && movie.awards.map((award)=>(
                    <Award key={award.title} title={award.title} description={award.description}/>
                ))}
            </Awards>
            <ImageDisplay>
                {movie && <img src={movie.secondaryImg} alt="secondary" />}
            </ImageDisplay>
    </Detail>
  )
}

const Detail = styled(motion.div)`
    color: white;
`

const Headline = styled.div`
    min-height: 90vh;
    padding-top: 20vh;
    position: relative;

    h2{
        position: absolute;
        top: 10%;
        left: 50%;
        transform: translate(-50%,-10%);
    }

    img{
        width: 100%;
        height: 70vh;
        object-fit: cover;
    }

    @media (max-width: 1300px){
        img{
            height: 60vh;

        }

    }

    `

const Awards = styled.div`
    min-height: 80vh;
    display: flex;
    margin: 3rem 7rem;
    align-items: center;
    justify-content: space-around;
    
    @media (max-width: 1300px){
        display: block;
        margin: 2rem 2rem;
        
    }
    
    `
const AwardStyle = styled.div`
    padding: 5rem;
    h3{
        font-size: 2rem;
    }
    .line{
        width: 100%;
        background: #23d997;
        height: 0.5rem;
        margin: 1rem 0rem;
    }
    p{
        padding: 2rem 0rem;
    }
    `

const Award=({title,description})=>{
    return (
        <AwardStyle>
            <h3>{title}</h3>
            <div className="line"></div>
            <p>{description}</p>
        </AwardStyle>
    )
}

const ImageDisplay = styled.div`
    min-height: 50vh;
    img{
        width: 100%;
        height: 100vh;
        object-fit: cover;
    }`
export default Moviedetail