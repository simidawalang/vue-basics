const app = Vue.createApp({
  data: () => ({
    greeting: "Hi, morning",
    isVisible: false,
    isVisible2: false,
  }),
  methods: {
    toggleVisibility() {
      this.isVisible = !this.isVisible;
    },
    greet() {
      console.log(this.greeting);
    },
  },
});

app.mount("#app");
