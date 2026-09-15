// Goals: MARC Intro Meeting ’26–’27. Selected build-log photos from the 2025–2026 season.
// https://docs.google.com/presentation/d/1ph9eAlIShSvvpAuRZyxKo9TV2yFdPU3QAHCKcpeRaxE/edit
export const subteams = [
  {
    slug: 'structures',
    title: 'Structures',
    description: 'Design, build, and test the hardware that brings our competition rocket together.',
    leads: 'Luke Pratt · Structures Lead; Charlotte Wong · Associate Structures Lead',
    goals: ['Design rocket structures and iterate on prototypes', 'Verify designs with SolidWorks finite element analysis (FEA) and physical testing', 'Fabricate with the water jet, laser cutter, 3D printer, mill, and lathe'],
    photos: [
      { src: '/images/structures/machining.jpg', alt: 'MARC members machining a rocket component on a mill' },
      { src: '/images/structures/fin-jig-design.jpg', alt: 'Collaborating on a fin-jig design in the Makerspace' },
      { src: '/images/structures/centering-ring-assembly.jpg', alt: 'Team members epoxying centering rings into the rocket assembly' },
      { src: '/images/structures/fin-jig-prototype.jpg', alt: 'A 3D-printed fin-jig prototype on the workbench' },
    ],
  },
  {
    slug: 'propulsion',
    title: 'Propulsion',
    description: 'Work on the motor and understand how the rocket performs in flight.',
    leads: 'Wesley Evans · Propulsions Lead; Lauren Fuller · Associate Propulsions Lead',
    goals: ['Characterize flight performance with aerodynamic simulations', 'Select the motor and design its structural confinement', 'Build test articles before competition', 'Support motor construction and arming at competition, then clean the motor case after flight'],
    photos: [
      { src: '/images/propulsion/motor-preparation.jpg', alt: 'Preparing motor components together at the workbench' },
      { src: '/images/rockets/apollyon-i/onboard-camera-view.jpg', alt: 'View of the desert from Apollyon I’s onboard camera' },
    ],
  },
  {
    slug: 'recovionics',
    title: 'Recovionics',
    description: 'Recovery and avionics: the systems that track our flight and bring the rocket home.',
    leads: 'Ben Simpson, Rai Wandeler & Amy Liu · Recovionics Leads; Ava Cheng · Associate Recovionics Lead',
    goals: ['Lead deployment tests and prepare the rocket for recovery', 'Explore a drone launch, autonomous return, and live video for 2026–2027', 'Develop a custom flight computer and C software for active control', 'Improve state estimation, control surfaces, and parachute deployment logic', 'Build a custom telemetry link to track the rocket and collect flight data'],
    photos: [
      { src: '/images/recovionics/transmitter-workshop.jpg', alt: 'Sorting transmitters and electronics during a team work session' },
      { src: '/images/recovionics/live-video-assembly.jpg', alt: 'Assembling the live-video system in the workshop' },
      { src: '/images/recovionics/avionics-integration.jpg', alt: 'Working together on avionics connections and an antenna' },
    ],
  },
]
