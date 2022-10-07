import styled from "styled-components";
import Header from "./components/Header";
import Star from "./components/Icons/Star";
import SpiralLogo from "./components/Icons/SpiralLogo";

function App() {
  return (
    <Container>
      <Header />
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
          <StackContainer>
            <BackgroundDiv></BackgroundDiv>
            <GreekImage>
              <img src="/assets/greek.png" alt="greek man" />
            </GreekImage>
            <SpiralLogoDiv>
              <SpiralLogo />
            </SpiralLogoDiv>
          </StackContainer>
        </BodyRight>

        <StarDiv>
          <StarDiv>
            <Star />
          </StarDiv>
        </StarDiv>
      </Body>
    </Container>
  );
}

export default App;

const Container = styled.div`
  color: white;
`;

const StackContainer = styled.div`
  position: absolute;
  top: 5%;
  left: 60%;
`;

const Body = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 10px 40px;
  position: relative;
`;

const BackgroundDiv = styled.div`
  background: #fbaf00;
  border-radius: 20px 200px;
  width: 420px;
  height: 570px;
  padding: 20px 30px;
  z-index: 0;
  margin-top: 20px;
`;

const SpiralLogoDiv = styled.div`
  position: absolute;
  z-index: 30;
  top: 20px;
  left: -60px;
`;

const StarDiv = styled.div`
  position: absolute;
  top: 50%;
  left: 38%;
`;

const SpiralBottom = styled.div`
  img {
    width: 450px;
    height: 800px;
  }
`;

const GreekImage = styled.div`
  position: absolute;
  z-index: 10;
  top: 0;
  width: 100%;
  height: 100%;
  img {
    width: 450px;
    height: 600px;
    border-radius: 20px 200px;
  }
`;

const BodyRight = styled.div`
  padding: 100px;
  height: 100%;
`;

const BodyLeft = styled.div`
  padding: 30px 0px;

  h1 {
    font-weight: 700;
    font-size: 60px;
    color: #ffffff;
  }

  span {
    color: #fbaf00;
  }
`;

const TextContent = styled.div`
  width: 53%;
`;

const ExploreBottom = styled.div`
  background: #fbaf00;
  border-radius: 0px 30px;
  z-index: 0;
  height: 20px;
  margin-top:8px;
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
  width: 23%;
  
`;
