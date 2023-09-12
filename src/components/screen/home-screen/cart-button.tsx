import { useNavigation } from '@react-navigation/native'
import { useCart } from '../../../context/cart'
import { Box, Pressable } from '@gluestack-ui/themed'
import { ShoppingCart } from 'lucide-react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import type { NativeStackNavigationProp } from '@react-navigation/native-stack'
import type { ParamList } from '../../../route'

export const CartButton = () => {
  const navigator = useNavigation<NativeStackNavigationProp<ParamList>>()
  const { items: cartItems } = useCart()
  const { bottom } = useSafeAreaInsets()

  if (cartItems.length === 0) return null

  return (
    <Box position="absolute" bottom={bottom} right={0} p="$3" zIndex={1}>
      <Pressable
        w="$20"
        bg="$red500"
        aspectRatio={1}
        justifyContent="center"
        alignItems="center"
        borderRadius="$full"
        hardShadow="4"
        onPress={() => navigator.navigate('Cart')}
      >
        <ShoppingCart size={30} color="white" />
      </Pressable>
    </Box>
  )
}
