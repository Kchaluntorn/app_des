import React, { Component } from "react";
import { Text, StyleSheet, View } from "react-native";
import Actions from "react-native-routes-flux";

export default class Header extends Component {
  render() {
    return (
      <View>
        <Text> This is header </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({});
