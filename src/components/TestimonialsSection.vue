<template>
  <section class="text-white mt-20" id="testimonials" data-aos="zoom-in">
    <h2
      class="text-3xl sm:text-4xl font-bold text-white text-left mb-6 px-4 xl:pl-16"
    >
      💬 Words from
      <span
        class="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary"
        >Collaborators</span
      >
    </h2>
    <div class="px-4 xl:px-16">
      <Carousel v-bind="settings" :breakpoints="breakpoints">
        <Slide v-for="element in testimonials" :key="element.id">
          <div class="carousel__item px-4">
            <div
              class="w-full mx-auto bg-[#262626] shadow-lg border border-[#1e1e1e] px-6 py-5 text-white font-light mb-6 rounded-xl"
            >
              <div class="w-full flex mb-6 items-center">
                <div
                  class="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200"
                >
                  <img
                    :src="element.image"
                    alt="testimonial image"
                    loading="lazy"
                  />
                </div>
                <h3
                  class="ml-4 font-bold text-lg capitalize text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary"
                >
                  {{ element.fullName }}
                </h3>
              </div>
              <div class="w-full">
                <p class="text-sm leading-tight">
                  <span
                    class="text-base leading-none italic font-bold text-white mr-1"
                    >"</span
                  >
                  {{ element.comment }}
                  <span
                    class="text-lg leading-none italic font-bold text-white mr-1"
                    >"</span
                  >
                </p>
              </div>
            </div>
          </div>
        </Slide>
        <template #addons>
          <Navigation />
        </template>
      </Carousel>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
import { Carousel, Navigation, Slide } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";

// Carousel settings
const settings = ref({
  itemsToShow: 1,
  snapAlign: "center",
});

// Breakpoints
const breakpoints = ref({
  700: {
    itemsToShow: 2.5,
    snapAlign: "center",
  },
  1024: {
    itemsToShow: 3,
    snapAlign: "start",
  },
});

// Real Testimonials
const testimonials = ref([
  {
    id: 1,
    fullName: "Anjali G",
    image: new URL("@/assets/anjali.png", import.meta.url).href,
    comment:
      "Karan’s vision for immersive VR experiences has been truly inspiring. His technical skills, paired with his dedication, have led to innovative and impactful results in every project he tackles.",
  },
  {
    id: 2,
    fullName: "Ravi Patel",
    image: new URL("@/assets/ravipatel.png", import.meta.url).href,
    comment:
      "Karan’s hands-on approach to VR development and leadership has earned him the respect of everyone around him. His attention to detail and ability to turn ideas into reality is unmatched.",
  },
  {
    id: 3,
    fullName: "Nitesh Keswani",
    image: new URL("@/assets/nitesh.jpeg", import.meta.url).href,
    comment:
      "Working with Karan has been an incredible experience. His problem-solving skills and relentless pursuit of excellence in VR development make him an invaluable asset to any team.",
  },
]);
</script>

<style>
.carousel__prev,
.carousel__next {
  color: white !important;
}
</style>
