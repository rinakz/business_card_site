import { ReactNode } from "react";
import stls from "../../styles/components/LayoutPage.module.sass";
import cn from "classnames";

type TypeLayoutPageProps = {
  children: ReactNode;
};

export function LayoutPage({ children }: TypeLayoutPageProps) {
  return <div className={cn(stls.wrapper, stls.container)}>{children}</div>;
}
