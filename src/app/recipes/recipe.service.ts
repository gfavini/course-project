import {Injectable, EventEmitter} from "@angular/core";
import {Recipe} from "./recipe.model";
import {Ingredient} from "../shared/ingredient.model";
import {ShoppingListService} from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipeService{

  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('A test Recipe',
      'This is just a test',
      'https://imagesvc.meredithcorp.io/v3/mm/image?q=85&c=sc&poi=face&w=2000&h=1000&url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F43%2F2020%2F07%2F22%2F8000900-2000.jpg',
      [
        new Ingredient('Maat', 1),
        new Ingredient('French Fries', 20)
      ]),
    new Recipe('A test Recipe2',
      'This is just a test2',
      'https://imagesvc.meredithcorp.io/v3/mm/image?q=85&c=sc&poi=face&w=2000&h=1000&url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F43%2F2020%2F07%2F22%2F8000900-2000.jpg',
      [
        new Ingredient('Buns', 2),
        new Ingredient('Meat', 1)
      ])
  ];

  constructor(private slService: ShoppingListService) {
  }

  getRecipe() {
    return this.recipes.slice();
  }

  addingredientToShoppingList(ingredients: Ingredient[]){
    this.slService.addIngredients(ingredients)
  }

}
