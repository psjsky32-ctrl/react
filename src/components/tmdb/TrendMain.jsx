import { useState } from "react";
import TrendBox from "./TrendBox";
import TrendHeader from "./TrendHeader";
import TrendItem from "./TrendItem";
import TrendList from "./TrendList";
import TrendSelector from "./TrendSelector";
import trendData from "./trend.json";

const TrendMain = () => {
  const [{ sectionName, items }] = useState(trendData);
  const [selector, setSelector] = useState("today");
  // const [trendDatas, setTrendData] = useState(trendData);

  // const onTodayButtonHandler = (event) => {
  //   console.log(event.target.value);
  //   setSelector("today");
  // };

  // const onWeekButtonHandler = (event) => {
  //   console.log(event.target.value);
  //   setSelector("week");
  // };

  const onSelectHandler = (event) => {
    const selectedValue = event.target.value;
    setSelector(selectedValue);
  };

  return (
    <div className="wrapper">
      <TrendBox>
        <TrendHeader>
          <h1>{sectionName}</h1>
          <TrendSelector
            // onTodayButtonClick={onTodayButtonHandler}
            // onWeekButtonClick={onWeekButtonHandler}
            onSelectButton={onSelectHandler}
          />
        </TrendHeader>
        <TrendList>
          {items[selector].map((tmdb) => (
            <TrendItem selector={selector} trendMovie={tmdb} key={tmdb.id} />
          ))}
        </TrendList>
      </TrendBox>
    </div>
  );
};

export default TrendMain;
