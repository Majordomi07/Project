<template>
  <div class="h-screen w-screen bg-teal-100 flex items-center justify-center">
    <div class="bg-teal-300 shadow-lg p-10 rounded-md">
      <h1 class="text-3xl text-center font-bold mb-10 text-teal-800">Bejelentkezés</h1>
      <form @submit.prevent="login">
        <div class="flex flex-col mb-2">
          <label for="name" class="pb-2">Email cím:</label>
          <input
            type="email"
            v-model="email"
            class="p-1 rounded-sm focus:outline-none focus:shadow-xl"
            required
          />
        </div>
        <div class="flex flex-col mb-2">
          <label for="name" class="pb-2">Jelszó:</label>
          <input
            type="password"
            v-model="password"
            class="p-1 rounded-sm focus:outline-none focus:shadow-xl"
            required
          />
        </div>
        <div class="flex items-center justify-center h-full mt-10">
          <button type="submit" class="text-white bg-teal-800 px-5 py-2 shadow-sm rounded-lg">
            Bejelentkezés
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    async login() {
      try {
        const response = await axios.post("http://localhost:5000/login", {
          email: this.email,
          password: this.password,
        });
        if (response.status == 200) {
          alert("Sikeres belépés");
          localStorage.setItem("authData", JSON.stringify(response.data[0]));
          this.$router.push("/");
        }
      } catch {
        alert("Nincsen ilyen adatokkal fiók");
      }
    },
  },
};
</script>
