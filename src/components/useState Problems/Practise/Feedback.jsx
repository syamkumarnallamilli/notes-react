import { useState } from "react";

export default function FeedbackApp() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const total = good + neutral + bad;
  const positivePercent = total === 0 ? 0 : Math.round((good / total) * 100);
const clearAll = () => {
    setGood(0);
    setNeutral(0);
    setBad(0);
  };
  return (
    <div>
      <h2>Give Feedback</h2>
      <button onClick={() => setGood(good + 1)}>Good</button>
      <button onClick={() => setNeutral(neutral + 1)}>Neutral</button>
      <button onClick={() => setBad(bad + 1)}>Bad</button>
      <button onClick={clearAll} disabled={total===0}>clear-all</button>

      <h3>Statistics</h3>
      {total === 0 ? (
        <p>No feedback yet</p>
      ) : (
        <ul>
          <li>Good: {good}</li>
          <li>Neutral: {neutral}</li>
          <li>Bad: {bad}</li>
          <li>Total: {total}</li>
          <li>Positive: {positivePercent}%</li>
        </ul>
      )}
    </div>
  );
}
