import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { AntDesign, Feather } from "@expo/vector-icons";
import Recently from "./Recently";
import Connenting from "./Connenting";

const Community = () => {
  const [screen, setScreen] = useState("screen1");
  return (
    <View style={{ backgroundColor: "white", height: "100%" }}>
      <View style={{ alignItems: "center" }}>
        <Image
          source={require("../storages/onboarding/onboarding1.png")}
          style={{ position: "absolute", height: 178, alignItems: "center" }}
        />

        <View
          style={{
            height: 178,
            backgroundColor: "rgba(255, 255, 255, 0.9)",
            borderRadius: 25,
            width: "100%",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginHorizontal: 20,
              marginTop: 50,
            }}
          >
            <Text
              style={{
                color: "black",
                fontSize: 28,
                fontWeight: "900",
              }}
            >
              New feed
            </Text>
            <Feather name="bell" size={30} color="black" />
          </View>
          <View
            style={{
              marginTop: 20,
            }}
          >
            <View>
              <View style={styles.tabContainer}>
                <TouchableOpacity
                  onPress={() => setScreen("screen1")}
                  style={[screen === "screen1" && styles.btn]}
                >
                  <Text
                    style={[
                      styles.tabText,
                      screen === "screen1" && styles.tabTextBold,
                    ]}
                  >
                    Recently posted
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => setScreen("screen2")}
                  style={[screen === "screen2" && styles.btn]}
                >
                  <Text
                    style={[
                      styles.tabText,
                      screen === "screen2" && styles.tabTextBold,
                    ]}
                  >
                    Connenting
                  </Text>
                </TouchableOpacity>
              </View>
              <View style={{}}>
                {screen === "screen1" && <Recently />}
                {screen === "screen2" && <Connenting />}
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Community;

const styles = StyleSheet.create({
  tabContainer: {
    paddingTop: "8%",
    paddingBottom: "3%",
    flexDirection: "row",
    justifyContent: "space-around",
    width: 376,
    alignItems: "center",

    alignSelf: "center",
  },
  tabText: {
    fontSize: 16,
    color: "black",
    fontWeight: "700",
  },
  tabTextBold: {
    fontWeight: "bold",
    color: "white",
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
