import { useState } from "react";
import { Chat, type ChatView } from "./Chat";
import { ChatComponents } from "./ChatComponents";
import { ChatExplorations } from "./ChatExplorations";
import { ChatInsights } from "./ChatInsights";
import { DesignDecisions } from "./DesignDecisions";
import { PrototypeNav, type ComponentSection, type LabPage, type LabUseCase } from "./PrototypeNav";
import { Workflows } from "./Workflows";

export default function App() {
  const [page, setPage] = useState<LabPage>("playground");
  const [section, setSection] = useState<ComponentSection>("library");
  const [useCase, setUseCase] = useState<LabUseCase>("sourcing");
  const [chatView, setChatView] = useState<ChatView>("compose");

  return (
    <>
      <PrototypeNav
        page={page}
        section={section}
        useCase={useCase}
        chatView={chatView}
        onPage={setPage}
        onSection={setSection}
        onUseCase={setUseCase}
        onChatView={setChatView}
      />
      {page === "components" ? (
        section === "explorations" ? (
          <ChatExplorations />
        ) : (
          <ChatComponents />
        )
      ) : page === "decisions" ? (
        <DesignDecisions />
      ) : (
        useCase === "workflows" ? (
          <Workflows />
        ) : useCase === "insights" ? (
          <ChatInsights />
        ) : (
          <Chat view={chatView} onView={setChatView} />
        )
      )}
    </>
  );
}
