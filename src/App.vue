<template>
  <div class="bg-[#0a0a0a] w-full flex flex-col min-h-screen overflow-x-hidden">
    <!-- Fixed Background Video -->
    <BackgroundVideo />

    <!-- Wrap components in Suspense to handle loading -->
    <Suspense>
      <template #default>
        <!-- Wrap all Components inside a single root element -->
        <div class="w-full h-full flex flex-col gap-10 z-10">
          <!-- <VRIntro /> -->
          <div class="h-screen flex flex-col grow z-10 px-4 sm:px-6 md:px-10">
            <NavBar />
            <HeroSection />
          </div>
          <div
            class="h-full flex flex-col gap-10 shrink-0 z-10 px-4 sm:px-6 md:px-10"
          >
            <AboutSection />
            <LatestProjSection />
            <ToolsUsed />
            <WorkExperience />
            <EducationSection />
            <Presentation />
            <TestimonialsSection />
            <ContactSection />

            <Footer />
            <BackToTop />
          </div>
        </div>
      </template>
      <template #fallback>
        <div class="flex justify-center items-center min-h-screen">
          <loadingSpinner />
        </div>
      </template>
    </Suspense>
  </div>
</template>

<script setup>
import { defineAsyncComponent } from "vue";
//Import Components Asynchronously
const NavBar = defineAsyncComponent(() => import("@/components/NavBar.vue"));
const HeroSection = defineAsyncComponent(
  () => import("@/components/HeroSection.vue"),
);
const ServicesSection = defineAsyncComponent(
  () => import("@/components/ServicesSection.vue"),
);
const AboutSection = defineAsyncComponent(
  () => import("@/components/AboutSection.vue"),
);
const TestimonialsSection = defineAsyncComponent(
  () => import("@/components/TestimonialsSection.vue"),
);
const LatestProjSection = defineAsyncComponent(
  () => import("@/components/LatestProjSection.vue"),
);
const WorkExperience = defineAsyncComponent(
  () => import("@/components/WorkExperience.vue"),
);
const ContactSection = defineAsyncComponent(
  () => import("@/components/ContactSection.vue"),
);
const Footer = defineAsyncComponent(() => import("@/components/Footer.vue"));
const BackToTop = defineAsyncComponent(
  () => import("@/components/BackToTop.vue"),
);
import loadingSpinner from "./components/loadingSpinner.vue";
import Presentation from "./components/Presentation.vue";
const VRIntro = defineAsyncComponent(() => import("@/components/VRIntro.vue"));

import { onMounted } from "vue";
import BackgroundVideo from "./components/BackgroundVideo.vue";
import EducationSection from "./components/EducationSection.vue";
import ToolsUsed from "./components/ToolsUsed.vue";

onMounted(() => {
  const allowSound = () => {
    sessionStorage.setItem("play-sound", "true");
    window.removeEventListener("click", allowSound);
  };

  window.addEventListener("click", allowSound);
});
</script>
<style>
* {
  scrollbar-width: thin;
  scrollbar-color: #111827 #f1f1f1;
}
</style>
