<template>
  <div class="h-screen w-screen bg-teal-100 flex items-center justify-center">
    <div class="bg-teal-300 shadow-lg p-10 rounded-md">
      <h1 class="text-3xl text-center font-bold mb-10 text-teal-800">Regisztráció</h1>
      <form @submit.prevent="register">
        <div class="flex flex-col mb-2">
          <label for="name" class="pb-2">Teljes név:</label>
          <input
            type="text"
            v-model="name"
            class="p-1 rounded-sm focus:outline-none focus:shadow-xl"
            required
          />
        </div>
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
            Regisztráció
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
      name: "",
      email: "",
      password: "",
    };
  },
  methods: {
    async register() {
      try {
        await axios.post("http://localhost:5000/register", {
          name: this.name,
          email: this.email,
          password: this.password,
        });
        this.$router.push("/login");
      } catch (err) {
        if (err) {
          console.log(err);
        }
      }
    },
  },
};
</script>
