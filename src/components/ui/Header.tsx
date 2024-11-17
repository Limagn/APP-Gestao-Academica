import { View, Text } from 'react-native';


interface HeaderProps {
  title: string;
  subtitle?: string;
}

export function Header({ title, subtitle }: HeaderProps) {
  return (
    <View className="w-full items-center h-[18%] bg-black">
      <Text className="text-white just font-bold text-3xl mt-8 pt-10">{title}</Text>
      <Text className="text-muted-foreground">{subtitle}</Text>
    </View>
  );
}
