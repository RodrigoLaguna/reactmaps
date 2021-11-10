import React from "react"
import MapView from 'react-native-maps';
import { StyleSheet,Dimensions,Button,View } from "react-native";


export default ({onPressLeft,textLeft,toglePointFilter}) =>{
  return (
    <View style={styles.panel}>
      <Button color="crimson" title={textLeft} onPress={onPressLeft} />
      <Button style={styles.boton} title='Mostrar/Ocultar' onPress={toglePointFilter} />
    </View>
  )
}

const styles = StyleSheet.create({
  panel:{
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems:'center',
    
  },
})