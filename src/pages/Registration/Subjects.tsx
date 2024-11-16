import { View, Text } from 'react-native';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';
import FontAwesome6  from '@expo/vector-icons/FontAwesome5';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/Card';
import { RegistrationsHeader } from "@/components/ui/RegistrationHeader";

export function Subjects () {


  function handleAddNewSubject(){
    
  }

  const placeholderTextColor = "#71717A"
  return (
    <View className="flex-1 bg-background">
      <RegistrationsHeader title="Cadastro de Disciplinas"/>

      <View className="flex flex-row flex-wrap gap-5 m-5 mt-10">
        <Card id='id'>
          <CardHeader>
            <CardTitle>Código</CardTitle>
            <MaterialCommunityIcons name="identifier" size={34} color="white"/>
          </CardHeader>
          <CardContent>
            <Input
              placeholder='Digite aqui'
              placeholderTextColor={placeholderTextColor}
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
            {/* <Text className="text-4xl font-bold brightness-110 transition-all  text-foreground pb-2">
              R$ 48,22
            </Text> */}
            <Input
              placeholder='Digite aqui'
              placeholderTextColor={placeholderTextColor}
            />
          </CardContent>
          <CardFooter>
            <CardDescription>
            Exemplos: Programação Mobile I
            </CardDescription>
          </CardFooter>
        </Card>

        <Card id='workload'>
          <CardHeader>
            <CardTitle>Carga Horária</CardTitle>
            <FontAwesome6 name="business-time" size={22} color="white" />
          </CardHeader>
          <CardContent>
            <Input
              placeholder='Digite aqui'
              placeholderTextColor={placeholderTextColor}
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
    </View>
  )
}