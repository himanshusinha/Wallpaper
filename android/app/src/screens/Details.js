import React, {useEffect, useState} from 'react';

// import all the components we are going to use
import {View, Image, Dimensions, Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import ImageZoom from 'react-native-image-pan-zoom';
import WallPaperManager from 'react-native-set-wallpaper';

const Details = props => {
  const setWallpaper = () => {
    WallPaperManager.setWallpaper({
      uri: props.route.params.uri,
    });
  };
  return (
    <View>
      <TouchableOpacity
        onPress={setWallpaper}
        style={{
          backgroundColor: 'rgba(0,0,0,0.8)',
          height: 40,
          justifyContent: 'center',
          alignItems: 'center',
          width: Dimensions.get('window').width,
        }}>
        <Text style={{fontSize: 18, color: 'white'}}>Set WallPaper</Text>
      </TouchableOpacity>

      <ImageZoom
        cropWidth={Dimensions.get('window').width}
        cropHeight={Dimensions.get('window').height}
        imageWidth={Dimensions.get('window').width}
        imageHeight={Dimensions.get('window').height}>
        <Image
          style={{
            width: Dimensions.get('window').width,
            height: Dimensions.get('window').height,
          }}
          source={{uri: props.route.params.uri}}
        />
      </ImageZoom>
    </View>
  );
};
export default Details;
