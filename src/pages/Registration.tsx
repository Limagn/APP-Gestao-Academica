import { ScrollView, View, Text, Alert } from 'react-native'
import { Header } from '@/components/ui/Header'
import { Button } from '@/components/ui/Button'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RegistrationStackRoutes } from '@/routes/stack.routes'
import AsyncStorage from '@react-native-async-storage/async-storage'


export type RegistrationScreenNavigationProp = NativeStackNavigationProp<RegistrationStackRoutes, 'Registration'>;


export function Registration() {

  const navigation = useNavigation<RegistrationScreenNavigationProp>()

  function deleteAll() {
    Alert.alert(
      "Atenção!",
      "Tem certeza que deseja limpar todos os registros?",
      [
        {
          text: 'Sim',
          onPress: () => {
            AsyncStorage.clear()
            Alert.alert('Registros apagados com sucesso!')
          }
        },
        {
          text: 'Não',
          style: 'cancel'
        }
      ]
    )
  }

  return (
    <View className="flex-1 bg-background">
      <Header title='Cadastros'/>
      <Text className="mt-10 mb-5 text-white text-center font-bold text-xl">Seleciona a opção que deseja cadastrar:</Text>
      <View className='flex-1 mb-0 p-3'>
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
          <Button
            style={{backgroundColor: '#C00000'}}
            title='Limpar Registros'
            onPress={deleteAll}
          />
      </View>
  </View>
  )
}