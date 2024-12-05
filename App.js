import { StyleSheet, Text, View } from 'react-native';
import { colors } from './src/styles/colors';
import Template from './src/components/Template';

export default function App() {
  return (
    <View style={styles.container}>
      <Template />
    </View> 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.darkBlack,
  }
});
