<template>
  <div class="container mx-auto grid gap-4 mt-5 p-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
    <div v-for="car in cars" class="bg-teal-200 p-4 rounded-lg">
      <h2 class="text-lg font-semibold">Autó adatok</h2>
      <p><strong>Márka:</strong> {{ car.brand }}</p>
      <p><strong>Modell:</strong> {{ car.model }}</p>
      <button class="bg-green-400 px-2 py-1 rounded-sm mr-2 mt-2">Szerkesztés</button>
      <button class="bg-red-400 px-2 py-1 rounded-sm" @click="deleteCar(car.carID)">Törlés</button>
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

    async deleteCar(id) {
      try {
        await axios.delete("http://localhost:5000/delete/" + id);
        this.getCars();
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>
