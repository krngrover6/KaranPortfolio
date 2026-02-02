<template>
  <section class="text-white py-8 px-4" id="experience">
    <div class="mx-auto" data-aos="fade-up">
      <h2 class="text-3xl sm:text-4xl font-bold text-white text-left mb-8">
        💼
        <span
          class="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary"
          >Professional </span
        >Journey
      </h2>

      <div class="space-y-6 py-4">
        <div
          v-for="element in Experiences"
          :key="element.id"
          class="p-4 sm:p-6 w-full rounded-xl bg-[#1e1e1e] shadow-lg border border-[#1e1e1e] hover:border-primary/50 transition-colors"
          data-aos="fade-left"
        >
          <div class="flex items-start gap-4 sm:gap-6">
            <div class="w-8 sm:w-12 shrink-0 mt-1">
              <img
                :src="element.logo"
                :alt="element.company"
                class="w-full h-full object-contain aspect-square rounded"
              />
              <!-- <Building2 class="w-full h-full" /> -->
            </div>

            <div class="grow min-w-0">
              <!-- Header -->
              <div class="flex flex-col gap-2 mb-3">
                <h3
                  class="text-base sm:text-lg lg:text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary leading-tight"
                >
                  {{ element.role }}
                </h3>
                <p class="text-white font-medium text-sm sm:text-base">
                  {{ element.company }}
                </p>
                <div
                  class="flex flex-wrap items-center gap-2 text-xs sm:text-sm text-gray-400"
                >
                  <span>{{ element.location }}</span>
                  <span class="hidden sm:inline">•</span>
                  <span class="text-gray-300">{{ element.date }}</span>
                </div>
              </div>

              <div class="w-full h-[1px] bg-gray-600 rounded my-3"></div>

              <!-- Project Title - Collapsible on mobile -->
              <button
                @click="toggleExpand(element.id)"
                class="w-full text-left mb-3 md:cursor-default"
              >
                <p
                  class="text-gray-200 text-sm sm:text-base font-medium flex items-center justify-between"
                >
                  <span class="pr-2">{{ element.project }}</span>
                  <ChevronDown
                    :class="[
                      'w-4 h-4 transition-transform md:hidden',
                      expandedItems.includes(element.id) ? 'rotate-180' : '',
                    ]"
                  />
                </p>
              </button>

              <!-- Collapsible Content -->
              <div
                :class="[
                  'overflow-hidden transition-all duration-300 md:!max-h-none md:!opacity-100',
                  expandedItems.includes(element.id)
                    ? 'max-h-96 opacity-100'
                    : 'max-h-0 opacity-0',
                ]"
              >
                <ul class="space-y-2.5">
                  <li
                    v-for="(point, index) in element.points"
                    :key="index"
                    class="text-gray-300 text-sm sm:text-base leading-relaxed flex items-start gap-2"
                  >
                    <span class="text-primary mt-1 text-base shrink-0">•</span>
                    <span>{{ point }}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { Building2, ChevronDown } from "lucide-vue-next";
import { ref } from "vue";
import lufthansaLogo from "../assets/toolsLogo/lufthansaLogo.svg";
import boschLogo from "../assets/toolsLogo/boschLogo.svg";
import fraunhoferLogo from "../assets/toolsLogo/fraunhoferLogo.svg";

const expandedItems = ref([1]); // First item expanded by default

const toggleExpand = (id) => {
  // On mobile only
  if (window.innerWidth < 768) {
    const index = expandedItems.value.indexOf(id);
    if (index > -1) {
      expandedItems.value.splice(index, 1);
    } else {
      expandedItems.value.push(id);
    }
  }
};

const Experiences = ref([
  {
    id: 1,
    role: "VR Developer",
    company: "Lufthansa Technik",
    logo: lufthansaLogo,
    location: "Hamburg, Germany",
    date: "11/2025 – Present",
    project: "Multi-User Flight Simulation & Cross-Sectional AR Visualization",
    points: [
      "Built a multiplayer VR flight simulation with Fish-Networking, implementing real-time synchronization and optimizing network performance for seamless multi-user experiences.",
      "Developed a stereoscopic XR application in Unreal Engine with advanced rendering pipelines, spatial audio systems, and performance optimizations for Meta Quest 3.",
    ],
  },
  {
    id: 2,
    role: "VR Research Assistant",
    company: "Fraunhofer IEM",
    logo: fraunhoferLogo,
    location: "Paderborn, Germany",
    date: "04/2025 – 10/2025",
    project: "AI-Driven Production Line Optimization via VR Simulation",
    points: [
      "Architected a Unity-based VR simulation environment leveraging digital twin technology and soft sensors to validate production line safety protocols in a risk-free virtual setting.",
      "Integrated AI-driven optimization models for predictive analytics and intelligent decision-making, enhancing production efficiency while minimizing real-world operational risks.",
    ],
  },
  {
    id: 3,
    role: "VR Developer",
    company: "Bosch Sensortec GmbH",
    logo: boschLogo,
    location: "Reutlingen, Germany",
    date: "11/2024 – 04/2025",
    project: "Immersive Industrial XR Training Platform",
    points: [
      "Engineered immersive XR applications in Unreal Engine using C++ and Blueprints, featuring intuitive UI systems, interactive onboarding flows, and responsive VR menu architectures.",
      "Developed an automated CAD-to-VR pipeline converting engineering files to optimized Unreal assets, streamlining 3D asset workflows (FBX, STEP, Blender) for industrial simulation deployment.",
    ],
  },
  {
    id: 4,
    role: "Research Assistant",
    company: "Fraunhofer IPMS",
    logo: fraunhoferLogo,
    location: "Dresden, Germany",
    date: "10/2023 – 10/2024",
    project: "3D Modeling for Blood Glucose Sensor Emulation",
    points: [
      "Designed and prototyped 3D-printed sensor emulation systems in Blender, preprocessing signal data to train predictive ML models achieving 75% accuracy.",
      "Delivered technical presentations to research stakeholders, providing data-driven insights that informed validation strategies and project direction.",
    ],
  },
]);
</script>
