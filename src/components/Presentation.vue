<template>
    <section
      class="w-full px-4 py-20 bg-[#1e1e1e] flex flex-col items-center"
      id="presentation"
    >
      <!-- Heading -->
      <h2 class="text-2xl sm:text-3xl font-mono font-bold text-secondary tracking-widest mb-6">
        🎮 IMMERSION INITIATED
      </h2>
  
      <!-- Embedded Video with mobile-friendly helpers -->
      <div class="relative w-full max-w-6xl aspect-video rounded-xl overflow-hidden shadow-2xl border border-[#33353F]">
        <iframe
          loading="lazy"
          class="w-full h-full"
          src="https://www.canva.com/design/DAGirfW5cBs/zMv7sAVwrjQmR1lIOlKEww/view?embed"
          allowfullscreen
        ></iframe>
  
        <!-- Floating swipe hint icons for mobile -->
        <div class="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-3 sm:hidden pointer-events-none">
          <div class="text-white/80 text-xs bg-[#111] bg-opacity-70 px-3 py-1 rounded-full border border-[#33353F]">
            👈 Swipe to navigate 👉
          </div>
        </div>
      </div>
  
      <!-- Caption -->
      <p class="mt-4 text-sm text-gray-400 italic">🎙️ Presented by Karan Grover</p>
    </section>
  </template>
  