import Header from "./Header";
import Main from "./Main";
import { useEffect, useReducer } from "react";

const initialState = {};

function reducer(state, action) {}

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    fetch("http://localhost:8000/questions")
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.log("Error : ", err));
  }, []);

  return (
    <div>
      <Header />
      <Main>
        <p>1/15</p>
        <p>Questions</p>
      </Main>
    </div>
  );
};

export default App;
