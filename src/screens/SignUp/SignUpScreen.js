import React, {useState} from 'react';
import {Text, View, StyleSheet, TextInput, Button} from 'react-native';
import {inject, observer} from 'mobx-react';
import {useNavigation} from '@react-navigation/native';

const SignUpScreen = ({userStore}) => {
  const navigation = useNavigation();
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');

  const handleEmail = e => {
    var text = e.nativeEvent.text;
    userStore.setUserName(text);
    setUserEmail(text);
  };

  const handlePassword = e => {
    var text = e.nativeEvent.text;
    userStore.setUserName(text);
    setUserPassword(text);
  };

  const checkEmail = email => {
    var regExp = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
    return regExp.test(email);
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
      <Text style={styles.sshoText}>회원가입</Text>
      <TextInput
        placeholder="이메일을 입력하세요"
        value={userEmail}
        style={styles.sshoInput}
        onChange={e => handleEmail(e)}
      />
      <TextInput
        placeholder="비밀번호를 입력하세요"
        value={userPassword}
        style={styles.sshoInput}
        onChange={e => handlePassword(e)}
      />
      <Button
        style={styles.button}
        title="가입하기"
        onPress={() => handleClick()}
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
    borderBottomWidth: 1,
    borderBottomColor: '#bdc3c7',
    marginBottom: 20,
  },
  button: {
    width: 200,
  },
});

export default inject('userStore')(observer(SignUpScreen));
