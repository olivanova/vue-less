const App = {
  data() {
    return {
      title: 'Title',
      placeholderItem: 'Insert item',
      itemValue: '',
      countItem: '',
      resultList: [{name: 'Twix', count: 12}, {name: 'Mars', count: 8}],
      sum: 0
    }
  },

  methods: {
    addNewItem() {
      if(this.itemValue.length !==0 && this.countItem.length !==0 ) {
        const obj = {
          name: this.itemValue,
          count: this.countItem
        };

        this.resultList.push(obj)
      }
    },

    removeItem(index){
      this.resultList.splice(index, 1)
    }
  },

  computed: {
    updatedSum() {
      let sum = 0;
      for(const item of this.resultList) {
        sum += parseInt(item.count)
      }
      return sum;
    }
  },

  watch: {
    countItem() {
      if(this.countItem > 20) {
        this.countItem = 20;
        alert('max count 20')
      }
    },
  }
};

Vue.createApp(App).mount('#app');