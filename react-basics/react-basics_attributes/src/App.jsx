import "./styles.css";

export default function App() {
  return <Article />;
}

function Article() {
  return (
    <article className="article">
      <h2 className="article__title">Headline</h2>
      <label className="article__label" htmlFor="input">
        <input
          className="article__input"
          type="text"
          id="input"
          placeholder="Type something..."
        />
      </label>
      <a
        href="https://google.com"
        rel="noopener noreferrer"
        target="_blank"
        className="article__link"
      >
        Link
      </a>
    </article>
  );
}
