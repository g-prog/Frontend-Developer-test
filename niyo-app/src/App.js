import styled from "styled-components";
import Header from "./components/Header";

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

const SpiralBottom = styled.div``;

const BodyRight = styled.div``;

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
  width: 25%;
`;


