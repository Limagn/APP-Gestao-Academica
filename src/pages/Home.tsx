import { Header } from '@/components/ui/Header'
import { View, Text } from 'react-native'

export function Home() {

  return (
    <View className="flex-1 w-full bg-background">
      <Header title='Home'/>
      <View className="flex-1 justify-center">
      <Text className="text-white text-center font-bold text-3xl">Seja Bem-vindo(a)</Text>
      </View>
    </View>
  )
}