import { FlatList, Image, RefreshControl, StatusBar, Text, View } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

import images from "../../constants/images";
import SearchInput from "../../components/SearchInput";
import Trending from "../../components/Trending";
import EmptyState from "../../components/EmptyState";

const Home = () => {
  const [refreshing, setRefreshing] = useState(false);

   const onRefresh = async () => {
     setRefreshing(true);
     //we again call videos if any new videos appeared
     setRefreshing(false);
   };
  return (
    <SafeAreaView className="bg-primary h-full">
      <FlatList
        // className="bg-red-800"
        // data={[{ id: 1 }, { id: 2 }, { id: 3 }]}
        keyExtractor={(item) => item.$id}
        renderItem={({ item }) => (
          <Text className="text-white text-3xl">{item.id}</Text>
        )}
        ListHeaderComponent={() => (
          <View className="flex my-6 px-4 space-y-6">
            <View className="flex justify-between items-start flex-row mb-6">
              <View className=" ">
                <Text className="text-gray-100 font-pmedium text-sm">
                  Welcome Back
                </Text>
                <Text className="text-white font-psemibold text-2xl ">
                  Vivek
                </Text>
              </View>

              <View className="mt-1.5">
                <Image
                  source={images.logoSmall}
                  className="w-9 h-10 "
                  resizeMethod="contain"
                />
              </View>
            </View>
            <SearchInput />

            <View className="w-full flex-1 pt-5 pb-8">
              <Text className="text-lg font-pregular text-gray-100 mb-3">
                Latest Videos
              </Text>
              <Trending posts={[{ id: 1 }, { id: 2 }, { id: 3 }]} />
            </View>
          </View>
        )}
        ListEmptyComponent={() => (
          <EmptyState
            title="No Videos Found"
            subtitle="No videos created yet"
          />
        )}
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh}/>}
      />
      <StatusBar backgroundColor="#161622" style="light" />
    </SafeAreaView>
  );
};

export default Home;
