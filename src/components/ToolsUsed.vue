<template>
  <section class="text-white py-8 px-4" id="skills">
    <div class="absolute right-0 top-[110rem] h-full w-full justify-end">
      <span class="flex opacity-20">
        <span class="w-16 h-32 rounded-l-full flex bg-primary blur-2xl"></span>
        <span
          class="w-16 h-32 rounded-r-full flex bg-[#f88fc2] blur-2xl mt-14"
        ></span>
      </span>
    </div>

    <div class="mx-auto">
      <div class="text-left flex flex-col z-10 h-full w-full">
        <h2 class="text-3xl sm:text-4xl font-bold text-white text-left mb-4">
          🛠️ My
          <span
            class="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary"
          >
            Creative Arsenal</span
          >
        </h2>

        <div
          class="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6"
        >
          <div
            v-for="skill in Skills"
            :key="skill.id"
            class="w-full flex flex-col items-center justify-center p-4 rounded-lg bg-[#1e1e1e]/50 hover:bg-[#2a2a2a]/70 transition-all duration-300 hover:scale-105"
            data-aos="fade-up"
          >
            <div class="w-20 h-20 flex items-center justify-center mb-3">
              <img
                :src="skill.logo"
                :alt="skill.name"
                class="w-full h-full object-contain"
              />
            </div>
            <h4 class="text-sm font-semibold text-white text-center">
              {{ skill.name }}
            </h4>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";

// Import logos with correct path
import unrealLogo from "../assets/toolsLogo/unrealLogo.svg";
import unityLogo from "../assets/toolsLogo/unityLogo.svg";
import blenderLogo from "../assets/toolsLogo/blenderLogo.svg";
import cppLogo from "../assets/toolsLogo/cppLogo.svg";
import csharpLogo from "../assets/toolsLogo/csharpLogo.svg";
import fishnetLogo from "../assets/toolsLogo/fishnetLogo.svg";
// import lufthansaLogo from "../assets/toolsLogo/lufthansaLogo.svg";
// import boschLogo from "../assets/toolsLogo/boschLogo.svg";

const Skills = ref([
  {
    id: 1,
    name: "Unreal Engine",
    logo: unrealLogo,
  },
  {
    id: 2,
    name: "Unity",
    logo: unityLogo,
  },
  {
    id: 3,
    name: "C++",
    logo: cppLogo,
  },
  {
    id: 4,
    name: "Blender",
    logo: blenderLogo,
  },
  {
    id: 5,
    name: "C#",
    logo: csharpLogo,
  },
  {
    id: 6,
    name: "Fishnet",
    logo: fishnetLogo,
  },
  // {
  //   id: 7,
  //   name: "Lufthansa",
  //   logo: lufthansaLogo,
  // },
  // {
  //   id: 8,
  //   name: "Bosch",
  //   logo: boschLogo,
  // },
]);
</script>
