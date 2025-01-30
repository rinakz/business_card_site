import React from "react";
import { useTranslation } from "react-i18next";
import { HeaderType } from "../../types/Header";

const HeaderContext = React.createContext<any>(null);

function HeaderProvider(props: any) {
  const { t } = useTranslation();

  const navItemsRightPage: HeaderType[] = [
    { id: 1, name: t("header.contacts"), link: "#contacts" },
  ];

  const navItemsLeftPage: HeaderType[] = [
    { id: 1, name: t("header.projects"), link: "projects" },

    { id: 2, name: t("header.aboutMe"), link: "about_me" },
  ];

  return (
    <HeaderContext.Provider
      value={{
        navItemsRightPage,
        navItemsLeftPage,
      }}
      {...props}
    />
  );
}

export { HeaderProvider, HeaderContext };
