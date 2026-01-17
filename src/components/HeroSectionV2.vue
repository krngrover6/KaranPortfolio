<template>
  <section
    class="relative w-full grow overflow-hidden z-0"
    data-aos="zoom-in-up"
  >
    <!-- Background Video Container -->
    <div class="absolute inset-0 w-full h-full z-0">
      <!-- Video Element -->
      <video
        ref="videoRef"
        autoplay
        muted
        loop
        playsinline
        class="absolute top-0 left-0 w-full h-full object-cover"
        poster="@/assets/image.png"
      >
        <source src="@/assets/bgVideo/vid1.mp4" type="video/mp4" />
        <source src="@/assets/bgVideo/vid2.mp4" type="video/webm" />
      </video>

      <!-- Top Blur Gradient -->
      <div
        class="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#1e1e1e] via-[#1e1e1e]/60 to-transparent pointer-events-none z-10"
      ></div>

      <!-- Bottom Blur Gradient -->
      <div
        class="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#1e1e1e] via-[#1e1e1e]/60 to-transparent pointer-events-none z-10"
      ></div>

      <!-- Overall dark overlay for better text readability -->
      <div class="absolute inset-0 bg-black/40 z-[5]"></div>
    </div>

    <!-- Background Gradients (purple effect) -->
    <div class="absolute top-0 inset-x-0 h-64 flex items-start z-[15]">
      <div
        class="h-24 w-2/3 bg-gradient-to-br from-[#570cac] blur-2xl opacity-40"
      ></div>
      <div
        class="h-20 w-3/5 bg-gradient-to-r from-[#670ccf] opacity-40 blur-2xl"
      ></div>
    </div>

    <!-- Content Container -->
    <div
      class="w-full px-5 sm:px-8 md:px-12 lg:px-8 max-w-screen-lg lg:max-w-screen-xl mx-auto relative z-20"
    >
      <div
        class="grid lg:grid-cols-2 gap-10 xl:gap-14 relative pt-24 lg:max-w-none max-w-2xl md:max-w-3xl mx-auto"
      >
        <!-- Text + Buttons -->
        <div class="lg:py-6">
          <div class="text-center lg:text-left">
            <h1
              class="pt-4 text-white font-bold text-4xl md:text-5xl lg:text-6xl"
            >
              Hi, I'm
              <span
                class="text-transparent bg-clip-text bg-gradient-to-r from-primary to-pink-500"
                >Karan Grover</span
              >
              🥽
            </h1>
          </div>
          <p
            class="text-gray-300 pt-8 text-center lg:text-left mx-auto max-w-xl"
          >
            A passionate Virtual Reality Developer skilled in Unreal Engine,
            Unity, and immersive design. I focus on building interactive 3D
            environments, intuitive user interfaces, and immersive XR
            experiences for industrial and game applications. Always exploring
            new tools like Digital Twins, VR UI, and Mixed Reality, I'm excited
            to shape the future of immersive tech. Let's create something
            amazing together!
          </p>

          <!-- CTA Buttons -->
          <div
            class="flex flex-wrap justify-center sm:justify-start gap-3 pt-9"
          >
            <a
              href="https://drive.google.com/drive/folders/1pdEuG0pAPHVyKNktel45fsoek-qTnZhV?usp=share_link"
              target="_blank"
              rel="noreferrer nofollow noindex"
              class="min-w-[120px]"
            >
              <button
                class="px-5 py-2 rounded-full bg-primary text-white font-semibold hover:scale-105 transition"
              >
                More Projects
              </button>
            </a>

            <a
              href="https://drive.google.com/file/d/1UukXp86j7i3y9LIoER-2QRQAHO1ipniz/view"
              target="_blank"
              rel="noreferrer nofollow noindex"
              class="min-w-[140px]"
            >
              <button
                class="flex items-center justify-center px-5 py-2 rounded-full border border-primary text-primary hover:bg-primary hover:text-black transition"
              >
                <svg
                  class="w-5 h-5 mr-2"
                  fill="none"
                  viewBox="0 0 18 22"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13 9L9 13M9 13L5 9M9 13V1"
                    stroke="#f59e0b"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M1 17V18C1 18.8 1.3 19.6 1.9 20.1C2.4 20.7 3.2 21 4 21H14C14.8 21 15.6 20.7 16.1 20.1C16.7 19.6 17 18.8 17 18V17"
                    stroke="#f59e0b"
                    stroke-width="2"
                    stroke-linecap="round"
                  />
                </svg>
                Check Resume
              </button>
            </a>
          </div>
        </div>

        <!-- Image Section -->
        <div class="lg:h-full md:flex">
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
        </div>
      </div>
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
import { ref, onMounted } from "vue";

AOS.init();
const showLightbox = ref(false);
const videoRef = ref(null);

onMounted(() => {
  if (videoRef.value) {
    videoRef.value.play().catch(() => {
      console.log("Video autoplay prevented");
    });
  }
});
</script>
