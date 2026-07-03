const ZombieVid = new URL(
  "@/assets/projectsVids/ZombieSurvival.webm",
  import.meta.url,
).href;
const SpaceVid = new URL("@/assets/projectsVids/Space.webm", import.meta.url)
  .href;
const VRIKVid = new URL(
  "@/assets/projectsVids/VRIKFullBodyRig.webm",
  import.meta.url,
).href;
const LabSceneVid = new URL(
  "@/assets/projectsVids/LabScene.webm",
  import.meta.url,
).href;
const NinjaVid = new URL(
  "@/assets/projectsVids/NinjaLastWarriorUIDemo.webm",
  import.meta.url,
).href;
const ArcheryVid = new URL(
  "@/assets/projectsVids/Archery.webm",
  import.meta.url,
).href;

export const PROJECT_DETAILS = [
  {
    id: 1,
    category: "Virtual Reality",
    image: new URL("@/assets/zombie.jpeg", import.meta.url).href,
    videoUrl: ZombieVid,
    title: "Zombie Survival Multiplayer",
    description:
      "Built in Unity with C# using NavMesh AI, ragdoll physics, and limb dismemberment in a foggy night cemetery setting for immersive VR gameplay.",
    technologies: ["Unity", "C#", "NavMesh"],
    webURL:
      "https://drive.google.com/drive/folders/1EeyzwJzQG0ErTtl7lgjC2EUsnywfJxQv?usp=drive_link",
    gitURL:
      "https://drive.google.com/file/d/14Q-w9uJPBoBUO7Ho9nmSlQgO_N9fq1-D/view?usp=drive_link",
  },
  {
    id: 2,
    category: "XR",
    image: new URL("@/assets/spaceship.jpeg", import.meta.url).href,
    videoUrl: SpaceVid,
    title: "VR Space Adventure With Interaction Mechanics",
    description:
      "Narrative VR space mission built with Unity and XR Toolkit, featuring grab, teleport, and custom interaction systems.",
    technologies: ["Unity", "XR Toolkit", "URP"],
    webURL:
      "https://drive.google.com/drive/folders/1keUfoFukcNqHDHtj08sMCGMpKsxuKzc-?usp=drive_link",
    gitURL:
      "https://drive.google.com/file/d/1n1N3utD5E9tBb77AeeSLYX5i2YuI1jMU/view?usp=drive_link",
  },
  {
    id: 3,
    category: "Virtual Reality",
    image: new URL("@/assets/dance.jpeg", import.meta.url).href,
    videoUrl: VRIKVid,
    title: "VR IK Full Body Rig",
    description:
      "A VR full-body rig in Unity using procedural IK for realistic head, hand, and leg tracking with animation blending.",
    technologies: ["Unity", "Inverse Kinematics", "VR Development"],
    webURL: "#",
    gitURL: "#",
  },
  {
    id: 4,
    category: "Virtual Reality",
    image: new URL("@/assets/valley.jpeg", import.meta.url).href,
    videoUrl: LabSceneVid,
    title: "VR Practice Valley",
    description:
      "A VR sandbox environment for practicing interaction mechanics and locomotion systems before deployment to full projects.",
    technologies: ["Unity", "VR Development"],
    webURL: "#",
    gitURL: "#",
  },
  {
    id: 5,
    category: "Mixed Reality",
    image: new URL("@/assets/warrior.jpeg", import.meta.url).href,
    videoUrl: NinjaVid,
    title: "The Last Warrior",
    description:
      "A narrative-driven cinematic sequence built to showcase character lighting, mood, and environmental storytelling in Unreal Engine.",
    technologies: ["Unreal Engine", "Cinematics"],
    webURL: "#",
    gitURL: "#",
  },
  {
    id: 6,
    category: "XR",
    image: new URL("@/assets/archery.jpeg", import.meta.url).href,
    videoUrl: ArcheryVid,
    title: "VR Archery Interaction",
    description:
      "Physics-based archery interaction system built with precise hand tracking and bow-string tension mechanics for VR headsets.",
    technologies: ["Unity", "XR Toolkit"],
    webURL: "#",
    gitURL: "#",
  },
];
