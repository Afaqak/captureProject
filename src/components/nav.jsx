import React, { Fragment } from "react";
import styled from "styled-components";
import { Outlet,Link } from "react-router-dom";

const Nav = () => {
    return (
        <Fragment>
        <StyledNav>
        <h1 ><a id="logo" href="#">Capture</a></h1>
        <ul>
            <Link to="/"><li>1. About Us</li></Link>
            <Link to="/work"><li>2. Our Work</li></Link>
            <Link to="/contact"><li>3. Contact Us</li></Link>
        </ul>
        </StyledNav>
        <Outlet/>
        </Fragment>
    )
}

const StyledNav = styled.nav`
    min-height: 10vh;
    display: flex;
    margin: auto;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 10rem;
    background: #282828;
    position: sticky;
    top: 0;
    z-index: 10;
    a{
        color: white;
        text-decoration: none;
    }
    ul{
        display: flex;
        list-style: none;
    }
    #logo{
        font-size: 2.5rem;
        font-family: 'Lobster', cursive;
        font-weight: lighter;
    }
    li{
        padding-left: 10rem;
        position: relative;
    }

    @media (max-width: 1300px){
        flex-direction: column;
        padding: 0.2rem 1rem;
        
        #logo{
            display: inline-block;
            margin: 2rem;
        }
        ul{
            padding: 0.8rem;
            justify-content: space-around;
            width: 100%;
            li{
                padding: 0;
            margin: 0.9rem;

            }
        }
    }
`

export default Nav;