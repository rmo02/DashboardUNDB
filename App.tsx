import { StatusBar } from 'react-native';
import { useFonts, Poppins_500Medium,Poppins_700Bold } from '@expo-google-fonts/poppins';
import { Loading } from './src/components/Loading';
import { NativeBaseProvider } from 'native-base';
import { THEME } from './src/theme';
import { Routes } from './src/routes';


export default function App() {
  const [fontsLoaded] = useFonts({Poppins_500Medium, Poppins_700Bold});
 
  return (
    <NativeBaseProvider theme={THEME}>
      <StatusBar
      barStyle='light-content'
      backgroundColor='transparent'
      translucent
      />
      {
        fontsLoaded ? <Routes /> : <Loading />
      }
    </NativeBaseProvider>
  );
}

