import { createContext } from "react";
export const Context = createContext({
  footerHeight: 0,
  setFooterHeight(e) {},
  setHeaderHeight(e) {},
  headerHeight: 0,
});
