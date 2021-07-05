const App = {
  data: () => ({
    myHtml: '<h3>title from html</h3>',
    titile: 'Title',
    items: [1, 2, 3, 4]
  }),

  methods: {
    addItems() {
      this.items.unshift(this.$refs.myInput.value)
    },

    clearInput() {
      this.$refs.myInput.value= ''
    }
  },

  computed: {
    filterList() {
      return this.items.filter(i => i % 2 === 0)
    }
  }
};

Vue.createApp(App).mount('#app');