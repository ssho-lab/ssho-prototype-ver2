import React, {useState} from 'react';
import {Text, View, StyleSheet, TextInput, Button} from 'react-native';
import {inject, observer} from 'mobx-react';
import {useNavigation} from '@react-navigation/native';

const SignUpScreen = ({userStore}) => {
  const navigation = useNavigation();
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const handleEmail = e => {
    var text = e.nativeEvent.text;
    userStore.setUserName(text);
    setUserEmail(text);
    checkEmail(text);
  };

  const handlePassword = e => {
    var text = e.nativeEvent.text;
    userStore.setUserName(text);
    setUserPassword(text);
    checkPassword(text);
  };

  const checkEmail = email => {
    var regExp = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
    var check = regExp.test(email);
    if (!check) setEmailError(true);
    else setEmailError(false);
  };

  const checkPassword = password => {
    var regExp = /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{8,10}$/;
    var check = regExp.test(password);
    if (!check) setPasswordError(true);
    else setPasswordError(false);
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
      {emailError && (
        <Text style={styles.errorText}>이메일의 형태로 입력해주세요.</Text>
      )}
      <TextInput
        placeholder="비밀번호를 입력하세요"
        value={userPassword}
        style={styles.sshoInput}
        onChange={e => handlePassword(e)}
      />
      {passwordError && (
        <Text style={styles.errorText}>비밀번호는 8~10자 영문, 숫자 조합</Text>
      )}
      <View style={{marginTop: 80}}>
        <Button
          style={styles.button}
          title="가입하기"
          onPress={() => handleClick()}
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
  errorText: {
    fontSize: 17,
    color: 'rgb(255,0,0)',
  },
  sshoInput: {
    width: 300,
    fontSize: 17,
    borderBottomWidth: 1,
    borderBottomColor: '#bdc3c7',
    marginTop: 50,
  },
  button: {
    width: 200,
  },
});

export default inject('userStore')(observer(SignUpScreen));
