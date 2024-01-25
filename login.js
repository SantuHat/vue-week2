import { createApp } from "https://unpkg.com/vue@3/dist/vue.esm-browser.js";

createApp({
  data() {
    return {
      user: {
        username: "",
        password: "",
      },
    };
  },
  methods: {
    login() {
      const api = `https://ec-course-api.hexschool.io/v2/admin/signin`;
      axios
        .post(api, this.user)
        .then((res) => {
          const { expired, token } = res.data;
          // console.log(expired, token);

          // cookie
          document.cookie = `week2Token=${token};week2Expires=${new Date(
            expired
          )};`;
          // 跳轉產品頁
          window.location = "products.html";
        })
        .catch((error) => {
          // 登入失敗
          alert(error.response.data.message);
        });
    },
  },
}).mount("#app");
