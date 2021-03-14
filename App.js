import React, { useState } from 'react';
import { StyleSheet, View, Button } from 'react-native';
import { Map, Modal, Panel, Input, List } from './components';

export default function App() {
  const [points, setPoints] = useState([])
  const [pointTemp, setPointTemp] = useState({})
  const [visibilityFilter, setVisibilityFilter] = useState('new_point') //new_point, all_points
  const [name, setName] = useState('')
  const [visibility, setVisibility] = useState(false)
  const [pointsFilter, setPointsFilter] = useState(true)

  const togglePointsFilter = () => setPointsFilter(!pointsFilter)

  const handleLongPress = (point) => {
    setVisibilityFilter('new_point')
    setPointTemp(point.nativeEvent.coordinate)
    setVisibility(true)
  }

  const handleChangeText = (text) => {
    setName(text)
  }

  const handleSubmit = () => {
    const newPoint = { coordinate: pointTemp, name: name };
    setPoints(points.concat(newPoint))
    setVisibility(false)
    setName('')
  }

  const handleList = () => {
    setVisibilityFilter('all_points')
    setVisibility(true)
  }

  //console.log(points)

  return (
    <View style={styles.container}>
      <Map longPress={handleLongPress} points={points} pointsFilter={pointsFilter}/>
      <Panel onPressLeft={handleList} textLeft='Lista' togglePointsFilter={togglePointsFilter} />
      <Modal visibility={visibility}>
        { visibilityFilter === 'new_point' ?
          <View style={styles.form}>
            <Input title="Nombre" placeholder="Nombre del punto" onChangeText={handleChangeText} />
            <Button title="Aceptar" onPress={handleSubmit} />
          </View>
          :
          <List points={points} closeModal={() => setVisibility(false)} />
        }
      </Modal>
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
  form: {
    padding: 15
  }
});
