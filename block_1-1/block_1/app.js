const App = {
  data() {
    return {
      placeholderString: 'Название',
      inputValue: '',
      notes: ['Note 1', 'Note 2']
    }
  },

  methods: {
    addNewNotes() {
      if(this.inputValue.length !== 0) {
        this.notes.push(this.inputValue);
        this.inputValue = '';
      }
    },

    deleteNotes(index) {
      this.notes.splice(index, 1);
    },

    toUppercase(item) {
      return item.toUpperCase();
    }
  },

  computed: {
    doubleCounter (){
      return this.notes.length * 2
    }
  },

  watch: {
    inputValue(value) {
      if (value.length > 2) {
        // this.inputValue = '';
        console.log(this.inputValue)
      }
    }
  }
};

Vue.createApp(App).mount('#app');