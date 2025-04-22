export default function App() {
  return <Smiley isHappy={true} />;
}

function Smiley({ isHappy }) {
  return (
    <span role="img" aria-label={isHappy ? "happy" : "sad"}>
      {isHappy ? "😊" : "😢"}
    </span>
  );
}
