<template>
  <section class="text-white py-16 px-4 relative" id="about">
    <!-- Background gradient -->
    <div
      class="absolute z-0 top-0 left-0 w-full h-full overflow-hidden pointer-events-none"
    >
      <div
        class="absolute top-1/4 left-0 w-96 h-96 bg-gradient-to-br from-primary via-secondary to-[#570cac] opacity-10 blur-3xl"
      ></div>
      <div
        class="absolute bottom-1/4 right-0 w-96 h-96 bg-gradient-to-tl from-secondary to-primary opacity-10 blur-3xl"
      ></div>
    </div>

    <div class="max-w-screen-xl mx-auto relative z-10">
      <div class="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <!-- Left: Text Content -->
        <div class="order-2 lg:order-1" data-aos="fade-right">
          <h2
            class="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6"
          >
            👨‍💻
            <span
              class="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary"
            >
              About
            </span>
            Me
          </h2>

          <div
            class="space-y-4 text-gray-300 text-base lg:text-lg leading-relaxed"
          >
            <p>
              With a foundation in
              <span class="text-white font-semibold"
                >Computer Science and AI</span
              >, my passion lies at the intersection of technology, design, and
              immersive experiences. I specialize in building VR applications
              for industrial simulations and interactive environments, blending
              technical expertise with user-centric design.
            </p>

            <p>
              At
              <span class="text-white font-semibold">Bosch Sensortec</span> and
              <span class="text-white font-semibold"> Fraunhofer</span>, I
              developed performance-optimized XR solutions using Unreal Engine,
              Unity, Blender, and XR Toolkit. From crafting intuitive VR
              interfaces to integrating real-time data streams and simulating
              complex industrial systems, I thrive on transforming technical
              challenges into seamless user experiences.
            </p>

            <p>
              Beyond code and 3D assets, I'm driven by creating
              <span class="text-white font-semibold">
                emotionally resonant virtual spaces</span
              >
              where interactions feel natural and impactful. As a fast learner
              and collaborative problem-solver, I excel in cross-functional
              teams pushing the boundaries of XR innovation.
            </p>

            <p class="text-primary font-medium flex items-center gap-2">
              Let's build the future of immersive technology together
              <span class="text-2xl">🚀</span>
            </p>
          </div>
        </div>

        <!-- Right: Image -->
        <div
          class="order-1 lg:order-2 flex justify-center lg:justify-end"
          data-aos="fade-left"
        >
          <div class="relative w-full max-w-md">
            <!-- Glow effect -->
            <div
              class="absolute inset-0 bg-gradient-to-br from-primary/30 to-secondary/30 rounded-3xl blur-2xl"
            ></div>

            <!-- Image container -->
            <div
              class="relative rounded-3xl overflow-hidden border-2 border-primary/50 shadow-2xl"
            >
              <img
                src="@/assets/KaranMC.jpeg"
                alt="Karan Grover - VR Developer"
                class="w-full h-auto object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>

      <!-- Stats Section -->
      <div class="mt-16" data-aos="fade-up">
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div
            class="group relative bg-gradient-to-br from-[#1e1e1e] to-[#2a2a2a] rounded-2xl p-6 border border-gray-800 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/20"
          >
            <div class="text-center">
              <div
                class="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2"
              >
                {{ projectsCompleted }}+
              </div>
              <p class="text-gray-400 text-sm uppercase tracking-wide">
                Projects Completed
              </p>
            </div>
          </div>

          <div
            class="group relative bg-gradient-to-br from-[#1e1e1e] to-[#2a2a2a] rounded-2xl p-6 border border-gray-800 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/20"
          >
            <div class="text-center">
              <div
                class="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2"
              >
                {{ experienceYears.toFixed(1) }}+
              </div>
              <p class="text-gray-400 text-sm uppercase tracking-wide">
                Years Experience
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from "vue";

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

        animateCount(projectsCompleted, 20, 50);
        animateCount(experienceYears, 2, 100, 0.1);
      }
    },
    {
      threshold: 0.2,
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
