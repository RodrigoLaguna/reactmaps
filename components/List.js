import React from "react";
import { StyleSheet,Dimensions,Button, FlatList, Text, View } from "react-native";

export default ({ puntos, closeModal }) => {
  return (
    <>
      <View style={styles.lista}>
        <FlatList
          data={puntos.map((x) => x.name)}
          renderItem={({ item }) => <View style={styles.item}><Text>{item}</Text></View>}
          keyExtractor={(item) => item}
        />
        <View style={styles.button}>
          <Button title="Cerrar" onPress={closeModal}></Button>
        </View>
      </View>
    </>
  );
};


const styles = StyleSheet.create({
  lista:{
    height: Dimensions.get('window').height -250,
  },
  item:{
    borderBottomWidth: 1,
    borderColor:'#ccc',
    height:50,
    justifyContent:'center',
    padding: 15,
  },
  button:{
    padding:15
  }
})
