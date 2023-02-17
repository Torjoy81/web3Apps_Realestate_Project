import "./../styles/globals.css";
import { SessionProvider } from "next-auth/react";

export default function MyApp({ Component, pageProps }) {
  // const [properties, setProperties] = useState([]);
  // useEffect(() => {
  //   async function getAllPropertis() {
  //     const apiUrl = `http://localhost:3000/api/get_properties`;
  //     try {
  //       const response = await axios.get(apiUrl);

  //       setProperties(response.data.houseList);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   }
  //   getAllPropertis();
  // }, []);
  return (
    <SessionProvider session={pageProps.session}>
      <Component {...pageProps} />
    </SessionProvider>
  );
}
