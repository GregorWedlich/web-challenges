import Counter from "./components/Counter";
import "./styles.css";
import { useState } from "react";

export default function App() {
  const [people, setPeople] = useState(0);

  // console.log(people);

  function handleIncrement() {
    setPeople((prevPeople) => prevPeople + 1);
  }
  function handleDecrement() {
    setPeople((prevPeople) => (prevPeople > 0 ? prevPeople - 1 : 0));
  }

  return (
    <div className="container">
      <h1>Place a Table Reservation</h1>
      <Counter
        onHandleIncrement={handleIncrement}
        onHandleDecrement={handleDecrement}
      />
      <p>You are going to reserve a table for {people} people.</p>
    </div>
  );
}
