import React from "react";
import styled from "styled-components";

function Cards({ src, title }) {
  console.log(src)
  return (
    <Container>
      <ImageContainer>
        <img src={src} alt={title} />
      </ImageContainer>
      <InfoDiv>
        {title}
      </InfoDiv>
    </Container>
  );
}

export default Cards;

const Container = styled.div``;

const InfoDiv = styled.div`
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

  img {
    width: 400px;
    height: 300px;
    border-radius: 0px 180px 0px 0px;
  }
`;
