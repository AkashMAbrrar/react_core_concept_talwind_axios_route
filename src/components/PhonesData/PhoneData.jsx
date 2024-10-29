import axios from "axios";
import { useEffect, useState } from "react";
import { Audio, Circles } from "react-loader-spinner";
import { Bar, BarChart, Tooltip, XAxis, YAxis } from "recharts";

const PhoneData = () => {
  const [phones, setPhones] = useState([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // fetch("https://openapi.programming-hero.com/api/phones?search=iphone")
    //   .then((res) => res.json())
    //   .then((data) => setPhones(data.data));

    // use axios method

    axios
      .get("https://openapi.programming-hero.com/api/phones?search=iphone")
      .then((data) => {
        const phoneData = data.data.data;
        const phonesWithFakeData = phoneData.map((phone) => {
          const obj = {
            name: phone.phone_name,
            price: parseInt(phone.slug.split("-")[1]),
          };
          return obj;
        });
        console.log(phonesWithFakeData);
        setPhones(phonesWithFakeData);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      {loading && (
        <div>
          (
          <Audio
            height="80"
            width="80"
            radius="9"
            ariaLabel="three-dots-loading"
            wrapperStyle
            wrapperClass
          />
          <Circles
            height="80"
            width="80"
            color="#4fa94d"
            ariaLabel="circles-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
          />
          )
        </div>
      )}
      <h2 className="text-4xl">All phones: {phones.length}</h2>

      <BarChart width={1200} height={400} data={phones}>
        <Bar dataKey="price" fill="skyblue"></Bar>
        <XAxis dataKey="name"></XAxis>
        <YAxis></YAxis>
        <Tooltip></Tooltip>
      </BarChart>
    </div>
  );
};

export default PhoneData;
