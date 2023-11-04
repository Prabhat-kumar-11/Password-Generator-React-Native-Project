import {View, Text, SafeAreaView, ScrollView} from 'react-native';
import React, {useState} from 'react';
import * as Yup from 'yup';

// Form validation using Yup
const PasswordSchema = Yup.object().shape({
  passwordLength: Yup.number()
    .min(4, 'should be min of 4 characters')
    .max(16, 'should be max of 16 characters')
    .required('Length is required'),
});

const App = () => {
  const [password, setPassword] = useState('');
  const [isPassGenerated, setIsPassGenerateded] = useState(false);
  const [lowerCase, setLowerCase] = useState(true);
  const [upperCase, setUpperCase] = useState(false);
  const [number, setNumbers] = useState(false);
  const [symbol, setSymbol] = useState(false);

  const generatePasswordString = (passwordLength: number) => {};

  const createPassword = (characters: string, passwordLength: number) => {
    let result = '';

    for (let i = 0; i < passwordLength; i++) {
      const characterIndex = Math.random() * characters.length;
    }
  };

  const resetPasswordState = () => {};

  return (
    <SafeAreaView>
      <Text></Text>
    </SafeAreaView>
  );
};

export default App;
