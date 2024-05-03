import { StyleSheet, View,Text } from "react-native";
import DetailListItem from "./DetailListItem";

const Options = () => {
  return (
    <View style={styles.container}>
      <DetailListItem title="Update Profile" label="Update Profile"/>
      <DetailListItem title="Change Language" label="Change Language" />
      <DetailListItem title="Sign Out" label="Sign Out" />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    
  },
  
});
export default Options;
