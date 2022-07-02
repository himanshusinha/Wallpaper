import React from 'react';
import {Modal, View} from 'react-native';
import {ActivityIndicator} from 'react-native';

const Loader = ({visible}) => {
  return (
    <Modal visible={visible} transparent>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          backgroundColor: 'rgba(0,0,0,0.5)',
        }}>
        <View style={{alignSelf: 'center'}}>
          <ActivityIndicator size={'large'} color={'white'} />
        </View>
      </View>
    </Modal>
  );
};
export default Loader;
