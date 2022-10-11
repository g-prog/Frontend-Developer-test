import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import Header from "./components/Header";
import BackArrow from "./components/Icons/BackArrow";
import ShareIcon from "./components/Icons/ShareIcon";
import axios from "axios";
import { Link } from "react-router-dom";

const ArtDetails = () => {
  const [artDetails, setArtDetails] = useState({});
  const [baseUrl, setbaseUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [openMenu, setopenMenu] = useState(false);
  const [screenWidth, setscreenWidth] = useState(0);

  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    axios.get(`https://api.artic.edu/api/v1/artworks/${id}`).then(
      (response) => {
        console.log(response);
        setArtDetails(response?.data?.data);
        setbaseUrl(response?.data?.config?.iiif_url);
        setLoading(false);
      },
      (error) => {
        console.log(error);
        setError(error);
      }
    );
  }, [id]);
  console.log(artDetails);
  console.log(artDetails?.artist_title);
  return (
    <Container>
      <Header
        menuOpen={openMenu}
        setMenuOpen={setopenMenu}
        screenWidth={screenWidth}
        setscreenWidth={setscreenWidth}
      />
      <Top>
        <Div>
          <Link to="/">
            <BackArrow />
          </Link>
        </Div>

        <Div>
          <ShareIcon />
        </Div>
      </Top>
      <Body>
        {loading && !error ? (
          <LoadingDiv>Loading...</LoadingDiv>
        ) : error ? (
          <LoadingDiv>An error occurred.</LoadingDiv>
        ) : (
          <FlexDiv>
            <ImageContainer>
              <img
                src={`${baseUrl}/${
                  artDetails?.image_id
                }/${`full/843,/0/default.jpg`}`}
                alt="art details"
              />
            </ImageContainer>
            <InfoDiv>
              <InfoTop>
                <h1>{artDetails?.artist_title}</h1>
                <p>{artDetails?.credit_line}</p>
              </InfoTop>
              <ButtonDiv>
                <ExploreArtsContent>
                  <ExploreTop>Explore Arts</ExploreTop>
                  <ExploreBottom>Hello</ExploreBottom>
                </ExploreArtsContent>
                <ExploreButton>Explore Arts</ExploreButton>
              </ButtonDiv>
            </InfoDiv>
          </FlexDiv>
        )}
      </Body>
      {/* ArtDetails-{id} */}
    </Container>
  );
};

export default ArtDetails;

const Container = styled.div``;

const InfoDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const ExploreButton = styled.button`
  font-size: 20px;
  background: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  color: #ffffff;
`;

const ExploreBottom = styled.div`
  background: #fbaf00;
  border-radius: 0px 30px;
  z-index: 0;
  height: 20px;
  margin-top: 8px;
  padding: 20px 65px;
  width: 30%;
`;

const ExploreTop = styled.div`
  display: flex;
  gap: 10px;
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
  width: 30%;
`;

const ButtonDiv = styled.div`
  display: flex;
  justify-content: space-between;
`;

const InfoTop = styled.div`
  p {
    margin-top: 20px;
  }
`;

const FlexDiv = styled.div`
  display: flex;
  gap: 40px;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

const ImageContainer = styled.div`
  img {
    width: 480px;
    height: 600px;
    border-radius: 20px 200px;
    transform: matrix(-1, 0, 0, 1, 0, 0);

    @media (max-width: 400px) {
      width: 300px;
      height: 350px;
    }
  }
`;

const LoadingDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 28px;
`;

const Top = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 60px;
`;

const Div = styled.div`
  cursor: pointer;
`;

const Body = styled.div`
  padding: 20px 90px;

  @media (max-width: 600px) {
    padding: 20px;
  }
`;
