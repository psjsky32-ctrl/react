const TrendItem = ({ trendMovie }) => {
  return (
    <>
      <div>
        <img src={trendMovie.poster} alt="" />
        <div>{trendMovie.name}</div>
        <div>{trendMovie.openDate}</div>
      </div>
    </>
  );
};
export default TrendItem;
