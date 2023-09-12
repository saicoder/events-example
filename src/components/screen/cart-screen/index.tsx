import { FlatList } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native'
import { ArrowLeftIcon, Box, Text, HStack, Pressable, Center } from '@gluestack-ui/themed'

import { useCart } from '../../../context/cart'
import { CartItemView } from './cart-item-view'

export const CartScreen = () => {
  const navigator = useNavigation()
  const { top } = useSafeAreaInsets()
  const { items, updateQty } = useCart()

  return (
    <Box flex={1} mt={top}>
      {/* HEADER */}
      <HStack alignItems="center" justifyContent="space-between">
        <Pressable
          w="$12"
          h="$12"
          alignItems="center"
          justifyContent="center"
          onPress={() => navigator.goBack()}
        >
          <ArrowLeftIcon fontSize={12} />
        </Pressable>
        <Text>Cart</Text>
        <Box w="$12" />
      </HStack>

      {/* LIST */}
      <FlatList
        data={items}
        keyExtractor={(t) => t.item.id}
        ListHeaderComponent={<Box h="$4" />}
        ItemSeparatorComponent={() => <Box h="$3" />}
        ListEmptyComponent={
          <Center py="$16">
            <Text>No Items</Text>
          </Center>
        }
        renderItem={({ item }) => <CartItemView cartItem={item} updateQty={updateQty} />}
      />
    </Box>
  )
}
