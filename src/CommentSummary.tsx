import { CommentCount } from "./CommentCount";
import { Icon } from "./Icon";
import type { Post, SummaryMode } from "./posts";

type CommentSummaryProps = {
  post: Post;
  mode: SummaryMode;
  openThread: string | null;
  onOpen: (id: string) => void;
  onClose: () => void;
};

export function CommentSummary({ post, mode, openThread, onOpen, onClose }: CommentSummaryProps) {
  if (mode === "themes") {
    const rows = post.themeList ?? post.themes;

    return (
      <div className="theme-list">
        <div className="theme-rows">
          {rows.map((theme) => (
            <div className="theme-item" key={theme.id}>
              <div className="theme-row">
                <span className="theme-dot">
                  <Icon src={theme.dot} size={10} />
                </span>
                <p className="theme-headline">{theme.headline}</p>
                <CommentCount
                  id={`theme-${theme.id}`}
                  comments={theme.comments}
                  labeled
                  open={openThread === `theme-${theme.id}`}
                  onOpen={onOpen}
                  onClose={onClose}
                />
              </div>
              {theme.detail ? <p className="theme-detail">{theme.detail}</p> : null}
            </div>
          ))}
        </div>
        {post.additional ? (
          <div className="theme-extra">
            <div className="theme-extra-head">
              <p className="theme-extra-title">Additional comments</p>
              <CommentCount
                id="additional"
                comments={post.additional.comments}
                labeled
                open={openThread === "additional"}
                onOpen={onOpen}
                onClose={onClose}
              />
            </div>
            <p className="theme-extra-copy">{post.additional.copy}</p>
          </div>
        ) : null}
      </div>
    );
  }

  return (
    <div className="summary-inline">
      {post.paragraph.map((part, index) => {
        const theme = post.themes.find((item) => item.id === part);
        if (!theme) return <span key={`${part}-${index}`}>{part}</span>;
        return (
          <CommentCount
            key={theme.id}
            id={theme.id}
            comments={theme.comments}
            align={index === post.paragraph.length - 2 ? "end" : "center"}
            open={openThread === theme.id}
            onOpen={onOpen}
            onClose={onClose}
          />
        );
      })}
    </div>
  );
}
