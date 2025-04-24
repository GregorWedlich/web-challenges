export default function Button({ children, onClick, isSelected }) {
  return (
    <button
      className={`button`}
      style={{ backgroundColor: isSelected ? "lightblue" : "white" }}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
