import React, {useState} from 'react';
import {Text, View, StyleSheet, TextInput, Button} from 'react-native';
import {inject, observer} from 'mobx-react';
import {useNavigation} from '@react-navigation/native';

const CompleteScreen = ({userStore}) => {
  const navigation = useNavigation();

  return (
    <View style={styles.homeView}>
      <Text style={styles.sshoText}>회원가입 완료</Text>
      <View style={{marginTop: 80}}>
        <Button
          style={styles.button}
          title="로그인하기"
          onPress={() => navigation.navigate('S-Sho')}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  homeView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sshoText: {
    color: 'black',
    fontSize: 40,
    marginBottom: 20,
  },
  button: {
    width: 200,
  },
});

export default inject('userStore')(observer(CompleteScreen));
