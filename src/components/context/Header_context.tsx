import React from "react";
import { useTranslation } from "react-i18next";
import { HeaderType } from "../../types/Header";
import { PATH } from "../../constants/common";

const HeaderContext = React.createContext<any>(null);

function HeaderProvider(props: any) {
  const { t } = useTranslation();

  const navItems: HeaderType[] = [
    { id: 1, name: t("header.projects"), link: PATH.projects.root },
    { id: 2, name: t("header.aboutMe"), link: PATH.aboutMe.root },
    { id: 3, name: t("header.contacts"), link: "#contacts" },
  ];

  return (
    <HeaderContext.Provider
      value={{
        navItems,
      }}
      {...props}
    />
  );
}

export { HeaderProvider, HeaderContext };
