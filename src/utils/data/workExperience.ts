import lufthansaLogo from "@/assets/toolsLogo/lufthansaLogo.svg";
import boschLogo from "@/assets/toolsLogo/boschLogo.svg";
import fraunhoferLogo from "@/assets/toolsLogo/fraunhoferLogo.svg";
import bmwLogo from "@/assets/toolsLogo/bmwLogo.svg";

export const WORK_EXPERIENCE_DATA = [
  {
    role: "VR Developer",
    logo: bmwLogo,
    company: "BMW Group",

    location: "Munich, Germany",
    date: "05/2026 – Present",
    project: "Automated Virtual Vehicle Validation Pipeline",
    points: [
      "Improved and extended an internal UE5 Editor Plugin for CAD-to-virtual vehicle validation, migrating Blueprint logic to C++ and automating mesh optimization, part sorting, grouping, and a custom tagging system.",
      "Set up vehicle rigs and custom animations for real-time part visualization, streamlining the full CAD-to-Unreal asset preparation pipeline for engineering teams.",
    ],
  },
  {
    role: "VR Developer",
    company: "Lufthansa Technik",
    logo: lufthansaLogo,
    location: "Hamburg, Germany",
    date: "11/2025 – 04/2026",
    project: "Multi-User Flight Simulation & Cross-Sectional AR Visualization",
    points: [
      "Built a multiplayer VR flight simulation with Fish-Networking, implementing real-time synchronization and optimizing network performance for seamless multi-user experiences.",
      "Developed a stereoscopic XR application in Unreal Engine with advanced rendering pipelines, spatial audio systems, and performance optimizations for Meta Quest 3.",
    ],
  },
  {
    role: "VR Research Assistant",
    company: "Fraunhofer IEM",
    logo: fraunhoferLogo,
    location: "Paderborn, Germany",
    date: "04/2025 – 10/2025",
    project: "AI-Driven Production Line Optimization via VR Simulation",
    points: [
      "Architected a Unity-based VR simulation environment leveraging digital twin technology and soft sensors to validate production line safety protocols in a risk-free virtual setting.",
      "Integrated AI-driven optimization models for predictive analytics and intelligent decision-making, enhancing production efficiency while minimizing real-world operational risks.",
    ],
  },
  {
    role: "VR Developer",
    company: "Bosch Sensortec GmbH",
    logo: boschLogo,
    location: "Reutlingen, Germany",
    date: "11/2024 – 04/2025",
    project: "Immersive Industrial XR Training Platform",
    points: [
      "Engineered immersive XR applications in Unreal Engine using C++ and Blueprints, featuring intuitive UI systems, interactive onboarding flows, and responsive VR menu architectures.",
      "Developed an automated CAD-to-VR pipeline converting engineering files to optimized Unreal assets, streamlining 3D asset workflows (FBX, STEP, Blender) for industrial simulation deployment.",
    ],
  },
  {
    role: "Research Assistant",
    company: "Fraunhofer IPMS",
    logo: fraunhoferLogo,
    location: "Dresden, Germany",
    date: "10/2023 – 10/2024",
    project: "3D Modeling for Blood Glucose Sensor Emulation",
    points: [
      "Designed and prototyped 3D-printed sensor emulation systems in Blender, preprocessing signal data to train predictive ML models achieving 75% accuracy.",
      "Delivered technical presentations to research stakeholders, providing data-driven insights that informed validation strategies and project direction.",
    ],
  },
];
