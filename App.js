import React, { Component } from "react";
import { Text, StyleSheet, View } from "react-native";
import Header from "./src/Header";
import Footer from "./src/Footer";
export default class App extends Component {
  render() {
    return (
      <View>
        <Header />
        <Text> textInComponent </Text>
        <Footer />
      </View>
    );
  }
}

const styles = StyleSheet.create({});
