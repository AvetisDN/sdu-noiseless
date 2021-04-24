import {writable} from "svelte/store";

const PRODUCTS = [
    {
        id: 'abcdef01',
        brand: 'Sony',
        model: 'WH-1000MX4',
        price: 400,
        img: './images/products/sony.png',
        brand_img: './images/brands/sony.png'
    },
    {
        id: 'abcdef02',
        brand: 'Sennheiser',
        model: 'Momentum 3',
        price: 380,
        img: './images/products/sennheiser.png',
        brand_img: './images/brands/sennheiser.png'
    },
    {
        id: 'abcdef03',
        brand: 'Shure',
        model: 'AONIC 50',
        price: 420,
        img: './images/products/shure.png',
        brand_img: './images/brands/shure.png'
    },
    {
        id: 'abcdef04',
        brand: 'Bose',
        model: 'Noise Cancelling 700',
        price: 450,
        img: './images/products/bose.png',
        brand_img: './images/brands/bose.png'
    },
    {
        id: 'abcdef05',
        brand: 'Apple',
        model: 'Airpods Max',
        price: 650,
        img: './images/products/apple.png',
        brand_img: './images/brands/apple.png'
    },
]

const {subscribe} = writable(PRODUCTS)

export default {
    subscribe
}