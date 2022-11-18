import React from "react";
import "../assets/Forecast.css";

import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
} from "react-accessible-accordion";

const Week = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const ForecastDay = ({ data }) => {
  const WeekDay = new Date().getday;
  const forecastDays = Week.slice(WeekDay, Week.lenght).concat(
    Week.slice(0, WeekDay)
  );
  console.log(forecastDays);
  return (
    <>
      <label className="title">Daily</label>
      <Accordion allowZeroExpanded>
        {data.list.splice(0, 7).map((item, idx) => {
          return (
            <AccordionItem key={idx}>
              <AccordionItemHeading>
                <AccordionItemButton>
                  <div className="daily-item">
                    <img
                      alt="weather"
                      className="small-icon"
                      src={`/icons/${item}.png`}
                    />
                    <label className="day">{forecastDays[idx]}</label>
                    <label className="description">
                      {item.weather[0].description}
                    </label>
                    <label className="min-max">
                      {Math.round(item.main.temp_min)} C /
                      {Math.round(item.main.temp_min)}
                    </label>
                  </div>
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <div className="daily-details-grid">
                  <div className="daily-details-item">
                    <label>Pressure</label>
                    <label>{item.main.pressure}</label>
                  </div>
                  <div className="daily-details-item">
                    <label>Humidity</label>
                    <label>{item.main.humidity}</label>
                  </div>
                  <div className="daily-details-item">
                    <label>Clouds</label>
                    <label>{item.clouds.all}</label>
                  </div>
                  <div className="daily-details-item">
                    <label>Wind Speed</label>
                    <label>{item.wind.speed}m/s</label>
                  </div>
                  <div className="daily-details-item">
                    <label>Feels Like</label>
                    <label>{Math.round(item.main.feels_like)}</label>
                  </div>
                </div>
              </AccordionItemPanel>
            </AccordionItem>
          );
        })}
        ;
      </Accordion>
    </>
  );
};

export default ForecastDay;
