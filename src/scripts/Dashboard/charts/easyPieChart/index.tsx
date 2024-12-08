import React, { useEffect, useRef } from 'react';
import 'easy-pie-chart/dist/jquery.easypiechart.min.js';

interface EasyPieChartOptions {
  onStep: (from: number, to: number, percent: number, chart: HTMLElement) => void;
}

const EasyPieChart: React.FC = () => {
  const chartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const initializeChart = () => {
      if (chartRef.current) {
        const options: EasyPieChartOptions = {
          onStep: function (from, to, percent) {
            if (chartRef.current) {
              chartRef.current.querySelector('span')!.textContent = `${Math.round(percent)} %`;
            }
          },
        };

        // @ts-ignore
        $(chartRef.current).easyPieChart(options);
      }
    };

    initializeChart();

    return () => {
    };
  }, []);

  return (
      <div ref={chartRef} className="easy-pie-chart">
        <span>0 %</span>
      </div>
  );
};

export default EasyPieChart;
