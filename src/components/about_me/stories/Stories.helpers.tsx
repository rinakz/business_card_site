import { useTranslation } from "react-i18next";
import { ThemeContext } from "../../context/Theme_context";
import { useContext } from "react";
import stls from "../../../styles/components/AboutMe.module.sass";

export const DoggyContent = () => {
  const { t } = useTranslation();

  return (
    <div className={stls.storyTextContainer}>
      <div className={stls.story}>
        <p>
          <b>{t("story.Doggy.dog")}</b>
        </p>
        <br />
        <p dangerouslySetInnerHTML={{ __html: `${t("story.Doggy.gh")}` }} />
        <p>{t("story.Doggy.beer")}</p>
        <p>{t("story.Doggy.stadiums")}</p>
        <br />
        <p>{t("story.Doggy.football")}</p>
        <p>{t("story.Doggy.club")}</p>
        <br />
        <p>
          <b>{t("story.Doggy.groundhopper")}</b>
        </p>
        <br />
        <p>{t("story.Doggy.tired")}</p>
        <br />
        <p>{t("story.Doggy.cities")} </p>
        <p dangerouslySetInnerHTML={{ __html: `${t("story.Doggy.hobby")}` }} />
        <br />
        <p>{t("story.Doggy.loko")}</p>
        <p
          dangerouslySetInnerHTML={{ __html: `${t("story.Doggy.matches")}` }}
        />
      </div>
      <div className={stls.story}>
        <p>
          <b> {t("story.Doggy.book")}</b>
        </p>
        <br />
        <p dangerouslySetInnerHTML={{ __html: `${t("story.Doggy.stat")}` }} />
        <br />
        <p dangerouslySetInnerHTML={{ __html: `${t("story.Doggy.buy")}` }} />
        <p>{t("story.Doggy.fox")}</p>
        <br />
        <p>{t("story.Doggy.meet")}</p>
        <p
          dangerouslySetInnerHTML={{
            __html: `${t("story.Doggy.dogFriendly")}`,
          }}
        />
        <br />

        <p>{t("story.Doggy.metallist")}</p>
        <br />
        <p>{t("story.Doggy.belarus")}</p>
        <br />
        <b>{t("story.Doggy.more")}</b>
      </div>
    </div>
  );
};

export const CroatiaContent = () => {
  const { t } = useTranslation();

  return (
    <div className={stls.storyTextContainer}>
      <div className={stls.story}>
        <p> {t("story.Croatia.love")}</p>
        <br />
        <p dangerouslySetInnerHTML={{ __html: `${t("story.Croatia.zg80")}` }} />
        <p
          dangerouslySetInnerHTML={{
            __html: `${t("story.Croatia.friends")}`,
          }}
        />
        <br />
        <p>{t("story.Croatia.twitter")}</p>
        <p>{t("story.Croatia.dreams")}</p>
        <br />
        <p dangerouslySetInnerHTML={{ __html: `${t("story.Croatia.work")}` }} />
      </div>
      <div className={stls.story}>
        <p>{t("story.Croatia.happy")}</p>
        <br />
        <p>{t("story.Croatia.interview")}</p>
        <br />
        <p>{t("story.Croatia.sad")}</p>
        <br />
        <p>I love you anyway Croatia</p>
      </div>
    </div>
  );
};

export const ChannelContent = () => {
  const { colors } = useContext(ThemeContext);
  const { t } = useTranslation();
  return (
    <div className={stls.storyTextContainer}>
      <div className={stls.story}>
        <p>{t("story.Kanal.kanal")}</p>
        <br />
        <p>{t("story.Kanal.save")}</p>
        <br />
        <p>{t("story.Kanal.story")}</p>
        <br />

        <p dangerouslySetInnerHTML={{ __html: `${t("story.Kanal.qweez")}` }} />
        <br />
        <p dangerouslySetInnerHTML={{ __html: `${t("story.Kanal.memes")}` }} />
      </div>
      <div className={stls.story}>
        <p dangerouslySetInnerHTML={{ __html: `${t("story.Kanal.qween")}` }} />
        <br />
        <p dangerouslySetInnerHTML={{ __html: `${t("story.Kanal.people")}` }} />
        <br />
        <p
          dangerouslySetInnerHTML={{ __html: `${t("story.Kanal.stickers")}` }}
        />
        <br />
        <a color="inherit" href="https://t.me/lonely_junior ">
          <button
            style={{
              background: colors.beta,
            }}
            className={stls.buttonChannel}
          >
            @lonely_junior
          </button>
        </a>
      </div>
    </div>
  );
};
