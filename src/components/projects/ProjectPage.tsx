import { useParams } from "react-router-dom";
import FGK from "./projects/FGK";
import Qwep from "./projects/Qwep";
import IC8 from "./projects/IC8";

export function ProjectPage() {
  const { id } = useParams();

  const renderComponent = () => {
    let tsx;
    switch (id) {
      case "IC8":
        tsx = <IC8 />;
        break;
      case "railfgk":
        tsx = <FGK />;
        break;
      case "qwep":
        tsx = <Qwep />;
        break;
    }
    return tsx;
  };

  return <>{renderComponent()}</>;
}
