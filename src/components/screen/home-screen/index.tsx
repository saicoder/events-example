import { useEffect, useState } from 'react'
import { Box, HStack, VStack, ArrowRightIcon, Text, Center, Pressable } from '@gluestack-ui/themed'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { FlatList } from 'react-native'
import { addDays, isBefore, startOfDay } from 'date-fns'

import { DatePicker } from '../../base/date-picker'
import { SearchInput } from '../../base/search-input'
import { useEventsQuery } from '../../../api'
import { EventItemView } from './event-item-view'
import { CartButton } from './cart-button'

export const HomeScreen = () => {
  const { top } = useSafeAreaInsets()

  const initialStartDate = startOfDay(new Date())

  const [query, setQuery] = useState('')
  const [startDate, setStartDate] = useState(initialStartDate)
  const [endDate, setEndDate] = useState(addDays(initialStartDate, 7))

  const { events } = useEventsQuery({
    query,
    startDate,
    endDate,
  })

  // Ensure that end date is bigger at least one day
  useEffect(() => {
    if (isBefore(endDate, startDate)) setEndDate(addDays(startDate, 1))
  }, [startDate, endDate])

  return (
    <Box flex={1}>
      <CartButton />

      <Box
        bg="$white"
        paddingTop={top}
        paddingBottom="$4"
        borderBottomRightRadius="$2xl"
        borderBottomLeftRadius="$2xl"
        softShadow="3"
      >
        <VStack px="$4" space="md">
          <Text size="3xl" fontWeight="$medium" color="$black" my="$2">
            MyEvents
          </Text>
          <SearchInput value={query} onChangeText={setQuery} />
          <HStack space="sm" alignItems="center">
            <DatePicker date={startDate} onDateChange={setStartDate} />
            <ArrowRightIcon />
            <DatePicker date={endDate} onDateChange={setEndDate} />
          </HStack>
        </VStack>
      </Box>

      <FlatList
        data={events}
        keyExtractor={(t) => t.id}
        ListHeaderComponent={<Box h="$4" />}
        ListFooterComponent={<Box h="$16" />}
        ItemSeparatorComponent={() => <Box h="$3" />}
        ListEmptyComponent={
          <Center py="$16">
            <Text>No Items</Text>
          </Center>
        }
        renderItem={({ item }) => <EventItemView item={item} />}
      />
    </Box>
  )
}
