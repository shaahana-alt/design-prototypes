import { useState } from "react";
import { ChatChrome, Chip, Composer, DraftPanel, IntercomFab } from "./chat-ui";
import "./chat.css";

const TYPES = [
  "Brand mentions",
  "Topic",
  "Custom report",
  "Outbound comments",
  "Brand themes",
  "Status updates",
];

export function Workflows() {
  const [picked, setPicked] = useState<string | null>(null);
  const [followUp, setFollowUp] = useState("");
  const [editQuotes, setEditQuotes] = useState<string[]>([]);

  return (
    <div className="chat-lab">
      <div className="chat-ws">
        <div className="chat-shell">
          <ChatChrome path={["Plot", "Workflows", "Create"]} />
          <div className="chat-split">
            <div className="chat-body">
              <div className="chat-col is-compose">
                <div className="chat-hero">
                  <div className="chat-hero-copy">
                    <h1>Let’s set up a notification</h1>
                    <p>What would you like to be notified about?</p>
                  </div>
                  <div className="chat-chips">
                    {TYPES.map((type) => (
                      <Chip
                        key={type}
                        label={type}
                        selected={picked === type}
                        onSelect={() => setPicked(type === picked ? null : type)}
                      />
                    ))}
                  </div>
                  <Composer
                    autoFocus
                    value={followUp}
                    quotes={editQuotes}
                    onChange={setFollowUp}
                    onClearQuote={(quote) => setEditQuotes((current) => current.filter((item) => item !== quote))}
                    onSubmit={() => {
                      setFollowUp("");
                      setEditQuotes([]);
                    }}
                    placeholder="Describe the notification you want…"
                  />
                </div>
              </div>
            </div>
            <div className="chat-draft-col">
              <DraftPanel
                title="New notification"
                summary="We'll deliver matching posts to your channels."
                blocks={[
                  { title: "Notify about", chips: [{ label: picked ?? "Not set yet" }] },
                  { title: "Target", chips: [{ label: "Not set yet" }] },
                  { title: "Triggers", chips: [{ label: "Not set yet" }] },
                  { title: "Frequency", chips: [{ label: "Not set yet" }] },
                  { title: "Deliver to", chips: [{ label: "Slack", variant: "edit" }] },
                ]}
                onEditChip={(label) => {
                  setEditQuotes((current) => (current.includes(label) ? current : [...current, label]));
                  setFollowUp("What do you want to change?");
                }}
              />
            </div>
          </div>
        </div>
        <IntercomFab />
      </div>
    </div>
  );
}
