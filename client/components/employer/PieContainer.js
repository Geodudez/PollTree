import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import * as d3 from 'd3';
import PieChart from './PieChart';

function PieContainer(props) {
  // console.log('props', props);
  const [vueData, setVueData] = useState({});
  const [d3Data, setd3Data] = useState({});
  const [expressData, setExpressData] = useState({});
  const [mySQLData, setMySQLData] = useState({});
  const [webpackData, setWebpackData] = useState({});
  const [pieData, setPieData] = useState({});

  useEffect(() => {
    fetch('/api/getAllData')
      .then((res) => res.json())
      .then((res) => {
        console.log('i got data');
        console.log('res', res);
        setVueData(res.vue.rows);
        setd3Data(res.d3.rows);
        setExpressData(res.express.rows);
        setMySQLData(res.mySQL.rows);
        setWebpackData(res.webpack.rows);
      });
  }, []);

  // console.log('vue', vueData);
  // console.log('d3', d3Data);
  // console.log('express', expressData);
  // console.log('mySQL', mySQLData);
  // console.log('webpack', webpackData);

  const generateData = (value, length = 5) =>
    d3.range(length).map((item, index) => ({
      date: index,
      value:
        value === null || value === undefined ? Math.random() * 100 : value,
    }));

  // const [data, setData] = useState(generateData(0));
  // const changeData = () => {
  //   setData(generateData());
  // };

  // useEffect(() => {
  //   setData(generateData());
  // }, [!data]);

  // if (
  //   vueData.length &&
  //   d3Data.length &&
  //   expressData.length &&
  //   webpackData.length &&
  //   mySQLData.length
  // ) {
  // {date: blah blh Blah, value: blah blah balh}

  console.log('mywebpack', webpackData);

  if (webpackData.length > 0) {
    for (let i = 0; i < webpackData.length; i += 1) {
      let webpackTotal =
        webpackData[i].question1 +
        webpackData[i].question2 +
        webpackData[i].question3 +
        webpackData[i].question4 +
        webpackData[i].question5 +
        webpackData[i].question6;
    }
  }

  return (
    <div>
      <div>
        <span className='label'>Webpack</span>
        <PieChart
          data={webpackData}
          width={200}
          height={200}
          innerRadius={60}
          outerRadius={100}
        />

        <span className='label'>Express</span>
        <PieChart
          data={expressData}
          width={200}
          height={200}
          innerRadius={60}
          outerRadius={100}
        />
      </div>
      <div>
        <span className='label'>D3</span>
        <PieChart
          data={d3Data}
          width={200}
          height={200}
          innerRadius={60}
          outerRadius={100}
        />

        <span className='label'>Vue</span>
        <PieChart
          data={vueData}
          width={200}
          height={200}
          innerRadius={60}
          outerRadius={100}
        />
      </div>
      <div>
        <span className='label'>MySQL</span>
        <PieChart
          data={mySQLData}
          width={200}
          height={200}
          innerRadius={60}
          outerRadius={100}
        />
      </div>
    </div>
  );
  // }
}
//yo wassup dawgs
export default PieContainer;
