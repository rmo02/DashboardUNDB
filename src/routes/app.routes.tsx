import { createBottomTabNavigator, BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { Platform } from 'react-native';
import { Dash } from "../screens/Dash";
import { Home } from "../screens/Home";
import { News } from "../screens/News";
import { Profile } from "../screens/Profile";
import IconDash from "../assets/dashIcon.svg"
import HomeSVG from "../assets/home.svg"
import NewSVG from "../assets/new.svg"
import ProfileSVG from "../assets/profile.svg"
import { useTheme } from "native-base";


type AppRoutes = {
  home: undefined;
  dash: undefined;
  profile: undefined;
  news: undefined;
}

export type AppNavigatorRoutesProps = BottomTabNavigationProp<AppRoutes>;

const { Navigator, Screen } = createBottomTabNavigator<AppRoutes>();

export function AppRoutes() {
  const { sizes, colors } = useTheme()

  return (
    <Navigator screenOptions={{
      headerShown: false,
      tabBarShowLabel: false,
      tabBarActiveTintColor: colors.purple[700],
      tabBarInactiveTintColor: colors.gray[200],
      tabBarStyle: {
        backgroundColor: colors.muted[50],
        borderTopWidth: 0,
        height: Platform.OS === 'android' ? 'auto' : 80,
        paddingBottom: sizes[10],
        paddingTop: sizes[10],
        borderTopLeftRadius:10,
        borderTopRightRadius:10,
      }
    }}>
      <Screen name="home" component={Home} 
      options={{
        tabBarIcon : ({ color}) => (
          <HomeSVG  fill={color}/>
        )
      }} />
      <Screen name="dash" component={Dash} 
            options={{
              tabBarIcon : ({ color}) => (
                <IconDash  fill={color}/>
              )
            }}
      />
      <Screen name="profile" component={Profile}
            options={{
              tabBarIcon : ({ color}) => (
                <ProfileSVG  fill={color}/>
              )
            }}
      />
      <Screen name="news" component={News}
            options={{
              tabBarIcon : ({ color}) => (
                <NewSVG  fill={color}/>
              )
            }}
      />
    </Navigator>
  );
}
