<template>
  <header
    class="flex justify-end items-center p-6 bg-opacity-50 relative z-20 shrink-0"
  >
    <!-- Mobile Toggle Button -->
    <div class="md:hidden z-30">
      <button
        type="button"
        class="block focus:outline-none"
        @click="isMenuOpen = !isMenuOpen"
      >
        <span v-if="isMenuOpen" class="text-3xl">
          <img
            src="https://img.icons8.com/ios-filled/100/ffffff/delete-sign.png"
            alt="close"
            width="40"
            height="40"
          />
        </span>
        <span v-else class="text-3xl">
          <img
            src="https://img.icons8.com/ios-filled/100/ffffff/menu--v6.png"
            alt="menu"
            width="40"
            height="40"
          />
        </span>
      </button>
    </div>

    <!-- Desktop Navbar -->
    <nav class="hidden md:flex">
      <ul class="flex flex-row items-center space-x-5">
        <li v-for="item in Menu" :key="item.name">
          <a
            :href="item.href"
            class="block text-white transition hover:text-primary ease-linear text-lg"
            @click="scrollToSection(item.href)"
          >
            {{ item.name }}
          </a>
        </li>
      </ul>
    </nav>

    <!-- Mobile Menu with Transition -->
    <Transition name="slide">
      <nav
        v-if="isMenuOpen"
        class="fixed inset-0 z-20 flex flex-col items-center justify-center bg-black bg-opacity-95 md:hidden"
      >
        <ul class="flex flex-col items-center space-y-5">
          <li v-for="item in Menu" :key="item.name">
            <a
              :href="item.href"
              class="block text-white transition hover:text-primary ease-linear text-2xl"
              @click="scrollToSection(item.href)"
            >
              {{ item.name }}
            </a>
          </li>
        </ul>
      </nav>
    </Transition>
  </header>
</template>

<script setup>
import { ref } from "vue";

const Menu = ref([
  // { name: "Presentation", href: "#presentation" },
  { name: "About Me", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Contact", href: "#contact" },
]);

const isMenuOpen = ref(false);

const scrollToSection = (href) => {
  isMenuOpen.value = false;
  const section = document.querySelector(href);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
};
</script>

<style scoped>
/* Slide from right animation */
.slide-enter-active,
.slide-leave-active {
  transition:
    transform 0.3s ease-in-out,
    opacity 0.3s ease-in-out;
}

.slide-enter-from {
  transform: translateX(100%);
  opacity: 0;
}

.slide-enter-to {
  transform: translateX(0);
  opacity: 1;
}

.slide-leave-from {
  transform: translateX(0);
  opacity: 1;
}

.slide-leave-to {
  transform: translateX(100%);
  opacity: 0;
}
</style>
