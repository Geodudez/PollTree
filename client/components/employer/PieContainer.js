import React, { useState, useEffect } from 'react';
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
  const [webpackq1data, setWebpackq1Data] = useState([]);
  const [webpackq2data, setWebpackq2Data] = useState([]);
  const [webpackq3data, setWebpackq3Data] = useState([]);
  const [webpackq4data, setWebpackq4Data] = useState([]);
  const [webpackq5data, setWebpackq5Data] = useState([]);
  const [webpackq6data, setWebpackq6Data] = useState([]);

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
        const webpackPieData = {};

        // console.log('webpackdata', webpackData);

        let webpackData = res.webpack.rows;
        for (let i = 1; i <= 6; i += 1) {
          const webpackCache = {};
          for (let j = 0; j < 4; j += 1) {
            webpackCache[webpackData[j][`question${i}`]] =
              ++webpackCache[webpackData[j][`question${i}`]] || 1;
          }
          console.log('cache', webpackCache);
          webpackPieData[`question${i}`] = webpackCache;
        }
        console.log('mywebpackpiedata', webpackPieData);

        console.log('webpackPieData after loop', webpackPieData);
        const webpackq1values = Object.values(webpackPieData.question1);
        const webpackq1keys = Object.keys(webpackPieData.question1);

        const webpackq1 = [];
        for (let i = 0; i < webpackq1values.length; i += 1) {
          webpackq1.push({
            date: Number(webpackq1keys[i]),
            value: (webpackq1values[i] / 4) * 100,
          });
        }
        setWebpackq1Data(webpackq1);

        const webpackq2values = Object.values(webpackPieData.question2);
        const webpackq2keys = Object.keys(webpackPieData.question2);

        const webpackq2 = [];
        for (let i = 0; i < webpackq2values.length; i += 1) {
          webpackq2.push({
            date: Number(webpackq2keys[i]),
            value: (webpackq2values[i] / 4) * 100,
          });
        }

        setWebpackq2Data(webpackq2);

        const webpackq3values = Object.values(webpackPieData.question3);
        const webpackq3keys = Object.keys(webpackPieData.question3);

        const webpackq3 = [];
        for (let i = 0; i < webpackq3values.length; i += 1) {
          webpackq3.push({
            date: Number(webpackq3keys[i]),
            value: (webpackq3values[i] / 4) * 100,
          });
        }

        setWebpackq3Data(webpackq3);

        const webpackq4values = Object.values(webpackPieData.question4);
        const webpackq4keys = Object.keys(webpackPieData.question4);

        const webpackq4 = [];
        for (let i = 0; i < webpackq4values.length; i += 1) {
          webpackq4.push({
            date: Number(webpackq4keys[i]),
            value: (webpackq4values[i] / 4) * 100,
          });
        }

        setWebpackq4Data(webpackq4);

        const webpackq5values = Object.values(webpackPieData.question5);
        const webpackq5keys = Object.keys(webpackPieData.question5);

        const webpackq5 = [];
        for (let i = 0; i < webpackq5values.length; i += 1) {
          webpackq5.push({
            date: Number(webpackq5keys[i]),
            value: (webpackq5values[i] / 4) * 100,
          });
        }

        setWebpackq5Data(webpackq5);

        const webpackq6values = Object.values(webpackPieData.question6);
        const webpackq6keys = Object.keys(webpackPieData.question6);

        const webpackq6 = [];
        for (let i = 0; i < webpackq6values.length; i += 1) {
          webpackq6.push({
            date: Number(webpackq6keys[i]),
            value: (webpackq6values[i] / 4) * 100,
          });
        }

        setWebpackq6Data(webpackq6);
        // console.log('webpackq1data', webpackq1data);
      });
  }, []);

  // const generateData = (value, length = 5) =>
  //   d3.range(length).map((item, index) => ({
  //     date: index,
  //     value:
  //       value === null || value === undefined ? Math.random() * 100 : value,
  //   }));

  // const [data, setData] = useState(generateData(0));
  // const changeData = () => {
  //   setData(generateData());
  // };

  // useEffect(() => {
  //   setData(generateData());
  // }, [!data]);

  // console.log('original data', data);
  // console.log('webpackq1data length', webpackq1data.length);
  if (webpackq1data.length > 0) {
    return (
      <div>
        <div>
          <span className='label'>Webpack Question 1</span>
          <PieChart
            data={webpackq1data}
            width={200}
            height={200}
            innerRadius={60}
            outerRadius={100}
          />
          <span className='label'>Webpack Question 2</span>
          <PieChart
            data={webpackq2data}
            width={200}
            height={200}
            innerRadius={60}
            outerRadius={100}
          />
        </div>
        <div> - </div>
        <div>
          <span className='label'>Webpack Question 3</span>
          <PieChart
            data={webpackq3data}
            width={200}
            height={200}
            innerRadius={60}
            outerRadius={100}
          />
          <span className='label'>Webpack Question 4</span>
          <PieChart
            data={webpackq4data}
            width={200}
            height={200}
            innerRadius={60}
            outerRadius={100}
          />
        </div>
        <div> - </div>
        <div>
          <span className='label'>Webpack Question 5</span>
          <PieChart
            data={webpackq5data}
            width={200}
            height={200}
            innerRadius={60}
            outerRadius={100}
          />
          <span className='label'>Webpack Question 6</span>
          <PieChart
            data={webpackq6data}
            width={200}
            height={200}
            innerRadius={60}
            outerRadius={100}
          />
        </div>
        <div> - </div>
      </div>
    );
  } else {
    return <div>so sad</div>;
  }

  // }
}
//yo wassup dawgs
export default PieContainer;
