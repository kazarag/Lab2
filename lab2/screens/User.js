import { useEffect, useState } from "react";
import { fetchUserContact } from "../utility/api";
// import ContactThumbnail from "../components/ContactThumbnail";
import { View } from "react-native";
import { Avatar, Text } from "react-native-paper";

const User = () => {
  const [User, setUser] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetchUserContact()
      .then((data) => {
        setUser(data);
        setLoading(false);
        console.log(data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);
  const { name, avatar, phone } = User;
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "aqua",
      }}
    >
      <Avatar.Image source={{ uri: avatar }} size={150} />
      <Text style={{ fontSize: 30, color: "white", fontWeight: "bold" }}>
        {name}
      </Text>
      <Text style={{ fontSize: 24, color: "white" }}>{phone}</Text>
    </View>
  );
};

export default User;
