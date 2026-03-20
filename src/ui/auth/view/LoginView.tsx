import { Text } from 'react-native';

import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';


export const LoginView = () => {


  return (
    <SafeAreaView edges={['top']} style={{ flex: 1 }}>
      <Text>Login</Text>
    </SafeAreaView>
  );
};
