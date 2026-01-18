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

    <div class="max-w-screen-xl mx-auto">
      <div class="text-left flex flex-col z-10 h-full w-full lg:w-3/4">
        <h2 class="text-4xl font-bold text-white text-left mb-4">
          Tools &
          <span
            class="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary"
            >Technologies</span
          >
        </h2>

        <div class="mt-8 space-y-6">
          <div v-for="skill in Skills" :key="skill.id">
            <div class="flex items-end justify-between" data-aos="fade-right">
              <h4 class="font-semibold uppercase text-white">
                {{ skill.name }}
              </h4>
              <h3 class="text-xl font-bold text-white">{{ skill.width }}</h3>
            </div>
            <div class="mt-2 h-1 w-full bg-[#1e1e1e] rounded-full">
              <div
                class="h-1 rounded-full bg-primary"
                :style="`width: ${skill.width}`"
              ></div>
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
    name: "Unreal Engine",
    width: "90%",
  },
  {
    id: 2,
    name: "Unity",
    width: "95%",
  },
  {
    id: 3,
    name: "C++ & Blueprints",
    width: "85%",
  },
  {
    id: 4,
    name: "Blender & 3D Modeling",
    width: "80%",
  },
  {
    id: 5,
    name: "XR Development (VR/AR/MR)",
    width: "88%",
  },
  {
    id: 6,
    name: "UI/UX Design",
    width: "85%",
  },
  {
    id: 7,
    name: "Fish-Networking & Multiplayer",
    width: "75%",
  },
  {
    id: 8,
    name: "Digital Twin & IoT Integration",
    width: "82%",
  },
]);
</script>
