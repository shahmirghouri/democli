import React, {useState} from 'react';

import {View, Text, SafeAreaView, TextInputComponent} from 'react-native';
import ConstButton from '../../asset/button';
import TextInputWithLable from '../../Component/TextInputWithLable';
import navigationString from '../../constants/navigationString';
import styles from './styles';
import validator from '../../utils/validations';
import {showError} from '../../utils/helperFunction';

export default function SignIn({navigation}) {
  const [state, setState] = useState({
    isLoading: false,

    email: '',
    password: '',
    isSecure: true,
  });

  const {isLoading, email, password, isSecure} = state;
  const updateState = data => setState(() => ({...state, ...data}));

  const isValidData = () => {
    const error = validator({
      email,
      password,
    });

    if (error) {
      //   alert(error);
      showError(error);
      return false;
    } else {
      return true;
    }
  };

  const onLogin = () => {
    const checkValid = isValidData();
    if (checkValid) {
      navigation.navigate('SignUp');
    }
  };

  return (
    <View style={styles.container}>
      <TextInputWithLable
        placeholder="Your Email"
        label="E-mail"
        onChangeText={email => updateState({email})}
      />

      <TextInputWithLable
        placeholder="Your Password"
        label="Password"
        isSecure={isSecure}
        secureTextEntry={isSecure}
        onChangeText={password => updateState({password})}
      />

      <ConstButton text="LOGIN" onPress={onLogin} />
    </View>
  );
}
