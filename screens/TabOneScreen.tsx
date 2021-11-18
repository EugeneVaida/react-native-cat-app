import React, { useState } from 'react';
import { StyleSheet, Image, Button } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';

export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  const [count, setCount] = useState(0);

  function onPressLearnMore(){
    setCount(count + 1)
    console.log(count);
  } 

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab One</Text>

      <Image
        source={require('./../assets/images/cat.png')}
      />

      <Button
        onPress={onPressLearnMore}
        title="Tab me"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />
      <Text>{count}</Text>

      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="/screens/TabOneScreen.tsx" />
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
