import { useContext } from "react";
import TmdbContext from "./contexts/tmdbContext";

const TrendList = ({ children }) => {
  const { componentName } = useContext(TmdbContext);

  if (!componentName || componentName !== "TrendBox") {
    <></>;
  }

  const providerProps = {
    componentName: "TrendBox",
  };

  return (
    <TmdbContext.Provider value={providerProps}>
      <dev className="TrendList">{children}</dev>
    </TmdbContext.Provider>
  );
};
export default TrendList;
