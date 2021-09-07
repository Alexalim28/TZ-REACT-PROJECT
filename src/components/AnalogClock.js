import React from "react";
import { scaleLinear, arc, range } from "d3";

const width = 120;
const height = 120;
const offsetX = width / 2;
const offsetY = height / 2;
const clockRadius = 50;
const secondsHandLength = clockRadius - 5;
const minutesHandLength = clockRadius - 10;
const hourHandLength = (2 * clockRadius) / 3;
const hourTickStart = clockRadius;
const hourTickLength = -5;

const secScale = scaleLinear()
  .domain([0, 59 + 999 / 1000])
  .range([0, Math.PI * 2]);
const minScale = scaleLinear()
  .domain([0, 59 + 59 / 60])
  .range([0, Math.PI * 2]);
const hourScale = scaleLinear()
  .domain([0, 11 + 59 / 60])
  .range([0, Math.PI * 2]);
const hourTickScale = scaleLinear().domain([0, 11]).range([0, 330]);

const secArc = arc()
  .innerRadius(0)
  .outerRadius(secondsHandLength)
  .startAngle((d) => secScale(d.numeric))
  .endAngle((d) => secScale(d.numeric));

const minArc = arc()
  .innerRadius(0)
  .outerRadius(minutesHandLength)
  .startAngle((d) => minScale(d.numeric))
  .endAngle((d) => minScale(d.numeric));

const hourArc = arc()
  .innerRadius(0)
  .outerRadius(hourHandLength)
  .startAngle((d) => hourScale(d.numeric))
  .endAngle((d) => hourScale(d.numeric));

const AnalogClock = ({ data }) => (
  <svg width={width} height={height}>
    <g transform={`translate(${offsetX}, ${offsetY})`}>
      {range(0, 12).map((d) => (
        <line
          key={d}
          x1="0"
          x2="0"
          y1={hourTickStart}
          y2={hourTickStart + hourTickLength}
          stroke="rgba(255, 255, 255, 0.9)"
          strokeWidth="2"
          transform={`rotate(${hourTickScale(d)})`}
        />
      ))}
      <circle
        r={clockRadius}
        fill="none"
        stroke="rgba(255, 255, 255, 0.9)"
        strokeWidth="2"
      />
      <circle r={clockRadius / 20} fill="rgba(255, 255, 255, 0.9)" />
      {data.map((d) => (
        <path
          key={d.unit}
          d={
            d.unit === "seconds"
              ? secArc(d)
              : d.unit === "minutes"
              ? minArc(d)
              : hourArc(d)
          }
          fill="none"
          stroke={d.unit === "seconds" ? "red" : "rgba(255, 255, 255, 0.9)"}
          strokeWidth={d.unit === "seconds" ? 1 : d.unit === "minutes" ? 1 : 3}
        />
      ))}
    </g>
  </svg>
);

export default AnalogClock;
