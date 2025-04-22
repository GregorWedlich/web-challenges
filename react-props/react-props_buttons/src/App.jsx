export default function App() {
  return <Button color={"red"} disabled={false} text={"Mein Button"} />;
}

function Button({ color, disabled, text }) {
  return (
    <button
      style={{ backgroundColor: color }}
      disabled={disabled}
      onClick={() => alert("You clicked me!")}
    >
      {text}
    </button>
  );
}
