import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container} from 'react-bootstrap'
import Question from "pages/Question";
import Result from "pages/Result";

import { Routes, Route, Link, useNavigate, Outlet} from "react-router-dom";
import styled from "styled-components";

const Name = styled.p`
  font-family: var(--bs-body-font-family);
  font-size: 26px;
  font-weight: 900;
  color: rgba(31, 105, 174, 1);
  text-align: center;
`;

const StartButton = styled.button`
  height: 54px;
  background-color: #1F69AE;
  color: whitesmoke;
  font-weight: 700;
  border-radius: 20px;
  border-width: 0;
`


function App() {
  let navigate = useNavigate();
  return (
    <div className="App">
      <Routes>
        <Route
          path="personalitytest-app/"
          element={
            <Container className="pt-5 px-0">
              <img src={require("pages/contents/img/mainGraphic.png")} style={{ height: "80px" }}></img>
              <Name>
                라이프 인 서울
                <br />
                테스트
              </Name>
              <p style={{fontWeight: "700"}}>
                어느 동네에 살아볼까?
                <br />
                467개 동 데이터로
                <br />
                너랑 잘 맞는 동네 알랴쥼
              </p>
              <div className="col-lg-6 col-md-8 col-sm-10 col-12 mx-auto">
                
                <img
                  src={require("pages/contents/img/main.png")}
                  alt="mainimg"
                  className="img-fluid"
                  style={{ width: "100%" }}
                ></img>
              </div>
              <StartButton
                type="button"
                className="col-lg-8 col-md-6 col-sm-8 col-12 mx-auto"
                onClick={() => {
                  navigate("/question");
                }}
              >
                > 나는 어떤 동네랑 어울릴까?
              </StartButton>
            </Container>
          }
        ></Route>
        <Route path="personalitytest-app/question" element={<Question></Question>}></Route>
        <Route path="personalitytest-app/result/:id" element={<Result />}></Route>
      </Routes>
    </div>
  );
}

export default App;
