import React from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";

const ArtDetails = () => {
  const { id } = useParams();
  return <Container>ArtDetails-{id}</Container>;
};

export default ArtDetails;

const Container = styled.div``;
