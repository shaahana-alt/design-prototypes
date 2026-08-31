import { Icon } from "./Icon";
import { assets } from "./assets";

export type RefreshPhase = "idle" | "loading" | "done";

const states = {
  idle: {
    label: "Last updated at 8:00 AM",
    icon: assets.refresh,
    iconSize: 17,
    tip: (
      <>
        Refresh to get the latest view, like, share, and comment data on matched posts.
        <br />
        No new posts will be{" "}
        <span className="comment-refresh-tip-end">added.</span>
      </>
    ),
  },
  loading: {
    label: "Loading next refresh info...",
    icon: assets.refreshStatus,
    iconSize: 16,
    tip: (
      <>
        Refreshing post stats — this may take a while. Check back later for the{" "}
        <span className="comment-refresh-tip-end">latest data.</span>
      </>
    ),
  },
  done: {
    label: "Last updated at 9:05 PM",
    icon: assets.refreshCheck,
    iconSize: 18,
    tip: (
      <>
        Refresh available every 48 hours. Next refresh: 5:28pm on{" "}
        <span className="comment-refresh-tip-end">Aug 27.</span>
      </>
    ),
  },
} as const;

type CommentRefreshProps = {
  phase: RefreshPhase;
  onRefresh: () => void;
};

export function CommentRefresh({ phase, onRefresh }: CommentRefreshProps) {
  const current = states[phase];
  const canRefresh = phase === "idle";

  return (
    <span className="comment-refresh-wrap">
      <button
        className={`comment-refresh is-${phase}`}
        type="button"
        aria-label={current.label}
        aria-describedby="comment-refresh-tip"
        aria-busy={phase === "loading"}
        disabled={!canRefresh}
        onClick={canRefresh ? onRefresh : undefined}
      >
        <Icon src={current.icon} size={current.iconSize} />
        <span className="comment-refresh-label">{current.label}</span>
      </button>
      <span className="comment-refresh-tip" id="comment-refresh-tip" role="tooltip">
        {current.tip}
      </span>
    </span>
  );
}
