<template>
  <section class="relative w-full h-full" data-aos="fade-down">
    <!-- Background Gradients -->
    <div class="absolute top-0 inset-x-0 h-64 flex items-start">
      <div
        class="h-24 w-2/3 bg-gradient-to-br from-[#570cac] blur-2xl invisible opacity-40"
      ></div>
      <div
        class="h-20 w-3/5 bg-gradient-to-r from-[#670ccf] opacity-40 blur-2xl"
      ></div>
    </div>

    <!-- Content Container -->
    <div class="w-full px-5 sm:px-8 md:px-12 lg:px-8 mx-auto relative">
      <div
        class="grid lg:grid-cols-1 gap-10 xl:gap-14 relative pt-14 lg:max-w-none max-w-3xl md:max-w-4xl mx-auto"
      >
        <!-- Text + Buttons -->
        <div class="w-full lg:py-6">
          <div class="text-center lg:text-left">
            <h1
              class="pt-4 text-white font-bold text-4xl md:text-5xl lg:text-6xl"
            >
              👋 Hello there,<br />
              I'm
              <span
                class="text-transparent bg-clip-text bg-gradient-to-r from-primary to-pink-500"
                >Karan Grover
              </span>
              <span class="animate-bounce">🤓</span>

              <!-- 🥽 -->
            </h1>
          </div>
          <p
            class="text-white pt-8 text-center lg:text-left mr-auto max-w-xl text-shadow-md"
          >
            VR Developer specializing in Unreal Engine and Unity. I create
            immersive 3D environments, intuitive XR interfaces, and innovative
            experiences for industrial and gaming applications.
          </p>

          <!-- CTA Buttons -->
          <div
            v-show="false"
            class="flex flex-wrap justify-center sm:justify-start gap-3 pt-9"
          >
            <!-- VR Projects Button -->
            <a
              href="https://drive.google.com/drive/folders/1pdEuG0pAPHVyKNktel45fsoek-qTnZhV?usp=share_link"
              target="_blank"
              rel="noreferrer nofollow noindex"
              title="View more projects"
              class="px-5 py-2 flex items-center gap-x-2 rounded-full bg-primary text-black hover:scale-105 transition"
            >
              <List :size="16" /><span class="">More Projects</span>
            </a>

            <!-- Resume Button -->
            <a
              href="https://drive.google.com/file/d/1UukXp86j7i3y9LIoER-2QRQAHO1ipniz/view"
              target="_blank"
              rel="noreferrer nofollow noindex"
              class="flex items-center justify-center gap-x-2 px-5 py-2 rounded-full bg-pink-500 border border-pink-500 hover:bg-primary text-white hover:text-black transition"
            >
              <Download :size="16" />
              Check Resume
            </a>
          </div>
        </div>

        <!-- Image Section -->
        <!-- <div class="lg:h-full md:flex">
          <div class="flex w-full h-96 min-h-[24rem] items-center relative">
            <div
              class="absolute z-0 top-1/2 -translate-y-1/2 w-5/6 right-0 h-[calc(80%+20px)] bg-gradient-to-tr opacity-25 from-[#570cac] to-primary blur-2xl"
            ></div>
            <div
              class="absolute h-full z-10 p-2 -translate-y-1/2 top-1/2 lg:right-3 md:right-40 sm:right-16 rounded-full shadow-lg border border-primary"
            >
              <img
                src="@/assets/top_pricture.png"
                alt="Hero pic"
                width="500"
                height="auto"
                loading="lazy"
                class="w-full h-full rounded-full object-cover"
              />
            </div>
          </div>
        </div> -->
      </div>
    </div>

    <div class="absolute bottom-4 right-4 text-white">
      <a
        title="View Presentation"
        href="#presentation"
        class="bg-gradient-to-r from-primary to-pink-500 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl cursor-pointer"
        ><Rocket :size="24" />
      </a>
    </div>

    <!-- Optional Lightbox -->
    <div
      v-if="showLightbox"
      class="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50"
    >
      <div class="bg-white p-8 rounded-lg text-center">
        <h2 class="text-2xl font-bold mb-4">Nice choice!</h2>
        <button
          @click="showLightbox = false"
          class="mt-4 bg-primary text-white px-4 py-2 rounded"
        >
          Close
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
import AOS from "aos";
import "aos/dist/aos.css";
import { Download, List, Rocket } from "lucide-vue-next";
import { ref } from "vue";

AOS.init();
const showLightbox = ref(false);
</script>

<style lang="css" scoped>
.text-shadow-md {
  text-shadow: 0px 2px 4px black;
}
</style>
