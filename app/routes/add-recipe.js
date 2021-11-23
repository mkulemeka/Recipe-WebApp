import Route from '@ember/routing/route';

export default class AddRecipeRoute extends Route {
    model() {
        this.store.AddRecipeRoute('');
    }
    //Not sure what to put in the '' to target the data
    //Also not sure if the store.AddRecipeRoute should be store.createRecord instead
}
