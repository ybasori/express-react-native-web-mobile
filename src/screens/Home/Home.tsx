import React from "react";
import {
  Button,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from "react-native";
import { IScreenProps } from "src/App.types";

type SectionProps = {
  title: string;
  children: React.ReactNode;
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "600",
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: "400",
  },
  highlight: {
    fontWeight: "700",
  },
});

function Section({ children, title }: SectionProps) {
  return (
    <View style={styles.sectionContainer}>
      <Text style={[styles.sectionTitle]}>{title}</Text>
      <Text style={[styles.sectionDescription]}>{children}</Text>
    </View>
  );
}

const Home = ({ navigation }: IScreenProps) => {
  const isDarkMode = useColorScheme() === "dark";
  return (
    <>
      <StatusBar barStyle={isDarkMode ? "light-content" : "dark-content"} />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View>
          <Section title="Step One">
            Edit <Text style={styles.highlight}>App.tsx</Text> to change this
            screen and then come back to see your edits.zzz xxxx
          </Section>
          <Section title="Learn More">
            Read the docs to discover what to do next:
          </Section>
          <Button
            title="Profile"
            onPress={() => navigation.navigate("Profile")}
          />
        </View>
      </ScrollView>
    </>
  );
};

export default Home;
