import "./EntriesSection.css";
import Divider from "../Divider";
import Entry from "../Entry";
import Tabs from "../Tabs";
import Tab from "../Tab";
import Badge from "../Badge";
import { Fragment } from "react";

const entries = [
  {
    id: 1000,
    date: "Feb 5, 2025",
    motto: "We are in a state of chaos",
    notes:
      "Today I learned about React State. It was fun! I can't wait to learn more.",
  },
  {
    id: 999,
    date: "Feb 4, 2025",
    motto: "Props, Props, Props",
    notes:
      "Today I learned about React Props. Mad props to everyone who understands this!",
  },
  {
    id: 998,
    date: "Feb 3, 2025",
    motto: "How to nest components online fast",
    notes:
      "Today I learned about React Components and how to nest them like a pro. Application design is so much fun!",
  },
  {
    id: 997,
    date: "Feb 2, 2025",
    motto: "I'm a React Developer",
    notes: "My React-ion when I learned about React: 😍",
  },
];

export default function EntriesSection() {
  return (
    <section className="entries-section">
      <Tabs>
        <Tab active>
          All Entries <Badge isActive>{entries.length}</Badge>
        </Tab>
        <Tab>
          {/* Hier müssten wir vermutlich noch ein attribute isFavorite: false oder so im objekt haben und dann könnten wir mit useState usw. das fav simulieren */}
          Favorites <Badge>1</Badge>
        </Tab>
      </Tabs>
      {entries.map((entrie, index) => (
        <Fragment key={entrie.id}>
          <div className="entries-section__entries">
            <Entry
              date={entrie.date}
              motto={entrie.motto}
              notes={entrie.notes}
            />
          </div>
          {index < entries.length - 1 && <Divider />}
        </Fragment>
      ))}
    </section>
  );
}
