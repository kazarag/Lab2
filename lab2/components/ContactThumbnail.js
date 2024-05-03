import React from "react";
import { View, StyleSheet } from "react-native";
import { Avatar, Icon, Text } from "react-native-paper";
import PropTypes from "prop-types";
import { TouchableOpacity } from "react-native";

const ContactThumbnail = ({ name, phone, avatar, textColor, onPress }) => {
  const colorStyle = {
    color: textColor,
  };
  const ImageComponent = onPress ? TouchableOpacity : View;
  return (
    <View style={styles.container}>
      <ImageComponent onPress={onPress}>
        <Avatar.Image
          source={{ uri: avatar }}
          size={100}
          style={styles.avatar}
        />
      </ImageComponent>
      {name !== "" && <Text style={[styles.name, colorStyle]}>{name}</Text>}
      {phone !== "" && (
        <View style={styles.phoneSection}>
          <Icon source="phone" size={17} color="#fff" />
          <Text style={[styles.phone, colorStyle]}>{phone}</Text>
        </View>
      )}
      {/* <View style={styles.info}></View> */}
    </View>
  );
};
export default ContactThumbnail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 30,
    marginHorizontal: 15,
  },

  name: {
    fontSize: 20,
    marginTop: 24,
    marginBottom: 2,
    fontWeight: "bold",
  },
  avatar: {
    height: 103,
    width: 103,
    borderRadius: 50,
    borderColor: "white",
    borderWidth: 2,
  },
  phoneSection: {
    flexDirection: "row",
    marginTop: 4,
    alignItems: "center",
    justifyContent: "center",
  },

  phone: {
    marginLeft: 4,
    fontSize: 16,
    fontWeight: "bold",
  },
});

ContactThumbnail.propTypes = {
  name: PropTypes.string,
  phone: PropTypes.string,
  avatar: PropTypes.string,
  onPress: PropTypes.func,
};

ContactThumbnail.defaultProps = {
  name: "",
  phone: "",
  textColor: "white",
  onPress: null,
};