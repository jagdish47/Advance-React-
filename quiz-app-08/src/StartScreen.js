const StartScreen = ({ numQuestions, dispatch }) => {
  return (
    <div>
      <h1>Welcome to The React Quiz!</h1>
      <p>{numQuestions} questions to test your React Mastery</p>
      <button onClick={() => dispatch({ type: "start" })}>Let's Start</button>
    </div>
  );
};

export default StartScreen;
