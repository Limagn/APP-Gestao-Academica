import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Registration } from "@/pages/Registration";
import { Subjects } from "@/pages/Registration/Subjects";
import { Students } from "@/pages/Registration/Students";
import { Professors } from "@/pages/Registration/Professors";


export type RegistrationStackRoutes = {
  Registration: undefined;
  Subjects: undefined;
  Students: undefined;
  Professors: undefined;
};

const Stack = createNativeStackNavigator<RegistrationStackRoutes>();

export function RegistrationStack() {
  return (
    <Stack.Navigator 
      screenOptions={{ 
        headerShown: false,
      }}>
      <Stack.Screen
        name="Registration"
        component={Registration}
      />
      <Stack.Screen
        name="Subjects"
        component={Subjects}
      />
      <Stack.Screen
        name="Students"
        component={Students}
      />
      <Stack.Screen
        name="Professors"
        component={Professors}
      />
    </Stack.Navigator>
  );
}