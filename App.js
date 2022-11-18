import { NavigationContainer } from "@react-navigation/native";
import axios from "axios";
import { Navigation } from "./src/navigation/Navigation";


axios.defaults.baseURL="https://api.themoviedb.org/3/movie"
axios.defaults.params={
  api_key:"99cc672d2e92067984c75baae6206802",
  language: "es-ES"
}



export default function App() {
  return (
   <NavigationContainer>
    <Navigation/>
   </NavigationContainer>
  );
}


