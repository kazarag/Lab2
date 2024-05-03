import { useEffect, useState } from "react"
import { fetchContacts } from "../utility/api";

import {  FlatList, View ,TouchableOpacity} from "react-native";
import { ActivityIndicator,Text,Avatar } from "react-native-paper";
import { useDispatch, useSelector } from "react-redux";
import { fetchContactsError, fetchContactsLoading, fetchContactsSuccess } from "../Store";

const Favorites=({ navigation })=>{
    // const {contacts,loading,error}=useSelector((state)=>state)
    // const dispatch= useDispatch();
    // useEffect(()=>{
    //     dispatch(fetchContactsLoading());
    //     fetchContacts()
    //     .then(
    //         contacts=>{
    //             dispatch(fetchContactsSuccess(contacts));
    //         }
    //     )
    //     .catch(e=>{
    //         dispatch(fetchContactsError());
    //     })
    // },[])
    
    const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  useEffect(() => {
    fetchContacts()
      .then((data) => {
        setContacts(data);
        setLoading(false);
        setError(error);
      })
      .catch((e) => {
        setLoading(false);
        setError(error);
        console.log(e);
      });
  }, []);
    const renderItem =({item})=>{
        const {avatar}=item
        return(
            <TouchableOpacity  onPress={() => navigation.navigate("Profile", { contact: item })}style={{padding: 20}}>
                <Avatar.Image size={80} source={{uri:avatar}}/>
            </TouchableOpacity>
        )
    }
    return(
        <View >
            {loading && <ActivityIndicator size={40} color="blue"/>}
            {error && <Text variant='headlineLarge'>Error loading ...</Text>}
            <FlatList  
                data={contacts} 
                keyExtractor={item => item.id}
                renderItem={renderItem}
                numColumns={3}
                contentContainerStyle= {{alignItems:'center'}}
            />
        </View>
    )
}
export default Favorites;