<template>
  <section class="text-white mt-18" id="about">
    <div class="absolute z-0 top-[93rem] inset-x-0 h-64 flex items-start">
      <div
        class="h-24 w-64 bg-gradient-to-br from-primary via-secondary blur-2xl to-[#570cac] opacity-20"
      ></div>
    </div>
    <div
      class="flex flex-col-reverse gap-10 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16 z-1"
    >
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
              <img
                src="https://img.icons8.com/ios-glyphs/60/ffffff/graduation-cap--v1.png"
                alt="graduation-cap--v1"
                class="w-full"
              />
            </div>
            <div class="grow">
              <h3
                class="text-xl lg:text-2xl mb-3 font-semibold capitalize text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary"
              >
                {{ element.School }}
              </h3>
              <p class="text-white">{{ element.program }}</p>
              <p class="text-white text-sm sm:text-base">{{ element.year }}</p>
            </div>
          </div>
        </div>
      </div>
      <div
        class="mt-4 md:mt-0 text-left flex flex-col z-10 h-full"
        data-aos="zoom-in"
      >
        <h2 class="text-4xl font-bold text-white text-left mb-6">
          <span
            class="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary"
            >About</span
          >
          Me
        </h2>

        <p class="text-base lg:text-lg py-8">
          I come from a background in Computer Science and AI, but my true
          passion lies at the intersection of technology, design, and immersive
          experiences. Over the past few years, I’ve built VR applications for
          both industrial simulations and game environments, combining technical
          depth with a strong eye for interaction and UX.
          <br /><br />
          I’ve worked with companies like Bosch Sensortec and Fraunhofer, where
          I focused on building performance-optimized XR experiences using
          Unreal Engine, Unity, and tools like Blender and XR Toolkit. Whether
          it’s crafting responsive VR menus, integrating real-time data, or
          simulating complex systems — I enjoy solving real-world problems
          through immersive design.
          <br /><br />

          Beyond code and 3D assets, I care deeply about how users feel inside a
          virtual space — from intuitive interactions to emotional impact. I'm a
          fast learner, a curious thinker, and someone who thrives in creative,
          cross-functional teams.
          <br /><br />

          Let’s push the boundaries of what's possible in XR 🚀
        </p>
        <div class="lg:h-full md:flex">
          <div class="flex w-full h-96 min-h-[24rem] items-center relative">
            <div
              class="absolute z-0 top-1/2 -translate-y-1/2 w-5/6 right-0 h-[calc(80%+20px)] bg-gradient-to-tr opacity-25 from-[#570cac] to-primary blur-2xl"
            ></div>
            <div
              class="absolute h-full z-10 p-2 -translate-y-1/2 top-1/2 lg:right-3 md:right-40 sm:right-16 rounded-3xl shadow-lg border border-primary"
            >
              <img
                src="@/assets/top_pricture.png"
                alt="Hero pic"
                width="500"
                height="auto"
                loading="lazy"
                class="w-full h-full rounded-3xl object-cover"
              />
            </div>
          </div>
        </div>

        <div class="w-full flex items-center justify-center">
          <div
            class="grow shrink-0 grid grid-cols-1 sm:grid-cols-3 gap-5 max-w-7xl pt-8"
          >
            <div
              class="text-center rounded-xl bg-[#1e1e1e] shadow-lg border border-[#1e1e1e] px-3 py-5"
            >
              <h3 class="text-white font-bold text-2xl sm:text-3xl lg:text-4xl">
                {{ happyClients }}+
              </h3>
              <p class="text-sm sm:text-base text-gray-300">Happy Clients</p>
            </div>
            <div
              class="text-center rounded-xl bg-[#1e1e1e] shadow-lg border border-[#1e1e1e] px-3 py-5"
            >
              <h3 class="text-white font-bold text-2xl sm:text-3xl lg:text-4xl">
                {{ projectsCompleted }}+
              </h3>
              <p class="text-sm sm:text-base text-gray-300">
                Projects Completed
              </p>
            </div>
            <div
              class="text-center rounded-xl bg-[#1e1e1e] shadow-lg border border-[#1e1e1e] px-3 py-5"
            >
              <h3 class="text-white font-bold text-2xl sm:text-3xl lg:text-4xl">
                {{ experienceYears.toFixed(1) }}+
              </h3>
              <p class="text-sm sm:text-base text-gray-300">Years Experience</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from "vue";

const education = ref([
  {
    id: 1,
    School: "Brandenburg University of Technology (BTU), Germany",
    program: "MSc in Artificial Intelligence",
    year: "2023 - Present",
  },
  {
    id: 2,
    School: "DIT University, Dehradun, India",
    program: "Bachelor of Engineering in Computer Science",
    year: "2018 - 2022",
  },
]);

const happyClients = ref(0);
const projectsCompleted = ref(0);
const experienceYears = ref(0);
const hasAnimated = ref(false);

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      const entry = entries[0];
      if (entry.isIntersecting && !hasAnimated.value) {
        hasAnimated.value = true;
        animateCount(happyClients, 5, 0);
        animateCount(projectsCompleted, 20, 10);
        animateCount(experienceYears, 1.5, 120);
      }
    },
    {
      threshold: 0.3, // when 30% of section is visible
    },
  );

  const section = document.getElementById("about");
  if (section) {
    observer.observe(section);
  }
});

function animateCount(counter, target, interval, step = 1) {
  const timer = setInterval(() => {
    if (counter.value < target) {
      counter.value = Math.min(counter.value + step, target);
    } else {
      clearInterval(timer);
    }
  }, interval);
}
</script>
