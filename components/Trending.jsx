import { View, Text, FlatList } from 'react-native'
import React from 'react'

const Trending = ({posts}) => {
  return (
    <FlatList
      data={posts}
      keyExtractor={(item) => item.$id}
      renderItem={({ item }) => <Text className="text-yellow-500">{item.id}</Text>}
      horizontal
    //   ListHeaderComponent={({item}) => (
    //     <Text className="text-purple text-3xl">{item}</Text>
    //   )}
    
    ></FlatList>
  );
}

export default Trending