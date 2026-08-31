import type { PostId } from "./posts";

type PrototypeNavProps = {
  postId: PostId;
  onPost: (id: PostId) => void;
};

export function PrototypeNav({ postId, onPost }: PrototypeNavProps) {
  return (
    <header className="proto-bar">
      <p className="proto-kicker">Handoff</p>
      <div className="proto-group">
        <p className="proto-label">Post</p>
        <div className="proto-seg" role="group" aria-label="Post">
          {(
            [
              { id: "1", label: "Fabletics 1" },
              { id: "2", label: "Fabletics 2" },
              { id: "3", label: "Fabletics 3" },
            ] as const
          ).map((option) => (
            <button
              key={option.id}
              className={postId === option.id ? "is-active" : ""}
              type="button"
              aria-pressed={postId === option.id}
              onClick={() => onPost(option.id)}
            >
              {option.label}
            </button>
          ))}
        </div>
      </div>
    </header>
  );
}
