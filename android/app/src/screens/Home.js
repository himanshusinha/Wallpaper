import React, {useEffect, useState} from 'react';

// import all the components we are going to use
import {
  SafeAreaView,
  StyleSheet,
  View,
  FlatList,
  Image,
  Text,
  TouchableOpacity,
} from 'react-native';
import {Icon} from 'react-native-vector-icons/Icon';
import Images from '../components/Images';
import Loader from '../components/Loader';

const Home = ({navigation}) => {
  const [getPhotos, setPhotos] = useState([]);
  const [pages, setPages] = useState(1);
  const [loader, setLoader] = useState(false);
  const [favourites, setFavourites] = useState([]);
  useEffect(() => {
    getPhotosData();
  }, [pages]);
  console.log('PHOTOS', getPhotos);

  const getPhotosData = async () => {
    await fetch(
      `https://api.unsplash.com/search/photos?client_id=0y0p7K26uFb34lFN0XzdCsE_tRLI4ygdzw7j4ifFE1k&page=${pages}&query=query%20?%20query%20:%20%27wallpaper%27 `,
    )
      .then(res => res.json())
      .then(response => {
        setPhotos([...getPhotos, ...response.results]);
        setLoader(false);
      })
      .catch(error => {
        console.log(error);
      });
  };
  const addToFavorites = (item, cb) => {
    const favorites = Object.assign([], this.state.favorites);
    const index = favorites.findIndex(f => f.id === item.id);

    if (index === -1) {
      favorites.push(item);
    } else {
      favorites.splice(index, 1);
    }
    this.setState({
      favorites,
    });
  };
  return (
    <SafeAreaView style={styles.container}>
      {loader ? (
        <Loader />
      ) : (
        <FlatList
          data={getPhotos}
          renderItem={({item}) => (
            <View style={{flex: 1, flexDirection: 'column', margin: 1}}>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('Details', {
                    description: item.description,
                    uri: item.urls.raw,
                  });
                }}>
                <View>
                  <Image
                    style={styles.imageThumbnail}
                    source={{
                      uri: item.urls.raw,
                    }}
                  />
                </View>
              </TouchableOpacity>
            </View>
          )}
          //Setting the number of column
          numColumns={3}
          keyExtractor={(item, index) => index}
          onEndReachedThreshold={0.5}
          onEndReached={() => setPages(pages + 1)}
        />
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  imageThumbnail: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 200,
  },
});
export default Home;
