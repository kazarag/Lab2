import React, { useEffect, useState } from "react";
import { fetchRandomContact } from "../utility/api";
import { View, StyleSheet, Text } from "react-native";

import colors from "../utility/colors";
import ContactThumbnail from "../components/ContactThumbnail";
import DetailsListItem from "./DetailListItem";

const Profile = ({route}) => {
  // const [contacts, setContacts] = useState({});
  // useEffect(() => {
  //   fetchRandomContact().then((contact) => setContact(contact));
  // }, []);
  const { avatar, name, email, phone, cell } = route.params.contact || {};

  console.log(route.params)
  if (!route.params.contact) {
    return <Text>Invalid contact</Text>;
  }   
  return (
    <View style={styles.container}>
      <View style={styles.avatarSection}>
        <ContactThumbnail avatar={avatar} name={name} phone={phone} />
      </View>
      <View style={styles.detailsSection}>
        <DetailsListItem icon="email" title="Email" label={email} />
        <DetailsListItem icon="phone" title="Phone" label={phone} />
        <DetailsListItem icon="cellphone" title="Personal" label={cell} />
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  avatarSection: {
    backgroundColor: colors.blue,
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  detailsSection: {
    flex: 1,
    backgroundColor: "white",
  },
});