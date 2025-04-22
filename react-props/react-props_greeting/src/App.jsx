export default function App() {
  return (
    <>
      <Greeting name={"Sven"} isCoach />
      <Greeting name={"Gregor"} />
    </>
  );
}

function Greeting({ name, isCoach }) {
  return (
    <>{isCoach ? <h1>Hello, Coach {name}!</h1> : <h1>Hello, {name}!</h1>}</>
  );
}
