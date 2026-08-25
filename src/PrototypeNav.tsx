import type { PostId, SentimentMode, SummaryMode } from "./posts";

type PrototypeNavProps = {
  postId: PostId;
  summaryMode: SummaryMode;
  sentimentMode: SentimentMode;
  onPost: (id: PostId) => void;
  onSummary: (mode: SummaryMode) => void;
  onSentiment: (mode: SentimentMode) => void;
};

function Segment<T extends string>({
  label,
  value,
  options,
  onChange,
}: {
  label: string;
  value: T;
  options: { id: T; label: string }[];
  onChange: (value: T) => void;
}) {
  return (
    <div className="proto-group">
      <p className="proto-label">{label}</p>
      <div className="proto-seg" role="group" aria-label={label}>
        {options.map((option) => (
          <button
            key={option.id}
            className={value === option.id ? "is-active" : ""}
            type="button"
            aria-pressed={value === option.id}
            onClick={() => onChange(option.id)}
          >
            {option.label}
          </button>
        ))}
      </div>
    </div>
  );
}

export function PrototypeNav({
  postId,
  summaryMode,
  sentimentMode,
  onPost,
  onSummary,
  onSentiment,
}: PrototypeNavProps) {
  return (
    <header className="proto-bar">
      <p className="proto-kicker">Prototype</p>
      <Segment
        label="Post"
        value={postId}
        onChange={onPost}
        options={[
          { id: "1", label: "Ipsy 1" },
          { id: "2", label: "Ipsy 2" },
          { id: "3", label: "Ipsy 3" },
        ]}
      />
      <Segment
        label="Summary"
        value={summaryMode}
        onChange={onSummary}
        options={[
          { id: "paragraph", label: "Paragraph" },
          { id: "themes", label: "Themes" },
        ]}
      />
      <Segment
        label="Sentiment"
        value={sentimentMode}
        onChange={onSentiment}
        options={[
          { id: "score", label: "Score" },
          { id: "chart", label: "Chart" },
        ]}
      />
    </header>
  );
}
