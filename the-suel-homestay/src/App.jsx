import styled from "styled-components";
import GlobalStyle from "./styles/GlobalStyle";
import Button from "./ui/Button";
import Input from "./ui/Input";
import Heading from "./ui/Heading";
import Row from "./ui/Row";
const StyledApp = styled.div`
  //background-color: red;
  padding: 20px;
`;
function App() {
  return (
    <>
      <GlobalStyle />
      <StyledApp>
        <Row>
          <Row type="horizontal">
            <Heading as="h1">The Suel Homestay</Heading>
            <div>
              <Heading as="h2">Check-in & Check-out</Heading>
              <Button  onClick={() => alert("Checked-in")}>Check In</Button>
              <Button size="small" variation="secondary" onClick={() => alert("Checked-out")}>Check Out</Button>
            </div>
          </Row>
          <Row>
            <Heading as="h3">Form</Heading>
            <form>
              <Input type="number" placeholder="Number of Guests"></Input>
              <Input type="number" placeholder="Number of Guests"></Input>
            </form>
          </Row>
        </Row>
      </StyledApp>
    </>
  );
}

export default App;
