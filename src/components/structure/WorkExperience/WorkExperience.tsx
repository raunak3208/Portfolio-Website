import { useTranslation } from 'next-i18next'
import { Box, Heading, SimpleGrid, VStack, useColorModeValue } from '@chakra-ui/react'
import { workExperiences } from '@data/experience' // You'll need to create this data file
import { Experience } from './Experience' // You'll need to create this component

export const WorkExperience: React.FC = () => {
  const { t } = useTranslation('common')
  const bgGradient = useColorModeValue(
    'linear-gradient(90deg, #93A5CF 0%, #E4EFE9 100%)',
    'linear-gradient(90deg, #4B6CB7 0%, #182848 100%)'
  )
  const borderColor = useColorModeValue('black', 'white')
  const headingColor = useColorModeValue('black', 'white')

  return (
    <VStack
      id = 'experience'
      as='section'
      align='stretch'
      pb='20'
      borderColor={borderColor}
      borderTop='1px solid'
      spacing='16'
    >
      <Box
        px={{ base: '4', md: '8' }}
        pt='32'
        pb='3'
        bg={bgGradient}
      >
        <Heading
          as='h2'
          variant='section'
          color={headingColor}
          size='2xl'
          wordBreak={{ base: 'break-all', sm: 'break-word' }}
        >
          {t('work-experience', 'Experience')}
        </Heading>
      </Box>
      <SimpleGrid
        columns={{ base: 1, md: 2, xl: 3 }}
        px={{ base: '4', md: '8' }}
        spacing='16'
      >
        {workExperiences.map((experience) => (
          <Experience key={experience.company} {...experience} />
        ))}
      </SimpleGrid>
    </VStack>
  )
}