import React from "react";
import styled from "styled-components";
import SearchIcon from "./Icons/SearchIcon";
function Arts() {
  return (
    <Container>
      <Top>
        <TopLeft>
          <h3>Art in the collection</h3>
          <Content>
            <p>
              Browse a curated selection of art around the world, including
              museum exhibitions, gallery openings, upcoming and many more
            </p>
          </Content>
        </TopLeft>
        <TopRight>
          <SearchDiv>
            <Div>
              <SearchIcon />
            </Div>

            <input type="text" placeholder="Search" />
          </SearchDiv>
        </TopRight>
      </Top>
    </Container>
  );
}

export default Arts;

const Container = styled.div`
  color: white;
`;

const Top = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 25px;
`;

const SearchDiv = styled.div`
  display: flex;
  gap: 10px;
  background: #1a1405;
  border-radius: 51px;
  padding: 10px 30px;
  width: 50%;

  & > input {
    background: #1a1405;
    border: none;
    outline: none;

    &::placeholder {
      color: #fbaf00;
      font-weight: 400;
      font-size: 15px;
    }
  }
`;

const Content = styled.div`
  width: 75%;
  margin-top: -30px;
  p {
    font-weight: 400;
    font-size: 20px;
    line-height: 30px;
    letter-spacing: -0.01em;
    color: #ffffff;
  }
`;

const TopLeft = styled.div`
  h3 {
    font-weight: 700;
    font-size: 48px;
    color: #ffffff;
  }
`;

const TopRight = styled.div`
  width: 60%;
  margin-top: 50px;
`;

const Div = styled.div`
  cursor: pointer;
`;
