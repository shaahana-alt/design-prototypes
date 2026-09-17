import { useEffect, useState } from "react";
import {
  AssistantBubble,
  ChatChrome,
  Composer,
  DraftPanel,
  IntercomFab,
  StatusLine,
  UserBubble,
  deriveDraft,
} from "./chat-ui";
import "./chat.css";

export type ChatView = "compose" | "working" | "compare";

export type ChatMessage = {
  id: string;
  role: "user" | "assistant";
  text: string;
};

const WORKING_PROMPT =
  "Find me NYC creators who are fashion forward, make day in the life videos with 2-5k followers";

const SEARCH_ACTIONS = [
  "Reading your brief",
  "Breaking it into search criteria",
  "Filling gaps we can actually search on",
  "Searching creators",
  "Checking them against your must-haves",
];

const REPLY =
  "I turned that into a searchable brief. Must-haves I can filter on are in the draft on the right. Where you left platform, size, or count open, I used defaults — change any of them and I’ll search again.";

function nextId() {
  return `${Date.now()}-${Math.random().toString(36).slice(2, 7)}`;
}

function Thread({
  messages,
  busy,
  draft,
  quotes,
  step,
  onDraft,
  onSend,
  onReset,
  onEditChip,
  onClearQuote,
}: {
  messages: ChatMessage[];
  busy: boolean;
  draft: string;
  quotes: string[];
  step: number;
  onDraft: (value: string) => void;
  onSend: () => void;
  onReset: () => void;
  onEditChip: (label: string) => void;
  onClearQuote: (quote: string) => void;
}) {
  const prompt = messages.find((message) => message.role === "user")?.text ?? "";
  const fillLevel = busy ? Math.min(step, 3) : prompt ? 3 : 0;

  return (
    <div className="chat-ws">
      <div className="chat-shell">
        <ChatChrome onBack={onReset} onClose={onReset} />
        <div className="chat-split">
          <div className="chat-body">
            <div className="chat-col is-working">
              <div className="chat-thread">
                {messages.map((message) =>
                  message.role === "user" ? (
                    <UserBubble key={message.id} text={message.text} />
                  ) : (
                    <AssistantBubble key={message.id} text={message.text} />
                  ),
                )}
                {busy ? (
                  <div className="chat-assistant">
                    <StatusLine label={SEARCH_ACTIONS[Math.min(step, SEARCH_ACTIONS.length - 1)]} />
                  </div>
                ) : null}
              </div>
              <div className="chat-dock">
                <Composer
                  docked
                  autoFocus={!busy}
                  busy={busy}
                  value={draft}
                  quotes={quotes}
                  onChange={onDraft}
                  onClearQuote={onClearQuote}
                  onSubmit={onSend}
                  placeholder="Ask a follow-up…"
                />
              </div>
            </div>
          </div>
          <div className="chat-draft-col">
            <DraftPanel
              draft={prompt ? deriveDraft(prompt) : undefined}
              fillLevel={fillLevel}
              onEditChip={onEditChip}
            />
          </div>
        </div>
      </div>
      <IntercomFab />
    </div>
  );
}

function Compose({
  value,
  onChange,
  onSubmit,
  onReset,
}: {
  value: string;
  onChange: (value: string) => void;
  onSubmit: () => void;
  onReset: () => void;
}) {
  return (
    <div className="chat-ws">
      <div className="chat-shell">
        <ChatChrome onBack={onReset} onClose={onReset} />
        <div className="chat-split">
          <div className="chat-body">
            <div className="chat-col is-compose">
              <div className="chat-hero">
                <div className="chat-hero-copy">
                  <h1>What kind of creators are you looking for?</h1>
                  <p>We'll use this information to find creators that match your criteria.</p>
                </div>
                <Composer autoFocus value={value} onChange={onChange} onSubmit={onSubmit} />
              </div>
            </div>
          </div>
          <div className="chat-draft-col">
            <DraftPanel fillLevel={0} />
          </div>
        </div>
      </div>
      <IntercomFab />
    </div>
  );
}

export function Chat({ view, onView }: { view: ChatView; onView: (view: ChatView) => void }) {
  const [draft, setDraft] = useState("");
  const [followUp, setFollowUp] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [busy, setBusy] = useState(false);
  const [step, setStep] = useState(0);
  const [runId, setRunId] = useState(0);
  const [editQuotes, setEditQuotes] = useState<string[]>([]);

  const editChip = (label: string) => {
    setEditQuotes((current) => (current.includes(label) ? current : [...current, label]));
    setFollowUp("What do you want to change?");
  };

  const reset = () => {
    setDraft("");
    setFollowUp("");
    setEditQuotes([]);
    setMessages([]);
    setBusy(false);
    setStep(0);
    onView("compose");
  };

  const send = (text: string) => {
    const trimmed = text.trim();
    if (!trimmed || busy) return;
    setMessages((current) => [...current, { id: nextId(), role: "user", text: trimmed }]);
    setFollowUp("");
    setDraft("");
    setEditQuotes([]);
    setBusy(true);
    setStep(0);
    setRunId((value) => value + 1);
    onView("working");
  };

  useEffect(() => {
    if (!busy) return;
    const timers = [
      window.setTimeout(() => setStep(1), 700),
      window.setTimeout(() => setStep(2), 1400),
      window.setTimeout(() => setStep(3), 2100),
      window.setTimeout(() => setStep(4), 2800),
      window.setTimeout(() => setStep(5), 3400),
      window.setTimeout(() => {
        setMessages((current) => [...current, { id: nextId(), role: "assistant", text: REPLY }]);
        setBusy(false);
      }, 3800),
    ];
    return () => timers.forEach((id) => window.clearTimeout(id));
  }, [busy, runId]);

  useEffect(() => {
    if (view !== "working" || messages.length > 0 || busy) return;
    setMessages([{ id: nextId(), role: "user", text: WORKING_PROMPT }]);
    setBusy(true);
    setStep(0);
    setRunId((value) => value + 1);
  }, [view, messages.length, busy]);

  const thread = (
    <Thread
      messages={messages}
      busy={busy}
      draft={followUp}
      quotes={editQuotes}
      step={step}
      onDraft={setFollowUp}
      onSend={() => send(followUp)}
      onReset={reset}
      onEditChip={editChip}
      onClearQuote={(quote) => setEditQuotes((current) => current.filter((item) => item !== quote))}
    />
  );

  return (
    <div className="chat-lab">
      {view === "compare" ? (
        <div className="chat-stage is-compare">
          <Compose value={draft} onChange={setDraft} onSubmit={() => send(draft)} onReset={reset} />
          {messages.length > 0 ? (
            thread
          ) : (
            <Thread
              messages={[{ id: "demo", role: "user", text: WORKING_PROMPT }]}
              busy
              draft=""
              quotes={editQuotes}
              step={Math.min(step + 1, 1)}
              onDraft={setFollowUp}
              onSend={() => undefined}
              onReset={reset}
              onEditChip={editChip}
              onClearQuote={(quote) => setEditQuotes((current) => current.filter((item) => item !== quote))}
            />
          )}
        </div>
      ) : view === "working" ? (
        thread
      ) : (
        <Compose value={draft} onChange={setDraft} onSubmit={() => send(draft)} onReset={reset} />
      )}
    </div>
  );
}
