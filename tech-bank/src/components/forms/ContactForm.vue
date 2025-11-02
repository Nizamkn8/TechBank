<script setup>
import { reactive, ref } from "vue";
import GradButtonRound from "../common/buttons/GradButtonRound.vue";

const form = reactive({
  name: "",
  email: "",
  phone: "",
  message: ""
});

const showCountries = ref(false);

const countries = [
  { code: "IN", name: "India", dial: "+91", flag: "🇮🇳" },
  { code: "US", name: "USA", dial: "+1", flag: "🇺🇸" },
  { code: "UK", name: "UK", dial: "+44", flag: "🇬🇧" },
  { code: "AE", name: "UAE", dial: "+971", flag: "🇦🇪" },
  { code: "SA", name: "Saudi", dial: "+966", flag: "🇸🇦" },
];

const selectedCountry = ref(countries[0]);

function selectCountry(country) {
  selectedCountry.value = country;
  showCountries.value = false;
}

function submitForm() {
  if (!form.name || !form.email || !form.phone) {
    alert("Please fill all required fields");
    return;
  }

  const fullPhone = `${selectedCountry.value.dial} ${form.phone}`;

  console.log("Form Submitted:", { ...form, phone: fullPhone });

  alert("Message sent successfully");

  form.name = "";
  form.email = "";
  form.phone = "";
  form.message = "";
}
</script>

<template>
  <div class="w-full">
    <span class="text-[#BB83FF] tracking-wide block text-sm md:text-base">
      BUILD THE FUTURE WITH US
    </span>

    <h3
      class="text-[36px] md:text-[58px] leading-[1.2] font-bold mb-6 md:mb-8 tracking-wide text-white font-nyxerin"
    >
      CONTACT US
    </h3>

    <form @submit.prevent="submitForm" class="space-y-5 md:space-y-7">
      <!-- Name -->
      <div>
        <label class="text-sm mb-1 block text-gray-300">Name *</label>
        <input
          v-model="form.name"
          type="text"
          placeholder="Enter your name"
          class="w-full bg-black border border-gray-700 rounded-lg p-3 md:p-4 text-white focus:border-purple-500 outline-none"
        />
      </div>

      <!-- Email -->
      <div>
        <label class="text-sm mb-1 block text-gray-300">Email *</label>
        <input
          v-model="form.email"
          type="email"
          placeholder="Enter your email"
          class="w-full bg-black border border-gray-700 rounded-lg p-3 md:p-4 text-white focus:border-purple-500 outline-none"
        />
      </div>

      <!-- Phone Input -->
      <div>
        <label class="text-sm mb-1 block text-gray-300">Phone Number *</label>

        <div class="flex gap-2 relative w-full">

          <!-- Country select -->
          <button
            type="button"
            @click="showCountries = !showCountries"
            class="flex items-center gap-2 bg-black border border-gray-700 rounded-lg px-3 md:px-4 py-3 text-white w-[90px] md:w-[110px] justify-between"
          >
            <span>{{ selectedCountry.flag }}</span>
            <span class="text-xs md:text-sm">{{ selectedCountry.dial }}</span>
          </button>

          <!-- Dropdown -->
          <div
            v-if="showCountries"
            class="absolute left-0 bg-black border border-gray-700 rounded-lg mt-1 w-48 max-h-48 overflow-y-auto z-20"
          >
            <button
              v-for="country in countries"
              :key="country.code"
              @click="selectCountry(country)"
              class="flex items-center gap-2 px-3 py-2 w-full text-left text-white hover:bg-gray-800 text-sm"
            >
              <span>{{ country.flag }}</span>
              <span>{{ country.name }}</span>
              <span class="ml-auto text-xs opacity-70">{{ country.dial }}</span>
            </button>
          </div>

          <!-- Phone input -->
          <input
            v-model="form.phone"
            type="text"
            placeholder="Enter your phone"
            class="flex-1 bg-black border border-gray-700 rounded-lg p-3 md:p-4 text-white focus:border-purple-500 outline-none"
          />
        </div>
      </div>

      <!-- Message -->
      <div>
        <label class="text-sm mb-1 block text-gray-300">Message</label>
        <textarea
          v-model="form.message"
          rows="4"
          placeholder="Write your message…"
          class="w-full bg-black border border-gray-700 rounded-lg p-3 md:p-4 text-white focus:border-purple-500 outline-none resize-none"
        ></textarea>
      </div>

      <div class="pt-3">
        <GradButtonRound class="w-full md:w-auto">Send Message</GradButtonRound>
      </div>
    </form>
  </div>
</template>

<style scoped>
button {
  transition: all .2s;
}
</style>
