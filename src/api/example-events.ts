import { addDays } from 'date-fns'
import { EventItem } from './types'

const offsetDate = (n: number) => addDays(new Date(), n)
const randomImage = (seed: string) => `https://picsum.photos/seed/${seed}/800/800`

export const exampleEvents: EventItem[] = [
  {
    id: '1',
    name: 'NowInMobile #4',
    date: offsetDate(0),
    location: 'Madrid',
    price: 42.33,
    image: randomImage('spain1'),
  },
  {
    id: '2',
    name: 'STUDIO 55 - Summer Edition',
    date: offsetDate(0),
    location: 'London',
    price: 47.33,
    image: randomImage('london4'),
  },
  {
    id: '3',
    name: 'EFI 2023',
    date: offsetDate(1),
    location: 'Manila',
    price: 34.13,
    image: randomImage('man'),
  },
  {
    id: '4',
    name: 'GameDay 2023',
    date: offsetDate(2),
    location: 'SF',
    price: 52.35,
    image: randomImage('sf'),
  },
  {
    id: '5',
    name: 'Uptown Night Market',
    date: offsetDate(2),
    location: 'New York',
    price: 50.33,
    image: randomImage('ny'),
  },
  {
    id: '6',
    name: 'Farewell Summer NYC',
    date: offsetDate(2),
    location: 'New York',
    price: 51.02,
    image: randomImage('ny2'),
  },
]
