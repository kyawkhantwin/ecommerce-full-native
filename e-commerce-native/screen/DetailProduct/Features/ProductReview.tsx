import { Heading, VStack, ScrollView } from "@gluestack-ui/themed";

import UserReviewCard from "../../../components/UserReviewCard";
import ReviewForm from "../../../components/ReviewForm";

const ProductReview = () => {
  return (
    <ScrollView>
      <Heading>Reviews</Heading>
      <VStack marginTop="$4">
        <UserReviewCard />
        <UserReviewCard />
        <UserReviewCard />
        <UserReviewCard />
        <UserReviewCard />
      </VStack>
      <ReviewForm />
    </ScrollView>
  );
};

export default ProductReview;
