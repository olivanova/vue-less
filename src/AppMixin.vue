<template>
  <div class="container">
    <app-alert
        v-if="alert"
        type="danger"
        title="Attention"
        text="This is very important message"
        is-close
        @close-alert="alert = false"
    ></app-alert>
    <div class="card">
      <button class="btn primary" @click="toggleAlert">{{ alert ? 'Скрыть' : 'Показать' }} сообщение</button>
    </div>

    <app-block></app-block>
  </div>
</template>

<script>
import AppAlert from "./components/AppAlert";
import AppBlock from "./components/AppBlock";
import alertMixin from "./alertMixin";

export default {
  mixins: [alertMixin],
  components: {AppAlert, AppBlock}
}
</script>

