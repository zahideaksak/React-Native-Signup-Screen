/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
// Icon.loadFont().then();

const App = () => {
  // const [userName, setUserName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [hidePass, setHidePass] = useState(true);

  //useEffect(() => {
  //console.log('useEffect içinde', userName);
  //setPassword('userName');
  //}, []);
  return (
    <SafeAreaView>
      <View style={{paddingHorizontal: 20}}>
        <View style={{paddingTop: 50}}>
          <Icon
            name="arrowleft"
            style={{
              color: '#3b444b',
              fontSize: 20,
              paddingLeft: 5,
            }}
          />
          <Text style={{fontSize: 25, fontWeight: '900', paddingVertical: 10}}>
            SIGNUP
          </Text>
          <Text>
            Become a <Text style={styles.boldText}>NIKE</Text> member.
          </Text>
        </View>

        <View style={{flexDirection: 'column', paddingTop: 20}}>
          <Text style={styles.inputText}>Name</Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#ededed',
              height: 50,
              paddingHorizontal: 25,
              borderRadius: 10,
              borderWidth: 1,
              borderStyle: 'dashed',
            }}>
            <TextInput
              style={styles.inputName}
              placeholder="The Pesante"
              // value={userName}
              // onChangeText={value => setUserName(value)}
            />
            <Icon
              name="checkcircleo"
              style={{color: 'black', fontSize: 20, borderColor: '#000'}}
            />
          </View>
          <View style={{marginVertical: 10}}>
            <Text style={styles.inputText}>Email</Text>
            <TextInput
              style={styles.inputMail}
              placeholder="@nike.com"
              placeholderTextColor="#818181"
              value={email}
              onChangeText={value => setEmail(value)}
            />
          </View>
          <Text style={styles.inputText}>Password</Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#ededed',
              height: 50,
              paddingHorizontal: 25,
              borderRadius: 10,
            }}>
            <TextInput
              style={styles.inputName}
              placeholder="Pick a strong password"
              secureTextEntry={hidePass}
            />
            <Icon
              style={{color: 'black', fontSize: 20, borderColor: '#000'}}
              name={hidePass ? 'eye' : 'eyeo'}
              onPress={() => setHidePass(!hidePass)}
            />
          </View>
          <Text
            style={{
              color: '#555',
              fontSize: 10,
              paddingTop: 8,
              paddingLeft: 10,
            }}>
            Your password must be 8 or more characters long and contain a mix
            upper & lower case letters, number ans symbol
          </Text>
        </View>
        <View style={{marginTop: 100}}>
          <TouchableOpacity style={styles.btn}>
            <Text style={styles.btnText}>JOIN US</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  inputText: {
    paddingBottom: 7,
    paddingTop: 15,
    paddingLeft: 6,
    color: '#3f3f3f',
    fontSize: 13,
  },
  inputName: {
    position: 'relative',
    height: 50,
    width: '100%',
    borderStyle: 'dashed',
  },
  inputMail: {
    height: 50,
    paddingHorizontal: 10,
    borderRadius: 7,
    backgroundColor: '#ededed',
    marginBottom: 8,
    fontSize: 14,
    fontWeight: '600',
  },
  inputPassw: {
    height: 50,
    paddingHorizontal: 10,
    borderRadius: 7,
    backgroundColor: '#ededed',
    marginBottom: 8,
    fontSize: 14,
    fontWeight: '600',
  },
  btn: {
    height: 55,
    width: '100%',
    borderRadius: 30,
    borderWidth: 1,
    backgroundColor: '#000',
    marginTop: 100,
  },
  btnText: {
    color: '#FFF',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '900',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 10,
  },
  boldText: {
    fontWeight: 'bold',
  },
});

export default App;
