import React, { useEffect, useRef } from 'react';
import Chart, { ChartOptions, ChartData } from 'chart.js/auto';
import { COLORS } from '../../constants/colors';

const ChartComponent: React.FC = () => {
  const lineChartRef = useRef<HTMLCanvasElement>(null);
  const barChartRef = useRef<HTMLCanvasElement>(null);
  const areaChartRef = useRef<HTMLCanvasElement>(null);
  const scatterChartRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {

    if (lineChartRef.current) {
      const lineCtx = lineChartRef.current.getContext('2d');
      if (lineCtx) {
        new Chart(lineCtx, {
          type: 'line',
          data: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
              {
                label: 'Series A',
                backgroundColor: 'rgba(237, 231, 246, 0.5)',
                borderColor: COLORS['deep-purple-500'],
                pointBackgroundColor: COLORS['deep-purple-700'],
                borderWidth: 2,
                data: [60, 50, 70, 60, 50, 70, 60],
              },
              {
                label: 'Series B',
                backgroundColor: 'rgba(232, 245, 233, 0.5)',
                borderColor: COLORS['blue-500'],
                pointBackgroundColor: COLORS['blue-700'],
                borderWidth: 2,
                data: [70, 75, 85, 70, 75, 85, 70],
              },
            ],
          } as ChartData<'line'>,
          options: {
            plugins: {
              legend: {
                display: false,
              },
            },
          } as ChartOptions<'line'>,
        });
      }
    }

    if (barChartRef.current) {
      const barCtx = barChartRef.current.getContext('2d');
      if (barCtx) {
        new Chart(barCtx, {
          type: 'bar',
          data: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
              {
                label: 'Dataset 1',
                backgroundColor: COLORS['deep-purple-500'],
                borderColor: COLORS['deep-purple-800'],
                borderWidth: 1,
                data: [10, 50, 20, 40, 60, 30, 70],
              },
              {
                label: 'Dataset 2',
                backgroundColor: COLORS['light-blue-500'],
                borderColor: COLORS['light-blue-800'],
                borderWidth: 1,
                data: [10, 50, 20, 40, 60, 30, 70],
              },
            ],
          } as ChartData<'bar'>,
          options: {
            responsive: true,
            plugins: {
              legend: {
                position: 'bottom',
              },
            },
          } as ChartOptions<'bar'>,
        });
      }
    }

    if (areaChartRef.current) {
      const areaCtx = areaChartRef.current.getContext('2d');
      if (areaCtx) {
        new Chart(areaCtx, {
          type: 'line',
          data: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
              {
                backgroundColor: 'rgba(3, 169, 244, 0.5)',
                borderColor: COLORS['light-blue-800'],
                data: [10, 50, 20, 40, 60, 30, 70],
                label: 'Dataset',
                fill: 'start',
              },
            ],
          } as ChartData<'line'>,
        });
      }
    }

    if (scatterChartRef.current) {
      const scatterCtx = scatterChartRef.current.getContext('2d');
      if (scatterCtx) {
        new Chart(scatterCtx, {
          type: 'scatter',
          data: {
            datasets: [
              {
                label: 'My First dataset',
                borderColor: COLORS['red-500'],
                backgroundColor: COLORS['red-500'],
                data: [
                  { x: 10, y: 20 },
                  { x: 30, y: 40 },
                  { x: 50, y: 60 },
                  { x: 70, y: 80 },
                  { x: 90, y: 100 },
                  { x: 110, y: 120 },
                  { x: 130, y: 140 },
                ],
              },
              {
                label: 'My Second dataset',
                borderColor: COLORS['green-500'],
                backgroundColor: COLORS['green-500'],
                data: [
                  { x: 150, y: 160 },
                  { x: 170, y: 180 },
                  { x: 190, y: 200 },
                  { x: 210, y: 220 },
                  { x: 230, y: 240 },
                  { x: 250, y: 260 },
                  { x: 270, y: 280 },
                ],
              },
            ],
          } as ChartData<'scatter'>,
        });
      }
    }
  }, []);

  return (
      <div>
        <canvas id="line-chart" ref={lineChartRef} />
        <canvas id="bar-chart" ref={barChartRef} />
        <canvas id="area-chart" ref={areaChartRef} />
        <canvas id="scatter-chart" ref={scatterChartRef} />
      </div>
  );
};

export default ChartComponent;
