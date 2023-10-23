import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import Follower from "./Follower";
import Following from "./Following";

const Connenting = () => {
  const [screen, setScreen] = useState("screen1");
  return (
    <View>
      <View
        style={{
          height: 77,
          backgroundColor: "black",
          borderBottomStartRadius: 25,
          borderBottomEndRadius: 25,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            marginTop: 10,
            position: "absolute",
          }}
        >
          <Image
            source={require("../storages/avt.png")}
            style={{
              width: 57,
              height: 57,
              position: "absolute",
              top: 2,
              left: 20,
            }}
          />
          <View style={{ marginTop: 20, marginLeft: 30 }}>
            <View style={styles.tabContainer}>
              <TouchableOpacity onPress={() => setScreen("screen1")}>
                <Text
                  style={[
                    styles.tabText,
                    screen === "screen1" && styles.tabTextBold,
                  ]}
                >
                  101 Follower
                </Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => setScreen("screen2")}>
                <Text
                  style={[
                    styles.tabText,
                    screen === "screen2" && styles.tabTextBold,
                  ]}
                >
                  98 Following
                </Text>
              </TouchableOpacity>
            </View>
            <View style={{ marginTop: "20%" }}>
              {screen === "screen1" && <Follower />}
              {screen === "screen2" && <Following />}
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Connenting;

const styles = StyleSheet.create({
  tabContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: 300,
    alignItems: "center",

    alignSelf: "center",
  },
  tabText: {
    fontSize: 16,
    color: "white",
    fontWeight: "700",
  },
  tabTextBold: {
    fontWeight: "bold",
    color: "white",
    textDecorationLine: "underline",
  },
  btn: {
    width: 160,
    height: 35,
    borderRadius: 20,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
  },
});
