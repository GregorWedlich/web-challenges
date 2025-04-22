export default function App() {
  return <Button color={"red"} disabled={false} text={"Mein Button"} />;
}

function Button({ color, disabled, text }) {
  function handleClick() {
    alert("You clicked me!");
  }

  return (
    <button
      style={{ backgroundColor: color }}
      disabled={disabled}
      onClick={handleClick}
    >
      {text}
    </button>
  );
}
