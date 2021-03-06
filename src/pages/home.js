import React, {Component} from "react";
import Navbar from "../components/nav";
import Footer from "../components/footer";
import Helmet from "react-helmet";
import styled from "styled-components";
import Logo from "../images/logo.png";

const HomePage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 70%;
  width: 100%;
  position: fixed;
`

const HomeLogo = styled.img`
  margin-bottom: 1rem;
  border-radius: 65%;
  @media screen and (max-width: 768px) {
    height: 100px;
  }
`

const Title = styled.h1`
  color: #fff;
  @media screen and (max-width: 768px) {
    font-size: 25px;
  }
`

const Description = styled.h3`
  color: #fff;
  text-align: center;
  @media screen and (max-width: 768px) {
    font-size: 15px;
  }
`

class Home extends Component {

    render() {

        return (
            <div>
                <Helmet>
                    <title> DanBot Hosting | Home </title>
                </Helmet>
                <Navbar/>

                <HomePage>

                    <HomeLogo draggable={false} src={Logo}/>
                    <Title> DanBot Hosting </Title>
                    <Description> Free, but fast & reliable hosting; at your fingertips. <br/> You can Host Bots,
                        Websites, Game-servers and much more! </Description>

                </HomePage>

                <Footer/>
            </div>
        );
    }
}

export default Home;