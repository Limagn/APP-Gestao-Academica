import { ScrollView, View, Text } from 'react-native'
import { Header } from '@/components/ui/Header'
import { Button } from '@/components/ui/Button'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RegistrationStackRoutes } from '@/routes/stack.routes'


export type RegistrationScreenNavigationProp = NativeStackNavigationProp<RegistrationStackRoutes, 'Registration'>;


export function Registration() {

  const navigation = useNavigation<RegistrationScreenNavigationProp>()

  return (
    <View className="flex-1 bg-background">
      <Header title='Cadastros'/>
      <Text className="mt-10 mb-5 text-white text-center font-bold text-xl">Seleciona a opção que deseja cadastrar:</Text>
      <View className=' mb-0 h-[35%] p-3'>
        <ScrollView>
          <Button
            title='Disciplina'
            onPress={() => navigation.navigate('Subjects')}
          />
          <Button
            title='Aluno'
            onPress={() => navigation.navigate('Students')}
          />
          <Button
            title='Professores'
            onPress={() => navigation.navigate('Professors')}
          />
        </ScrollView>
      </View>
  </View>
  )
}