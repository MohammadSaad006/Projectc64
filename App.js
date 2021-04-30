import * as React from 'react';
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { Header } from 'react-native-elements';
import dictionary from './Homescreen'
export default class HomeScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      word: '',
      definition: '',
    };
  }
   
  getWord = (text) => {
    var text=text.toLowerCase();
    try{
    var word=dictionary[text]["word"]
      if(word){
         var lexicalCategory=dictionary[text]["lexicalCategory"]
      var definition=dictionary[text]["definition"]
      this.setState({
        "word":word,
        "lexicalCategory":lexicalCategory,
        "definition":definition
      })
      }
    }
    catch(err){
      alert(" Sorry this word is not available for now");
      this.setState({
        text:'',
        isSearchPressed:false
      })
    }
  };
  render() {
    return (
      <View style={styles.containert}>
      <View style={styles.container}>
        <Header
          backgroundColor={'black'}
          centerComponent={{
            text: 'Dictionary App',
            style: {
              color: 'red',
              fontSize: 25,
              
              width: 313,
              textAlign: 'center',
            },
          }}
        />
        <TextInput
          style={styles.textInput}
          onChangeText={(text) => {
            this.setState({
              text: text,
              word: 'Loading...',
              lexicalCategory: '',
              examples: [],
              definition: '',
            });
          }}
          value={this.state.text}
        />{' '}
        <TouchableOpacity
          style={styles.searchButton}
          onPress={() => {
            this.setState({ isSearchPressed: true });
            this.getWord(this.state.text);
          }}>

          {' '}
          
          <Text style={styles.textIn}> Search </Text>{' '}
                             
        </TouchableOpacity>{' '}

        <Text style={{ fontSize: 18 }}>{this.state.word}</Text>
                <Text style={{alignSelf:"center",marginTop:10}}>{this.state.lexicalCategory}</Text>
        <Text style={styles.definition}>{this.state.definition}</Text>

      </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containert: {
    flex: 1,
    backgroundColor: 'orange',
    alignItems: 'center',
    width: '100%',
  },
  textInput: {
    width: 300,
    height: 50,
    borderWidth: 5,
    margin: 50,
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  searchButton: {
    width: 140,
    height: 90,
    borderRadius: 50,
    borderWidth: 5,
   backgroundColor:'red',
    justifyContent: 'center',
  },
  textIn: {
    textAlign: 'center',
    fontFamily: 'times',
    fontSize: 25,
    alignSelf: 'center',
    fontWeight: 'bold',
    color: '#42de12',
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  definition: {
    fontSize: 18,
    alignSelf: 'center',
    textAlign: 'center',
  },
});
