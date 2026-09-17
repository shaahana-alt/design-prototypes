import { useEffect, useState } from "react";
import {
  AssistantBubble,
  ChatChrome,
  ChatIcon,
  Composer,
  DraftPanel,
  FollowUpQ,
  IntercomFab,
  ChatLink,
  ChoiceCard,
  StatusLine,
  UserBubble,
  deriveDraft,
} from "./chat-ui";
import { chatAssets } from "./chat-assets";
import "./chat.css";

const STATUS_ACTIONS = [
  "Reading your brief",
  "Breaking it into search criteria",
  "Filling gaps we can actually search on",
  "Searching creators",
  "Checking them against your must-haves",
];

export function ChatComponents() {
  const [heroDraft, setHeroDraft] = useState("");
  const [dockDraft, setDockDraft] = useState("");
  const [sentNote, setSentNote] = useState("");
  const [statusIndex, setStatusIndex] = useState(0);
  const [followChip, setFollowChip] = useState<string | null>(null);
  const [followNumber, setFollowNumber] = useState("Dedicated fashion & outfit creators");
  const [followCheck, setFollowCheck] = useState("Dedicated fashion & outfit creators");
  const [followStep, setFollowStep] = useState(1);
  const [choiceOn, setChoiceOn] = useState(false);

  const followQuestion = "How central should fashion be to their content?";
  const followOptions = [
    "Lifestyle & daily vlogs with stylish aesthetic",
    "Dedicated fashion & outfit creators",
    "Either is fine",
  ];

  useEffect(() => {
    const timer = window.setInterval(() => {
      setStatusIndex((value) => (value + 1) % STATUS_ACTIONS.length);
    }, 2200);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <div className="chat-lab is-catalog">
      <div className="chat-catalog">
        <header className="chat-catalog-intro">
          <p>Chat design system</p>
          <h1>Components</h1>
          <p>Shared pieces used across Plot chat use-cases. Try them here before dropping them into a flow.</p>
        </header>

        <section className="chat-spec">
          <h2>Chrome</h2>
          <div className="chat-spec-canvas">
            <ChatChrome onBack={() => setSentNote("Back")} onClose={() => setSentNote("Close")} />
          </div>
        </section>

        <section className="chat-spec">
          <h2>Composer — hero</h2>
          <div className="chat-spec-canvas">
            <Composer
              autoFocus
              value={heroDraft}
              onChange={setHeroDraft}
              onSubmit={() => {
                setSentNote(heroDraft);
                setHeroDraft("");
              }}
              placeholder="Describe the creators you want…"
            />
            {sentNote ? <p className="chat-spec-note">Last action: {sentNote}</p> : null}
          </div>
        </section>

        <section className="chat-spec">
          <h2>Composer — docked</h2>
          <div className="chat-spec-canvas">
            <Composer
              docked
              value={dockDraft}
              onChange={setDockDraft}
              onSubmit={() => setDockDraft("")}
              placeholder="Ask a follow-up…"
            />
          </div>
        </section>

        <section className="chat-spec">
          <h2>User bubble</h2>
          <div className="chat-spec-canvas">
            <UserBubble text="Find me NYC creators who are fashion forward, make day in the life videos with 2-5k followers" />
          </div>
        </section>

        <section className="chat-spec">
          <h2>Status line</h2>
          <div className="chat-spec-canvas">
            <StatusLine label={STATUS_ACTIONS[statusIndex]} />
          </div>
        </section>

        <section className="chat-spec">
          <h2>Follow-up question</h2>
          <div className="chat-spec-grid">
            <figure className="chat-spec-canvas">
              <figcaption>Chips</figcaption>
              <FollowUpQ
                question={followQuestion}
                step={followStep}
                options={followOptions}
                selected={followChip}
                onSelect={setFollowChip}
                onPrev={() => setFollowStep((value) => Math.max(1, value - 1))}
                onNext={() => setFollowStep((value) => Math.min(3, value + 1))}
              />
            </figure>
            <figure className="chat-spec-canvas">
              <figcaption>Numbered</figcaption>
              <FollowUpQ
                layout="numbered"
                question={followQuestion}
                step={1}
                options={followOptions}
                selected={followNumber}
                skip
                onSelect={setFollowNumber}
              />
            </figure>
            <figure className="chat-spec-canvas">
              <figcaption>Checks</figcaption>
              <FollowUpQ
                layout="checks"
                question={followQuestion}
                step={1}
                options={followOptions}
                selected={followCheck}
                skip
                onSelect={setFollowCheck}
              />
            </figure>
          </div>
        </section>

        <section className="chat-spec">
          <h2>Link</h2>
          <div className="chat-spec-grid">
            <figure className="chat-spec-canvas">
              <figcaption>In the thread</figcaption>
              <ChatLink
                kicker="Opened file"
                title="Adobe Social Listening Snapshot"
                meta="index.html"
              />
            </figure>
            <figure className="chat-spec-canvas">
              <figcaption>In the composer</figcaption>
              <ChatLink compact title="Adobe Social Listening Snapshot" meta="File" />
            </figure>
          </div>
        </section>

        <section className="chat-spec">
          <h2>Choice card</h2>
          <div className="chat-spec-canvas">
            <ChoiceCard
              title="Brand mentions"
              detail="Any time Plot is tagged or mentioned."
              selected={choiceOn}
              onSelect={() => setChoiceOn((value) => !value)}
            />
          </div>
        </section>

        <section className="chat-spec">
          <h2>Assistant reply</h2>
          <div className="chat-spec-canvas">
            <AssistantBubble text="I found creators who match that brief. Want me to tighten location, follower range, or topics?" />
          </div>
        </section>

        <section className="chat-spec">
          <h2>Draft panel</h2>
          <div className="chat-spec-grid">
            <figure className="chat-spec-canvas">
              <figcaption>Empty — waiting</figcaption>
              <div className="chat-draft-preview">
                <DraftPanel fillLevel={0} />
              </div>
            </figure>
            <figure className="chat-spec-canvas">
              <figcaption>Filled</figcaption>
              <div className="chat-draft-preview">
                <DraftPanel
                  fillLevel={3}
                  draft={deriveDraft(
                    "Find me NYC creators who are fashion forward, make day in the life videos with 2-5k followers",
                  )}
                />
              </div>
            </figure>
          </div>
        </section>

        <section className="chat-spec">
          <h2>Send</h2>
          <div className="chat-spec-canvas is-row">
            <button className="chat-send" type="button" aria-label="Send active">
              <ChatIcon src={chatAssets.send} size={36} />
            </button>
            <button className="chat-send" type="button" disabled aria-label="Send disabled">
              <ChatIcon src={chatAssets.sendDisabled} size={36} />
            </button>
          </div>
        </section>

        <section className="chat-spec">
          <h2>Messenger</h2>
          <div className="chat-spec-canvas is-fab">
            <IntercomFab />
          </div>
        </section>
      </div>
    </div>
  );
}
