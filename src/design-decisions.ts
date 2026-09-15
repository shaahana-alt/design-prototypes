export type DesignDecision = {
  id: string;
  date: string;
  useCase: string;
  title: string;
  we: string;
  because: string;
  not: string;
  lives: string;
};

export const designDecisions: DesignDecision[] = [
  {
    id: "side-container",
    date: "Sep 15, 2026",
    useCase: "Workflows",
    title: "Side content treatment is still open",
    we: "Keep the subtle card. Try how the notification itself is written inside: headings + pills, section + Edit like Workflows, or the criteria wash we already use in sourcing.",
    because:
      "Sourcing already has a content pattern (53:28425): tinted block, prompt, tinted chips. Workflows Figma uses heading + Edit + tight chips. Playground currently uses line-by-line pills. The container is not the question.",
    not: "More chrome options for the card. A field table.",
    lives: "Design Decisions · Open",
  },
  {
    id: "always-split",
    date: "Sep 15, 2026",
    useCase: "Creator Sourcing",
    title: "Chat and draft stay side by side",
    we: "Every sourcing state is a two-sided split: conversation on the left, draft on the right. Compose starts with an empty draft; it fills as we parse.",
    because:
      "The draft is the searchable brief, not a panel that appears later. Hiding it on compose or compare made the work feel like chat-only.",
    not: "A single-column compose. Compare without the draft rail.",
    lives: "Playground · all states",
  },
  {
    id: "name-the-search",
    date: "Sep 14, 2026",
    useCase: "Creator Sourcing",
    title: "Name the work while we search",
    we: "Show the real actions in the thread: reading the brief, breaking it into criteria, filling gaps we can search on, searching creators, then checking must-haves. After that, say what we assumed.",
    because:
      "Sourcing already does this work — parse, score, default, search, judge. Internal spec and SOC-7830 say not to decide silently. “Plot AI is writing a reply…” hid the job from the person who asked.",
    not: "A generic thinking line. A heavy processing card in the flow.",
    lives: "Playground · Working",
  },
  {
    id: "speak-defaults",
    date: "Sep 14, 2026",
    useCase: "Creator Sourcing",
    title: "If we fill a gap, say so",
    we: "When platform, size, or count is missing, apply defaults and tell the user in the reply. They can change any of them and search again.",
    because:
      "The agent already chooses for you. Product’s stance this week is to name those assumptions instead of pretending the brief was complete.",
    not: "Silent defaults that only show up later in filters.",
    lives: "Playground · assistant reply",
  },
  {
    id: "park-processing-card",
    date: "Sep 14, 2026",
    useCase: "Creator Sourcing",
    title: "Keep the processing card out of the live flow",
    we: "Park the processing card and its variants. The thread stays a light list of actions; the draft rail holds the structured output.",
    because: "The card felt too heavy next to the thread and draft. It competed with the thing it was meant to explain.",
    not: "In-flow card, wash, bordered, compact, bar, or numbered treatments in Playground.",
    lives: "Explorations · Parked",
  },
  {
    id: "workflows-draft-blocks",
    date: "Sep 15, 2026",
    useCase: "Workflows",
    title: "Draft is line-by-line pills, not a field table",
    we: "Stack Notify about, Target, Triggers, Frequency, and Deliver to as heading + pills — same rhythm as the sourcing draft. Selecting a type shows a check on the left, not a black outline.",
    because: "The boxed field list felt like a form. Pills keep the draft in the same language as the chat choices.",
    not: "A bordered Notify about / Target table. An inset black ring on the selected type.",
    lives: "Playground · Workflows",
  },
];
