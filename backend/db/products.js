import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    addedInYear: new Date().getFullYear(),
    type: "BASEBALL",
    productName: "Baseball",
    alt: "Roadster shirt",
    image: "https://media.istockphoto.com/photos/basketball-jersey-picture-id981103346",
    description: "Full hand shirt",
    price: "800.00",
    oldPrice: "1000.00",
    inStock: true,
    discount: (20),
    rating: '3.5',
    quantity: 1
  },
  {
    _id: uuid(),
    addedInYear: new Date().getFullYear(),
    type: "BASEBALL",
    productName: "Baseball",
    alt: "Roadster shirt",
    image: "https://media.istockphoto.com/photos/baseball-jersey-picture-id1324164107",
    description: "Full hand shirt",
    price: "200.00",
    oldPrice: "400.00",
    inStock: true,
    discount: (50),
    rating: 4,
    quantity: 1
  },
  {
    _id: uuid(),
    addedInYear: new Date().getFullYear(),
    type: "BASEBALL",
    productName: "Baseball",
    alt: "Roadster shirt",
    image: "https://media.istockphoto.com/photos/baseball-tshirt-mockup-in-front-and-back-views-picture-id1327340091",
    description: "Full hand shirt",
    price: "150.00",
    oldPrice: "200.00",
    inStock: true,
    discount: (25),
    rating: 2,
    quantity: 1
  },
  {
    _id: uuid(),
    addedInYear: new Date().getFullYear(),
    type: "FOOTBALL",
    productName: "Football",
    alt: "Roadster shirt",
    image: "https://media.istockphoto.com/vectors/sports-jersey-t-shirt-design-concept-vector-template-chelsea-jersey-vector-id1299293013",
    description: "Full hand shirt",
    price: "100.00",
    oldPrice: "200.00",
    inStock: true,
    discount: (50),
    rating: 2,
    quantity: 1
  },
  {
    _id: uuid(),
    addedInYear: new Date().getFullYear(),
    type: "FOOTBALL",
    productName: "Football",
    alt: "Roadster shirt",
    image: "https://media.istockphoto.com/vectors/sports-jersey-t-shirt-design-concept-vector-template-chelsea-jersey-vector-id1299301126",
    description: "Full hand shirt",
    price: "150.00",
    oldPrice: "200.00",
    inStock: true,
    discount: (25),
    rating: 4,
    quantity: 1
  },
  {
    _id: uuid(),
    addedInYear: new Date().getFullYear(),
    type: "FOOTBALL",
    productName: "Football",
    alt: "Roadster shirt",
    image: "https://media.istockphoto.com/vectors/soccer-jersey-template-blue-and-red-layout-sport-tshirt-design-vector-id978519624",
    description: "Full hand shirt",
    price: "400.00",
    oldPrice: "800.00",
    inStock: true,
    discount: (50),
    rating: 3.5,
    quantity: 1
  },
  {
    _id: uuid(),
    addedInYear: new Date().getFullYear(),
    type: "BASEBALL",
    productName: "Baseball",
    alt: "Roadster shirt",
    image: "https://media.istockphoto.com/photos/baseball-tshirt-mockup-in-front-and-back-views-picture-id1327340091",
    description: "Full hand shirt",
    price: "300.00",
    oldPrice: "600.00",
    inStock: true,
    discount: (50),
    rating: 3,
    quantity: 1
  },
  {
    _id: uuid(),
    addedInYear: new Date().getFullYear(),
    type: "BASKETBALL",
    productName: "Basketball",
    alt: "Roadster shirt",
    image: "https://media.istockphoto.com/vectors/basketball-jersey-tank-top-sport-illustration-vector-id1059670278",
    description: "Full hand shirt",
    price: "400.00",
    oldPrice: "800.00",
    inStock: true,
    discount: (50),
    rating: 2.5,
    quantity: 1
  },
  {
    _id: uuid(),
    addedInYear: new Date().getFullYear(),
    type: "BASKETBALL",
    productName: "Basketball",
    alt: "Roadster shirt",
    image: "https://media.istockphoto.com/photos/baseball-jersey-picture-id1324164107",
    description: "Full hand shirt",
    price: "250.00",
    oldPrice: "500.00",
    inStock: true,
    discount: (50),
    rating: 3.5,
    quantity: 1
  }
];
