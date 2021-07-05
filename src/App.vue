<template>
  <div class="container">
    <div class="card">
      <h2>{{ $i18n('app.title') }}</h2>
      <button class="btn" @click="change">{{  $i18n('app.btn') }}</button>
    </div>
  </div>
</template>

<script>

export default {
  data(){
    return {
      currentLang: 'ru'
    }
  },
  inject: ['i18nLang'],
  methods: {
    change() {
      this.currentLang = this.currentLang === 'ru' ? 'en' : 'ru'
      this.i18nLang(this.currentLang);
      this.$forceUpdate();
    }
  }
}
</script>

