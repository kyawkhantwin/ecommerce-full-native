import { FlatList, View, Box, Heading } from "@gluestack-ui/themed";
import ButtonIconComponent from "../../../components/ButtonIconComponent";
import {
  selectAllCategories,
  useGetCategoriesQuery,
} from "../../../redux/reducer/categoriresApiSlice";
import { useSelector } from "react-redux";

const Categories = [
  { icon: "bed", text: "Furniture", iconColor: "#AF8260" },
  { icon: "shirt", text: "Fashion", iconColor: "#121481" },
  { icon: "fast-food", text: "Food", iconColor: "#dc8920" },
  { icon: "flash", text: "Electronic", iconColor: "#F3CA52" },
  { icon: "fitness", text: "Medical", iconColor: "#90D26D" },
  { icon: "book", text: "Book", iconColor: "#d99d29" },
];

const Category: React.FC = () => {
  const { isLoading, isError, isSuccess } = useGetCategoriesQuery();
  const selectCategories = useSelector(selectAllCategories);

  return (
    <View>
      <Box width="100%">
        <Heading $light-color="$black" marginBottom="$2" $dark-color="$white">
          Category
        </Heading>
      </Box>
      <FlatList
        data={Categories}
        renderItem={({ item }) => (
          <ButtonIconComponent
            icon={item.icon}
            text={item.text}
            iconColor={item.iconColor}
          />
        )}
        horizontal={true}
        contentContainerStyle={{ height: 100, paddingTop: 30 }}
        keyExtractor={(item, index) => index.toString()}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default Category;
