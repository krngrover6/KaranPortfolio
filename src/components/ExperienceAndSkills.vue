<template>
  <section class="text-white mt-18" id="skills">
    <div class="absolute right-0 top-[110rem] h-full w-full justify-end">
      <span class="flex opacity-20">
        <span class="w-16 h-32 rounded-l-full flex bg-primary blur-2xl"></span>
        <span
          class="w-16 h-32 rounded-r-full flex bg-[#f88fc2] blur-2xl mt-14"
        ></span>
      </span>
    </div>
    <div
      class="md:grid md:grid-cols-2 gap-10 items-center py-8 px-4 xl:gap-16 xl:px-16"
    >
      <div
        class="mt-4 md:mt-0 text-left flex flex-col z-10 h-full w-full md:w-3/4"
      >
        <h2 class="text-4xl font-bold text-white text-left mb-4">
          My
          <span
            class="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary"
            >Skills</span
          >
        </h2>
        <div class="mt-8" v-for="skill in Skills" :key="skill.id">
          <div class="flex items-end justify-between" data-aos="fade-right">
            <h4 class="font-semibold uppercase text-white">
              {{ skill.name }}
            </h4>
            <h3 class="text-xl font-bold text-white">{{ skill.width }}</h3>
          </div>
          <div class="mt-2 h-1 w-full bg-[#1e1e1e] rounded-full">
            <div
              class="h-1 rounded-full bg-primary"
              :style="`width :${skill.width}`"
            ></div>
          </div>
        </div>
      </div>
      <div data-aos="flip-left">
        <h2 class="text-4xl font-bold text-white text-left mb-8 md:mt-0 mt-8">
          My
          <span
            class="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary"
            >Experiences</span
          >
        </h2>
        <div class="space-y-5 py-8" data-aos="fade-left">
          <div
            v-for="element in Experiences"
            :key="element.id"
            class="p-4 sm:p-6 flex items-start gap-6 sm:gap-8 w-full rounded-xl bg-[#1e1e1e] shadow-lg border border-[#1e1e1e]"
          >
            <div class="w-10 sm:w-14 shrink-0">
              <img
                src="https://img.icons8.com/ios-filled/100/ffffff/briefcase.png"
                alt="briefcase"
                class="w-full"
              />
            </div>
            <div class="grow">
              <h3
                class="text-xl lg:text-2xl mb-3 font-semibold capitalize text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary"
              >
                {{ element.role }}
              </h3>
              <p class="text-white">{{ element.company }}</p>
              <p class="text-white text-sm sm:text-base">{{ element.date }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";

const Skills = ref([
  {
    id: 1,
    name: "Unity",
    width: "95%",
  },
  {
    id: 2,
    name: "Unreal Engine",
    width: "90%",
  },
  {
    id: 3,
    name: "3D Asset Creation",
    width: "80%",
  },
  {
    id: 4,
    name: "Digital Twin & XR Development",
    width: "88%",
  },
  {
    id: 5,
    name: "UI & UX",
    width: "95%",
  },

  {
    id: 6,
    name: "Figma",
    width: "75%",
  },
  {
    id: 7,
    name: "VR/AR Demonstrators",
    width: "85%",
  },
]);

const Experiences = ref([
  {
    id: 1,
    role: "Virtual Reality Developer",
    company: "Bosch Sensortec GmbH, Germany",
    date: "November 2024 - March 2025",
  },
  {
    id: 2,
    role: "Research Assistant",
    company: "Fraunhofer IPMS, Germany",
    date: "October 2023 - October 2024",
  },
  {
    id: 3,
    role: "Virtual Reality Teacher",
    company: "Edusera, Remote",
    date: "December 2021 - November 2022",
  },
]);
</script>
