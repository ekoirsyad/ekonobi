import React from 'react';
import {Image, View} from 'react-native';
import Button from '~components/button';
import GradientView from '~components/gradient-view';
import Input from '~components/input';
import style from '~screens/login/style';
import useLogin from './hooks/useLogin';

const LoginScreen = () => {
  const {email, setEmail, setPassword, password, loading, login} = useLogin();

  return (
    <GradientView style={style.container}>
      <View>
        <Image style={style.logo} source={require('~assets/logo.png')} />

        <Input
          onChangeText={setEmail}
          value={email}
          label="E-mail Address"
          isEditable={!loading}
          textContentType={'emailAddress'}
          placeholder="Enter E-mail Address"
          errMessage="Invalid E-mail Address"
        />
        <Input
          isPassword={true}
          textContentType={'password'}
          onChangeText={setPassword}
          value={password}
          isEditable={!loading}
          label="Password"
          placeholder="Enter Password"
          errMessage="Invalid Password"
        />
      </View>
      <Button disabled={loading} label="Login" onPress={login} />
    </GradientView>
  );
};

export default LoginScreen;
