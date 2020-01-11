import React, { Component } from "react";
import API from "./utils/API";

const recipes = [
  {
    name: "Cheesy Pork Taco Rice",
    ingredients: [
      {
        name: "poblano pepper",
        amount: 3,
        unit: ""
      },
      {
        name: "ground pork",
        amount: 1,
        unit: "pound"
      },
      {
        name: "chicken broth",
        amount: 1.5,
        unit: "cup"
      },
      {
        name: "rice",
        amount: 1,
        unit: "cup"
      },
      {
        name: "onion",
        amount: 1,
        unit: ""
      },
      {
        name: "taco seasoning mix",
        amount: 1,
        unit: "(1 ounce) packet"
      },
      {
        name: "garlic powder",
        amount: 0.25,
        unit: "teaspoon"
      },
      {
        name: "onion powder",
        amount: 0.25,
        unit: "teaspoon"
      },
      {
        name: "tomato",
        amount: 2,
        unit: ""
      },
      {
        name: "lime",
        amount: 0.5,
        unit: ""
      },
      {
        name: "cilantro",
        amount: 3,
        unit: "tablespoon"
      },
      {
        name: "salt",
        amount: 1,
        unit: "to taste"
      },
      {
        name: "corn",
        amount: 0.5,
        unit: "cup"
      },
      {
        name: "Cheddar-Monterey Jack cheese blend",
        amount: 0.75,
        unit: "cup"
      }
    ]
  },
  {
    name: "Pork Chops in Garlic Mushroom Sauce",
    ingredients: [
      {
        name: "pork chop",
        amount: 2,
        unit: "pound"
      },
      {
        name: "paprika",
        amount: 0.5,
        unit: "teaspoon"
      },
      {
        name: "salt",
        amount: 1,
        unit: "to taste"
      },
      {
        name: "butter",
        amount: 0.25,
        unit: "cup"
      },
      {
        name: "mushroom",
        amount: 1,
        unit: "(8 ounce) package"
      },
      {
        name: "garlic",
        amount: 4,
        unit: "clove"
      },
      {
        name: "Dijon mustard",
        amount: 1,
        unit: "teaspoon"
      },
      {
        name: "flour",
        amount: 2,
        unit: "tablespoon"
      },
      {
        name: "beef broth",
        amount: 2,
        unit: "cup"
      }
    ]
  },
  {
    name: "Super Duper Slow Cooker Beef Stroganoff",
    ingredients: [
      {
        name: "beef",
        amount: 1.5,
        unit: "pound"
      },
      {
        name: "salt",
        amount: 1,
        unit: "to taste"
      },
      {
        name: "onion",
        amount: 1,
        unit: ""
      },
      {
        name: "cream of mushroom soup",
        amount: 1,
        unit: "(10.75 ounce) can"
      },
      {
        name: "water",
        amount: 0.25,
        unit: "cup"
      },
      {
        name: "chives",
        amount: 1,
        unit: "tablespoon"
      },
      {
        name: "garlic",
        amount: 2,
        unit: "clove"
      },
      {
        name: "Worcestershire sauce",
        amount: 1,
        unit: "tablespoon"
      },
      {
        name: "beef bouillon",
        amount: 1,
        unit: "cube"
      },
      {
        name: "red wine",
        amount: 0.5,
        unit: "cup"
      },
      {
        name: "cornstarch",
        amount: 1,
        unit: "tablespoon"
      },
      {
        name: "flour",
        amount: 1,
        unit: "tablespoon"
      },
      {
        name: "sour cream",
        amount: 1,
        unit: "(8 ounce) container"
      },
      {
        name: "mushroom",
        amount: 1,
        unit: "(8 ounce) package"
      },
      {
        name: "cream cheese",
        amount: 4,
        unit: "ounce"
      },
      {
        name: "parsley",
        amount: 0.5,
        unit: "cup"
      }
    ]
  },
  {
    name: "Perfect Crab-Stuffed Mushrooms",
    ingredients: [
      {
        name: "butter",
        amount: 2,
        unit: "tablespoon"
      },
      {
        name: "green onion",
        amount: 2,
        unit: "tablespoon"
      },
      {
        name: "crabmeat",
        amount: 1,
        unit: "cup"
      },
      {
        name: "bread crumbs",
        amount: 0.5,
        unit: "cup"
      },
      {
        name: "Monterey Jack cheese",
        amount: 0.25,
        unit: "cup"
      },
      {
        name: "egg",
        amount: 1,
        unit: ""
      },
      {
        name: "lemon juice",
        amount: 1,
        unit: "teaspoon"
      },
      {
        name: "dill weed",
        amount: 0.5,
        unit: "teaspoon"
      },
      {
        name: "butter",
        amount: 0.5,
        unit: "cup"
      },
      {
        name: "mushroom",
        amount: 1.5,
        unit: "pound"
      },
      {
        name: "Monterey Jack cheese",
        amount: 0.5,
        unit: "cup"
      },
      {
        name: "white wine",
        amount: 0.25,
        unit: "cup"
      }
    ]
  },
  {
    name: "Cabbage Jambalaya",
    ingredients: [
      {
        name: "ground beef",
        amount: 1,
        unit: "pound"
      },
      {
        name: "sausage",
        amount: 1,
        unit: "pound"
      },
      {
        name: "onion",
        amount: 1,
        unit: ""
      },
      {
        name: "celery",
        amount: 3,
        unit: "stalk"
      },
      {
        name: "garlic",
        amount: 1,
        unit: "clove"
      },
      {
        name: "cabbage",
        amount: 1,
        unit: "head"
      },
      {
        name: "stewed tomatoes",
        amount: 1,
        unit: "(14.5 ounce) can"
      },
      {
        name: "water",
        amount: 14.5,
        unit: "fluid ounce"
      },
      {
        name: "rice",
        amount: 1,
        unit: "cup"
      },
      {
        name: "salt",
        amount: 1,
        unit: "to taste"
      }
    ]
  },
  {
    name: "Asian Lettuce Wraps",
    ingredients: [
      {
        name: "lettuce",
        amount: 16,
        unit: "leaf"
      },
      {
        name: "ground beef",
        amount: 1,
        unit: "pound"
      },
      {
        name: "cooking oil",
        amount: 1,
        unit: "tablespoon"
      },
      {
        name: "onion",
        amount: 1,
        unit: ""
      },
      {
        name: "hoisin sauce",
        amount: 0.25,
        unit: "cup"
      },
      {
        name: "garlic",
        amount: 2,
        unit: "clove"
      },
      {
        name: "soy sauce",
        amount: 1,
        unit: "tablespoon"
      },
      {
        name: "rice wine vinegar",
        amount: 1,
        unit: "tablespoon"
      },
      {
        name: "ginger",
        amount: 2,
        unit: "teaspoon"
      },
      {
        name: "salt",
        amount: 1,
        unit: "to taste"
      },
      {
        name: "water chestnut",
        amount: 1,
        unit: "(8 ounce) can"
      },
      {
        name: "green onion",
        amount: 1,
        unit: "bunch"
      },
      {
        name: "sesame oil",
        amount: 2,
        unit: "teaspoon"
      }
    ]
  },
  {
    name: "The Best Rolled Sugar Cookies",
    ingredients: [
      {
        name: "butter",
        amount: 1.5,
        unit: "cup"
      },
      {
        name: "sugar",
        amount: 2,
        unit: "cup"
      },
      {
        name: "egg",
        amount: 4,
        unit: ""
      },
      {
        name: "vanilla extract",
        amount: 1,
        unit: "teaspoon"
      },
      {
        name: "flour",
        amount: 5,
        unit: "cup"
      },
      {
        name: "baking powder",
        amount: 2,
        unit: "teaspoon"
      },
      {
        name: "salt",
        amount: 1,
        unit: "teaspoon"
      }
    ]
  },
  {
    name: "Cheesy Cauliflower Casserole",
    ingredients: [
      {
        name: "cauliflower",
        amount: 1,
        unit: "head"
      },
      {
        name: "sour cream",
        amount: 1,
        unit: "cup"
      },
      {
        name: "Cheddar cheese",
        amount: 1,
        unit: "cup"
      },
      {
        name: "corn flakes",
        amount: 0.5,
        unit: "cup"
      },
      {
        name: "green bell pepper",
        amount: 0.25,
        unit: "cup"
      },
      {
        name: "red bell pepper",
        amount: 0.25,
        unit: "cup"
      },
      {
        name: "salt",
        amount: 1,
        unit: "teaspoon"
      },
      {
        name: "Parmesan cheese",
        amount: 0.25,
        unit: "cup"
      }
    ]
  },
  {
    name: "Best Chocolate Chip Cookies",
    ingredients: [
      {
        name: "butter",
        amount: 1,
        unit: "cup"
      },
      {
        name: "sugar",
        amount: 1,
        unit: "cup"
      },
      {
        name: "brown sugar",
        amount: 1,
        unit: "cup"
      },
      {
        name: "egg",
        amount: 2,
        unit: ""
      },
      {
        name: "vanilla extract",
        amount: 2,
        unit: "teaspoon"
      },
      {
        name: "baking soda",
        amount: 1,
        unit: "teaspoon"
      },
      {
        name: "water",
        amount: 2,
        unit: "teaspoon"
      },
      {
        name: "salt",
        amount: 0.5,
        unit: "teaspoon"
      },
      {
        name: "flour",
        amount: 3,
        unit: "cup"
      },
      {
        name: "semisweet chocolate chips",
        amount: 2,
        unit: "cup"
      },
      {
        name: "walnut",
        amount: 1,
        unit: "cup"
      }
    ]
  }
];

class Seeds extends Component {
  componentDidMount() {
    recipes.forEach(element => {
      console.log(element);
      API.createRecipe(element).then(res => console.log(res));
    });
  }
  render() {
    return <div>SEEDING RECIPES</div>;
  }
}

export default Seeds;
