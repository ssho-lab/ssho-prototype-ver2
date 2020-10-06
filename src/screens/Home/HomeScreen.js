import React, {useState} from 'react';
import {Text, View, StyleSheet, TextInput, Button} from 'react-native';
import {inject, observer} from 'mobx-react';
import {useNavigation} from '@react-navigation/native';

const HomeScreen = ({userStore}) => {
  const navigation = useNavigation();
  const [userName, setUserName] = useState('');

  const handleInput = e => {
    userStore.setUserName(e.nativeEvent.text);
  };

  const handleClick = () => {
    //userStore.setUserName(userName);
    // Todo. 튜토리얼 여부 판단
    userStore.signIn();
    console.log(userStore.user);
    if (userStore.user.status === 'initial') {
      navigation.navigate('Swipe');
    } else {
      navigation.navigate('TagSelect');
    }
  };

  return (
    <View style={styles.homeView}>
      <Text style={styles.sshoText}>🛍️S-SHO</Text>
      <TextInput
        placeholder="이름을 입력하세요"
        style={styles.sshoInput}
        onChange={e => handleInput(e)}
      />
      <Button
        style={styles.button}
        title="로그인"
        onPress={() => handleClick()}
      />
      <Button
        style={styles.button}
        title="회원가입"
        onPress={() => navigation.navigate('SignUpStack')}
      />
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
  sshoInput: {
    width: 160,
    borderWidth: 1,
    borderColor: '#bdc3c7',
    borderRadius: 10,
    marginBottom: 20,
  },
  button: {
    width: 200,
  },
});

export default inject('userStore')(observer(HomeScreen));
