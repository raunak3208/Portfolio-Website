import {
  SiChakraui,
  SiNextdotjs,
  SiReact,
  SiMongodb,
  SiLaravel,
  SiPostgresql,
  SiStripe,
  SiTailwindcss,
} from 'react-icons/si'
import HypzzImage from '@public/img/projects/hypzz.png'
import KalabamImage from '@public/img/projects/kalabam.png'
import carImage from '@public/img/projects/car.png'
import WhyPigeonsImage from '@public/img/projects/why-pigeons-full.png'
import type { Project } from '@utils/types'

export const projects: Project[] = [
  {
    id: '1',
    title: 'MoodSpace',
    description: {
      en: 'This project is a full-stack journal application designed to help users maintain daily entries and track their emotional well-being. Built with a clean UI and efficient backend, it offers both convenience and introspection.',
      fr: 'Ce projet est une application de journal complète (full-stack) conçue pour aider les utilisateurs à rédiger des entrées quotidiennes et à suivre leur bien-être émotionnel. Dotée d’une interface épurée et d’un backend performant, elle offre à la fois commodité et introspection.',
    },
    image: { src: HypzzImage },
    homepage: '',
    technologies: [
      { name: 'Next.js', icon: SiNextdotjs, color: '#000000' },
      { name: 'React', icon: SiReact, color: '#61DAFB' },
      { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
      { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
    ],
    tags: [
      { label: 'full-stack', colorScheme: 'pink' },
      { label: 'aws', colorScheme: 'orange' },
      { label: 'website', colorScheme: 'cyan' },
    ],
    isShowcased: true,
  },
  {
    id: '2',
    title: 'Arush Pharma',
    description: {
      en: 'Developed a fully functional website for Arush Pharmaceuticals featuring product listings, company details, and contact information.',
      fr: 'Développement d’un site web entièrement fonctionnel pour Arush Pharmaceuticals, comprenant la liste des produits, les informations sur l’entreprise et les coordonnées de contact.',
    },
    image: { src: KalabamImage },
    homepage: '',
    github: '',
    technologies: [
      { name: 'Next.js', icon: SiNextdotjs, color: '#000000' },
      { name: 'React', icon: SiReact, color: '#61DAFB' },
      { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
      { name: 'ChakraUI', icon: SiChakraui, color: '#319795' },
    ],
    tags: [
      { label: 'full-stack', colorScheme: 'pink' },
      { label: 'websockets', colorScheme: 'green' },
      { label: 'aws', colorScheme: 'orange' },
      { label: 'website', colorScheme: 'cyan' },
    ],
    isShowcased: true,
  },
  {
    id: '2',
    title: 'Car Rental',
    description: {
      en: 'A full-stack car rental system where users can browse cars, check availability, book rentals, and manage reservations with real-time data.',
      fr: 'Un système complet de location de voitures (full-stack) où les utilisateurs peuvent parcourir les véhicules, vérifier leur disponibilité, réserver des locations et gérer leurs réservations grâce à des données en temps réel.',
    },
    image: { src: carImage },
    homepage: '',
    github: '',
    technologies: [
      { name: 'Next.js', icon: SiNextdotjs, color: '#000000' },
      { name: 'React', icon: SiReact, color: '#61DAFB' },
      { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
      { name: 'ChakraUI', icon: SiChakraui, color: '#319795' },
    ],
    tags: [
      { label: 'full-stack', colorScheme: 'pink' },
      { label: 'websockets', colorScheme: 'green' },
      { label: 'aws', colorScheme: 'orange' },
      { label: 'website', colorScheme: 'cyan' },
    ],
    isShowcased: true,
  },
  
  {
    id: '3',
    title: 'Why Pigeons',
    description: {
      en: 'Quick food delivery right to your door. User, restaurant, driver, and admin dashboards are fully functional.',
      fr: 'Livraison de nourriture rapide directement à votre porte. Les tableaux de bord pour l’utilisateur, le restaurant, le livreur et l’administrateur sont entièrement fonctionnels.',
    },
    image: { src: WhyPigeonsImage },
    github: '',
    technologies: [
      { name: 'Laravel', icon: SiLaravel, color: '#FF2D20' },
      { name: 'React', icon: SiReact, color: '#61DAFB' },
      { name: 'PostgreSQL', icon: SiPostgresql, color: '#336791' },
      { name: 'Stripe', icon: SiStripe, color: '#008CDD' },
    ],
    tags: [
      { label: 'full-stack', colorScheme: 'pink' },
      { label: 'e-commerce', colorScheme: 'purple' },
      { label: 'website', colorScheme: 'cyan' },
    ],
    isShowcased: false,
  },
]
