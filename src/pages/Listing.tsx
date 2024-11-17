import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/Card';
import { View, Text, FlatList } from 'react-native'
import { Header } from '@/components/ui/Header'
import { Button } from '@/components/ui/Button';
import { subjectGetAll } from '@/Storage/subject/subjectGetAll';
import { SubjectStorageDTO } from '@/Storage/subject/subjectStorageDTO';
import { useCallback, useState } from 'react';
import { useEffect } from 'react';




export function Listing() {
  const [subjects, setSubjects] = useState<SubjectStorageDTO[]>();

  
  const fetchSubjects = useCallback(async () => {
    const data = await subjectGetAll()
    setSubjects(data)
  }, []);

  useEffect(() => {
    fetchSubjects();
    console.log("Dados carregados: ", subjects);
  }, [fetchSubjects])
  
  function handleListSubjects() {
    fetchSubjects();
  }
  
  return (
    <View className="flex-1 w-full bg-background">
      <Header 
        title='Listagem' 
      />
        <View className="flex-1 gap-5 m-5 mt-10">
          <FlatList
            className='p-2.5 gap-2 border border-border'
            data={subjects}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item}) => (
              <Card id='code'>
                <CardHeader>
                  <CardTitle>
                    {item.subjectCode} - {item.subjectName}
                  </CardTitle>
                </CardHeader>
                <CardFooter>
                  <CardDescription>
                    {item.subjectHours} horas 
                  </CardDescription>
                </CardFooter>
              </Card>
            )}
            ListEmptyComponent={() => (
                <Text className='text-center text-white text-2xl'>
                  Não há registros. Adicione alguma disciplina.
                </Text>
            )}
          />
          <Button
            title='Listar'
            onPress={handleListSubjects}
          />
        </View>
    </View>
  )
}