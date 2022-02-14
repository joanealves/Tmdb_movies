export const formatPercentage = percentage => {
 
    if (percentage === 0) {
      return 0
    } else {
    
      let splitedPercentage = percentage?.toString()?.split('.')
      let newPercentage = ''
    
      if (splitedPercentage && splitedPercentage?.length > 1 ) {
        newPercentage =  `${splitedPercentage[0]}${splitedPercentage[1]}%`
      }
     
      if (splitedPercentage && splitedPercentage?.length === 1 ) {
        newPercentage =  `${splitedPercentage[0]}0%`
        }
    
      return newPercentage
    }
    }
   