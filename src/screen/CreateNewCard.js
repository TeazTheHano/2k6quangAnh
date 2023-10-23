import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { AntDesign, Feather } from "@expo/vector-icons";
import { Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

const CreateNewCard = () => {
  const navigation = useNavigation();
  return (
    <View>
      <View style={{ alignItems: "center" }}>
        <Image
          source={require("../storages/onboarding/onboarding1.png")}
          style={{ position: "absolute", height: 149, alignItems: "center" }}
        />

        <View
          style={{
            height: 149,
            backgroundColor: "rgba(0, 0, 0, 0.85)",
            borderRadius: 25,
            width: "100%",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginHorizontal: 20,
              marginTop: 60,
            }}
          >
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Text style={{ fontSize: 16, color: "#2D81FF" }}>Cancel</Text>
            </TouchableOpacity>

            <Text
              style={{
                color: "white",
                fontSize: 20,
                fontWeight: "900",
              }}
            >
              Sport
            </Text>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Text style={{ fontSize: 16, color: "#2D81FF" }}>Done</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={{ marginHorizontal: 20 }}>
        <View
          style={{
            width: "100%",
            height: 70,
            backgroundColor: "rgba(134, 223, 208, 0.39)",
            borderRadius: 10,
            marginTop: 30,
            justifyContent: "center",
          }}
        >
          <View
            style={{
              marginHorizontal: 20,
              alignItems: "center",
              justifyContent: "space-between",
              flexDirection: "row",
            }}
          >
            <View style={{}}>
              <Text style={{ fontSize: 12, color: "gray", marginBottom: 5 }}>
                Desk name
              </Text>
              <Text style={{ fontSize: 20, fontWeight: "900" }}>
                B1 Vocabularies
              </Text>
            </View>
            <Feather name="edit-3" size={24} color="black" />
          </View>
        </View>
        <View
          style={{ alignSelf: "center", marginTop: 10, alignItems: "center" }}
        >
          <Image source={require("../storages/card.png")} />

          <Text
            style={{
              fontSize: 20,
              color: "#2D81FF",
              fontWeight: "600",
              marginTop: 5,
            }}
          >
            10 cards
          </Text>
        </View>
        <View
          style={{
            width: "100%",
            height: 82,
            borderWidth: 2,
            borderRadius: 10,
            justifyContent: "center",
            marginTop: 55,
          }}
        >
          <View style={{ marginLeft: 20 }}>
            <Text style={{ color: "#2D81FF", marginBottom: 10 }}>
              Frontside
            </Text>
            <TextInput
              placeholder="Max 100 characters"
              style={{ fontWeight: "600", fontSize: 16 }}
            />
          </View>
        </View>
        <View
          style={{
            height: 307,
            borderWidth: 2,
            borderRadius: 10,
            borderColor: "#86DFD0",
            marginTop: 20,
            alignItems: "center",
          }}
        >
          <View style={{ marginTop: 10 }}>
            <Text style={{ color: "#2D81FF" }}>Backside</Text>
            <TextInput
              placeholder="Max 100 characters"
              style={{ fontWeight: "600", fontSize: 16, marginVertical: 5 }}
            />
            <Text style={{ color: "#2D81FF", marginBottom: 5 }}>Add photo</Text>
            <Image source={require("../storages/contentcard/background.png")} />
          </View>
        </View>
      </View>
    </View>
  );
};

export default CreateNewCard;

const styles = StyleSheet.create({});
