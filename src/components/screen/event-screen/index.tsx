import { Image, VStack, Text, Button, ButtonText, ScrollView } from '@gluestack-ui/themed'
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native'
import { useEventById } from '../../../api'

import type { ParamList } from '../../../route'
import { useCart } from '../../../context/cart'

export const EventScreen = () => {
  const route = useRoute<RouteProp<ParamList, 'Event'>>()
  const navigator = useNavigation()
  const { addToCart } = useCart()

  const id = route.params?.id
  const { event } = useEventById(id)

  const onAddToCart = () => {
    if (!event) return

    addToCart(event)
    navigator.goBack()
  }

  // TODO: Add Not found view
  if (!event) return null

  return (
    <ScrollView>
      <Image source={{ uri: event.image }} w="100%" aspectRatio={1} />

      <VStack p="$6">
        <Text fontWeight="$medium" size="3xl">
          {event.name}
        </Text>
        <Text mt="$4" fontWeight="$medium">
          Date: {event.date.toDateString()}
        </Text>
        <Text fontWeight="$medium">Location: {event.location}</Text>
        <Text fontWeight="$medium">Price: ${event.price}</Text>

        <Button mt="$10" size="md" onPress={onAddToCart}>
          <ButtonText>Add To Cart</ButtonText>
        </Button>

        <Button mt="$3" action="secondary" onPress={() => navigator.goBack()}>
          <ButtonText>Cancel</ButtonText>
        </Button>
      </VStack>
    </ScrollView>
  )
}
