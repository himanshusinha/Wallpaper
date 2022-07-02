import React, {useState} from 'react';
import {Text, View} from 'react-native';
const Images = props => {
  const [data, setData] = useState('');
  console.log('========= DAATAA', props.description);
  return (
    <View>
      <Text>{data.description} </Text>
    </View>
  );
};
export default Images;
