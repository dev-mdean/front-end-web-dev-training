import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

const IMAGE_SIZE = '72px'

const HomePage = () => {
  return (
    <Box display='flex' flexDirection='column' rowGap={2}>
      <Box m={-2} p={2} sx={{ backgroundColor: 'primary.dark' }}>
        <Typography variant='h3'>Welcome!</Typography>
      </Box>
      <Box />
      <Typography fontSize='1.25rem'>
        Front-end development is a crucial aspect of creating engaging and
        user-friendly websites. The content here is designed to equip you with
        the skills needed to get started as a front-end developer.
      </Typography>
      <Typography fontSize='1.25rem'>
        Throughout this training, you will learn the fundamentals of creating
        websites in React, Typescript, and CSS.
      </Typography>
      <Box
        columnGap={5}
        display='flex'
        height={IMAGE_SIZE}
        justifyContent='center'
        my={3}
      >
        <img
          alt='react-logo'
          height={IMAGE_SIZE}
          src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png'
          width={IMAGE_SIZE}
        />
        <img
          alt='typescript-logo'
          height={IMAGE_SIZE}
          src='https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/2048px-Typescript_logo_2020.svg.png'
          width={IMAGE_SIZE}
        />
        <img
          alt='css-logo'
          height={IMAGE_SIZE}
          src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/800px-CSS3_logo.svg.png'
          width={IMAGE_SIZE}
        />
      </Box>
      <Typography fontSize='1.25rem'>
        Embrace the challenges, ask questions, and collaborate with your peers
        to make the most of this learning experience.
      </Typography>
      <Typography fontSize='1.25rem'>
        We are excited to have you on board and look forward to seeing your
        growth and success as a front-end developer!
      </Typography>
      <Box alignItems='center' display='flex' flexDirection='column' mt={3}>
        <Typography sx={{ color: 'goldenrod' }} variant='h3'>
          Happy Coding!
        </Typography>
        <Box mt={5}>
          <img
            alt='guitar'
            height='200px'
            width='auto'
            src='https://static-00.iconduck.com/assets.00/thumbs-up-emoji-emoji-457x512-bvpfjk1g.png'
          />
        </Box>
      </Box>
    </Box>
  )
}

export default HomePage
