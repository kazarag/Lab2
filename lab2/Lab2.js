import { Provider } from "react-redux";
import DrawerNavigator from "./Router";
import Store from "./Store";
import MaterialIcons from "@expo/vector-icons";
import { createStackNavigator } from "@react-navigation/stack";
import Contact from "./screens/Contacts";
import Profile from "./screens/Profile";
import colors from "./utility/colors";
import User from "./screens/User";
import Favorites from "./screens/Favorites";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { PaperProvider } from "react-native-paper";
const Lab2=()=>{
  return (
    <Provider store={Store}>
      {/* // <PaperProvider> */}
      
        <DrawerNavigator/>
      
      {/* // </PaperProvider>  */}
    </Provider>

  );
}
export default Lab2;