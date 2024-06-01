import {
  Avatar,
  HStack,
  Heading,
  Text,
  VStack,
  AvatarFallbackText,
  AvatarImage,
  Icon,
  Card,
  View,
  ScrollView,
} from "@gluestack-ui/themed";
import { Star } from "lucide-react-native";

const UserReviewCard = () => {
  return (
    <Card size="md" variant="outline" m="$2" >
    <VStack
      space="md"
      display="flex"
      flexDirection="row"
      alignItems="center"
    >
      <Avatar bgColor="$amber600" size="md" borderRadius="$full">
        <AvatarImage
          alt="avatar"
          source={{
            uri: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          }}
        />
      </Avatar>

      <VStack space="xs">
        <Heading size="xs">Amber</Heading>
        <HStack space="xs">
          <Icon as={Star} />
          <Icon as={Star} />
          <Icon as={Star} />
          <Icon as={Star} />
          <Icon as={Star} />
        </HStack>
      </VStack>
    </VStack>
      <Text marginTop="$3">
        This Product is amazing and it is super easy to use.I recommend you to
        buy
      </Text>
  </Card>
  )
}

export default UserReviewCard