import { View, Text, TextInput, KeyboardTypeOptions, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react-native'; // Or use another icon library

interface InputProps {
  label: string;
  placeholder: string;
  keyboardType?: KeyboardTypeOptions;
  secureTextEntry?: boolean;
}

const Input = ({
  label,
  placeholder,
  keyboardType,
  secureTextEntry,
}: InputProps) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View className='flex flex-col gap-[4px] w-[342px] h-[70px]'>
      <Text className='font-medium text-[14px] text-[#101010]'>{label}</Text>

      {secureTextEntry ? (
        <View className='w-full h-[41px] rounded-[8px] border-[1px] border-[#CACACA] flex-row items-center px-[16px]'>
          <TextInput
            className='flex-1 text-black'
            placeholder={placeholder}
            keyboardType={keyboardType}
            secureTextEntry={!showPassword}
            autoCapitalize='none'
            autoCorrect={false}
          />
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            {showPassword ? (
              <Eye className="text-gray-500" size={20} />
            ) : (
              <EyeOff className="text-gray-500" size={20} />
            )}
          </TouchableOpacity>
        </View>
      ) : (
        <TextInput
          className='w-full h-[41px] rounded-[8px] border-[1px] py-[12px] px-[16px] border-[#CACACA]'
          placeholder={placeholder}
          keyboardType={keyboardType}
        />
      )}
    </View>
  );
};

export default Input;
