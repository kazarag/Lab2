import { useEffect, useState } from "react"
import { fetchContacts } from "../utility/api";
import ContactListItem from "../components/ContactListItem";
import {  FlatList, View } from "react-native";
import { ActivityIndicator,Text } from "react-native-paper";
import { useDispatch, useSelector } from "react-redux";
import { fetchContactsError, fetchContactsLoading, fetchContactsSuccess } from "../Store";
import Profile from "./Profile";


const Contact=({navigation})=>{
    // const {contacts,loading,error}=useSelector((state)=>state);
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
            setError(false);
          })
          .catch((e) => {
            console.log(e);
            setLoading(false);
            setError(true);
          });
      }, []);
    // const contactsSorted = contacts.slice().sort((a,b)=>a.name.localeCompare(b,name));
    // const renderItem =({item})=>{
    //     return(
    //         <ContactListItem
    //             name={item.name}
    //             phone={item.phone} 
    //             avatar={item.avatar}
    //             onPress={()=> console.log(item)}
    //         />
    //     )
    // }
    const renderItem =({item})=>{
      return(
          <ContactListItem
              name={item.name}
              phone={item.phone} 
              avatar={item.avatar}
              onPress={() => navigation.navigate("Profile", { contact: item })}

          />
      )
  }
    return(
        <View style={{flex:1, justifyContent: 'center'}}>
            {loading && <ActivityIndicator size={40} color="red"/>}
            {error && <Text variant='headlineLarge'>Error loading ....</Text>}
            <FlatList  
                data={contacts} 
                keyExtractor={item => item.id}
                renderItem={renderItem}
            />
        </View>
    )
}
export default Contact;