import { View, Text, Image } from 'react-native'
import React from 'react'
import { images } from '../constants'
import CustomButton from './CustomButton';
import { router } from 'expo-router';

const EmptyState = ({title,subtitle}) => {
  return (
    <View className="flex justify-center items-center px-4 -mt-24 ">
      <Image source={images.empty} className="h-72 w-72" resizeMode="contain" />
      <Text className="text-gray-100 font-pmedium text-sm -mt-9">{title}</Text>
      <Text className="text-white font-psemibold text-xl text-center mt-2 ">
        {subtitle}
      </Text>
      <CustomButton
        title="Back to Explore"
        handlePress={() => router.push("/home")}
        containerStyles="w-full my-5"
      />
    </View>
  );
}

export default EmptyState