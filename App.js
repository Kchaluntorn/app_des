import React, { Component } from "react";
import { Text, StyleSheet, View } from "react-native";
import Header from "./src/Header";
export default class App extends Component {
  render() {
    return (
      <View>
        <Header />
        <Text> textInComponent </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({});
