import "react-native-gesture-handler";
import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { DrawerActions } from "@react-navigation/native";
import { Text, TouchableOpacity } from "react-native";

// Screens
import CourseListScreen from "./screens/CourseListScreen";
import CourseDetailScreen from "./screens/CourseDetailScreen";
import WishlistScreen from "./screens/WishlistScreen";
import ProfileScreen from "./screens/ProfileScreen";

type CourseStackParamList = {
  CourseList: undefined;
  CourseDetail: { courseId: string; title: string; description: string };
};

const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator<CourseStackParamList>();

function AllCoursesStack({ navigation }: { navigation: any }) {
  return (
    <Stack.Navigator
      screenOptions={{
        headerLeft: () => (
          <TouchableOpacity
            onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
            style={{ marginLeft: 12 }}
          >
            <Text style={{ fontSize: 22 }}>☰</Text>
          </TouchableOpacity>
        ),
      }}
    >
      <Stack.Screen
        name="CourseList"
        component={CourseListScreen}
        options={{ title: "All Courses" }}
      />
      <Stack.Screen
        name="CourseDetail"
        component={CourseDetailScreen}
        options={({ route }) => {
          const params = route.params as { title?: string };
          return { title: params?.title ?? "Course Details" };
        }}
      />
    </Stack.Navigator>
  );
}

function CoursesTabs() {
  return (
    <Tab.Navigator
      initialRouteName="AllCourses"
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: "#007bff",
        tabBarInactiveTintColor: "gray",
        tabBarStyle: { backgroundColor: "#fff", paddingBottom: 6, height: 58 },
        tabBarIcon: () => {
          if (route.name === "AllCourses") return <Text>📚</Text>;
          if (route.name === "Wishlist") return <Text>💖</Text>;
          return null;
        },
      })}
    >
      <Tab.Screen
        name="AllCourses"
        component={AllCoursesStack}
        options={{ title: "Tous les cours", headerShown: false }}
      />
      <Tab.Screen
        name="Wishlist"
        component={WishlistScreen}
        options={{ title: "Ma Wishlist" }}
      />
    </Tab.Navigator>
  );
}

export default function RootLayout() {
  return (
    <Drawer.Navigator
      initialRouteName="Courses"
      screenOptions={{ drawerType: "slide", headerShown: false }}
    >
      <Drawer.Screen
        name="Courses"
        component={CoursesTabs}
        options={{ drawerLabel: "Courses", drawerIcon: () => <Text>📚</Text> }}
      />
      <Drawer.Screen
        name="Profile"
        component={ProfileScreen}
        options={{ drawerLabel: "Mon compte", drawerIcon: () => <Text>👤</Text> }}
      />
    </Drawer.Navigator>
  );
}
