import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

type CourseStackParamList = {
  CourseList: undefined;
  CourseDetail: { courseId: string; title: string; description: string };
};

type Props = NativeStackScreenProps<CourseStackParamList, "CourseDetail">;

export default function CourseDetailScreen({ route }: Props) {
  const { courseId, title, description } = route.params;

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.courseId}>Course ID: {courseId}</Text>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>

      <Text style={styles.body}>
        Ce cours comprend des leçons, des exemples et des exercices. Il est conçu pour
        être pratique : vous réaliserez de petits projets et mettrez en application ce que vous apprendrez.
        {"\n\n"}Good luck and enjoy learning!
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: "#fff" },
  courseId: { color: "#888", marginBottom: 8 },
  title: { fontSize: 24, fontWeight: "700", marginBottom: 10 },
  description: { fontSize: 16, color: "#444", marginBottom: 16 },
  body: { fontSize: 16, lineHeight: 22, color: "#333" },
});
