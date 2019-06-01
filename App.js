import React, { Component } from "react";
import { Text, StyleSheet, View } from "react-native";
import Header from "./src/components/Header";
import It_device from "./src/components/It_device";
import FooterTabsIconTextExample from "./src/components/Footer";
import { Container } from "native-base";
export default class App extends React.Component {
  render() {
    return (
      <Container>
        <Header />
        <It_device />
        <FooterTabsIconTextExample />
      </Container>
    );
  }
}

const styles = StyleSheet.create({});
