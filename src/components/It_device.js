import React, { Component } from "react";
import Slideshow from "react-native-image-slider-show";

import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Text,
  Body,
  Button
} from "native-base";
export default class It_device extends Component {
  render() {
    return (
      <Content>
        <Card>
          <CardItem header>
            <Text>Device News</Text>
          </CardItem>
          <CardItem>
            <Body>
              <Slideshow
                dataSource={[
                  { url: "http://placeimg.com/640/480/any" },
                  { url: "http://placeimg.com/640/480/any" },
                  { url: "http://placeimg.com/640/480/any" }
                ]}
              />
            </Body>
          </CardItem>
          <CardItem footer>
            <Button info>
              <Text> Info </Text>
            </Button>
          </CardItem>
        </Card>
        <Card>
          <CardItem header>
            <Text>Device News</Text>
          </CardItem>
          <CardItem>
            <Body>
              <Slideshow
                dataSource={[
                  { url: "http://placeimg.com/640/480/any" },
                  { url: "http://placeimg.com/640/480/any" },
                  { url: "http://placeimg.com/640/480/any" }
                ]}
              />
            </Body>
          </CardItem>
          <CardItem footer>
            <Button info>
              <Text> Info </Text>
            </Button>
          </CardItem>
        </Card>
      </Content>
    );
  }
}
