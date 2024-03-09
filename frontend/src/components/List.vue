<template>
  <div class="container mx-auto grid gap-4 mt-5 p-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
    <div v-for="car in cars" class="bg-teal-200 p-4 rounded-lg">
      <h2 class="text-lg font-semibold">Autó adatok</h2>
      <p><strong>Márka:</strong> {{ car.brand }}</p>
      <p><strong>Modell:</strong> {{ car.model }}</p>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      cars: [],
    };
  },
  created() {
    this.getCars();
  },
  methods: {
    async getCars() {
      try {
        const response = await axios.get("http://localhost:5000/cars");
        this.cars = response.data;
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>
