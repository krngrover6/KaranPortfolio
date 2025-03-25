<template>
    <transition name="fade">
      <div
        v-if="show"
        class="w-full h-screen fixed top-0 left-0 z-[999] bg-[#0f0f0f] overflow-hidden flex flex-col items-center justify-center"
      >
        <!-- Grid Background -->
        <div class="absolute inset-0 bg-[radial-gradient(#222_1px,transparent_1px)] [background-size:24px_24px] opacity-10 z-0"></div>
  
        <!-- Loading Text -->
        <p class="text-secondary text-md sm:text-lg font-mono tracking-widest mb-6 animate-typewriter z-10">
          Initializing XR Environment<span class="animate-blink">_</span>
        </p>
  
        <!-- VR Headset Image -->
        <div class="relative z-10 flex items-center justify-center">
          <img
            :src="vrImg"
            alt="Karan VR"
            class="w-64 sm:w-80 animate-headsetFloat drop-shadow-[0_0_20px_rgba(245,158,11,0.6)]"
          />
          <div class="absolute w-40 h-40 sm:w-52 sm:h-52 border-2 border-primary rounded-full animate-pingSlow z-0"></div>
        </div>
  
        <!-- Footer Ticker -->
        <div class="absolute bottom-0 left-0 w-full bg-[#111] py-2 overflow-hidden border-t border-[#333] z-50">
          <div class="ticker-track">
            <div class="ticker-text text-primary font-mono text-sm sm:text-base whitespace-nowrap">
              {{ tickerMessage }}
            </div>
            <div class="ticker-text text-primary font-mono text-sm sm:text-base whitespace-nowrap">
              {{ tickerMessage }}
            </div>
          </div>
        </div>
      </div>
    </transition>
  </template>
  
  <script setup>
import { ref, onMounted } from 'vue'
import vrImg from '@/assets/Snapshot-removebg-preview.png'

const show = ref(false)

const messages = [
  '> Reality compiled successfully · XR engine synced · Karan online 💻🧠',
  '> Welcome to the sim · VR shell stable · Systems booted 🌌🧬',
  '> Initializing game layer · Graphics optimized · Entering world 🎮✨',
  '> Code injected · Design mode active · Dream loading 🔮👨‍💻',
  '> Meta-layer unlocked · Visuals calibrated · Headset ready 🥽🚀'
]

const tickerMessage = messages[Math.floor(Math.random() * messages.length)]

onMounted(() => {
  console.log('[VRIntro] 🔧 Mounted')

  // Check if intro has already been shown
  const hasSeenIntro = localStorage.getItem('hasSeenIntro')

  if (!hasSeenIntro) {
    show.value = true

    setTimeout(() => {
      show.value = false
      localStorage.setItem('hasSeenIntro', 'true')
    }, 3000)
  }
})
</script>

  
  
  <style scoped>
  /* Animations */
  @keyframes headsetFloat {
    0%, 100% { transform: translateY(0) scale(1); }
    50% { transform: translateY(-10px) scale(1.02); }
  }
  .animate-headsetFloat {
    animation: headsetFloat 1s ease-in-out infinite;
  }
  
  @keyframes pingSlow {
    0% { transform: scale(1); opacity: 0.5; }
    100% { transform: scale(2.5); opacity: 0; }
  }
  .animate-pingSlow {
    animation: pingSlow 2.5s ease-out infinite;
  }
  
  @keyframes typewriter {
    from { width: 0; }
    to { width: 35ch; }
  }
  .animate-typewriter {
    overflow: hidden;
    white-space: nowrap;
    width: 0;
    animation: typewriter 2.5s steps(30, end) forwards;
  }
  
  @keyframes blink {
    0%, 100% { opacity: 1; }
    50% { opacity: 0; }
  }
  .animate-blink {
    display: inline-block;
    width: 1ch;
    animation: blink 1s step-start infinite;
  }
  
  @keyframes tickerScroll {
    0% { transform: translateX(0%); }
    100% { transform: translateX(-50%); }
  }
  .ticker-track {
    display: flex;
    width: 200%;
    animation: tickerScroll 18s linear infinite;
  }
  .ticker-text {
    flex: none;
    padding-right: 4rem;
    animation: fadeIn 1s ease-in-out;
  }
  
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(5px); }
    to { opacity: 1; transform: translateY(0); }
  }
  
  /* Transition */
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 1s ease;
  }
  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }
  </style>
  