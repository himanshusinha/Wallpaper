import React from 'react';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/FontAwesome';

import {Image, View} from 'react-native';
function CustomDrawer(props) {
  return (
    <DrawerContentScrollView {...props}>
      <View
        style={{
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
          height: 150,
        }}>
        <Image
          style={{width: 100, height: 100, borderRadius: 80}}
          source={{
            uri: `https://mpng.subpng.com/20180411/rzw/kisspng-user-profile-computer-icons-user-interface-mystique-5aceb0245aa097.2885333015234949483712.jpg`,
          }}
        />
      </View>
      <DrawerItem
        label="Home"
        labelStyle={{fontWeight: 'bold', color: 'black'}}
        onPress={() => props.navigation.navigate('Home')} // user props here
        icon={() => <Icon name="comments" size={25} color="black" />}
      />
      <DrawerItem
        label="Favourite"
        labelStyle={{fontWeight: 'bold', color: 'black'}}
        onPress={() => props.navigation.navigate('Favourites')} // user props here
        icon={() => <Icon name="heart" size={25} color="black" />}
      />
      <DrawerItem
        label="Terms &amp; Conditions"
        labelStyle={{fontWeight: 'bold', color: 'black'}}
        icon={() => <Icon name="trash" size={25} color="black" />}
      />
    </DrawerContentScrollView>
  );
}
export default CustomDrawer;
