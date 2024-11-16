import { ScrollView, View, Text } from 'react-native'
import { Header } from '@/components/ui/Header'


export function Listing() {

  return (
    <View className="flex-1 w-full bg-background">
      <Header 
        title='Listagem' 
      />
      <ScrollView>
        <View className='m-5'>

        </View>
      </ScrollView>
    </View>
  )
}