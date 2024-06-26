import { Text, TextInput, TouchableOpacity, View, Alert } from "react-native";
import HeaderOnlyBack from "../../../components/Headers/HeaderOnlyBack";
import { useState } from "react";
import { StyledComponent } from "nativewind";

export default function CreateClient() {
  const [client, setClient] = useState("");
  const [company, setCompany] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  function sendData() {
    console.log(client, email, company, phone);
    Alert.alert("Sucesso", "Cliente cadastrado com sucesso!");
  }

  return (
    <View className="mt-10 items-center">
      <HeaderOnlyBack title="Criar Cliente" />
      <View className="mt-4 w-96">
        <Text className="text-left font-bold text-lg text-black mb-2">
          Nome
        </Text>
        <View className="items-center rounded-md justify-center h-12 border-2 border-gray-200 w-full">
          <TextInput
            onChangeText={setClient}
            value={client}
            placeholder="Digite o nome do cliente"
            autoCapitalize="none"
            className="flex-1 onFocus:border-inputColor border-black h-12 rounded-md items-center justify-between p-2"
          />
        </View>
        <Text className="text-left font-bold text-lg mt-5 text-black mb-2">
          E-mail
        </Text>
        <View className="items-center rounded-md justify-center h-12 border-2 border-gray-200 w-full">
          <TextInput
            onChangeText={setEmail}
            value={email}
            placeholder="Digite o e-mail do cliente"
            keyboardType="email-address"
            autoCapitalize="none"
            className="flex-1 onFocus:border-inputColor border-black h-12 rounded-md items-center justify-between p-2"
          />
        </View>
        <Text className="text-left font-bold text-lg mt-5 text-black mb-2">
          Empresa
        </Text>
        <View className="items-center rounded-md justify-center h-12 border-2 border-gray-200 w-full">
          <TextInput
            onChangeText={setCompany}
            value={company}
            placeholder="Digite a empresa do cliente"
            autoCapitalize="none"
            className="flex-1 onFocus:border-inputColor border-black h-12 rounded-md items-center justify-between p-2"
          />
        </View>
        <Text className="text-left font-bold text-lg mt-5 text-black mb-2">
          Telefone
        </Text>
        <View className="items-center rounded-md justify-center h-12 border-2 border-gray-200 w-full">
          <TextInput
            onChangeText={setPhone}
            value={phone}
            placeholder="Digite o telefone do cliente"
            keyboardType="phone-pad"
            autoCapitalize="none"
            className="flex-1 onFocus:border-inputColor border-black h-12 rounded-md items-center justify-between p-2"
          />
        </View>
        <View className="flex-1 mt-10 w-96 justify-end">
          <StyledComponent component={TouchableOpacity}>
            <TouchableOpacity
              className="h-14 bg-primary w-auto rounded-md items-center mb-10 justify-center"
              onPress={() => sendData()}
            >
              <Text className="text-white font-medium font-Principal text-md">
                Criar Orçamento
              </Text>
            </TouchableOpacity>
          </StyledComponent>
        </View>
      </View>
    </View>
  );
}
