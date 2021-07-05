<template>
  <div class="container">
    <div class="card" v-if="show">
      <h2 v-color:[typeMod].blink.hover="myColor">Base Title</h2>
      <div class="form-control">
        <label for="inp">Default</label>
        <input v-focus type="text" id="inp">
      </div>
      <button class="btn" @click="change">change</button>
      <button class="btn"
              @click="type = type === 'color' ? 'background' : 'color'"
      >Поменять {{ type }}</button>
    </div>
  </div>
</template>

<script>
import focusDirective from "./focusDirective";
import colorDirective from "./colorDirective";

export default {
  data() {
    return {
      myColor: 'red',
      type: 'color',
      typeMod: 'color',
      show: true
    }
  },
  methods: {
    change(){
      this.typeMod = this.type;
      this.myColor = 'green'
    }
  },

  directives: {
    focus: focusDirective,
    color: colorDirective
  }
}
</script>

