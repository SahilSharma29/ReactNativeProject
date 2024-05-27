import {View, Text, SafeAreaView} from 'react-native';
import React from 'react';
import Feature1 from './components/Feature1';

type Props = {};

const App = (props: Props) => {
  return (
    <SafeAreaView>
      <Feature1 />
    </SafeAreaView>
  );
};

export default App;
