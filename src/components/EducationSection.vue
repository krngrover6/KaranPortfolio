<template>
  <section class="text-white py-8 px-4" id="education">
    <div class="w-full" data-aos="zoom-in">
      <h2 class="text-4xl font-bold text-white text-left mb-6">
        My
        <span
          class="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary"
          >Education</span
        >
      </h2>
      <div class="space-y-5 py-8">
        <div
          v-for="element in education"
          :key="element.id"
          class="p-4 sm:p-6 flex items-start gap-6 sm:gap-8 w-full rounded-xl bg-[#1e1e1e] shadow-lg border border-[#1e1e1e]"
        >
          <div class="w-10 sm:w-14 shrink-0">
            <GraduationCap class="w-full h-full" />
          </div>
          <div class="grow">
            <h3
              class="text-lg lg:text-xl font-semibold capitalize text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary"
            >
              {{ element.School }}
            </h3>

            <p class="">{{ element.location ?? "" }}</p>
            <div class="w-full h-[1px] bg-gray-600 rounded my-2"></div>
            <p class="text-white">{{ element.program }}</p>
            <p class="text-white text-sm sm:text-base italic mt-2">
              {{ element.year }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { GraduationCap } from "lucide-vue-next";
import { ref } from "vue";

const education = ref([
  {
    id: 1,
    School: "Brandenburg University of Technology",
    location: "Germany",
    program: "MSc in Artificial Intelligence",
    year: "2023 - Present",
  },
  {
    id: 2,
    School: "DIT University",
    location: "Dehradun, India",
    program: "Bachelor of Technology in Computer Science & Engineering",
    year: "2018 - 2022",
  },
]);
</script>
