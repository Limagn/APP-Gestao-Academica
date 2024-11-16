import React from 'react';
import { View, Alert, Linking, ScrollView } from 'react-native'
import { Header } from '@/components/ui/Header';
import { Button } from '../components/ui/Button'
import { Input } from '@/components/ui/Input';



export function Search() {

  const handlePress = async () => {

  };
  
  return (
    <View className="flex-1 w-full bg-background">
      <Header title='Pesquisar'/>
      <ScrollView>
        <View className='m-5'>
          <Input
            placeholder='Disciplina'
            placeholderTextColor='#fff'
          />
          <Button
            title='Pesquisar'
            // onPress={()=> handlePress('')}
          />
        </View>  
      </ScrollView>
    </View>
  )
}
