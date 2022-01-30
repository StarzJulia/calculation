<template>
  <div>
    <Header />
    <Main />
  </div>
</template>

<script>
  import Header from './Header.vue';
  import Main from './Main.vue';

  export default {
    name: 'App',
    components: {
      Header,
      Main
    }
  };
</script>