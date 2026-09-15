import { useState } from "react";
import { Chip, ProcessCard } from "./chat-ui";
import "./chat.css";

const mid = [
  { label: "Reading your prompt", done: true },
  { label: "Matching creator criteria", done: false },
  { label: "Preparing results", done: false },
];

export function ChatExplorations() {
  const [steps, setSteps] = useState([
    { label: "Reading your prompt", done: false },
    { label: "Matching creator criteria", done: false },
    { label: "Preparing results", done: false },
  ]);
  const [dismiss, setDismiss] = useState(["#nycfashion", "#nycvlog", "Instagram", "2-5k"]);
  const [platform, setPlatform] = useState("Instagram");
  const [size, setSize] = useState("2-5k");
  const [editing, setEditing] = useState(false);
  const [editItems, setEditItems] = useState(["#nycfashion", "#nycvlog"]);
  const [draftItem, setDraftItem] = useState("");

  return (
    <div className="chat-lab is-catalog">
      <div className="chat-catalog">
        <header className="chat-catalog-intro">
          <p>Chat design system</p>
          <h1>Explorations</h1>
          <p>Park ideas here while we try them. Nothing on this page ships in the playground until we pick a direction.</p>
        </header>

        <article className="chat-explore">
          <header className="chat-explore-head">
            <div>
              <p className="chat-explore-meta">Sep 14 · Draft</p>
              <h2>Editable pills</h2>
            </div>
            <p className="chat-explore-flag">Trying</p>
          </header>
          <p className="chat-explore-note">
            Criteria, platforms, and size should feel like pills you can change. Playground currently uses the quiet
            pill. These are ways to edit from the draft rail without sending another message.
          </p>
          <div className="chat-spec-grid">
            <figure className="chat-spec-canvas">
              <figcaption>Quiet pill</figcaption>
              <div className="chat-chips">
                <Chip label="#nycfashion" />
                <Chip label="Instagram" />
                <Chip label="2-5k" />
              </div>
            </figure>
            <figure className="chat-spec-canvas">
              <figcaption>Dismiss — tap ×</figcaption>
              <div className="chat-chips">
                {dismiss.map((item) => (
                  <Chip
                    key={item}
                    label={item}
                    variant="dismiss"
                    onRemove={() => setDismiss((current) => current.filter((value) => value !== item))}
                  />
                ))}
              </div>
            </figure>
            <figure className="chat-spec-canvas">
              <figcaption>Pencil on the pill</figcaption>
              <div className="chat-chips">
                <Chip label="#nycfashion" variant="edit" onEdit={() => undefined} />
                <Chip label="Instagram" variant="edit" onEdit={() => undefined} />
                <Chip label="2-5k" variant="edit" onEdit={() => undefined} />
              </div>
            </figure>
            <figure className="chat-spec-canvas">
              <figcaption>Dropdown</figcaption>
              <div className="chat-chips">
                <Chip
                  label={platform}
                  variant="menu"
                  options={["Instagram", "TikTok", "YouTube", "Any platform"]}
                  onChange={setPlatform}
                />
                <Chip
                  label={size}
                  variant="menu"
                  options={["<1k", "2-5k", "5-10k", "10-50k", "Any size"]}
                  onChange={setSize}
                />
              </div>
            </figure>
            <figure className="chat-spec-canvas">
              <figcaption>Edit mode</figcaption>
              <div className="chat-chip-edit">
                <div className="chat-chips">
                  {editItems.map((item) =>
                    editing ? (
                      <Chip
                        key={item}
                        label={item}
                        variant="dismiss"
                        onRemove={() => setEditItems((current) => current.filter((value) => value !== item))}
                      />
                    ) : (
                      <Chip key={item} label={item} />
                    ),
                  )}
                </div>
                {editing ? (
                  <form
                    className="chat-chip-add"
                    onSubmit={(event) => {
                      event.preventDefault();
                      const next = draftItem.trim();
                      if (!next) return;
                      setEditItems((current) => [...current, next]);
                      setDraftItem("");
                    }}
                  >
                    <input
                      value={draftItem}
                      onChange={(event) => setDraftItem(event.target.value)}
                      placeholder="Add a criterion"
                    />
                    <button type="submit">Add</button>
                  </form>
                ) : null}
                <button type="button" className="chat-chip-mode" onClick={() => setEditing((value) => !value)}>
                  {editing ? "Done" : "Edit criteria"}
                </button>
              </div>
            </figure>
          </div>
        </article>

        <article className="chat-explore">
          <header className="chat-explore-head">
            <div>
              <p className="chat-explore-meta">Sep 14 · Processing</p>
              <h2>Processing card</h2>
            </div>
            <p className="chat-explore-flag">Parked</p>
          </header>
          <p className="chat-explore-note">
            Tried this in the live search flow. Felt too heavy next to the thread and draft rail, so it came out of
            Playground. Keeping the variants here until we decide if it belongs anywhere.
          </p>
          <div className="chat-spec-grid">
            <figure className="chat-spec-canvas">
              <figcaption>Default — starting</figcaption>
              <ProcessCard
                elapsed={1}
                steps={steps}
                onToggle={(index) =>
                  setSteps((current) =>
                    current.map((step, stepIndex) =>
                      stepIndex === index ? { ...step, done: !step.done } : step,
                    ),
                  )
                }
              />
            </figure>
            <figure className="chat-spec-canvas">
              <figcaption>Default — in progress</figcaption>
              <ProcessCard elapsed={8} activeIndex={1} steps={mid} />
            </figure>
            <figure className="chat-spec-canvas">
              <figcaption>Default — complete</figcaption>
              <ProcessCard
                title="Processed your response"
                elapsed={12}
                meta="Done"
                steps={[
                  { label: "Reading your prompt", done: true },
                  { label: "Matching creator criteria", done: true },
                  { label: "Preparing results", done: true },
                ]}
              />
            </figure>
            <figure className="chat-spec-canvas">
              <figcaption>Wash</figcaption>
              <ProcessCard variant="wash" elapsed={8} activeIndex={1} steps={mid} />
            </figure>
            <figure className="chat-spec-canvas">
              <figcaption>Bordered</figcaption>
              <ProcessCard variant="bordered" elapsed={8} activeIndex={1} steps={mid} />
            </figure>
            <figure className="chat-spec-canvas">
              <figcaption>Compact</figcaption>
              <ProcessCard variant="compact" elapsed={8} activeIndex={1} steps={mid} />
            </figure>
            <figure className="chat-spec-canvas">
              <figcaption>Progress bar</figcaption>
              <ProcessCard variant="bar" elapsed={8} activeIndex={1} steps={mid} />
            </figure>
            <figure className="chat-spec-canvas">
              <figcaption>Numbered</figcaption>
              <ProcessCard variant="numbered" elapsed={8} activeIndex={1} steps={mid} />
            </figure>
          </div>
        </article>
      </div>
    </div>
  );
}
