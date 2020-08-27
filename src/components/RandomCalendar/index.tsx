import React from 'react';
import Heatmap from 'react-calendar-heatmap'; 
import { subYears, isBefore, isSameDay, addDays } from "date-fns";

import { Container } from './styles';

type HeatmapValue = { date: Date; count: number; }

const RandomCalendar: React.FC = () => {
  const startDate = subYears(new Date(), 1)
  const endDate = new Date();

  return (
    <Container>
      <div className='wrapper'>
        <Heatmap
          startDate={startDate}
          endDate={endDate}
          values={generateHeatmapValues(startDate, endDate)}
          gutterSize={3.5}
          classForValue={(item: HeatmapValue) => {
            let cambletCount = 0;

            if (item !== null) {
              cambletCount = Math.max(item.count, 0)
              cambletCount = Math.min(item.count, 4)
            }
            return `scale-${cambletCount}`
          }}
          showWeekdayLabels
        />
      </div>

      <span>Random Calendar (Doesn't represent actual data)</span>
    </Container>
  )
}

/**
 *  For loop generates values in the heat map radom 0 to 4
 *  regenerate when 
 *  
 */
const generateHeatmapValues = (startDate: Date, endDate: Date) => {
  const values: HeatmapValue[] = [];

  let currentDate = startDate;
  while (isBefore(currentDate, endDate) || isSameDay(currentDate, endDate)) {
    const count = Math.random() * 4;

    values.push({date: currentDate, count: Math.round(count)})

    currentDate = addDays(currentDate, 1);

  }

  return values;

};

export default RandomCalendar;