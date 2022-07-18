import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "BASEBALL",
    description:
      "literature in the form of prose, especially novels, that describes imaginary events and people",
    image: "https://media.istockphoto.com/photos/baseball-tshirt-mockup-in-front-and-back-views-picture-id1327340091"
  },
  {
    _id: uuid(),
    categoryName: "FOOTBALL",
    description:
      "Non-fiction is writing that gives information or describes real events, rather than telling a story.",
    image: "https://media.istockphoto.com/vectors/soccer-jersey-template-blue-and-red-layout-sport-tshirt-design-vector-id978519624"
  },
  {
    _id: uuid(),
    categoryName: "BASEBALL",
    description:
      "literature in the form of prose, especially novels, that describes imaginary events and people",
    image: "https://media.istockphoto.com/photos/baseball-jersey-picture-id1324164107"
  },
  {
    _id: uuid(),
    categoryName: "BASKETBALL",
    description:
      "Meant to cause discomfort and fear for both the character and readers, horror writers often make use of supernatural and paranormal elements in morbid stories that are sometimes a little too realistic.",
    image: "https://media.istockphoto.com/vectors/basketball-jersey-tank-top-sport-illustration-vector-id1059670278"
  },
  {
    _id: uuid(),
    categoryName: "FOOTBALL",
    description:
      "Non-fiction is writing that gives information or describes real events, rather than telling a story.",
    image: "https://media.istockphoto.com/vectors/sports-jersey-t-shirt-design-concept-vector-template-chelsea-jersey-vector-id1299301126"
  },
  {
    _id: uuid(),
    categoryName: "FOOTBALL",
    description:
      "Non-fiction is writing that gives information or describes real events, rather than telling a story.",
    image: "https://media.istockphoto.com/vectors/sports-jersey-t-shirt-design-concept-vector-template-chelsea-jersey-vector-id1299293013"
  }
];
