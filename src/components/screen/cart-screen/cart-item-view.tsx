import { Box, Button, ButtonText, HStack, Image, Text, VStack } from '@gluestack-ui/themed'
import { CartItem } from '../../../context/cart'

export interface CartItemViewProps {
  cartItem: CartItem
  updateQty: (id: string, qty: number) => void
}

export const CartItemView = ({ cartItem, updateQty }: CartItemViewProps) => {
  const { item, qty } = cartItem

  return (
    <Box px="$4">
      <HStack rounded="$2xl" bg="$white" softShadow="4">
        <Image
          source={{ uri: item.image }}
          h="$32"
          aspectRatio={1}
          borderTopLeftRadius={16}
          borderBottomLeftRadius={16}
        />

        <VStack p="$4" flex={1}>
          <Text fontWeight="$medium" numberOfLines={1} w="$full">
            {item.name}
          </Text>
          <Text mt="$1">{item.date.toDateString()}</Text>

          <Box flex={1} />

          {/* QTY CONTROLS */}
          <HStack space="md" alignItems="center">
            <Button
              size="xs"
              variant="outline"
              action="secondary"
              onPress={() => updateQty(item.id, qty + 1)}
            >
              <ButtonText>+</ButtonText>
            </Button>

            <Text fontWeight="$bold">{qty}</Text>

            <Button
              size="xs"
              variant="outline"
              action="secondary"
              onPress={() => updateQty(item.id, qty - 1)}
            >
              <ButtonText>-</ButtonText>
            </Button>
          </HStack>
        </VStack>
      </HStack>
    </Box>
  )
}
