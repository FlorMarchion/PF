import React, { useState } from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import RepositoryList from '../Restos/RestosList.jsx'
import Map from '../Map/Map.jsx'
import IonicIcon from 'react-native-vector-icons/Ionicons';

// import BottomSheet, {BottomSheetView} from '@gorhom/bottom-sheet'
// import BottomSheet from '@gorhom/bottom-sheet/lib/typescript/components/bottomSheet/BottomSheet';

// import Filters from '../Filters/Filters.jsx';
import { BottomSheet, Button, ListItem } from '@rneui/themed';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import AppBar from '../NavBar/AppBar.jsx'
import { Route, Routes } from 'react-router-native'
// import Filters from '../Filters/Filters.jsx';

const Main = () => {
  return (
    <View style={{ flex: 1, width: '100%', backgroundColor: "#c7c8c1" }}>
      <AppBar />
      <Routes>
        <Route path='/' element={<RepositoryList />} />
        <Route path='/claudio' element={<Text>Working on it</Text>} />
        <Route path='/mapview' element={<Map data={RepositoryList} />} />
        <Route path='/pagerview' element={<Text>Working on it</Text>} />
        <Route path='/signin' element={<Text>Working on it</Text>} />
      </Routes>
    </View>
  )
}

{/*Flor*/ }

export function FilterButton() {


return (
    <View styles={styles.container}>
      <TouchableOpacity style={styles.buttonLocation} onPress={() => setIsVisible(true)}
        buttonStyle={styles.button}>
        <View style={styles.buttonColor}>
          <Text style={styles.buttonText}>Filtros</Text>
        </View>
      </TouchableOpacity>
      <IonicIcon
        name="filter"
        size={22}
      />
    </View>
  ) 
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  buttonLocation: {
    position: 'absolute',
    buttom: 40,
    right: 25,
  },
  buttonColor: {
    backgroundColor: '#705E9C',
    width: 70,
    height: 60,
    borderRadius: 10,
    justifyContent: 'center',

  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    top: -15,
    alignSelf: 'center',
  },
})

export default Main