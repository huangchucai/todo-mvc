import Vue from 'vue'
import 'todomvc-app-css/index.css'

Vue.config.productionTip = false

new Vue({
  el: '#app',
  data() {
    return {
       title: 'todos',
       inputValue: null,
       lists: [
         {title: 'Taste JavaScript', complete: true},
         {title: 'Buy a unicorn', complete: false},
       ],
       visible: 'All'
    }
  },
  methods: {
    addList() {
      this.lists.push(
        {title: this.inputValue, complete: false},
      )
      this.inputValue = null;
    },
    deleteList(idx) {
      this.lists.splice(idx,1);
    },
    activeList() {
      this.visible = 'Active'
    },
    completeList() {
      this.visible = 'Completed'
    },
    clearComplete() {
      this.lists =  this.lists.filter(item => !item.complete)
    }
  },
  computed: {
    someComputed() {
      return this.lists.some(item => item.complete)
    },
    filterLists() {
      if(this.visible = 'Active') {
        return this.lists.filter(item => !item.complete)
      }
      else if(this.visible = 'Completed') {
        console.log(1)
        return this.lists.filter(item => item.complete)
      } else if(this.visible = 'All') {
        return this.lists
      } 
    }
  }
})
