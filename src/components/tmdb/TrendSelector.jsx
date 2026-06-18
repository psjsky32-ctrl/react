const TrendSelector = ({ onSelectButton }) => {
  return (
    <>
      <button value="today" onClick={onSelectButton}>
        오늘
      </button>
      <button value="week" onClick={onSelectButton}>
        이번주
      </button>
    </>
  );
};

export default TrendSelector;
