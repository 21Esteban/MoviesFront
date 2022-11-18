import {createNativeStackNavigator} from "@react-navigation/native-stack"
import DetailScreen from "../screens/DetailScreen"
import HomeScreen from "../screens/HomeScreen"


const Stack = createNativeStackNavigator()


//Funcion para crear las rutas 
export const Navigation=()=>{
    return(
        <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen name = "HomeScreen" component={HomeScreen}/>
            <Stack.Screen name = "DetailScreen" component={DetailScreen}/>
        </Stack.Navigator>
    )
}