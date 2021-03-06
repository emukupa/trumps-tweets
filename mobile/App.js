import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import axios from 'axios';
export default class App extends React.Component {
  state = {
    tweet: '',
  };
  async componentDidMount() {
    try {
      const response = await axios.get('http://0.0.0.0:5000/');
      this.setState({ tweet: response.data.tweet });
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={{ fontSize: 20, textAlign: 'center' }}>Trumps Tweets</Text>
        <Text
          style={{
            fontSize: 16,
            padding: 10,
            borderRadius: 10,
            borderWidth: 1,
            borderColor: '#ccc',
            backgroundColor: 'lightblue',
          }}
        >
          {this.state.tweet}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
