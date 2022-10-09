import React from "react";
import styled from "styled-components";

function Cards({ src, title, date }) {
  return (
    <Container>
      <ImageContainer>
        <img src={src} alt={title} />
      </ImageContainer>
      <InfoDiv>
        <h3> {title}</h3>
        <p> {date}</p>
      </InfoDiv>
    </Container>
  );
}

export default Cards;

const Container = styled.div``;

const InfoDiv = styled.div`
  display: flex;
  flex-direction: column;
  background: #1a1405;
  border-radius: 0px 0px 180px 0px;
  /* transform: matrix(-1, 0, 0, 1, 0, 0); */
  width: 340px;
  height: 150px;
  padding: 20px 30px;
  margin-top: -20px;
`;

const ImageContainer = styled.div`
  transform: matrix(-1, 0, 0, 1, 0, 0);
  cursor: pointer;

  img {
    width: 400px;
    height: 300px;
    border-radius: 0px 180px 0px 0px;
  }
`;
