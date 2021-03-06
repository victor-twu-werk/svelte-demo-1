import { writable } from "svelte/store";

export const CarStore = writable([
    {
        id: 1,
        qty: 1,
        make: "Ferrari",
        model: "LaFerrari Aperta Hybrid",
        year: 2017,
        img: "https://i.imgur.com/RAnOIVu.jpg",
        price: 4499999,
        likes: 0,
      },
      {
        id: 2,
        qty: 1,
        make: "Ferrari",
        model: "F40",
        year: 1990,
        img: "https://i.imgur.com/L7m7KHd.jpg",
        price: 1199999,
        likes: 0,
      },
      {
        id: 3,
        qty: 1,
        make: "Ferrari",
        model: "Crockett & Tubbs Testarossa",
        year: 1985,
        img: "https://i.imgur.com/naDVBVP.jpg",
        price: 4999999,
        likes: 0,
      },
      {
        id: 4,
        qty: 1,
        make: "Ferrari",
        model: "F8 Tributo",
        year: 2020,
        img: "https://i.imgur.com/oHjC0Nh.jpg",
        price: 274999,
        likes: 0,
      },
      {
        id: 5,
        qty: 1,
        make: "Rolls Royce",
        model: "Sweptail",
        year: 2017,
        img: "https://i.imgur.com/0DQmQ4H.jpg",
        price: 12999999,
        likes: 0,
      },
      {
        id: 6,
        qty: 1,
        make: "Bentley",
        model: "Continental GT",
        year: 2020,
        img: "https://i.imgur.com/on1XA7K.jpg",
        price: 199999,
        likes: 0,
      },
      {
        id: 7,
        qty: 1,
        make: "Audi",
        model: "Ironman Car",
        year: 2012,
        img: "https://i.imgur.com/KNHirdo.jpg",
        price: 4999999,
        likes: 0,
      },
      {
        id: 8,
        qty: 1,
        make: "Mercedes",
        model: "AMG GT C Roadster",
        year: 2020,
        img: "https://i.imgur.com/d9QXhSQ.jpg",
        price: 164999,
        likes: 0,
      },
      {
        id: 9,
        qty: 1,
        make: "Porche",
        model: "911 GT3",
        year: 2018,
        img: "https://i.imgur.com/D7w1NSa.jpg",
        price: 144999,
        likes: 0,
      },
      {
        id: 10,
        qty: 1,
        make: "Porche",
        model: "Carrera GT",
        year: 2006,
        img: "https://i.imgur.com/UVaI26z.jpg",
        price: 599999,
        likes: 0,
      },
])

export const CartStore = writable([])

export const ShowCart = writable(false)