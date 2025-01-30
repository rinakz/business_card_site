import { Link } from "@mui/material";
import stls from "../../../styles/components/AboutMe.module.sass";
import { useTranslation } from "react-i18next";

function Work() {
  const { t } = useTranslation();

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "25px",
        textAlign: "justify",
      }}
    >
      <p dangerouslySetInnerHTML={{ __html: `${t("story.Work.start")}` }} />
      <p>{t("story.Work.education")}</p>
      <p dangerouslySetInnerHTML={{ __html: `${t("story.Work.js")}` }} />
      <p dangerouslySetInnerHTML={{ __html: `${t("story.Work.frontend")}` }} />
      <p>
        {t("story.Work.lib")}
        <img
          className={stls.storiesPhoto}
          style={{ width: " -webkit-fill-available", padding: "22px 0" }}
          src="/LibReg.jpeg"
          alt="MyBook"
        />
        {t("story.Work.friend")}
      </p>

      <p>{t("story.Work.whantLib")}</p>
      <p>{t("story.Work.app")}</p>
      <p>{t("story.Work.deploy")}</p>
      <p>
        <b> {t("story.Work.offer")}</b>
      </p>
      <p>{t("story.Work.dontStop")}</p>
      <p dangerouslySetInnerHTML={{ __html: `${t("story.Work.fgk")}` }} />

      <div style={{ display: "flex", justifyContent: "center" }}>
        <img
          className={stls.storiesPhoto}
          style={{ width: "500px", padding: "22px" }}
          src="/FGK.jpeg"
          alt="FGK"
        />
      </div>
      <p dangerouslySetInnerHTML={{ __html: `${t("story.Work.backend")}` }} />
      <p>{t("story.Work.vue")}</p>
      <p>
      {t("story.Work.qwep")}
        <Link
          color="inherit"
          href="https://companies.rbc.ru/news/d4TZGjEd6T/kompaniya-qwep-predstavila-web-30/"
          underline="always"
        >
          {t("story.Work.newWeb")}
        </Link>
      </p>

      <p>"Mother of React". (c)</p>
    </div>
  );
}

export default Work;
