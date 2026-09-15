import type { ChatView } from "./Chat";

export type LabPage = "playground" | "components" | "decisions";
export type ComponentSection = "library" | "explorations";
export type LabUseCase = "sourcing" | "workflows";

type PrototypeNavProps = {
  page: LabPage;
  section: ComponentSection;
  useCase: LabUseCase;
  chatView: ChatView;
  onPage: (page: LabPage) => void;
  onSection: (section: ComponentSection) => void;
  onUseCase: (useCase: LabUseCase) => void;
  onChatView: (view: ChatView) => void;
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
  page,
  section,
  useCase,
  chatView,
  onPage,
  onSection,
  onUseCase,
  onChatView,
}: PrototypeNavProps) {
  return (
    <header className="proto-bar">
      <p className="proto-kicker">Prototype</p>
      <div className="proto-row">
        <Segment
          label="Page"
          value={page}
          onChange={onPage}
          options={[
            { id: "playground", label: "Playground" },
            { id: "components", label: "Components" },
            { id: "decisions", label: "Design Decisions" },
          ]}
        />
        {page === "components" ? (
          <Segment
            label="Section"
            value={section}
            onChange={onSection}
            options={[
              { id: "library", label: "Library" },
              { id: "explorations", label: "Explorations" },
            ]}
          />
        ) : null}
        {page === "playground" ? (
          <Segment
            label="Use case"
            value={useCase}
            onChange={onUseCase}
            options={[
              { id: "sourcing", label: "Creator Sourcing" },
              { id: "workflows", label: "Workflows" },
            ]}
          />
        ) : null}
        {page === "playground" && useCase === "sourcing" ? (
          <Segment
            label="State"
            value={chatView}
            onChange={onChatView}
            options={[
              { id: "compose", label: "Compose" },
              { id: "working", label: "Working" },
              { id: "compare", label: "Compare" },
            ]}
          />
        ) : null}
      </div>
    </header>
  );
}
