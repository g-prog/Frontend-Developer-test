import { useEffect } from "react";
import React from "react";
import styled from "styled-components";
import Logo from "./Icons/Logo";

export default function Header({
  menuOpen,
  setMenuOpen,
  screenWidth,
  setscreenWidth,
}) {
  useEffect(() => {
    const changeWidth = () => {
      setscreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", changeWidth);

    return () => {
      window.removeEventListener("resize", changeWidth);
    };
  }, []);

  const toggleDiv = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <Container>
      <Nav>
        <LeftNav>
          <ImageContainer>
            <Logo />
            {/* <img src="/assets/logo.png" alt="logo" /> */}
          </ImageContainer>
        </LeftNav>

        <HamburgerDiv onClick={toggleDiv}>
          <img src="/assets/hamburger.png" alt="hamburger" />
        </HamburgerDiv>
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
        {screenWidth <= 900 && (
          <>
            {menuOpen && (
              <MobileNav>
                <CloseDiv onClick={toggleDiv}>
                  <ImageWrapper>
                    {" "}
                    <img src="/assets/close.png" alt="close-icon" />
                  </ImageWrapper>
                </CloseDiv>
                <NavContent>
                  <ul>
                    <li>Events</li>
                    <li>Museum</li>
                    <li>Arts</li>
                    <li>Galleries</li>
                  </ul>
                  {/* <ButtonDiv>
                    <LoginButton>
                      <Topstack>Login</Topstack>
                      <BottomStack>hello</BottomStack>
                    </LoginButton>

                    <ExploreArts>
                      <ExploreTop>Explore Arts</ExploreTop>
                      <ExploreBottom>Hello</ExploreBottom>
                    </ExploreArts>
                  </ButtonDiv> */}
                </NavContent>
              </MobileNav>
            )}
          </>
        )}
      </Nav>
    </Container>
  );
}

const Container = styled.div`
  color: white;

  @media (max-width: 600px) {
    position: relative;
  }
`;

const HamburgerDiv = styled.div`
  display: none;

  @media (max-width: 900px) {
    display: flex;
  }
  img {
    width: 50px;
    height: 50px;
  }
`;

const CloseDiv = styled.div`
  display: none;

  @media (max-width: 900px) {
    display: flex;
    justify-content: flex-end;
    width: 180px;
    padding: 10px 5px;
  }
  img {
    width: 10px;
    height: 10px;
  }
`;

const MobileNav = styled.div`
  display: none;

  @media (max-width: 900px) {
    display: flex;
    flex-direction: column;
    gap: 20px;
    /* align-items: center;
    justify-content: center; */
    background: #fbaf00;
    position: absolute;
    top: 54px;
    height: 120em;
    z-index: 20;
    width: 200px;
    border-radius: 5px;
    right: 0;
  }
`;

const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 30px;

  @media (max-width: 600px) {
    padding: 10px;
  }
`;

const LeftNav = styled.div``;

const ImageWrapper = styled.div``;

const NavContent = styled.div`
  padding: 70px;
  padding-left: 30px;

  ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 90px;
    cursor: pointer;
  }

  li {
    list-style-type: none;
    font-weight: 600;
    font-size: 16px;
    color: #ffffff;
  }
`;

const ButtonDiv = styled.div`
  display: flex;
  gap: 20px;

  @media (max-width: 900px) {
    display: none;
  }
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
  height: 20px;
  padding: 20px 60px;
  margin-top: 8px;
`;

const ExploreTop = styled.div`
  background: white;
  border: 1px solid #fbaf00;
  border-radius: 0px 30px;
  z-index: 10;
  padding: 20px 30px;
  color: #251a00;
  position: absolute;
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
  margin-top: 8px;
  padding: 20px 64px;
  height: 15px;
  /* width:35px; */
`;

const RightNav = styled.div`
  display: flex;
  gap: 30px;

  @media (max-width: 768px) {
    display: none;
  }

  ul {
    display: flex;
    gap: 60px;
    cursor: pointer;
    @media (max-width: 600px) {
      display: none;
    }
  }

  li {
    list-style-type: none;
    font-weight: 600;
    font-size: 16px;
    color: #ffffff;
  }
`;

const ImageContainer = styled.div`
  @media (max-width: 600px) {
    margin-top: 8px;
  }
`;
