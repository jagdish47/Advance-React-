import React, { useState } from "react";

function App() {
  const [advice, setAdvice] = useState("");
  const [count, setCount] = useState(0);

  async function getData() {
    const data = await fetch("https://api.adviceslip.com/advice");
    const res = await data.json();

    setCount(count + 1);

    setAdvice(res.slip.advice);

    // console.log(res.slip);
    // console.log(res);
  }

  return (
    <div>
      <h1>{advice}</h1>
      <button onClick={getData}>Next Advice</button>
      <p>
        You have read <strong>{count}</strong> Advice
      </p>

      <Message count={count} />
    </div>
  );
}

const Message = ({ count }) => {
  return (
    <p>
      <h1>Message is : {count}</h1>
    </p>
  );
};

export default App;
