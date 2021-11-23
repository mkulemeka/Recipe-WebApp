import Controller from '@ember/controller';

export default class AddRecipeControlController extends Controller {
    @actions
        addRecipe() {
          let recipe = this.get('model');
          recipe.save().then(successFn, failureFn);
          //Still need to create the success and failure functions, ill try to set them up after we get the targeting set up.
         }
      
}
