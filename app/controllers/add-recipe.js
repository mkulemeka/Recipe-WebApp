import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    addRecipe: function () {
      //Create a new recipe
      var newRecipe = this.store.createRecord('recipe', {
        title: this.title,
        description: this.description,
        image: this.image,
        steps: this.steps,
      });
      alert('Recipe succefully added');
      console.log(this.title, this.description, this.image, this.steps);
      //save to firebase
      newRecipe.save();

      // //clear form
      this.setProperties({
        title: '',
        description: '',
        image: '',
        steps: '',
      });
    },
  },
});

// import Controller from '@ember/controller';

// export default class AddRecipeController extends Controller {
//     actions:{
//         addRecipe: function(){

//         }
//     }
// }
