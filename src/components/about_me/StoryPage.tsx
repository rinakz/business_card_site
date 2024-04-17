import React, { useContext } from "react";
import { ThemeContext } from "../context/Theme_context";
import Work from "./stories/Work";
import Croatia from "./stories/Croatia";
import Doggy from "./stories/Doggy";
import Kanal from "./stories/Kanal";

export function StoryPage({ story }: any) {
  const { colors } = useContext(ThemeContext);

  const renderComponent = () => {
    let tsx;
    switch (story.alt) {
      case "Work":
        tsx = <Work />;
        break;
      case "Croatia":
        tsx = <Croatia />;
        break;
      case "Shiba":
        tsx = <Doggy />;
        break;
      case "Kanal":
        tsx = <Kanal />;
        break;
    }
    return tsx;
  };

  return (
    <div style={{ padding: "0 60px" }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
        }}
      >
        <h1 style={{ textAlign: "end", marginRight: "20px" }}>{story.text}</h1>
        <img
          style={{
            bottom: "-64px",
            width: "600px",
            height: "auto",
            position: "relative",
          }}
          alt={story.alt}
          src={story.ava}
        />
      </div>
      <div
        style={{
          padding: "115px 160px 50px 160px",
          background: colors.kappa,
          color: colors.lambda,
        }}
      >
        {renderComponent()}
      </div>
    </div>
  );
}
