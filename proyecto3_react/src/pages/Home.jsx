import React from 'react'
import styled from 'styled-components';
import { Carousel } from '../components/Carousel';
import { CarouselItem } from '../components/CarouselItem';
import { LandingOption } from '../components/LandingOption';
import {GiFlexibleStar} from 'react-icons/gi';
import { Link } from 'react-router-dom';
import {Header} from '../components/Header';
import { AppContext } from "../context/AppContext";
const Title = styled.h1`
  font-size:2.2rem;

`
const CarouselContainer = styled.div`
  display:flex;
  flex-direction:column;
  gap:1.5rem;
  align-items:center;

`
const Options = styled.div`
  display:flex;
  flex-direction:column;
  gap:1.5rem;

`

const Home = () => {
  const { setPageTitle} = React.useContext(AppContext);

  const changeNamePage = (newName)=>{
    setPageTitle(newName)

  }
  return (
    <>
    <Header></Header>
    <CarouselContainer>
      <Title>Newest Pairs</Title>
      <Carousel>
        <CarouselItem></CarouselItem>
        <CarouselItem></CarouselItem>
        <CarouselItem></CarouselItem>
        <CarouselItem></CarouselItem>
      </Carousel>
    </CarouselContainer>

    <Options>
      <Link to="/items" onClick = {() => changeNamePage("Most Exclusive")}>
        <LandingOption title = "Most Exclusive">
          <GiFlexibleStar className ="landing-icon"></GiFlexibleStar>
        </LandingOption>
      </Link>
      <Link to="/items"  onClick = {() => changeNamePage("Jordan")}>
        <LandingOption title = "Jordan">
          <GiFlexibleStar className ="landing-icon"></GiFlexibleStar>
        </LandingOption>
      </Link>
      <Link to="/items"  onClick = {() => changeNamePage("Air Force")}>
        <LandingOption title = "Air Force">
          <GiFlexibleStar className ="landing-icon"></GiFlexibleStar>
        </LandingOption>
      </Link>
      <Link to="/items"  onClick = {() => changeNamePage("Jeezy")}>
        <LandingOption title = "Jeezy">
          <GiFlexibleStar className ="landing-icon"></GiFlexibleStar>
        </LandingOption>
      </Link>

    </Options>
  </>
  )
}

export{Home}