import React from 'react';
import {Image, View, Text} from 'react-native';
import Button from '~components/button';
import GradientView from '~components/gradient-view';
import Input from '~components/input';
import style from '~screens/login/style';
import {italic} from '~utils/styles/typography';
import useLogin from '~screens/login/hooks/useLogin';

const LoginScreen = () => {
  const {loading, login, fields, onChange, fieldError, error} = useLogin();

  return (
    <GradientView style={style.container}>
      <View>
        {error ? (
          <Text style={[italic, style.errorMessage]}>{error}</Text>
        ) : (
          <></>
        )}
        <Image style={style.logo} source={require('~assets/logo.png')} />

        <Input
          onChangeText={e => onChange('email', e)}
          value={fields.email}
          label="E-mail Address"
          isEditable={!loading}
          textContentType={'emailAddress'}
          placeholder="Enter E-mail Address"
          errMessage={fieldError.email}
        />
        <Input
          isPassword={true}
          textContentType={'password'}
          onChangeText={e => onChange('password', e)}
          value={fields.password}
          isEditable={!loading}
          label="Password"
          placeholder="Enter Password"
          errMessage={fieldError.password}
        />
      </View>
      <Button disabled={loading} label="Login" onPress={login} />
    </GradientView>
  );
};

export default LoginScreen;
