<template>
  <section class="text-white mt-20" id="testimonials" data-aos="zoom-in">
    <h2 class="text-3xl sm:text-4xl font-bold text-white text-left mb-6 px-4">
      💬 Words from
      <span
        class="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary"
        >Collaborators</span
      >
    </h2>

    <div class="relative px-4 xl:px-10">
      <Carousel v-bind="settings" :breakpoints="breakpoints">
        <Slide v-for="(element, index) in TESTIMONIALS_DATA" :key="index">
          <div class="carousel__item px-3 w-full h-full">
            <div
              class="relative rounded-2xl border border-[#232323] bg-[#151515] px-6 sm:px-8 py-8 sm:py-10 overflow-hidden h-full flex flex-col"
            >
              <!-- Watermark quote glyph -->
              <span
                aria-hidden="true"
                class="pointer-events-none select-none absolute -top-2 left-4 text-[70px] sm:text-[90px] font-serif leading-none text-transparent bg-clip-text bg-gradient-to-br from-primary to-secondary opacity-15"
              >
                "
              </span>

              <div class="relative z-10 flex flex-col grow">
                <p
                  class="text-base sm:text-lg leading-relaxed text-gray-100 grow"
                >
                  {{ element.comment }}
                </p>

                <div class="mt-6 flex items-center gap-3">
                  <div
                    class="w-14 h-14 sm:w-16 sm:h-16 shrink-0 rounded-full overflow-hidden border-2 border-primary/70"
                  >
                    <img
                      :src="element.image"
                      :alt="element.fullName"
                      loading="lazy"
                      class="w-full h-full object-cover"
                    />
                  </div>
                  <div class="leading-tight">
                    <p
                      class="text-sm sm:text-base text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary"
                    >
                      {{ element.fullName }}
                    </p>
                    <p class="text-xs sm:text-sm text-gray-400">
                      {{ element.role }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Slide>
        <template #addons>
          <Navigation />
          <Pagination />
        </template>
      </Carousel>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
import { Carousel, Navigation, Pagination, Slide } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";
import { TESTIMONIALS_DATA } from "../utils/data/testimonialsData";

// Carousel settings
const settings = ref({
  itemsToShow: 1,
  snapAlign: "center",
  autoplay: 4000,
  wrapAround: true,
  pauseAutoplayOnHover: true,
  transition: 600,
});

// Breakpoints — whole numbers only to avoid wrap-around jitter
// caused by fractional itemsToShow miscalculating slide widths.
const breakpoints = ref({
  700: {
    itemsToShow: 2,
    snapAlign: "start",
  },
  1024: {
    itemsToShow: 3,
    snapAlign: "start",
  },
});
</script>

<style scoped>
.carousel__item {
  display: flex;
}

/* Push arrows fully outside the card edges into the section gutter,
   instead of floating on top of card content. */
:deep(.carousel__prev),
:deep(.carousel__next) {
  width: 44px;
  height: 44px;
  top: 50%;
  transform: translateY(-50%);
  background-color: #151515;
  border: 1px solid #2b2b2b;
  border-radius: 9999px;
  color: white !important;
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.4);
  transition:
    border-color 0.2s ease,
    transform 0.2s ease;
}

:deep(.carousel__prev) {
  left: -8px;
}

:deep(.carousel__next) {
  right: -8px;
}

@media (min-width: 1024px) {
  :deep(.carousel__prev) {
    left: -22px;
  }
  :deep(.carousel__next) {
    right: -22px;
  }
}

:deep(.carousel__prev:hover),
:deep(.carousel__next:hover) {
  border-color: #f59e0b;
  transform: translateY(-50%) scale(1.08);
}

:deep(.carousel__icon) {
  width: 18px;
  height: 18px;
}

:deep(.carousel__pagination) {
  margin-top: 1.5rem;
}

:deep(.carousel__pagination-button)::after {
  background-color: #3a3a3a;
  width: 8px;
  height: 8px;
  border-radius: 9999px;
}

:deep(.carousel__pagination-button--active)::after {
  background: linear-gradient(to right, #f59e0b, #ec4899);
}
</style>
