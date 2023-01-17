import "./../styles/globals.css";
import PropertiesContex from "@/components/context/PropertiyContext";
import { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "@/components/header/Navbar";

export default function MyApp({ Component, pageProps }) {
  const [properties, setProperties] = useState([]);
  useEffect(() => {
    async function getAllPropertis() {
      const apiUrl = `http://localhost:3000/api/getAllData`;
      try {
        const response = await axios.get(apiUrl);

        setProperties(response.data.houseList);
      } catch (error) {
        console.log(error);
      }
    }
    getAllPropertis();
  }, []);
  return (
    <PropertiesContex.Provider value={{ properties }}>
      <Component {...pageProps} />
    </PropertiesContex.Provider>
  );
}
