import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  ListRenderItem,
} from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

type Course = {
  courseId: string;
  title: string;
  description: string;
};

type CourseStackParamList = {
  CourseList: undefined;
  CourseDetail: { courseId: string; title: string; description: string };
};

type Props = {
  navigation: NativeStackNavigationProp<CourseStackParamList, "CourseList">;
};

const DATA: Course[] = [
  {
    courseId: "1",
    title: "Intro à React",
    description: "Apprendre la base de réact avec M.Noël",
  },
  {
    courseId: "2",
    title: "JavaScript Avancé",
    description: "Apprends le Java",
  },
  {
    courseId: "3",
    title: "UI/UX for Developers",
    description: "Apprendre les bases du design",
  },
];

export default function CourseListScreen({ navigation }: Props) {
  const renderItem: ListRenderItem<Course> = ({ item }) => (
    <TouchableOpacity
      key={item.courseId}
      style={styles.card}
      onPress={() =>
        navigation.navigate("CourseDetail", {
          courseId: item.courseId,
          title: item.title,
          description: item.description,
        })
      }
    >
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.sub}>{item.description}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Courses</Text>
      <FlatList
        data={DATA}
        keyExtractor={(i) => i.courseId}
        renderItem={renderItem}
        contentContainerStyle={{ paddingBottom: 24 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: "#fff" },
  header: { fontSize: 24, fontWeight: "700", marginBottom: 12 },
  card: {
    backgroundColor: "#f3f4f6",
    padding: 14,
    borderRadius: 10,
    marginBottom: 12,
  },
  title: { fontSize: 18, fontWeight: "600" },
  sub: { color: "#555", marginTop: 6 },
});
