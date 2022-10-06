import styled from "styled-components";

function App() {
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
      <Body>
        <BodyLeft>
          <h1>
            Discover amazing <br /> art around the <span>world</span>{" "}
          </h1>
          <TextContent>
            <p>
              Browse a curated selection of art around the world, including
              museum exhibitions, gallery openings, upcoming and many more
            </p>
          </TextContent>

          <ExploreArtsContent>
            <ExploreTop>Explore Arts</ExploreTop>
            <ExploreBottom>Hello</ExploreBottom>
          </ExploreArtsContent>
        </BodyLeft>

        <BodyRight>
          <SpiralBottom>
            <img src="/assets/spiral-bottom.png" alt="spiral" />
          </SpiralBottom>
        </BodyRight>
        
      </Body>
    </Container>
  );
}

export default App;

const Container = styled.div`
  color: white;
`;

const Body = styled.div`
  display: flex;
  justify-content: space-around;
`;

const SpiralBottom = styled.div`
  
`;

const BodyRight = styled.div`
  
`;

const BodyLeft = styled.div`
  h1 {
    font-weight: 700;
    font-size: 68px;
    color: #ffffff;
  }

  span {
    color: #fbaf00;
  }
`;

const TextContent = styled.div`
  width: 45%;
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


const ExploreArtsContent = styled.div`
  cursor: pointer;
  padding: 20px 10px;
  width:15%;
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
