// Goals: MARC Intro Meeting ’26–’27. Existing site photos retained for review.
// https://docs.google.com/presentation/d/1ph9eAlIShSvvpAuRZyxKo9TV2yFdPU3QAHCKcpeRaxE/edit
export const subteams = [
  {
    slug: 'structures',
    title: 'Structures',
    description: 'Design, build, and test the hardware that brings our competition rocket together.',
    leads: 'Luke Pratt · Structures Lead; Charlotte Wong · Associate Structures Lead',
    goals: ['Design rocket structures and iterate on prototypes', 'Verify designs with SolidWorks finite element analysis (FEA) and physical testing', 'Fabricate with the water jet, laser cutter, 3D printer, mill, and lathe'],
    photos: [
      { src: '/images/competition-1.jpg', alt: 'Competition team at work' },
      { src: '/images/competition-2.jpg', alt: 'Competition rocket build' },
    ],
  },
  {
    slug: 'propulsion',
    title: 'Propulsion',
    description: 'Work on the motor and understand how the rocket performs in flight.',
    leads: 'Wesley Evans · Propulsions Lead; Lauren Fuller · Associate Propulsions Lead',
    goals: ['Characterize flight performance with aerodynamic simulations', 'Select the motor and design its structural confinement', 'Build test articles before competition', 'Support motor construction and arming at competition, then clean the motor case after flight'],
    photos: [
      { src: '/images/rocket-pad.jpg', alt: 'Rocket on the launch pad' },
      { src: '/images/rocket-launch.jpg', alt: 'MARC rocket launch' },
    ],
  },
  {
    slug: 'recovionics',
    title: 'Recovionics',
    description: 'Recovery and avionics: the systems that track our flight and bring the rocket home.',
    leads: 'Ben Simpson, Rai Wandeler & Amy Liu · Recovionics Leads; Ava Cheng · Associate Recovionics Lead',
    goals: ['Lead deployment tests and prepare the rocket for recovery', 'Explore a drone launch, autonomous return, and live video for 2026–2027', 'Develop a custom flight computer and C software for active control', 'Improve state estimation, control surfaces, and parachute deployment logic', 'Build a custom telemetry link to track the rocket and collect flight data'],
    photos: [
      { src: '/images/competition-3.jpg', alt: 'Avionics and transmitter sorting' },
      { src: '/images/competition-2.jpg', alt: 'Competition rocket build' },
    ],
  },
]
