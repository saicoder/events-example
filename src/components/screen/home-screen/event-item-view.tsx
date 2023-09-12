import { Box, HStack, Image, Pressable, Text, VStack } from '@gluestack-ui/themed'
import { EventItem } from '../../../api/types'
import { useNavigation } from '@react-navigation/native'

import type { ParamList } from '../../../route'
import type { NativeStackNavigationProp } from '@react-navigation/native-stack'

export interface EventItemViewProps {
  item: EventItem
}

export const EventItemView = ({ item }: EventItemViewProps) => {
  const navigator = useNavigation<NativeStackNavigationProp<ParamList>>()

  return (
    <Pressable
      px="$4"
      onPress={() => {
        navigator.navigate('Event', { id: item.id })
      }}
    >
      <HStack rounded="$2xl" bg="$white" softShadow="1">
        <Image
          overflow="hidden"
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
          <Text fontWeight="$medium">
            {item.location} - ${item.price}
          </Text>
        </VStack>
      </HStack>
    </Pressable>
  )
}
