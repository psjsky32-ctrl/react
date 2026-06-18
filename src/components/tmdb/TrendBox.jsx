import TmdbContext from "./contexts/tmdbContext";

const TrendBox = ({ children }) => {
  const providerProps = {
    componentName: "TrendBox",
  };
  return (
    <TmdbContext.Provider value={providerProps}>
      {children}
    </TmdbContext.Provider>
  );
};

export default TrendBox;
