import React, {useState} from 'react';
import {Text, View, StyleSheet, TextInput, Button} from 'react-native';
import {inject, observer} from 'mobx-react';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage';

const HomeScreen = ({userStore}) => {
  const navigation = useNavigation();
  // const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // const handleInput = e => {
  //   userStore.setUserName(e.nativeEvent.text);
  // };

  const handleEmail = e => {
    setEmail(e.nativeEvent.text);
    userStore.setUserEmail(e.nativeEvent.text);
  };

  const handlePassword = e => {
    setPassword(e.nativeEvent.text);
    userStore.setUserPassword(e.nativeEvent.text);
  };

  const handleClick = () => {
    //userStore.setUserName(userName);
    // Todo. 튜토리얼 여부 판단
    userStore.signIn();
    console.log(userStore.user);

    saveToken(userStore.user.token);

    if (userStore.user.status === 'initial') {
      navigation.navigate('Swipe');
    } else {
      navigation.navigate('TagSelect');
    }
  };

  // asyncstorage에 토큰을 저장한다
  const saveToken = async (token) => {
    try {
      await AsyncStorage.setItem('token', token);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <View style={styles.homeView}>
      <Text style={styles.sshoText}>🛍️S-SHO</Text>
      {/* <TextInput
        placeholder="이름을 입력하세요"
        style={styles.sshoInput}
        onChange={e => handleInput(e)}
      /> */}
      <TextInput
        placeholder="이메일을 입력하세요"
        style={styles.sshoInput}
        value={email}
        onChange={e => handleEmail(e)}
      />
      <TextInput
        placeholder="비밀번호를 입력하세요"
        style={styles.sshoInput}
        value={password}
        onChange={e => handlePassword(e)}
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
