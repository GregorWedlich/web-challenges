import Card from "./components/Card";

export default function App() {
  const fruits = [
    {
      id: 1337,
      name: "🍌 Banana",
      color: "yellow",
    },
    {
      id: 1338,
      name: "🍎 Apple",
      color: "red",
    },
    {
      id: 1341,
      name: "🍉 Watermelon",
      color: "green",
    },
  ];

  return (
    <div className="app">
      {fruits.map((fruit) => {
        return <Card key={fruit.id} name={fruit.name} color={fruit.color} />;
      })}
    </div>
  );
}
