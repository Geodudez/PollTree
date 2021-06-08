import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import * as d3 from 'd3';
import Pie from './components/Pie';

function App() {
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
    <div className='App'>
      <div>
        <span className='label'>Hooks</span>
        <Pie
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

export default App;
