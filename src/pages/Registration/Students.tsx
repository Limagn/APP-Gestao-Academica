import { View } from "react-native"
import { RegistrationsHeader } from "@/components/ui/RegistrationHeader";

export function Students () {

  return (
    <View className="flex-1 bg-background">
      <RegistrationsHeader title="Cadastro de Alunos"/>
    </View>
  )
}