import React from "react";
import styled from "styled-components";

export default function Header() {
  return (
    <Container>
      <Nav>
        <LeftNav>
          <ImageContainer>
            <img src="/assets/logo.png" alt="logo" />
          </ImageContainer>
        </LeftNav>
        <RightNav>
          <ul>
            <li>Events</li>
            <li>Museum</li>
            <li>Arts</li>
            <li>Galleries</li>
          </ul>
          <ButtonDiv>
            <LoginButton>
              <Topstack>Login</Topstack>
              <BottomStack>hello</BottomStack>
            </LoginButton>

            <ExploreArts>
              <ExploreTop>Explore Arts</ExploreTop>
              <ExploreBottom>Hello</ExploreBottom>
            </ExploreArts>
          </ButtonDiv>
        </RightNav>
      </Nav>
    </Container>
  );
}

const Container = styled.div`
  color: white;
`;

const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 30px 20px;
`;

const LeftNav = styled.div``;

const ButtonDiv = styled.div`
  display: flex;
  gap: 20px;
`;

const LoginButton = styled.div`
  cursor: pointer;
`;

const ExploreArts = styled.div`
  cursor: pointer;
`;

const ExploreBottom = styled.div`
  background: #fbaf00;
  border-radius: 0px 30px;
  z-index: 0;
  height: 27px;
  padding: 20px 60px;
`;

const ExploreTop = styled.div`
  background: white;
  border: 1px solid #fbaf00;
  border-radius: 0px 30px;
  z-index: 10;
  padding: 20px 30px;
  color: #251a00;
  position: absolute;
  /* height: 20px; */
`;



const Topstack = styled.div`
  background: #fbaf00;
  border-radius: 0px 30px;
  z-index: 10;
  position: absolute;
  padding: 20px 60px;
`;

const BottomStack = styled.div`
  background: white;
  border: 1px solid #fbaf00;
  border-radius: 0px 30px;
  z-index: 0;
  padding: 20px 64px;
  height: 25px;
  /* width:35px; */
`;

const RightNav = styled.div`
  display: flex;
  gap: 30px;

  ul {
    display: flex;
    gap: 60px;
    cursor: pointer;
  }

  li {
    list-style-type: none;
    font-weight: 600;
    font-size: 16px;
    color: #ffffff;
  }
`;

const ImageContainer = styled.div``;
