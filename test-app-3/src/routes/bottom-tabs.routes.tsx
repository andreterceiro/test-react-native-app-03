import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import HomeScreen from '../screens/HomeScreen'
import GalleryScreen from '../screens/GalleryScreen'

const { Screen, Navigator } = createBottomTabNavigator()

export default function BottomTabsRoutes() {
    return <Navigator>
      <Screen name="home" component={HomeScreen} />
      <Screen name="gallery" component={GalleryScreen} />
    </Navigator>
}