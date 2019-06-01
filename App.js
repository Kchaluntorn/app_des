import React, { Component } from "react";
import { Text, StyleSheet, View } from "react-native";
import Header from "./src/components/Header";
import It_device from "./src/components/It_device";
import FooterTabsIconTextExample from "./src/components/Footer";
export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Header />
        <It_device />
        <FooterTabsIconTextExample />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
