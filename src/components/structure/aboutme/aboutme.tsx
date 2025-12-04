import { useTranslation } from 'next-i18next'
import { Box, Heading, Text, VStack, Flex, Image, Link, Button, useColorModeValue, Tag, Wrap, WrapItem } from '@chakra-ui/react'
import { motion, type Variants } from 'framer-motion'
import { about } from '@data/aboutme'

const container: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
}

const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

const MotionBox = motion(Box)
const MotionHeading = motion(Heading)
const MotionText = motion(Text)
const MotionFlex = motion(Flex)
const MotionWrap = motion(Wrap)

export const AboutMe: React.FC = () => {
  const { t } = useTranslation('common')
  const headingColor = useColorModeValue('gray.800', 'gray.100')
  const textColor = useColorModeValue('gray.700', 'gray.300')
  const bgColor = useColorModeValue('white', 'gray.800')
  const tagBg = useColorModeValue('blue.50', 'blue.900')
  const tagColor = useColorModeValue('blue.600', 'blue.200')

  return (
    <VStack
      id="about"
      as="section"
      align="stretch"
      py="20"
      px={{ base: '4', md: '8' }}
      spacing="16"
      scrollMarginTop="var(--chakra-sizes-header-height)"
    >
      <Heading as="h2" variant="section" size="2xl" color={headingColor}>
        {about.title}
      </Heading>

      <MotionFlex
        direction={{ base: 'column', md: 'row' }}
        align="center" 
        gap="8"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <MotionBox variants={item} flex="1">
          <Image
            src={about.imageUrl}
            alt={about.imageAlt}
            borderRadius="xl"
            boxShadow="lg"
            objectFit="cover"
            maxW={{ base: '100%', md: '300px' }}
          />
        </MotionBox>

        <VStack align="flex-start" spacing="6" flex="2">
          <MotionHeading as="h3" size="lg" color={headingColor} variants={item}>
            {about.greeting}
          </MotionHeading>
          
          {about.paragraphs.map((paragraph, index) => (
            <MotionText key={index} color={textColor} fontSize="lg" variants={item}>
              {paragraph}
            </MotionText>
          ))}
          
         
          
          <MotionBox variants={item}>
            
          </MotionBox>
        </VStack>
      </MotionFlex>
    </VStack>
  )
}