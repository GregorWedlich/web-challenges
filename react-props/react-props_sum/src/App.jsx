export default function App() {
  return <Sum valueA={3} valueB={4} />;
}

function Sum({ valueA, valueB }) {
  return <p>{valueA + valueB}</p>;
}
