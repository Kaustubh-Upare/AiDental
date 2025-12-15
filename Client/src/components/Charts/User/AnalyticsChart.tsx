import React, { forwardRef, useEffect } from "react";
import {
  createChart,
  AreaSeries,
  ColorType,
  type DeepPartial,
  type TimeChartOptions,
} from "lightweight-charts";

type Point = { time: number; value: number };

const data: Point[] = [
  { value: 0, time: 1642425322 },
  { value: 8, time: 1642511722 },
  { value: 10, time: 1642598122 },
  { value: 20, time: 1642684522 },
  { value: 3, time: 1642770922 },
  { value: 43, time: 1642857322 },
  { value: 41, time: 1642943722 },
  { value: 43, time: 1643030122 },
  { value: 56, time: 1643116522 },
  { value: 46, time: 1643202922 },
];

type Props = {
  className?: string;
};

const AnalyticsChart = forwardRef<HTMLDivElement, Props>(function AnalyticsChart(
  { className },
  ref
) {
  useEffect(() => {
    const el = (ref as React.RefObject<HTMLDivElement>)?.current;
    if (!el) return;

    const options: DeepPartial<TimeChartOptions> = {
      autoSize: true,
      layout: {
        background: { type: ColorType.Solid, color: "#0D0D0D" },
        textColor: "#e5e7eb",
      },
      grid: {
        vertLines: { color: "rgba(255,255,255,0.06)" },
        horzLines: { color: "rgba(255,255,255,0.06)" },
      },
      rightPriceScale: { borderColor: "rgba(255,255,255,0.12)" },
      timeScale: { borderColor: "rgba(255,255,255,0.12)" },
    };

    const chart = createChart(el, options);

    const area = chart.addSeries(AreaSeries, {
      lineColor: "#2962FF",
      topColor: "rgba(41, 98, 255, 0.45)",
      bottomColor: "rgba(41, 98, 255, 0.00)",
    });

    area.setData(data);
    chart.timeScale().fitContent();

    return () => {
      chart.remove();
    };
  }, [ref]);

  return <div ref={ref} className={className} />;
});

export default AnalyticsChart;
