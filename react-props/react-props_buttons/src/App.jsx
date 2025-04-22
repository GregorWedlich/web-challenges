export default function App() {
  function handleClick() {
    alert("You clicked me!");
  }

  return (
    <Button
      color={"red"}
      disabled={false}
      text={"Mein Button"}
      onEventClick={handleClick}
    />
  );
}

function Button({ color, disabled, text, onEventClick }) {
  return (
    <button
      style={{ backgroundColor: color }}
      disabled={disabled}
      onClick={onEventClick}
    >
      {text}
    </button>
  );
}
