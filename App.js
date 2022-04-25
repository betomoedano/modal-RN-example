/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {SafeAreaView, Text, useColorScheme, Button} from 'react-native';
import MyModal from './src/components/MyModal';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const [isModalOpen, setIsModalOpen] = useState(false);

  const backgroundStyle = {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: isModalOpen
      ? isDarkMode
        ? '#ffffff30'
        : 'gray'
      : isDarkMode
      ? '#000'
      : '#fff',
  };
  const textStyle = {
    color: isDarkMode ? 'white' : 'black',
    fontSize: 20,
    fontWeight: 'bold',
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <Text style={textStyle}>Modal</Text>
      <Button title="Open Modal" onPress={() => setIsModalOpen(!isModalOpen)} />
      <MyModal
        isDarkMode={isDarkMode}
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
      />
    </SafeAreaView>
  );
};

export default App;
