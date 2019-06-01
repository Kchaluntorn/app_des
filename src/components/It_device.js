import React, { Component } from "react";
import { Image } from "react-native";
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Thumbnail,
  Text,
  Button,
  Icon,
  Left,
  Body,
  Right
} from "native-base";
export default class It_device extends Component {
  render() {
    return (
      <Card>
        <CardItem>
          <Left>
            <Thumbnail
              source={{
                uri:
                  "https://kikloginonlinee.com/wp-content/uploads/2015/06/kik-login-on-any-device.png"
              }}
            />
            <Body>
              <Text>News device</Text>
              <Text note>1/6/62</Text>
            </Body>
          </Left>
        </CardItem>
        <CardItem cardBody>
          <Image
            source={{
              uri:
                "https://kikloginonlinee.com/wp-content/uploads/2015/06/kik-login-on-any-device.png"
            }}
            style={{ height: 200, width: null, flex: 1 }}
          />
        </CardItem>
      </Card>
    );
  }
}
