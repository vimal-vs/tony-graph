import { LineChart } from "@mui/x-charts";
import { useEffect, useState } from "react";
import db from './Firebase'
import { ref, onValue } from "firebase/database";

function App() {
  const db_location = ref(db, '/');

  const [data, setData] = useState([]);
  const [values, setValues] = useState([]);

  useEffect(() => {
    const fetchData = () => {
      onValue(db_location, (snapshot) => {
        if (snapshot.val()) {
          setData(Object.values(snapshot.val()));
          setValues(snapshot.val().val);
        }
      });
    };
    fetchData();
    const intervalId = setInterval(fetchData, 1000);
    return () => clearInterval(intervalId);// eslint-disable-next-line
  }, []);

  return (
    <div className="h-screen w-full flex flex-col gap-12 justify-center items-center">
      <div className="flex flex-wrap gap-x-6 gap-y-5 justify-center items-center w-full">
        <div className="border p-2 rounded-lg shadow-lg w-80 flex justify-center items-center flex-col gap-6">
          <p className="text-lg font-semibold w-fit">Panel 1</p>
          <hr className="w-full" />
          <div className="flex flex-col justify-center items-center w-full font-semibold text-lg pb-4">
            <p>Power 1: {values.Power1} Watts</p>
            <p>Current 1: {values.Current1} A</p>
            <p>Voltage 1: {values.Voltage1} V</p>
          </div>
        </div>
        <div className="border p-2 rounded-lg shadow-lg w-80 flex justify-center items-center flex-col gap-6">
          <p className="text-lg font-semibold w-fit">Panel 2</p>
          <hr className="w-full" />
          <div className="flex flex-col justify-center items-center w-full font-semibold text-lg pb-4">
            <p>Power 2: {values.Power2} Watts</p>
            <p>Current 2: {values.Current2} A</p>
            <p>Voltage 2: {values.Voltage2} V</p>
          </div>
        </div>
        <div className="border p-2 rounded-lg shadow-lg w-80 flex justify-center items-center flex-col gap-6">
          <p className="text-lg font-semibold w-fit">Panel 3</p>
          <hr className="w-full" />
          <div className="flex flex-col justify-center items-center w-full font-semibold text-lg pb-4">
            <p>Power 3: {values.Power3} Watts</p>
            <p>Current 3: {values.Current3} A</p>
            <p>Voltage 3: {values.Voltage3} V</p>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap gap-x-6 gap-y-5 justify-center items-center w-full">
        <div className="border p-2 rounded-lg shadow-lg">
          <p className="text-lg font-semibold w-fit underline">Power vs Time</p>
          <LineChart
            xAxis={[{ scaleType: "point", data: data.map((item, index) => index) }]}
            series={[
              {
                data: data.map(item => item.Power1),
                label: "Power 1",

              },
              {
                data: data.map(item => item.Power2),
                label: "Power 2",
              },
              {
                data: data.map(item => item.Power3),
                label: "Power 3",
              }
            ]}
            width={500}
            height={300}
          />
        </div>
        <div className="border p-2 rounded-lg shadow-lg">
          <p className="text-lg font-semibold w-fit underline">Current vs Time</p>
          <LineChart
            xAxis={[{ scaleType: "point", data: data.map((item, index) => index) }]}
            series={[
              {
                data: data.map(item => item.Current1),
                label: "Current 1",

              },
              {
                data: data.map(item => item.Current2),
                label: "Current 2",
              },
              {
                data: data.map(item => item.Current3),
                label: "Current 3",
              }
            ]}
            width={500}
            height={300}
          />
        </div>
        <div className="border p-2 rounded-lg shadow-lg">
          <p className="text-lg font-semibold w-fit underline">Voltage vs Time</p>
          <LineChart
            xAxis={[{ scaleType: "point", data: data.map((item, index) => index) }]}
            series={[
              {
                data: data.map(item => item.Voltage1),
                label: "Voltage 1",

              },
              {
                data: data.map(item => item.Voltage2),
                label: "Voltage 2",
              },
              {
                data: data.map(item => item.Voltage3),
                label: "Voltage 3",
              }
            ]}
            width={500}
            height={300}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
