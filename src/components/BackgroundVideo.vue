<template>
  <div class="absolute inset-0 w-full h-full z-0 overflow-hidden">
    <!-- <video
      ref="videoRef"
      autoplay
      muted
      loop
      playsinline
      class="absolute top-0 left-0 w-full h-full object-cover"
    >
      <source src="@/assets/hero-video.mp4" type="video/mp4" />
      <source src="@/assets/hero-video.webm" type="video/webm" />
    </video> -->
    <video
      ref="videoRef"
      autoplay
      muted
      loop
      playsinline
      class="w-full h-full object-cover"
      poster="@/assets/image.png"
    >
      <source src="@/assets/bgVideo/vid2.mp4" type="video/mp4" />
      <source src="@/assets/bgVideo/vid1.mp4" type="video/webm" />
    </video>

    <!-- Top edge blur -->
    <div
      class="absolute top-0 left-0 right-0 h-64 bg-gradient-to-b from-[#1a1a1a] via-[#1a1a1a]/70 to-transparent"
    ></div>

    <!-- Bottom edge blur -->
    <div
      class="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-[#1a1a1a] via-[#1a1a1a]/70 to-transparent"
    ></div>

    <!-- Overall overlay -->
    <div class="absolute inset-0 bg-black/30"></div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const videoRef = ref(null);

onMounted(() => {
  if (videoRef.value) {
    videoRef.value.play().catch(() => {
      console.log("Video autoplay prevented");
    });
  }
});
</script>
