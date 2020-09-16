import React from "react"
import { View, Image, ImageBackground } from "react-native"
import {
  withStyles,
  Text,
  Button,
  CheckBox,
  Radio,
  Toggle,
  Icon,
  Input,
  Datepicker
} from "react-native-ui-kitten"
import Slider from "@react-native-community/slider"

import { SlideMenuIcon } from "../../../navigator/slideMenuIcon"
import { connect } from "react-redux"
export class __Blank extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return { headerLeft: <SlideMenuIcon navigationProps={navigation} /> }
  }
  state = { Input_20: "", Input_21: "" }
  render = () => (
    <View
      style={{
        width: "100%",
        height: "100%",
        marginLeft: 0,
        marginRight: 0,
        marginTop: 0,
        marginBottom: 0,
        paddingLeft: 0,
        paddingRight: 0,
        paddingTop: 0,
        paddingBottom: 0,
        overflow: "visible",
        fontSize: 12,
        color: "#000000",
        backgroundColor: "#00FFFF",
        fontFamily: "Roboto-Regular",
        flexDirection: "column",
        flexWrap: "wrap",
        justifyContent: "flex-start",
        alignItems: "stretch",
        alignContent: "stretch",
        borderColor: "#000000",
        borderStyle: "solid",
        borderWidth: 0,
        borderLeftWidth: 0,
        borderRightWidth: 0,
        borderTopWidth: 0,
        borderBottomWidth: 0,
        borderRadius: 0,
        backgroundSize: "auto"
      }}
    >
      <Image
        resizeMode="center"
        source={{
          uri:
            "https://d3tklmlrp1a8c2.cloudfront.net/media/project_component_resources/jtp_logo.png"
        }}
        style={{
          width: "49%",
          height: 56,
          marginLeft: 0,
          marginRight: 0,
          marginTop: 0,
          marginBottom: 0,
          paddingLeft: 0,
          paddingRight: 0,
          paddingTop: 18,
          paddingBottom: 0,
          overflow: "visible",
          alignSelf: "center",
          borderColor: "#a92323",
          borderStyle: "solid",
          borderRadius: 0
        }}
      />
      <Text
        style={{
          width: 108,
          height: 26,
          marginLeft: 90,
          marginRight: 0,
          marginTop: 113,
          marginBottom: 5,
          paddingLeft: 6,
          paddingRight: 5,
          paddingTop: 5,
          paddingBottom: 5,
          overflow: "visible",
          fontSize: 18,
          color: "#000000",
          backgroundColor: "#00FFFF\t",
          fontFamily: "Montserrat-Regular",
          borderColor: "#000000",
          borderStyle: "solid",
          borderWidth: 0,
          borderLeftWidth: 0,
          borderRightWidth: 0,
          borderTopWidth: 0,
          borderBottomWidth: 0,
          borderRadius: 0,
          textAlign: "right",
          textAlignVertical: "center",
          textDecorationLine: "none",
          textTransform: "none",
          lineHeight: 12,
          letterSpacing: 0
        }}
      >
        Username
      </Text>
      <Input
        placeholder="Email"
        editable={true}
        textStyle={{
          fontSize: 12,
          color: "#000000",
          textAlign: "left",
          fontFamily: "Roboto-Regular"
        }}
        style={{
          width: "61%",
          height: 29,
          marginLeft: 48,
          marginRight: 0,
          marginTop: 5,
          marginBottom: 5,
          paddingLeft: 5,
          paddingRight: 5,
          paddingTop: 5,
          paddingBottom: 5,
          overflow: "visible",
          fontSize: 12,
          color: "#000000",
          backgroundColor: "#ffffff",
          fontFamily: "Roboto-Regular",
          borderColor: "#000000",
          borderStyle: "solid",
          borderWidth: 0,
          borderLeftWidth: 0,
          borderRightWidth: 0,
          borderTopWidth: 0,
          borderBottomWidth: 0,
          borderRadius: 0,
          textAlign: "left",
          textAlignVertical: "center",
          textDecorationLine: "none",
          textTransform: "none",
          lineHeight: 12,
          letterSpacing: 0
        }}
        value={this.state.Input_20}
        onChangeText={nextValue => this.setState({ Input_20: nextValue })}
      />
      <Text
        style={{
          width: 105,
          height: 26,
          marginLeft: 86,
          marginRight: 0,
          marginTop: 11,
          marginBottom: 5,
          paddingLeft: 8,
          paddingRight: 5,
          paddingTop: 5,
          paddingBottom: 6,
          overflow: "visible",
          fontSize: 18,
          color: "#000000",
          backgroundColor: "#00FFFF\t",
          fontFamily: "Montserrat-Regular",
          borderColor: "#000000",
          borderStyle: "solid",
          borderWidth: 0,
          borderLeftWidth: 0,
          borderRightWidth: 0,
          borderTopWidth: 0,
          borderBottomWidth: 0,
          borderRadius: 0,
          textAlign: "center",
          textAlignVertical: "center",
          textDecorationLine: "none",
          textTransform: "none",
          lineHeight: 12,
          letterSpacing: 0
        }}
      >
        Password
      </Text>
      <Input
        placeholder="Password"
        editable={true}
        textStyle={{
          fontSize: 12,
          color: "#000000",
          textAlign: "left",
          fontFamily: "Roboto-Regular"
        }}
        style={{
          width: "61%",
          height: 29,
          marginLeft: 48,
          marginRight: 0,
          marginTop: 5,
          marginBottom: 5,
          paddingLeft: 5,
          paddingRight: 5,
          paddingTop: 5,
          paddingBottom: 5,
          overflow: "visible",
          fontSize: 12,
          color: "#000000",
          backgroundColor: "#ffffff",
          fontFamily: "Roboto-Regular",
          borderColor: "#000000",
          borderStyle: "solid",
          borderWidth: 0,
          borderLeftWidth: 0,
          borderRightWidth: 0,
          borderTopWidth: 0,
          borderBottomWidth: 0,
          borderRadius: 0,
          textAlign: "left",
          textAlignVertical: "center",
          textDecorationLine: "none",
          textTransform: "none",
          lineHeight: 12,
          letterSpacing: 0
        }}
        value={this.state.Input_21}
        onChangeText={nextValue => this.setState({ Input_21: nextValue })}
      />
      <TouchableOpacity onPress={() => this.props.navigation.navigate("")}>
        <Button
          textStyle={{
            fontSize: 12,
            color: "#000000",
            textAlign: "center",
            fontFamily: "Roboto-Regular"
          }}
          style={{
            width: "100%",
            marginLeft: 0,
            marginRight: 0,
            marginTop: 5,
            marginBottom: 5,
            paddingLeft: 5,
            paddingRight: 5,
            paddingTop: 5,
            paddingBottom: 5,
            overflow: "visible",
            fontSize: 12,
            color: "#000000",
            backgroundColor: "#3366FF",
            fontFamily: "Roboto-Regular",
            borderColor: "#000000",
            borderStyle: "solid",
            borderWidth: 0,
            borderLeftWidth: 0,
            borderRightWidth: 0,
            borderTopWidth: 0,
            borderBottomWidth: 0,
            borderRadius: 0,
            textAlign: "center",
            textAlignVertical: "center",
            textDecorationLine: "none",
            textTransform: "none",
            lineHeight: 12,
            letterSpacing: 0
          }}
          onPress={() => alert("Pressed!")}
        >
          Press me!
        </Button>
      </TouchableOpacity>
    </View>
  )
}

_Blank = withStyles(__Blank, theme => ({
  container: { backgroundColor: theme["color-basic-100"] }
}))

function mapStateToProps(state) {
  return { state: state }
}
const actionCreators = {}
export default connect(mapStateToProps, actionCreators)(_Blank)
