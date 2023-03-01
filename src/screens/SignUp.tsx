import { useNavigation } from "@react-navigation/native";
import { Center, Heading, ScrollView, Text, VStack } from "native-base";
import LogoSVG from "../assets/logo.svg";
import { Button } from "../components/Button";
import { Input } from "../components/Input";
import { AuthNavigatorRoutesProps } from "../routes/auth.routes";
import { useForm, Controller } from 'react-hook-form';

export function SignUp() {
  const navigation = useNavigation<AuthNavigatorRoutesProps>();

  function handleGoBack() {
    navigation.navigate("signIn");
  }

  const { control } = useForm();


  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      showsVerticalScrollIndicator={false}
    >
      <VStack flex={1} px={5} pb={16}>
        <Center my={24}>
          <LogoSVG />
          <Text color="gray.100" fontSize="lg" fontFamily="bold">
            Dashboard LTDA
          </Text>
        </Center>

        <Center>
          <Heading color="gray.100" fontSize="lg" fontFamily="medium" mb={6}>
            Crie sua conta
          </Heading>

          <Controller 
            control={control}
            name="name"
            render={({field: {onChange}}) => (
              <Input 
              onChangeText={onChange}
              placeholder="Nome" />
            )}
          />

          

          <Input placeholder="Email" keyboardType="email-address" />

          <Input placeholder="Senha" secureTextEntry />

          <Button title="Criar e acessar" />
        </Center>

        <Button
          title="Voltar para o login"
          variant="outline"
          mt={24}
          onPress={handleGoBack}
        />
      </VStack>
    </ScrollView>
  );
}
