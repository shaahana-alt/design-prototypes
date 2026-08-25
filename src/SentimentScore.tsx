import { useRef, useState } from "react";
import { assets } from "./assets";
import { Icon } from "./Icon";
import type { SentimentMode } from "./posts";

export type SentimentBreakdown = {
  positive: number;
  neutral: number;
  negative: number;
};

type SentimentScoreProps = {
  score: number;
  mode: SentimentMode;
  sentiment: SentimentBreakdown;
  tone?: "positive" | "mixed" | "negative";
};

function Scale({ score }: { score: number }) {
  const percent = ((Math.min(10, Math.max(1, score)) - 1) / 9) * 100;

  return (
    <div className="sentiment-scale">
      <div className="sentiment-bar-wrap">
        <div className="sentiment-bar" />
        <div className="sentiment-mark" style={{ left: `${percent}%` }}>
          <span className="sentiment-mark-tag">{score}</span>
          <span className="sentiment-mark-line" />
        </div>
      </div>
      <div className="sentiment-faces">
        <Icon src={assets.sentimentNegative} size={20} alt="Negative" />
        <Icon src={assets.sentimentNeutral} size={20} alt="Neutral" />
        <Icon src={assets.sentimentPositive} size={20} alt="Positive" />
      </div>
    </div>
  );
}

const legend = [
  { key: "positive" as const, label: "Positive", swatch: "sentiment-swatch-positive" },
  { key: "neutral" as const, label: "Neutral", swatch: "sentiment-swatch-neutral" },
  { key: "negative" as const, label: "Negative", swatch: "sentiment-swatch-negative" },
];

function SentimentChart({ sentiment }: { sentiment: SentimentBreakdown }) {
  return (
    <div className="sentiment-breakdown" aria-label="Comment sentiment breakdown">
      <div className="sentiment-legend">
        {legend.map((item) => (
          <div className="sentiment-legend-item" key={item.key}>
            <span className={`sentiment-swatch ${item.swatch}`} aria-hidden="true" />
            <span className="sentiment-legend-label">{item.label}</span>
            <span className="sentiment-legend-value">{sentiment[item.key]}%</span>
          </div>
        ))}
      </div>
      <div
        className="sentiment-segments"
        role="img"
        aria-label={`Positive ${sentiment.positive}%, Neutral ${sentiment.neutral}%, Negative ${sentiment.negative}%`}
      >
        {legend.map((item) =>
          sentiment[item.key] > 0 ? (
            <span
              className={`sentiment-segment ${item.swatch}`}
              key={item.key}
              style={{ flexGrow: sentiment[item.key] }}
            />
          ) : null,
        )}
      </div>
    </div>
  );
}

export function SentimentScore({ score, mode, sentiment, tone }: SentimentScoreProps) {
  const [open, setOpen] = useState(false);
  const hideTimer = useRef<number | undefined>(undefined);
  const isPositive = tone === "positive" || score >= 7;

  const show = () => {
    window.clearTimeout(hideTimer.current);
    setOpen(true);
  };

  const hide = () => {
    window.clearTimeout(hideTimer.current);
    hideTimer.current = window.setTimeout(() => setOpen(false), 140);
  };

  if (mode === "chart") {
    return <SentimentChart sentiment={sentiment} />;
  }

  return (
    <div
      className={`sentiment-score${open ? " is-open" : ""}${isPositive ? " is-positive" : ""}`}
      onMouseEnter={show}
      onMouseLeave={hide}
    >
      <button
        className={`flag-count${isPositive ? " is-positive" : ""}`}
        type="button"
        aria-expanded={open}
        aria-describedby={open ? "sentiment-score-tooltip" : undefined}
        onFocus={show}
        onBlur={hide}
      >
        <Icon src={isPositive ? assets.sentimentSmile : assets.sentiment} size={20} />
        {score}
      </button>
      {open ? (
        <div
          className={`sentiment-tooltip${isPositive ? " is-positive" : ""}`}
          id="sentiment-score-tooltip"
          role="tooltip"
        >
          <p className="sentiment-tooltip-title">
            Sentiment Score: {score}/10
          </p>
          <Scale score={score} />
          <p className="sentiment-tooltip-copy">
            This score is based on comment sentiment, weighted with engagement such as likes.
          </p>
        </div>
      ) : null}
    </div>
  );
}
