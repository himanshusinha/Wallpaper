import * as React from 'react';
import {Button, View} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import Home from './android/app/src/screens/Home';
import CustomDrawer from './android/app/src/components/CustomDrawer';
import Favourites from './android/app/src/screens/Favourites';
import Details from './android/app/src/screens/Details';

const Drawer = createDrawerNavigator();
const App = () => {
  return (
    <NavigationContainer>
      {/* <Stack.Screen name="Details" component={Details} /> */}
      <Drawer.Navigator
        initialRouteName="Home"
        drawerContent={props => <CustomDrawer {...props} />}>
        <Drawer.Screen
          name="Home"
          component={Home}
          options={{headerTitleAlign: 'center'}}
        />
        <Drawer.Screen
          name="Favourites"
          component={Favourites}
          options={{headerTitleAlign: 'center'}}
        />
        <Drawer.Screen
          name="Details"
          component={Details}
          options={{headerTitleAlign: 'center'}}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};
export default App;
