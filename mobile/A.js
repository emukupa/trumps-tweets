import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import axios from 'axios';
export default class App extends React.Component {
  state = {
    tweet: '',
  };
  async componentDidMount() {
    const response = await axios('http://0.0.0.0:5000/');
    this.setState({ tweet: response.data.tweet });
  }
  render() {
    return (
      <View style={styles.container}>
        <Text
          style={{
            fontSize: 20,
            textAlign: 'center',
            marginBottom: 10,
          }}
        >
          Trumps latest tweet
        </Text>
        <Text
          style={{
            padding: 10,
            fontSize: 16,
            borderWidth: 1,
            borderRadius: 10,
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
  container: {},
});
