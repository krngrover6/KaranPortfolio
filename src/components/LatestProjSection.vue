<template>
  <section class="text-white mt-20" id="projects">
    <div class="flex flex-col gap-y-10">
      <div class="mb-4 px-4 md:flex md:justify-between">
        <h2 class="text-3xl sm:text-4xl font-bold text-white">
          ✨ Featured
          <span
            class="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary"
            >Work</span
          >
        </h2>
      </div>

      <ul
        class="px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6"
        data-aos="zoom-in"
      >
        <li
          v-for="(project, index) in filteredProjects"
          :key="index"
          ref="cardEls"
          class="project-card group relative rounded-xl overflow-hidden cursor-pointer border border-[#232323] bg-[#151515]"
          @pointerenter="onPointerEnter(index, $event)"
          @pointerleave="onPointerLeave(index, $event)"
          @click="openModal(index)"
        >
          <div class="relative h-56 md:h-72 w-full overflow-hidden">
            <video
              ref="videoEls"
              :poster="project.image"
              :src="project.videoUrl"
              muted
              loop
              playsinline
              preload="metadata"
              class="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 pointer-events-none"
            ></video>

            <div
              class="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent"
            ></div>

            <div
              class="pointer-events-none absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            >
              <div
                class="w-14 h-14 rounded-full bg-black/50 border border-white/30 flex items-center justify-center backdrop-blur-sm"
              >
                <Play class="w-6 h-6 text-white fill-white" />
              </div>
            </div>

            <div
              class="pointer-events-none absolute bottom-0 left-0 right-0 p-4 sm:p-5"
            >
              <h3
                class="text-base sm:text-lg font-semibold text-white leading-snug"
              >
                {{ project.title }}
              </h3>
              <div class="flex flex-wrap gap-1.5 mt-2">
                <span
                  v-for="tech in project.technologies"
                  :key="tech"
                  class="text-[11px] sm:text-xs px-2 py-0.5 rounded-full border border-primary/60 text-primary bg-black/30"
                >
                  {{ tech }}
                </span>
              </div>
            </div>
          </div>
        </li>
      </ul>

      <div class="px-4 xl:pr-16">
        <p class="text-gray-300 mb-3 text-lg">
          Ready to explore more immersive experiences?
        </p>
        <a
          href="https://drive.google.com/drive/folders/1pdEuG0pAPHVyKNktel45fsoek-qTnZhV?usp=share_link"
          target="_blank"
          rel="noreferrer nofollow noopener"
          title="View more projects"
          class="w-fit px-5 py-2 flex items-center gap-x-2 rounded-full bg-primary text-black hover:scale-105 transition"
        >
          <List :size="16" /><span>Explore All Projects</span>
        </a>
      </div>
    </div>

    <!-- Modal -->
    <transition name="modal-fade">
      <div
        v-if="activeIndex !== null"
        class="fixed inset-0 z-[999] bg-black/85 backdrop-blur-sm flex items-center justify-center p-4 sm:p-8"
        @click.self="closeModal"
      >
        <div
          class="relative w-full max-w-5xl bg-[#151515] border border-[#232323] rounded-2xl overflow-hidden grid md:grid-cols-2"
          role="dialog"
          aria-modal="true"
        >
          <button
            type="button"
            @click="closeModal"
            aria-label="Close"
            class="absolute top-3 right-3 z-10 w-9 h-9 rounded-full bg-black/60 border border-white/20 flex items-center justify-center text-white hover:border-primary transition-colors"
          >
            <X class="w-5 h-5" />
          </button>

          <div class="bg-black flex items-center justify-center">
            <video
              ref="modalVideoRef"
              :src="activeProject?.videoUrl"
              :poster="activeProject?.image"
              controls
              controlsList="nodownload"
              autoplay
              muted
              loop
              playsinline
              class="w-full h-full max-h-[70vh] md:max-h-[80vh] object-contain"
            ></video>
          </div>

          <div class="p-6 sm:p-8 flex flex-col">
            <h3 class="text-xl sm:text-2xl font-bold text-white">
              {{ activeProject?.title }}
            </h3>
            <p class="text-[#adb7be] leading-relaxed mt-4">
              {{ activeProject?.description }}
            </p>

            <div class="flex flex-wrap gap-2 mt-6">
              <span
                v-for="tech in activeProject?.technologies"
                :key="tech"
                class="text-xs sm:text-sm px-3 py-1 rounded-full border border-primary/60 text-primary"
              >
                {{ tech }}
              </span>
            </div>

            <div class="mt-auto pt-8 flex flex-wrap gap-3">
              <a
                :href="activeProject?.webURL"
                target="_blank"
                rel="noreferrer nofollow noindex"
                class="px-4 py-2 rounded-full bg-primary text-black font-semibold hover:scale-105 transition"
              >
                View Project
              </a>
              <a
                :href="activeProject?.gitURL"
                target="_blank"
                rel="noreferrer nofollow noindex"
                class="px-4 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition"
              >
                Source / Files
              </a>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </section>
</template>

<script setup>
import { List, Play, X } from "lucide-vue-next";
import { ref, computed, onMounted, onBeforeUnmount, nextTick } from "vue";
import { PROJECT_DETAILS } from "../utils/data/projectDetails";

const sampleVideo = new URL("@/assets/bgVideo/vid1.mp4", import.meta.url).href;

// const Projects = ref();

const filteredProjects = computed(() => PROJECT_DETAILS);

const cardEls = ref([]);
const videoEls = ref([]);
const activeIndex = ref(null);
const modalVideoRef = ref(null);

let rafId = null;
let currentMobileIndex = -1;
let currentHoverIndex = -1;

const activeProject = computed(() =>
  activeIndex.value !== null ? filteredProjects.value[activeIndex.value] : null,
);

function safePlay(vid) {
  if (!vid) return;
  const playPromise = vid.play();
  if (playPromise !== undefined) playPromise.catch(() => {});
}

// Decide mouse vs touch from the ACTUAL event firing, not a static
// matchMedia capability guess. event.pointerType is 'mouse', 'touch', or 'pen'.
function onPointerEnter(index, event) {
  if (event.pointerType !== "mouse") return;
  currentHoverIndex = index;
  const vid = videoEls.value[index];
  if (!vid) return;
  vid.currentTime = 0;
  safePlay(vid);
}

function onPointerLeave(index, event) {
  if (event.pointerType !== "mouse") return;
  if (currentHoverIndex === index) currentHoverIndex = -1;
  const vid = videoEls.value[index];
  if (!vid) return;
  vid.pause();
  vid.currentTime = 0;
  vid.load(); // forces poster image to reappear
}

function updateMobileActiveCard() {
  if (window.innerWidth >= 768) return;

  const viewportCenter = window.innerHeight / 2;
  let closestIndex = -1;
  let closestDistance = Infinity;

  cardEls.value.forEach((el, index) => {
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const cardCenter = rect.top + rect.height / 2;
    const distance = Math.abs(cardCenter - viewportCenter);
    const isVisible = rect.bottom > 0 && rect.top < window.innerHeight;
    if (isVisible && distance < closestDistance) {
      closestDistance = distance;
      closestIndex = index;
    }
  });

  const threshold = window.innerHeight * 0.3;
  const shouldActivate = closestIndex !== -1 && closestDistance < threshold;
  const nextIndex = shouldActivate ? closestIndex : -1;

  if (nextIndex === currentMobileIndex) return;

  if (currentMobileIndex !== -1 && videoEls.value[currentMobileIndex]) {
    videoEls.value[currentMobileIndex].pause();
    videoEls.value[currentMobileIndex].currentTime = 0;
  }

  if (
    nextIndex !== -1 &&
    videoEls.value[nextIndex] &&
    currentHoverIndex === -1
  ) {
    safePlay(videoEls.value[nextIndex]);
  }

  currentMobileIndex = nextIndex;
}

function onScrollOrResize() {
  if (rafId !== null) return;
  rafId = requestAnimationFrame(() => {
    updateMobileActiveCard();
    rafId = null;
  });
}

function openModal(index) {
  console.log("click click");
  const vid = videoEls.value[index];
  if (vid) vid.pause();
  if (currentMobileIndex === index) currentMobileIndex = -1;
  if (currentHoverIndex === index) currentHoverIndex = -1;

  activeIndex.value = index;
  document.body.style.overflow = "hidden";
  nextTick(() => {
    if (modalVideoRef.value) {
      modalVideoRef.value.currentTime = 0;
      safePlay(modalVideoRef.value);
    }
  });
}

function closeModal() {
  if (modalVideoRef.value) modalVideoRef.value.pause();
  activeIndex.value = null;
  document.body.style.overflow = "";
}

function onKeydown(e) {
  if (e.key === "Escape" && activeIndex.value !== null) closeModal();
}

onMounted(() => {
  window.addEventListener("keydown", onKeydown);
  window.addEventListener("scroll", onScrollOrResize, { passive: true });
  window.addEventListener("resize", onScrollOrResize);
  nextTick(() => updateMobileActiveCard());
});

onBeforeUnmount(() => {
  window.removeEventListener("keydown", onKeydown);
  window.removeEventListener("scroll", onScrollOrResize);
  window.removeEventListener("resize", onScrollOrResize);
  if (rafId !== null) cancelAnimationFrame(rafId);
  document.body.style.overflow = "";
});
</script>

<style scoped>
.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.25s ease;
}
.modal-fade-enter-from,
.modal-fade-leave-to {
  opacity: 0;
}
</style>
