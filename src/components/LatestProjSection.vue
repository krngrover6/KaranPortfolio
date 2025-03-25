<template>
    <section class="text-white mt-20" id="projects">
        <div class="px-4 xl:pl-16">
            <div class="mb-4 md:flex md:justify-between xl:pr-16">
                <h2 class="text-4xl font-bold text-white">Featured Projects</h2>
                <div class="flex space-x-4 mb-4 mt-5 md:mt-0">
                    <button class="hover:text-primary" 
                            v-for="category in ['all', 'virtual reality', 'mixed reality','XR','game UI design']"
                            :key="category" 
                            @click="() => selectedCategory = category">
                        {{ category }}
                    </button>
                </div>
            </div>
            <ul class="px-4 sm:py-16 xl:pr-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-10 md:gap-10"
                data-aos="fade-right">
                <div v-for="project in filteredProjects" :key="project.id">
                    <div class="h-52 md:h-[24rem] rounded-t-xl relative group"
                         :style="{  backgroundImage: 'url(' + project.image + ')',
   backgroundSize: 'contain',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat' }">                    
                        <div class="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0
                                    hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500">
                            <a class="h-14 w-14 mr-2 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
                               :href="project.webURL">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" 
                                     stroke-width="1.5" stroke="currentColor" 
                                     class="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5"></path>
                                </svg>
                            </a>
                            <a class="h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
                               :href="project.gitURL">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" 
                                     stroke-width="1.5" stroke="currentColor" 
                                     class="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white">
                                    <path stroke-linecap="round" stroke-linejoin="round" 
                                          d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"></path>
                                    <path stroke-linecap="round" stroke-linejoin="round" 
                                          d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"></path>
                                </svg>
                            </a>
                        </div>
                    </div>
                    <div class="text-white rounded-b-xl mt-3 bg-[#2a2a2a] shadow-lg border border-[#1f1641] py-6 px-4">
                        <h3 class="text-lg font-semibold uppercase lg:text-xl"> {{ project.title }}</h3>
                        <p class="text-[#ADB7BE]">{{ project.description }}</p>
                        <div class="flex flex-wrap justify-center items-center gap-2 mt-4">
                            <div v-for="technology in project.technologies" 
                                 :key="technology" 
                                 class="text-center ml-1 mt-1 rounded-3xl bg-[#2a2a2a]"
                                 style="box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1); border: 1px solid black;backdrop-filter: blur(9px);-webkit-backdrop-filter: blur(9px);padding-right: 10px;">
                                <p class="px-1 py-2">{{ technology }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </ul>
        </div>
    </section>
</template>

<script setup>
import { ref, computed } from 'vue';

const Projects = ref([
    {
        id: 1,
        category: 'Virtual Reality',
        image: new URL('@/assets/zombie.jpeg', import.meta.url).href,
        title: 'Zombie Survival Multiplayer',
        description: 'Built in Unity with C# using NavMesh AI, ragdoll physics, and limb dismemberment in a foggy night cemetery setting for immersive VR gameplay.',
        technologies: ['Unity', 'C#', 'NavMesh'],
        webURL: 'https://drive.google.com/drive/folders/1EeyzwJzQG0ErTtl7lgjC2EUsnywfJxQv?usp=drive_link',
        gitURL: 'https://drive.google.com/file/d/14Q-w9uJPBoBUO7Ho9nmSlQgO_N9fq1-D/view?usp=drive_link'
    },

    {
        id: 2,
        category: 'XR',
        image: new URL('@/assets/spaceship.jpeg', import.meta.url).href,
        title: 'VR Space Adventure With Interaction Mechanics',
        description: 'Narrative VR space mission built with Unity and XR Toolkit, featuring grab, teleport, and custom interaction systems.',
        technologies: ['Unity', 'XR Toolkit ', 'URP'],
        webURL: 'https://drive.google.com/drive/folders/1keUfoFukcNqHDHtj08sMCGMpKsxuKzc-?usp=drive_link',
        gitURL: 'https://drive.google.com/file/d/1n1N3utD5E9tBb77AeeSLYX5i2YuI1jMU/view?usp=drive_link'
    },

    {
        id: 3,
        category: 'Virtual Reality',
        image: new URL('@/assets/macarena.png', import.meta.url).href,
        title: 'VR IK Full Body Rig',
        description: 'A VR full-body rig in Unity using procedural IK for realistic head, hand, and leg tracking with animation blending.',
        technologies: ['Unity', 'Inverse Kinematics', 'VR Development'],
        webURL: 'https://drive.google.com/drive/folders/1EJrXVONKhj0KRTBW6bydgKLh-3x-szAl?usp=drive_link',
        gitURL:  'https://drive.google.com/file/d/1GoFXxqOy7yaYjT-RGC3mD9uLLnXIOy3A/view?usp=drive_link'
    },
    {
        id: 4,
        category: 'Game UI Design',
        image: new URL('@/assets/practicevalley.jpeg', import.meta.url).href,
        title: 'VR Practise Valley For Movements and Dynamic Agents',
        description: 'Immersive VR environment with dynamic interactions, hand animations, and physics-based movement using Unity XR.',
        technologies: ['Unity', ' XR Toolki', 'C#'],
        webURL: '',
        gitURL: ''
    },
    {
        id: 5,
        category: 'Game UI Design',
        image: new URL('@/assets/warrier.jpeg', import.meta.url).href,
        title: 'Ninja_Sifu Last Warrior',
        description: 'Created an immersive main menu UI for a stylized action game using Unreal Engine and Blueprint scripting.',
        technologies: ['Unreal Engine', 'Blueprint', 'Game UI Design'],
        webURL: '',
        gitURL: ''
    },
    {
        id: 6,
        category: 'mixed reality',
        image: new URL('@/assets/archery.jpeg', import.meta.url).href,
        title: 'Mixed Reality Archery',
        description: 'A room-scaled mixed reality archery game where players shoot physics-based targets rising from a ground portal',
        technologies: ['Unity XR', 'Procedural Spawning', 'Physics Based Interaction'],
        webURL: 'https://drive.google.com/drive/folders/1Gg9el6Qf-T0vqlaMamwpvUHL8gRPZ3Xn?usp=drive_link',
        gitURL: 'https://drive.google.com/file/d/1EHLm6wLFTiJgZDRrSRgp5NrZ1BA0nTPD/view?usp=drive_link'
    }
]);


const selectedCategory = ref('all');
const filteredProjects = computed(() => {
    if (selectedCategory.value === 'all') {
        return Projects.value;
    }
    return Projects.value.filter(project => project.category.toLowerCase() === selectedCategory.value.toLowerCase());
});
</script>

