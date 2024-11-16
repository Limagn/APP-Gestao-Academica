import { createBottomTabNavigator, BottomTabNavigationProp,  } from "@react-navigation/bottom-tabs";
import { Home } from "../pages/Home";
import { Listing } from "../pages/Listing";
import { Search } from "../pages/Search";
import { TabIcon } from "@/components/ui/TabIcon";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Feather from '@expo/vector-icons/Feather';
import FontAwesome from '@expo/vector-icons/FontAwesome5';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { RegistrationStack } from "./stack.routes";

type AppRoutes = {
  home: undefined;
  registration: undefined;
  listing: undefined;
  search: undefined;
};

export type AppNavigatorRoutesProps = BottomTabNavigationProp<AppRoutes>;

const { Navigator, Screen } = createBottomTabNavigator<AppRoutes>();

export function AppRoutes() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        tabBarLabelPosition: 'below-icon',
        tabBarActiveTintColor: '#FFFFFF',
        tabBarInactiveTintColor: '#A8A29E',
        tabBarStyle: {  height: '10%', backgroundColor: '#000' },
        tabBarItemStyle: { paddingTop: 5 },
        tabBarLabelStyle: {
          marginTop: 10,
          fontSize: 11, 
        },
      }}
    >
      <Screen
        name="home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: (({ focused, color }) => 
            <TabIcon 
              IconComponent={FontAwesome6} 
              name="house" 
              color={color} 
              focused={focused} 
              size={22}
            />
          )
        }}
      />

      <Screen
        name="registration"
        component={RegistrationStack}
        options={{
          tabBarLabel: 'Cadastros',
          tabBarIcon: (({ focused, color }) => 
            <TabIcon 
              IconComponent={MaterialIcons} 
              name="app-registration" 
              color={color} 
              focused={focused} 
              size={30}
            />
          ),
        }}
      />

      <Screen
        name="listing"
        component={Listing}
        options={{
          tabBarLabel: 'Listagem',
          tabBarIcon: (({ focused, color }) => 
            <TabIcon 
              IconComponent={FontAwesome5} 
              name="list-ul" 
              color={color} 
              focused={focused} 
              size={26}
            />
          ),
        }}
      />

      <Screen
        name="search"
        component={Search}
        options={{
          tabBarLabel: 'Pesquisar',
          tabBarIcon: (({ focused, color }) => 
            <TabIcon 
              IconComponent={FontAwesome} 
              name="search" 
              color={color} 
              focused={focused} 
              size={24}
            />
          ),
        }}
      />
    </Navigator>
  );
}