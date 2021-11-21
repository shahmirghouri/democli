import {SignIn, SignUp} from '../Screens';
import * as React from 'react';
import navigationString from '../constants/navigationString';

export default function(Stack) {
  return (
    <>
      <Stack.Screen name={navigationString.SIGNIN} component={SignIn} />
      <Stack.Screen name={navigationString.SIGNUP} component={SignUp} />
    </>
  );
}
