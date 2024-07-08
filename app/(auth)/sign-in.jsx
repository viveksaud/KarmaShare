import { ScrollView, Text, View, Image, Alert } from "react-native";
import { Link, router } from "expo-router";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";


import { images} from "../../constants";
import FormField from '../../components/FormField';
import CustomButton from "../../components/CustomButton";

import { signIn } from "../../lib/appwrite";

const sign_in = () => {
  const [form, setForm] = useState({
    email: '',
    password: ''
  })

  const [isSubmitting, setSubmitting] = useState(false);

const submit = async () => {
  if(!form.email || !form.password){
      // alert("Please fill all the fields");
      Alert.alert('Error', 'Please fill all the fields');
    }
    setSubmitting(true);
    try {
      await signIn(form.email,form.password);

      //later set it to global state...using context
      router.replace('/home');
    } catch (error) {
      Alert.alert('Error', error.message);
    }finally{
      setSubmitting(false);
    }
}

  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView>
        <View className="w-full justify-center min-h-[80vh] px-4 my-6">
          <Image
            source={images.logo}
            resizeMode="contain"
            className='w-56 h-8'
            // className="w-[115px] h-[34px]"
          />

          <Text className="text-2xl font-semibold text-white mt-10 font-psemibold">
            Log in to KarmaShare
          </Text>

          <FormField
            title="Email"
            value={form.email}
            handleChangeText={(e) => setForm({ ...form, email: e })}
            otherStyles="mt-7"
            keyboardType="email-address"
          />
          <FormField
            title="Password"
            value={form.password}
            handleChangeText={(e) => setForm({ ...form, password: e })}
            otherStyles="mt-7"
          />

          <CustomButton
            title="Sign In"
            handlePress={submit}
            containerStyles="mt-7"
            isLoading={isSubmitting}
          />
        </View>

        <View className="flex justify-center pt-5 flex-row gap-2 -mt-20">
          <Text className="text-lg text-gray-100 font-pregular">
            Don't have an account?{" "}
          </Text>
          <Link
            href={"/sign-up"}
            className="text-lg font-psemibold text-secondary"
          >
            Sign Up
          </Link>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default sign_in;