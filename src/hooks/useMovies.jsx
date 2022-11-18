import axios, { Axios } from "axios";
import { useCallback, useEffect, useState } from "react";


export const useMovies=()=>{
    const [isLoading, setIsLoading] = useState(true);

    //Creamos este estado para guardar las categorias de nuestras peliculas que van a aparecer en la screen de inicio
  
    const [peliculas, setPeliculas] = useState({
      nowPlaying: [],
      popular: [],
      topRated: [],
      upcoming: [],
    });
  
    // Vamos a hacer la funcion get o de obtener para poder obtener esas categorias de peliculas de nuestra api
  
    const getMovies = useCallback(async()=>{setIsLoading(true);
        try {
          // const { data: now_playing } = await axios.get("/now_playing");
    
          // const { data: popular } = await axios.get("/popular");
    
          // const { data: topRated } = await axios.get("/top_rated");
    
          // const { data: upcoming } = await axios.get("/upcoming");
    
          const now_playing = axios.get("/now_playing");
    
          const popular = axios.get("/popular");
    
          const topRated = axios.get("/top_rated");
    
          const upcoming = axios.get("/upcoming");
    
          //Esta variable nos sirve para encapsular todas las peticiones al backend que estan justo arribita para hacer solo una promesa y no 4 , las promesas son los await y los async lo cual nos optimiza ms (ping)  y memoria
    
          const response = await Promise.all([
            now_playing,
            popular,
            topRated,
            upcoming,
          ]);
    
          setPeliculas({
              nowPlaying: response[0].data.results,
              popular: response[1].data.results,
              topRated: response[2].data.results,
              upcoming: response[3].data.results,
            });
    
    
          //Y asi le estamos dando valor a nuestra lista de categorias
          // setPeliculas({
          //   nowPlaying: now_playing.results,
          //   popular: popular.results,
          //   topRated: topRated.results,
          //   upcoming: upcoming.results,
          // });
    
          setIsLoading(false);
        } catch (error) {
          setIsLoading(false);
          console.log("Error en la funcion getMovies", error.message);
        }},[])

  
    //como queremos que las peliculas salgan en la pantalla de home apenitas entremos en esa screen entonces tenemos que activar la funcion getMovies que es la que nos obtiene , la que agarra las peliculas de la api entonces usamos un useEffect
  
    useEffect(() => {
      getMovies();
    }, []);

    return{
        peliculas,isLoading
    }
}