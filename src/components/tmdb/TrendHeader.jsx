import { Children, useContext } from "react";
import TmdbContext from "./contexts/tmdbContext";

const TrendHeader = ({ children }) => {
  const { componentName } = useContext(TmdbContext);

  if (!componentName || componentName !== "TrendBox") {
    <></>;
  }

  const providerProps = {
    componentName: "TrendHeader",
  };

  return (
    <>
      <TmdbContext.Provider value={providerProps}>
        {children}
      </TmdbContext.Provider>
    </>
  );
};
export default TrendHeader;
