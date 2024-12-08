import React, { useEffect } from 'react';
import { Sparkline, SparklineProps } from 'react-sparklines';
import { debounce } from 'lodash';
import { COLORS } from '../../constants/colors';

const DashboardSparklines: React.FC = () => {
  const dataSets = {
    sparklinedash: [0, 5, 6, 10, 9, 12, 4, 9],
    sparklinedash2: [0, 5, 6, 10, 9, 12, 4, 9],
    sparklinedash3: [0, 5, 6, 10, 9, 12, 4, 9],
    sparklinedash4: [0, 5, 6, 10, 9, 12, 4, 9],
    sparkline: [5, 6, 7, 9, 9, 5, 3, 2, 2, 4, 6, 7],
    compositebar1: [4, 1, 5, 7, 9, 9, 8, 7, 6, 6, 4, 7, 8, 4, 3, 2, 2, 5, 6, 7],
    compositebar2: [4, 1, 5, 7, 9, 9, 8, 7, 6, 6, 4, 7, 8, 4, 3, 2, 2, 5, 6, 7],
    normalline: [5, 4, 5, -2, 0, 3, -5, 6, 7, 9, 9, 5, -3, -2, 2, -4],
    sparklineValues: [5, 4, 5, -2, 0, 3, -5, 6, 7, 9, 9, 5, -3, -2, 2, -4],
    sparkbarValues: [5, 4, 5, -2, 0, 3, -5, 6, 7, 9, 9, 5, -3, -2, 2, -4],
    sparktriValues: [1, 1, 0, 1, -1, -1, 1, -1, 0, 0, 1, 1],
    sparkdiscValues: [5, 4, 5, -2, 0, 3, -5, 6, 7, 9, 9, 5, -3, -2, 2, -4],
    sparkbullValues: [5, 4, 5, -2, 0, 3, -5, 6, 7, 9, 9, 5, -3, -2, 2, -4],
    sparkboxValues: [5, 4, 5, -2, 0, 3, -5, 6, 7, 9, 9, 5, -3, -2, 2, -4],
  };

  useEffect(() => {
    const handleResize = debounce(() => {
    }, 150);

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
      <div>
        <div id="sparklinedash">
          <Sparkline data={dataSets.sparklinedash} type="bar" height={20} width={100} style={{ barColor: '#4caf50' }} />
        </div>
        <div id="sparklinedash2">
          <Sparkline data={dataSets.sparklinedash2} type="bar" height={20} width={100} style={{ barColor: '#9675ce' }} />
        </div>
        <div id="sparklinedash3">
          <Sparkline data={dataSets.sparklinedash3} type="bar" height={20} width={100} style={{ barColor: '#03a9f3' }} />
        </div>
        <div id="sparklinedash4">
          <Sparkline data={dataSets.sparklinedash4} type="bar" height={20} width={100} style={{ barColor: '#f96262' }} />
        </div>
        <div id="sparkline">
          <Sparkline data={dataSets.sparkline} type="line" height={20} width={100} />
        </div>
        <div id="compositebar">
          <Sparkline data={dataSets.compositebar1} type="bar" height={20} width={100} style={{ barColor: '#aaf' }} />
          <Sparkline data={dataSets.compositebar2} type="line" height={20} width={100} style={{ lineColor: 'red' }} />
        </div>
        <div id="normalline">
          <Sparkline data={dataSets.normalline} type="line" height={20} width={100} style={{ lineColor: 'red' }} />
        </div>
        <div id="sparktristate">
          <Sparkline data={dataSets.sparktriValues} type="tristate" height={20} width={100} />
        </div>
        <div id="sparktristatecols">
          <Sparkline data={dataSets.sparktriValues} type="tristate" height={20} width={100} style={{ colorMap: { '-2': '#fa7', '2': '#44f' } }} />
        </div>
        <div id="sparkline">
          <Sparkline data={dataSets.sparklineValues} type="line" height={20} width={100} style={{ lineColor: COLORS['red-500'] }} />
        </div>
        <div id="sparkbar">
          <Sparkline data={dataSets.sparkbarValues} type="bar" height={20} width={100} style={{ barColor: '39f' }} />
        </div>
        <div id="sparktri">
          <Sparkline data={dataSets.sparktriValues} type="tristate" height={20} width={100} style={{ barColor: COLORS['light-blue-500'] }} />
        </div>
        <div id="sparkdisc">
          <Sparkline data={dataSets.sparkdiscValues} type="discrete" height={20} width={100} style={{ barColor: '9f0' }} />
        </div>
        <div id="sparkbull">
          <Sparkline data={dataSets.sparkbullValues} type="bullet" height={20} width={100} style={{ barColor: COLORS['amber-500'] }} />
        </div>
        <div id="sparkbox">
          <Sparkline data={dataSets.sparkboxValues} type="box" height={20} width={100} style={{ barColor: '9f0' }} />
        </div>
      </div>
  );
};

export default DashboardSparklines;
