import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import * as d3 from 'd3';
import PieChart from './PieChart';

function PieContainer() {
  const generateData = (value, length = 5) =>
    d3.range(length).map((item, index) => ({
      date: index,
      value:
        value === null || value === undefined ? Math.random() * 100 : value,
    }));

  const [data, setData] = useState(generateData(0));
  const changeData = () => {
    setData(generateData());
  };

  useEffect(() => {
    setData(generateData());
  }, [!data]);
  return (
    <div>
      <div>
        <span className='label'>Webpack</span>
        <PieChart
          data={data}
          width={200}
          height={200}
          innerRadius={60}
          outerRadius={100}
        />
    
        <span className='label'>Express</span>
        <PieChart
          data={data}
          width={200}
          height={200}
          innerRadius={60}
          outerRadius={100}
        />
      </div>
      <div>
        <span className='label'>D3</span>
        <PieChart
          data={data}
          width={200}
          height={200}
          innerRadius={60}
          outerRadius={100}
        />
    
        <span className='label'>Vue</span>
        <PieChart
          data={data}
          width={200}
          height={200}
          innerRadius={60}
          outerRadius={100}
        />
      </div>
      <div>
        <span className='label'>MySQL</span>
        <PieChart
          data={data}
          width={200}
          height={200}
          innerRadius={60}
          outerRadius={100}
        />
      </div>
    </div>
  );
}
//yo wassup dawgs
export default PieContainer;
