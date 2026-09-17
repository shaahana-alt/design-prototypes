import { useState, type ReactNode } from "react";
import { ChatIcon, Chip, StatusLine } from "./chat-ui";
import { chatAssets } from "./chat-assets";
import { designDecisions } from "./design-decisions";
import "./chat.css";

const BLOCKS = [
  { title: "Notify about", values: ["Brand mentions"] },
  { title: "Triggers", values: ["Neutral sentiment", "Negative sentiment"] },
  { title: "Frequency", values: ["As it happens"] },
  { title: "Deliver to", values: ["Slack"] },
];

function CardShell({ children }: { children: ReactNode }) {
  return (
    <aside className="chat-draft">
      <div className="chat-draft-top">
        <p>New Notification</p>
        <button className="chat-draft-save" type="button">
          Save as draft
        </button>
      </div>
      {children}
    </aside>
  );
}

function Heading() {
  return (
    <div className="chat-draft-copy">
      <h2>Brand Mentions</h2>
      <p>We'll deliver matching posts to your channels.</p>
    </div>
  );
}

function ContentSectionEdit() {
  return (
    <CardShell>
      <Heading />
      {BLOCKS.map((block) => (
        <div key={block.title} className="chat-draft-block">
          <div className="dd-section-head">
            <h3>{block.title}</h3>
            <button className="dd-edit" type="button">
              <ChatIcon src={chatAssets.edit} size={16} />
              Edit
            </button>
          </div>
          <div className="chat-chips">
            {block.values.map((value) => (
              <span key={value} className="dd-chip-tight">
                {value}
              </span>
            ))}
          </div>
        </div>
      ))}
    </CardShell>
  );
}

function ContentCriteria() {
  return (
    <CardShell>
      <Heading />
      <div className="dd-criteria">
        <div className="dd-criteria-head">
          <p>
            Notification • v1 <span>4</span>
          </p>
        </div>
        <div className="dd-criteria-field">
          <p className="dd-criteria-label">Notify about</p>
          <p>Brand mentions of Plot across Instagram and TikTok.</p>
        </div>
        <div className="chat-chips">
          <span className="dd-chip-tint">Neutral sentiment</span>
          <span className="dd-chip-tint">Negative sentiment</span>
          <span className="dd-chip-tint">As it happens</span>
          <span className="dd-chip-tint">Slack</span>
        </div>
        <p className="dd-criteria-hint">Ask Plot to add, drop, or update any of these.</p>
      </div>
    </CardShell>
  );
}

function ContentRows() {
  return (
    <CardShell>
      <Heading />
      <dl className="dd-rows">
        {BLOCKS.map((block) => (
          <div key={block.title}>
            <dt>{block.title}</dt>
            <dd>{block.values.join(", ")}</dd>
          </div>
        ))}
      </dl>
    </CardShell>
  );
}

function ContentAccordion() {
  return (
    <CardShell>
      <Heading />
      <div className="dd-accords">
        {BLOCKS.map((block, index) => (
          <details key={block.title} className="dd-accord" open={index === 0}>
            <summary>
              {block.title}
              <span>{block.values.length}</span>
            </summary>
            <div className="chat-chips">
              {block.values.map((value) => (
                <Chip key={value} label={value} />
              ))}
            </div>
          </details>
        ))}
      </div>
    </CardShell>
  );
}

export function DesignDecisions() {
  const [index, setIndex] = useState(0);
  const current = designDecisions[index];

  if (!current) return null;

  return (
    <div className="chat-lab is-catalog">
      <div className="chat-catalog">
        <header className="chat-catalog-intro">
          <p>Chat design system</p>
          <h1>Design decisions</h1>
          <p>Calls we make and keep. Click the line to see the next one.</p>
        </header>

        <article className="chat-explore">
          <header className="chat-explore-head">
            <div>
              <p className="chat-explore-meta">Sep 15 · Workflows · Open</p>
              <h2>Side content</h2>
            </div>
            <p className="chat-explore-flag">Exploring</p>
          </header>
          <p className="chat-explore-note">
            Same subtle card. Different ways to write the notification inside — including the criteria wash we
            already use in sourcing.
          </p>
          <div className="chat-spec-grid">
            <figure className="chat-spec-canvas chat-draft-preview">
              <figcaption>Section + Edit — Workflows</figcaption>
              <ContentSectionEdit />
            </figure>
            <figure className="chat-spec-canvas chat-draft-preview">
              <figcaption>Criteria wash — sourcing</figcaption>
              <ContentCriteria />
            </figure>
            <figure className="chat-spec-canvas chat-draft-preview">
              <figcaption>Text rows</figcaption>
              <ContentRows />
            </figure>
            <figure className="chat-spec-canvas chat-draft-preview">
              <figcaption>Accordion</figcaption>
              <ContentAccordion />
            </figure>
          </div>
        </article>

        <StatusLine
          label={current.title}
          onSelect={() => setIndex((value) => (value + 1) % designDecisions.length)}
        />
        <dl className="dd-detail">
          <div>
            <dt>We</dt>
            <dd>{current.we}</dd>
          </div>
          <div>
            <dt>Because</dt>
            <dd>{current.because}</dd>
          </div>
          <div>
            <dt>Not</dt>
            <dd>{current.not}</dd>
          </div>
          <div>
            <dt>Lives</dt>
            <dd>{current.lives}</dd>
          </div>
        </dl>
      </div>
    </div>
  );
}
