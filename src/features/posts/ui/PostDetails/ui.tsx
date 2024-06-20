import { View, Text } from "react-native";
import { styles } from ".";
import { useAppSelector } from "@/shared";

const PostDetails = () => {
  const post = useAppSelector((state) => state.post.postDetail);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{post?.title}</Text>
      <Text style={styles.body}>{post?.body}</Text>
    </View>
  );
};

export default PostDetails;
