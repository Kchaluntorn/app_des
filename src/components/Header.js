import React, { Component } from "react";
import { Text, StyleSheet, View } from "react-native";

export default class Header extends Component {
  render() {
    return (
      <View>
        <Text style={styles.container}> Cabbage IT </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 30,
    backgroundColor: "red",
    color: "white",
    textAlign: "left",
    fontSize: 20,
    fontWeight: "bold"
  }
});
