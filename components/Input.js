import React,{useState} from "react";
import { StyleSheet,Text,TextInput,View } from "react-native";

export default ({title,...rest}) => {
  return (
    <View style={styles.wreaper}>
      <Text>{title}</Text>
      <TextInput {...rest}/>
    </View>
  )
}

const styles = StyleSheet.create({
  wreaper:{
    height:40,
    marginBottom:20
  }
})