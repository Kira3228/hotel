// export type RoomResponseDto = {
//     id: number
//     name: string
//     description: string
//     capacity: number
//     price: string
//     status: string
//     area: number
//     Image: ImageType[]
// }
// export type ImageType = {
// 	id: number
// 	fileName: string
// 	url: string
// 	path: string
// 	roomId: number
// }


import { RoomResponseDto } from "../types/dto/RoomResponse.dto";


export const testRooms: RoomResponseDto[] = [
  {
    id: 1,
    name: "Люкс с видом на море",
    description: "Просторный номер с панорамным видом на море, гидромассажной ванной и мини-баром",
    capacity: 2,
    price: "15000.00",
    status: "available",
    area: 45,
    Image: [
      {
        id: 101,
        fileName: "luxury_sea_view_1.jpg",
        url: "https://example.com/images/luxury_sea_view_1.jpg",
        path: "/uploads/rooms/luxury_sea_view_1.jpg",
        roomId: 1
      },
      {
        id: 102,
        fileName: "luxury_sea_view_2.jpg",
        url: "https://example.com/images/luxury_sea_view_2.jpg",
        path: "/uploads/rooms/luxury_sea_view_2.jpg",
        roomId: 1
      }
    ]
  },
  {
    id: 2,
    name: "Стандартный двухместный",
    description: "Уютный номер с двумя односпальными кроватями и рабочей зоной",
    capacity: 2,
    price: "8000.00",
    status: "booked",
    area: 28,
    Image: [
      {
        id: 201,
        fileName: "standard_double_1.jpg",
        url: "https://example.com/images/standard_double_1.jpg",
        path: "/uploads/rooms/standard_double_1.jpg",
        roomId: 2
      }
    ]
  },
  {
    id: 3,
    name: "Делюкс с балконом",
    description: "Номер категории делюкс с собственным балконом и гостиной зоной",
    capacity: 3,
    price: "12000.00",
    status: "available",
    area: 38,
    Image: [
      {
        id: 301,
        fileName: "deluxe_balcony_1.jpg",
        url: "https://example.com/images/deluxe_balcony_1.jpg",
        path: "/uploads/rooms/deluxe_balcony_1.jpg",
        roomId: 3
      },
      {
        id: 302,
        fileName: "deluxe_balcony_2.jpg",
        url: "https://example.com/images/deluxe_balcony_2.jpg",
        path: "/uploads/rooms/deluxe_balcony_2.jpg",
        roomId: 3
      },
      {
        id: 303,
        fileName: "deluxe_balcony_3.jpg",
        url: "https://example.com/images/deluxe_balcony_3.jpg",
        path: "/uploads/rooms/deluxe_balcony_3.jpg",
        roomId: 3
      }
    ]
  }
];
