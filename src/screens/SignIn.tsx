import { useNavigation } from "@react-navigation/native";
import { Center, Heading, ScrollView, Text, VStack } from "native-base";
import LogoSVG from "../assets/logo.svg";
import { Button } from "../components/Button";
import { Input } from "../components/Input";
import { AuthNavigatorRoutesProps } from "../routes/auth.routes";
import { useForm, Controller } from 'react-hook-form';
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';

type FormDataProps = {
  email: string;
  password: string;
}

const signInSchema = yup.object({
  email: yup.string().required('Informe o email').email('Email inválido'),
  password: yup.string().required('Informe a senha').min(6, 'A senha deve ter pelo menos 6 dígitos')
})

export function SignIn() {
  const navigation = useNavigation<AuthNavigatorRoutesProps>()

  function handleNewAccount(){
    navigation.navigate('signUp');
  }

  const {control, handleSubmit, formState:{errors}} = useForm<FormDataProps>({
    resolver: yupResolver(signInSchema)
  });

  function handleSignIn(data: FormDataProps) {
    console.log(data);
  }

  return (
    <ScrollView contentContainerStyle={{flexGrow: 1}} showsVerticalScrollIndicator={false}>
      <VStack flex={1} px={5} pb={16}>
        <Center my={24}>
          <LogoSVG />
          <Text color="gray.100" fontSize="lg" fontFamily="bold">
            Dashboard LTDA
          </Text>
        </Center>

        <Center>
          <Heading color="gray.100" fontSize="lg" fontFamily="medium" mb={6}>
            Acesse sua conta
          </Heading>

          <Controller 
            control={control}
            name="email"
            render={({field: {onChange, value}}) => (
              <Input 
              onChangeText={onChange}
              placeholder="Email"
              keyboardType="email-address"
              value={value}
              errorMessage={errors.email?.message}
              />
            )}
          />


          <Controller 
            control={control}
            name="password"
            render={({field: {onChange, value}}) => (
              <Input 
              onChangeText={onChange}
              placeholder="Senha"
              secureTextEntry
              value={value}
              errorMessage={errors.password?.message}
              />
            )}
          />


          <Button title="Acessar" onPress={handleSubmit(handleSignIn)}/>
        </Center>

        <Center mt={24}>
          <Text mb={3} color="white" fontSize="sm" fontFamily="medium">
            Ainda não tem acesso?
          </Text>
          <Button title="Criar conta" variant="outline" onPress={handleNewAccount}/>
        </Center>
      </VStack>
    </ScrollView>
  );
}
