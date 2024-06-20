import React from "react";
import { ScrollView, View, Text, FlatList } from "react-native";

import { Card } from "@/entities";
import { useGetPostsQuery } from "../../api";
import { postListStyles as styles } from "./styles";
import { useAppSelector } from "@/shared";
import SkeletonCard from "@/shared/ui/skeleton/ui";

export const PostsList: React.FC = () => {
  const { filters } = useAppSelector((state) => state.post);
  const { data, error, isLoading } = useGetPostsQuery(filters);


  if (isLoading) {
    return (
      <ScrollView contentContainerStyle={styles.container}>
        {Array.from({ length: 10 }).map((_, index) => (
          <SkeletonCard key={index} />
        ))}
      </ScrollView>
    );
  }

  if (error) {
    return (
      <View style={styles.container}>
        <Text>Error loading posts</Text>
      </View>
    );
  }

  return (
    <ScrollView>
      <FlatList
        data={data}
        renderItem={({ item }) => <Card post={item} />}
        keyExtractor={({ id }) => String(id)}
      />
    </ScrollView>
  );
};

