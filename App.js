/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert
} from 'react-native';




export default class App extends Component {

  constructor(props) {
    super(props)
      this.state = {
          firstName : '',
          password  : '',
          isCheckAll : false,    
      }
  }

  onLoginClicked = () => {
   
    if (this.state.firstName == "") {
      alert('First name is required')
      return false
    } else if (this.state.password == "") {
      alert('Password is required')
    } else {
        alert('all ok.......:)' + this.state.firstName + this.state.password)
    }
  }

  render () {
    return(
      <SafeAreaView>
        <View style={{backgroundColor: 'skyblue', width:'100%', height:'100%'}}>
          <Text style={styles.textLogin}>Login View</Text>
          <TextInput
            style={styles.input}
            placeholder='First Name'
            onChangeText={(text) => { this.setState({ firstName: text })}}
            autoCompleteType='email'
            returnKeyType="go"
            autoCapitalize="none"
            autoCorrect={false}
            autoFocus={true}
          />
        <TextInput
        style={styles.input}
        placeholder='Password'
        secureTextEntry= 'true'
        onChangeText={(text => { this.setState({password: text})})}
        />
         
         <TouchableOpacity
         onPress={this.onLoginClicked}
         style={styles.submitButton}
         >
           <Text
           style={styles.submitButtonText}
           >Login</Text>
           
         </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  };

}


const styles = StyleSheet.create({
  textLogin: {
     color : 'green',
     alignItems: 'center',
     justifyContent: 'center',
     textAlign: 'center',
     marginTop:20,
     fontSize: 28,
     
  },
  input: {
     margin: 15,
     height: 40,
     borderColor: '#7a42f4',
     borderWidth: 1,
     paddingLeft : 6
  },
  submitButton: {
     backgroundColor: '#7a42f4',
     padding: 10,
     margin: 15,
     height: 40,
     
  },
  submitButtonText:{
     color: 'white',
     textAlign:'center',
     fontSize:15
  }
})