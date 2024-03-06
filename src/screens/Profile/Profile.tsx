import React from "react";
import {
  Button,
  ScrollView,
  StatusBar,
  Text,
  useColorScheme,
  View,
} from "react-native";
import { IScreenProps } from "src/App.types";

const Profile = ({ navigation }: IScreenProps) => {
  const isDarkMode = useColorScheme() === "dark";
  return (
    <>
      <StatusBar barStyle={isDarkMode ? "light-content" : "dark-content"} />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View>
          <Text>Profilezzz</Text>
          <Button title="Go Home" onPress={() => navigation.navigate("Home")} />
        </View>
      </ScrollView>
    </>
  );
};

export default Profile;
