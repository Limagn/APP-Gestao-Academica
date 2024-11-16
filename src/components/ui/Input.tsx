import { TextInput, View, TextInputProps } from 'react-native';

type InputProps = TextInputProps;

export function Input({ ...rest }: InputProps) {
  return (
    <View className="w-full">
      <TextInput
        className="w-full bg-card p-5 text-foreground text-base mt-0.5 rounded-xl shadow border border-border"
        {...rest}
      />
    </View>
  );
}
