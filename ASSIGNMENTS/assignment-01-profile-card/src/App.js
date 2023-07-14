const details = {
  name: "Jonas Schmedtmann",
  info: "Full stack development is a versatile skill set that allows developers to work on various aspects of web development, and there are many resources available online",
  skills: ["HTML CSS", "JavaScript", "Git Github", "ReactJS", "NodeJS"],
  imageUrl:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEYltixjei8gRYPB8ViFq6_g3BKhQGFDuYrQ&usqp=CAU",
};

const App = () => {
  return (
    <div
      style={{
        height: "400px",
        width: "350px",
        border: "2px solid black",
        padding: "10px",
      }}
    >
      <Profile imageUrl={details.imageUrl} />
      <Name name={details.name} />
      <Info info={details.info} />
      <Skill skills={details.skills} />
    </div>
  );
};

function Profile(props) {
  return (
    <img
      style={{ height: "230px", width: "350px" }}
      src={props.imageUrl}
      alt="Jonas"
    />
  );
}

function Name(props) {
  return <h2>{props.name}</h2>;
}

function Info(props) {
  return <p>{props.info}</p>;
}

function Skill(props) {
  function getRandomColor() {
    // Generate random values for red, green, and blue components
    var red = Math.floor(Math.random() * 256);
    var green = Math.floor(Math.random() * 256);
    var blue = Math.floor(Math.random() * 256);

    // Create the CSS color string using the generated values
    var color = "rgb(" + red + ", " + green + ", " + blue + ")";

    return color;
  }

  return (
    <div
      style={{
        height: "70px",
        width: "100%",
        border: "3px solid red",
        display: "flex",
        flexWrap: "noWrap",
      }}
    >
      {props.skills.map((ele) => (
        <span
          style={{
            background: getRandomColor(),
            margin: "3px",
            padding: "3px 7px",
            color: "red",
            borderRadius: "10px",
          }}
        >
          {ele}
        </span>
      ))}
    </div>
  );
}

export default App;
