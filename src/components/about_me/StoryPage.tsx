import Croatia from "./stories/Croatia";
import Doggy from "./stories/Doggy";
import Channel from "./stories/Channel";
import { useParams } from "react-router-dom";

export function StoryPage() {
  const { id } = useParams();

  const renderComponent = () => {
    let tsx;
    switch (id) {
      case "croatia":
        tsx = <Croatia />;
        break;
      case "shiba":
        tsx = <Doggy />;
        break;
      case "channel":
        tsx = <Channel />;
        break;
    }
    return tsx;
  };

  return <>{renderComponent()}</>;
}
