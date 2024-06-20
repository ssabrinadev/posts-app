import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { styles, TPostProps } from ".";
import { useAppDispatch } from "@/shared";
import { setPost } from "@/entities";


export const Card: React.FC<TPostProps> = ({ post }) => {
  const navigation = useNavigation();
  const dispatch = useAppDispatch();

  const handlePress = () => {
    dispatch(setPost(post));
    navigation.navigate("PostDetails");
  };

  return (
    <TouchableOpacity onPress={handlePress} style={styles.card}>
      <Text style={styles.title}>{post.title}</Text>
      <Text style={styles.body}>{post.body}</Text>
      <Text style={styles.footer}>
        User ID: {post.userId}, Post ID: {post.id}
      </Text>
    </TouchableOpacity>
  );
};
