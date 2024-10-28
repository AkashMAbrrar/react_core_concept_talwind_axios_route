import { LineChart as LChart, Line, XAxis, YAxis } from "recharts";

const LineChart = () => {
  const studentsMarksData = [
    { name: "Alice", physics: 78, chemistry: 90, math: 78 },
    { name: "Bob", physics: 85, chemistry: 79, math: 92 },
    { name: "joe don", physics: 49, chemistry: 86, math: 82 },

    { name: "sharlene wood", physics: 71, chemistry: 86, math: 95 },
    { name: "oly den", physics: 89, chemistry: 87, math: 88 },
    { name: "mark james", physics: 97, chemistry: 92, math: 73 },

    { name: "Charlie brook", physics: 58, chemistry: 95, math: 66 },
    { name: "Henry cavil", physics: 77, chemistry: 85, math: 70 },
    { name: "micheal johnson", physics: 81, chemistry: 83, math: 75 },
    { name: "micheal johnson", physics: 81, chemistry: 83, math: 75 },
  ];

  return (
    <div>
      <LChart width={1000} height={400} data={studentsMarksData}>
        <XAxis dataKey="name"></XAxis>
        <YAxis dataKey=""></YAxis>
        <Line type="monotone" dataKey="math" stroke="#8884d8"></Line>
        <Line dataKey={"physics"} stroke="red"></Line>
      </LChart>
    </div>
  );
};

export default LineChart;
