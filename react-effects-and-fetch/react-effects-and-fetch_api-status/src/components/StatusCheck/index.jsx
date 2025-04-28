import "./StatusCheck.css";
import { useState } from "react";

const apiStatusUrl = "https://example-apis.vercel.app/api/status";

export default function StatusCheck() {
  // Something needs to change here…
  // ↙️
  const [status, setStatus] = useState("?");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const statusIcon = isLoading
    ? "⏳"
    : error
    ? "🚨"
    : status === "up"
    ? "✅"
    : status === "down"
    ? "❌"
    : "❓";

  async function handleCheckApiStatus() {
    /**
     * Hint 1:
     * Use the `fetch()` function to send a request to `apiStatusUrl`.
     *
     * Hint 2:
     * The `fetch()` function returns a promise that resolves to a Response
     * object.
     *
     * Hint 3:
     * The Response object has a `ok` property which is true if the response
     * is okay and false if it is not.
     **/
    // --v-- write your code here --v--
    setIsLoading(true);
    setError(false);

    try {
      const response = await fetch(apiStatusUrl);
      if (response.ok) {
        console.log("API is up and running!");
        setStatus("up");
      } else {
        console.log("API is down!");
        setStatus("down");
      }
    } catch (error) {
      console.error("Error fetching API:", error);
      setError(true);
    }
    setIsLoading(false);

    // --^-- write your code here --^--
  }

  return (
    <article className="status-check">
      <div className="status-check__wrapper">
        <h2 className="status-check__heading">Status:</h2>
        <span className="status-check__icon">{statusIcon}</span>
      </div>
      <button
        type="button"
        className="status-check__button"
        onClick={handleCheckApiStatus}
      >
        Check API Status
      </button>
    </article>
  );
}
