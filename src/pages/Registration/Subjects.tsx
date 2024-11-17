import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/Card';
import { useState } from 'react';
import { View, Text, ScrollView, Alert } from 'react-native';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';
import FontAwesome6  from '@expo/vector-icons/FontAwesome5';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { RegistrationsHeader } from "@/components/ui/RegistrationHeader";
import { subjectGetAll } from '@/Storage/subject/subjectGetAll';
import { subjectCreate } from '@/Storage/subject/subjectCreate';




export function Subjects () {
  const [subjectCode, setSubjectCode] = useState('')
  const [subjectName, setSubjectName] = useState('')
  const [subjectHours, setSubjectHours] = useState('')

  async function handleAddNewSubject() {
    const data = {
      subjectCode,
      subjectName,
      subjectHours
    }

    await subjectCreate(data)
    
    Alert.alert('Cadastro','Cadastro efetuado com sucesso!!')
    setSubjectCode('')
    setSubjectName('')
    setSubjectHours('')
  }

  const placeholderTextColor = "#71717A"
  return (
    <View className="flex-1 bg-background">
      <RegistrationsHeader title="Cadastro de Disciplinas"/>

      <ScrollView>
        <View className="flex m-5 mt-10">
          <Card id='code'>
            <CardHeader>
              <CardTitle>Código</CardTitle>
              <MaterialCommunityIcons name="identifier" size={34} color="white"/>
            </CardHeader>
            <CardContent>
              <Input
                placeholder='Digite aqui'
                placeholderTextColor={placeholderTextColor}
                value={subjectCode}
                onChangeText={value => setSubjectCode(value)}
              />
            </CardContent>
            <CardFooter>
              <CardDescription>
                Exemplos: LPWI, LPWII, PMI, PMII 
              </CardDescription>
            </CardFooter>
          </Card>

          <Card id='name'>
            <CardHeader>
              <CardTitle>Nome</CardTitle>
              <MaterialIcons name="drive-file-rename-outline" size={28} color="white"/>
            </CardHeader>
            <CardContent>
              <Input
                placeholder='Digite aqui'
                placeholderTextColor={placeholderTextColor}
                value={subjectName}
                onChangeText={value => setSubjectName(value)}
              />
            </CardContent>
            <CardFooter>
              <CardDescription>
                Exemplo: Programação Mobile I
              </CardDescription>
            </CardFooter>
          </Card>

          <Card id='hours'>
            <CardHeader>
              <CardTitle>Carga Horária</CardTitle>
              <FontAwesome6 name="business-time" size={22} color="white" />
            </CardHeader>
            <CardContent>
              <Input
                placeholder='Digite aqui'
                placeholderTextColor={placeholderTextColor}
                value={subjectHours}
                onChangeText={value => setSubjectHours(value)}
                keyboardType='numeric'
              />
            </CardContent>
            <CardFooter>
              <CardDescription>
                Apenas números
              </CardDescription>
            </CardFooter>
          </Card>

          <Button
              title='Cadastrar'
              onPress={handleAddNewSubject}
            />
        </View>
      </ScrollView>
    </View>
  )
}