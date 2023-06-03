import * as React from 'react';

import { StyleSheet, View, Text } from 'react-native';
import PinLockView from "react-native-pin-lock-view";

export default function App() {

  React.useEffect(() => {}, []);

  return (
    <View style={styles.container}>
      <PinLockView />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
