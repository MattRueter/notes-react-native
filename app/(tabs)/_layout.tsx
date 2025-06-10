import { IconSymbol } from "@/app-example/components/ui/IconSymbol";
import { Tabs } from "expo-router";

export default function TabLayout () {
  return(
    <Tabs
      screenOptions={{  headerShown: false}}
    >
      <Tabs.Screen 
        name="(home)"
        options={{
          title:"Home",
          tabBarIcon: () => <IconSymbol size={28} name="house.fill" color="blue" />,
        }}
      />
      <Tabs.Screen 
        name="addNote"
        options={{
          title:"New Note",
          tabBarIcon: () => <IconSymbol size={28} name="plus.circle" color="blue"/>,
        }}
      />
    </Tabs>
  )
}