import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Dimensions, StyleSheet, Text, View,Button } from 'react-native';
import {Map,Modal,Panel,Input,List} from './components';



export default function App() {

  const [puntos,setPuntos] = useState([]);
  const [nombre,setNombre] = useState('');
  const [visibilityFilter,setVisibilityFilter] = useState('new_punto'); // new_punto , all_puntos
  const [puntoTemp,setPuntoTemp] = useState({});
  const [visivility,setVisivility] = useState(false);
  const [pointsFilter,setPointsFilter] = useState(true);

  const handleLongPress = ({nativeEvent}) => {
    setVisibilityFilter('new_punto')
    setPuntoTemp(nativeEvent.coordinate)
    setVisivility(true)
  }

  const handleChangeText = text => {
    setNombre(text);
  }

  const handleSubmit = () => {
    const newPunto = { coordinate: puntoTemp,name: nombre };
    setPuntos(puntos.concat(newPunto));
    setVisivility(false)
    setNombre('')
  }

  const handlerLista = () =>{
    setVisibilityFilter('all_puntos')
    setVisivility(true)
  }

  const toglePointFilter = () => setPointsFilter(!pointsFilter)

  console.log(puntos);

  return (
    <View style={styles.container}>
      
      <Map onLongPress={handleLongPress} puntos={puntos} pointsFilter={pointsFilter}></Map>
      <StatusBar style="auto" />
      <Panel onPressLeft={handlerLista} textLeft='Lista' toglePointFilter={toglePointFilter} />
      <Modal visibility={visivility}>
        {visibilityFilter == 'new_punto' 
        ? 
        <View style={styles.form}>
          <Input title='Nombre' placeholder='Nombre del punto' onChangeText={handleChangeText} ></Input>
          <Button title='Aceptar' onPress={handleSubmit} ></Button>
        </View>

        : <List closeModal={ () => setVisivility(false)} puntos={puntos}/>
        }
      </Modal>
      <StatusBar backgroundColor='#fff' StatusBarStyle='light-content' ></StatusBar>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  form:{
    padding:20
  }
  
});
