
import { TouchableOpacity, StyleSheet, View } from "react-native";

import colors from '../utility/colors';
import {Text, Avatar, Divider } from "react-native-paper";

const ContactListItem = ({ name, avatar, phone, onPress }) => {
  return (
    <TouchableOpacity
      underlaycolor={colors.grey}
      style={styles.container}
      onPress={onPress}
    >
      <View style={styles.contactinfo}>
        <Avatar.Image source={{uri: avatar}}size={40}/>
        <View style={styles.details}>
          <Text style={styles.title}>{name}</Text>
          <Text style={styles.subtitle}>{phone}</Text>
        </View>
      </View>
      <Divider/>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    paddingLeft: 24,
  },
  title: {
    color: colors.black,
    fontWeight: 'bold',
    fontSize: 16,
  },
  subtitle: {
    color: colors.blue,
    fontSize: 15,
    marginTop: 4,
  },
  contactinfo: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 16,
    paddingBottom: 16,
    paddingRight: 24,
    borderBottomColor: colors.grey,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  details: {
    justifyContent: 'center',
    flex: 1,
    marginLeft: 20,
  },
  avatar: {
    borderRadius: 22,
    width:  44,
    height: 44,
  },
});
export  default ContactListItem;