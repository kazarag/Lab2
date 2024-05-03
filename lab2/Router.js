import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { createStackNavigator } from "@react-navigation/stack";
import Contact from "./screens/Contacts";
import Profile from "./screens/Profile";
import colors from "./utility/colors";
import User from "./screens/User";
import Favorites from "./screens/Favorites";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import Options from "./screens/Options";

const getDrawerItemIcon =
  (icon) =>
  ({ tinColor }) =>
    <MaterialIcons name={icon} size={26} style={{ color: tinColor }} />;
const Stack = createStackNavigator();
const ContactScreens = () => {
  return (
    <Stack.Navigator
      initialRouteName="Contacts"
      screenOptions={{
        headerTintColor: "white",
        headerStyle: { backgroundColor: "tomato" },
        headerTitleAlign: "center",
        headerShown:false,
      }}
    >
     <Stack.Screen
        name="Contacts"
        component={Contact}
        options={{
          title:"Contacts",
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: 'orange',
            borderBottomWidth: 1,
            borderColor: colors.black,
          },
        }}
      />
      <Stack.Screen name="Profile" component={Profile} options={{
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: 'orange',
            borderBottomWidth: 1,
            borderColor: colors.black,
          },
         
      }}/>
    </Stack.Navigator>
  );
};
const FavoritesScreens = () => {
  return (
    <Stack.Navigator
      initialRouteName="Favorites"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen
        name="Favorites"
        component={Favorites}
        options={{ title: "Favorites" }}
      />
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{ title: "Profile" }}
      />
    </Stack.Navigator>
  );
};

const UserScreens = ({ navigation }) => {
  return (
    <Stack.Navigator initialRouteName="User">
      <Stack.Screen
        name="User"
        component={User}
        options={{
          headerTitle: "Me",
          headerTintColor: "white",
          headerStyle: { backgroundColor: colors.blue },
          headerRight: () => (
            <MaterialIcons
              name="settings"
              size={24}
              style={{ color: "white", marginRight: 10 }}
              onPress={() => navigation.navigate("Options")}
            />
          ),
        }}
      />
      <Stack.Screen name="Options" component={Options} options={{title:"Options"}} />
    </Stack.Navigator>
  );
};
const Drawer = createDrawerNavigator();
const DrawerNavigator = () => {
  return(
  <NavigationContainer>
    <Drawer.Navigator initialRouteName="ContactsScreens">
      <Drawer.Screen
        name="ContactsScreens"
        component={ContactScreens}
        options={{
          drawerIcon: getDrawerItemIcon("list"),
        }}
      />
      <Drawer.Screen
        name="Favorites Screens"
        component={FavoritesScreens}
        options={{
          drawerIcon: getDrawerItemIcon("star"),
        }}
      />
      <Drawer.Screen
        name="UserScreens"
        component={UserScreens}
        options={{
          drawerIcon: getDrawerItemIcon("person"),
        }}
      />
    </Drawer.Navigator>
  </NavigationContainer>
  )
};
export default DrawerNavigator;
