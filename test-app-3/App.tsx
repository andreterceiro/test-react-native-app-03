import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import GalleryScreen from './src/screens/GalleryScreen';
import HomeScreen from './src/screens/HomeScreen';

export default function App() {
  return (
      <View>
          <HomeScreen />
          <GalleryScreen />
      </View>          
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
