import React,{Component} from 'react';
import {View,Text,TouchableOpacity,StyleSheet,TextInput,Alert} from 'react-native';
import {Header} from 'react-native-elements';
import Constants from 'expo-constants';

import { RFValue } from "react-native-responsive-fontsize";

export default class NumberParts extends Component{
constructor(props){
     super(props)
     this.state = {
       value1: 1,
       value2: 1,
       value3: 1,
       value4: 1,
       value5: 1,
       value6: 1,
       value7: 1,
       value8: 1,
       value9: 1,
       value10: 1,
     }
   }

   clearNumbers = () => {

   }

   multipliedNumber = () => {
     var v1 = parseInt(this.state.value1)
     var v2 = parseInt(this.state.value2)
     var v3 = parseInt(this.state.value3)
     var v4 = parseInt(this.state.value4)
     var v5 = parseInt(this.state.value5)
     var v6 = parseInt(this.state.value6)
     var v7 = parseInt(this.state.value7)
     var v8 = parseInt(this.state.value8)
     var v9 = parseInt(this.state.value9)
     var v10 = parseInt(this.state.value10)

     var end = v1*v2*v3*v4*v5*v6*v7*v8*v9*v10
      

     alert(end);
   }

  render(){
return (
    <View style={styles.container}>
    <Header
          backgroundColor={'#d1b091'}
          centerComponent={{
            text: 'Multiplier App',
            style: { color: '#fff', fontSize: 20},
          }}/>

      <Text style={styles.text}>
      *Change numbers if nececary
      </Text>

      <TextInput 
        style={styles.button1}
        placeholder="1"
        onChangeText={ value1 =>
        this.setState({
        value1
         })
          }/>

      <TextInput 
        style={styles.button}
        placeholder="1"
        onChangeText={ value2 =>
        this.setState({
        value2
         })
          }/>

      <TextInput 
        style={styles.button}
        placeholder="1"
        onChangeText={ value3 =>
        this.setState({
        value3
         })
          }/>

      <TextInput 
        style={styles.button}
        placeholder="1"
        onChangeText={ value4 =>
        this.setState({
        value4
         })
          }/>

      <TextInput 
        style={styles.button}
        placeholder="1"
        onChangeText={ value5 =>
        this.setState({
        value5
         })
          }/>

      <TextInput 
        style={styles.button}
        placeholder="1"
        onChangeText={ value6 =>
        this.setState({
        value6
         })
          }/>        

      <TextInput 
        style={styles.button}
        placeholder="1"
        onChangeText={ value6 =>
        this.setState({
        value6
         })
          }/>  

      <TextInput 
        style={styles.button}
        placeholder="1"
        onChangeText={ value7 =>
        this.setState({
        value7
         })
          }/>  

      <TextInput 
        style={styles.button}
        placeholder="1"
        onChangeText={ value8 =>
        this.setState({
        value8
         })
          }/>  

      <TextInput 
        style={styles.button}
        placeholder="1"
        onChangeText={ value9 =>
        this.setState({
        value9
         })
          }/>  

      <TextInput 
        style={styles.button}
        placeholder="1"
        onChangeText={ value10 =>
        this.setState({
        value10
         })
          }/>           

      <TouchableOpacity style={styles.answer}
        onPress = {()=>
        this.multipliedNumber()}>
      <Text>Answer</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.final}
        onPress = {()=>
        this.clearNumbers()}>
      <Text>Clear</Text>
      </TouchableOpacity>

    </View>
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#f6fffc',
    padding: 8,
  },

  button1: {
    fontSize: RFValue(13),
    backgroundColor: "#fffc",
    borderWidth: 1,
    borderColor: '#000000',
    paddingLeft: RFValue(10),
    marginTop: RFValue(65),
    marginLeft: RFValue(28),
    height: RFValue(35),
    width: 250,
  },

  button: {
    fontSize: RFValue(13),
    backgroundColor: "#fffc",
    borderWidth: 1,
    borderColor: '#000000',
    paddingLeft: RFValue(10),
    marginTop: RFValue(22),
    marginLeft: RFValue(28),
    height: RFValue(35),
    width: 250,
  },

  answer: {
    marginTop: 85,
    marginLeft: 55,
    borderWidth: 1,
    fontWeight: "bold",
    borderColor: '#000000',
    backgroundColor: '#c439',
    alignItems: 'center',
    justifyContent: 'center',
    width: 200,
    height: 50,
  },  

  final: {
    fontSize: RFValue(13),
    backgroundColor: "#b3c1f1",
    fontWeight: "bold",
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#000000',
    paddingLeft: RFValue(10),
    marginTop: RFValue(25),
    marginLeft: RFValue(70),
    width: 180,
    height: 45,
  },
  text: {
    fontSize: RFValue(11),
    marginTop: RFValue(10)
  }


/*  add: {
    marginTop: 20,
    marginLeft: 80,
    borderWidth: 1,
    borderColor: '#000000',
    backgroundColor: '#fc41',
    alignItems: 'center',
    justifyContent: 'center',
    width: 150,
    height: 40,
  },*/
})