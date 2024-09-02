import { useEffect, useState } from "react";
import { Text, View, FlatList } from "react-native";

export default function Index() {
  const [homes, setHomes]= useState([]);
  const[isLoading, setLoading]= useState(true);
  useEffect(()=>{
    const fetchHomes = async () => {
      try {
        const response = await fetch(`http://192.168.1.4:3000/homes`);
        const data = await response.json();
        setHomes(data);
        setLoading(false);
        console.log(data);
      } catch (error) {
        console.error('Error fetching homes:', error);
        setLoading(false);
      }
    };

    fetchHomes();
  },[]);
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
    </View>
  );
}
