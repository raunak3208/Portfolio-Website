import { useEffect } from 'react'

/**
 * Log the portfolio Github repo.
 */
export const useLogMessage = (): void => {
  useEffect(() => {
    console.info(
      `%c
      
    
        Check out my portfolio's code on Github:
        https://github.com/raunak3208
        `,
      'color:yellow;font-weight:bold'
    )
  }, [])
}
