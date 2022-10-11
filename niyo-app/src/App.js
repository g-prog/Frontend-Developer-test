import styled from "styled-components";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ArtDetails from "./ArtDetails";
import Arts from "./components/Arts";

function App() {
  return (
    <Container>
      <Router>
        <Switch>
          <Route exact path="/arts/:id">
            <ArtDetails />
          </Route>

          <Route exact path="/arts">
            <Arts />
          </Route>

          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </Container>
  );
}

export default App;

const Container = styled.div`
  @media (max-width: 600px) {
  }
`;
