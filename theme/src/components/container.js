import {Box} from '@primer/react'
import React from 'react'

function Container({children}) {
  return (
    <Box id="skip-nav" sx={{width: '100%', maxWidth: 960, p: 5, mx: 'auto'}}>
      {children}
    </Box>
  )
}

export default Container
