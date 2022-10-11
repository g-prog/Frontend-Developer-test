import React, { useState, useEffect } from "react";
import styled from "styled-components";
import SearchIcon from "./Icons/SearchIcon";
import Cards from "./Cards";
import axios from "axios";
import { Link } from "react-router-dom";

function Arts() {
  const [arts, setArts] = useState([]);
  const [baseUrl, setbaseUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [loadingSearch, setLoadingSearch] = useState(false);
  const [errorSearch, setErrorSearch] = useState(false);
  const [error, setError] = useState(false);
  const [userInput, setUserInput] = useState("");
  const [searchResult, setSearchResult] = useState([]);

  // console.log(baseUrl);

  // axios.get("https://api.artic.edu/api/v1/artworks").then((response) => {
  //   console.log(response);
  // });

  useEffect(() => {
    setLoading(true);
    axios
      .get(
        "https://api.artic.edu/api/v1/artworks?&fields=id,title,image_id,artist_display,date_display,department_title"
      )
      .then(
        (response) => {
          console.log(response);
          setbaseUrl(response?.data?.config?.iiif_url);
          setArts(response?.data?.data);
          setLoading(false);
        },
        (error) => {
          console.log(error);
          setError(error.message);
        }
      );
  }, []);

  const searchArts = (e) => {
    setLoadingSearch(true);
    e.preventDefault();

    axios
      .get(
        `https://api.artic.edu/api/v1/artworks/search?q=${userInput}&fields=id,title,image_id,artist_display,date_display,department_title`
      )
      .then(
        (response) => {
          console.log(response);
          setSearchResult(response?.data?.data);
          setLoadingSearch(false);
        },
        (error) => {
          console.log(error);
          setErrorSearch(error);
        }
      );
  };

  return (
    <Container>
      <Top>
        <TopLeft>
          <h3>Art in the collection</h3>
          <Content>
            <p>
              Browse a curated selection of art around the world, including
              museum exhibitions, gallery openings, upcoming and many more.
            </p>
          </Content>
        </TopLeft>
        <TopRight>
          <SearchDiv>
            <Div onClick={searchArts}>
              <SearchIcon />
            </Div>
            <input
              type="text"
              placeholder="Search"
              onChange={(e) => setUserInput(e.target.value)}
            />
          </SearchDiv>
        </TopRight>
      </Top>

      {searchResult.length > 0 ? (
        <>
          {" "}
          {loadingSearch && !error ? (
            <LoadingDiv>Fetching results, please wait...</LoadingDiv>
          ) : errorSearch ? (
            <LoadingDiv>An error occurred...</LoadingDiv>
          ) : (
            <ArtsBody>
              {searchResult.map((item) => (
                <Link to={`/arts/${item.id}`}>
                  <CardsDiv key={item.id}>
                    <Cards
                      src={`${baseUrl}/${
                        item?.image_id
                      }/${`full/843,/0/default.jpg`}`}
                      title={item?.title}
                      date={item?.date_display}
                      location={item?.department_title}
                    />
                  </CardsDiv>
                </Link>
              ))}
            </ArtsBody>
          )}
        </>
      ) : (
        <>
          {loading && !error ? (
            <LoadingDiv>Loading...</LoadingDiv>
          ) : error ? (
            <LoadingDiv>An error occured.</LoadingDiv>
          ) : (
            <ArtsBody>
              {arts.map((item) => (
                <Link to={`/arts/${item.id}`}>
                  <CardsDiv key={item.id}>
                    <Cards
                      src={`${baseUrl}/${
                        item?.image_id
                      }/${`full/843,/0/default.jpg`}`}
                      title={item?.title}
                      date={item?.date_display}
                      location={item?.department_title}
                    />
                  </CardsDiv>
                </Link>
              ))}
            </ArtsBody>
          )}
        </>
      )}
    </Container>
  );
}

export default Arts;

const Container = styled.div``;

const CardsDiv = styled.div``;

const LoadingDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 28px;
`;

const ArtsBody = styled.div`
  display: flex;
  gap: 50px;
  padding: 30px 20px;
  flex-wrap: wrap;

  a {
    text-decoration: none;
    color: inherit;
  }

  @media (max-width: 900px) {
    align-items: center;
    justify-content: center;
    padding: 10px 30px;
  }
`;

const Top = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 25px;

  @media (max-width: 900px) {
    flex-direction: column;
  }
`;

const SearchDiv = styled.div`
  display: flex;
  gap: 10px;
  background: #1a1405;
  border-radius: 51px;
  padding: 10px 30px;
  width: 80%;

  & > input {
    background: #1a1405;
    border: none;
    outline: none;
    color: #fbaf00;

    &::placeholder {
      color: #fbaf00;
      font-weight: 400;
      font-size: 15px;
    }
  }

  @media (max-width: 900px) {
    width: 300px;
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

  @media (max-width: 600px) {
    width: 100%;
    margin-top: 30px;
    font-size: 12px;
  }

  @media (max-width: 900px) {
    width: 100%;
    /* margin-top: 30px; */
  }
`;

const TopLeft = styled.div`
  h3 {
    font-weight: 700;
    font-size: 48px;
    color: #ffffff;

    @media (max-width: 600px) {
      font-weight: 400;
      font-size: 28px;
    }
  }
`;

const TopRight = styled.div`
  width: 60%;
  margin-top: 50px;
`;

const Div = styled.div`
  cursor: pointer;
`;
