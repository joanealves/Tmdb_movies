export const formatDate = data => {
    let splitedDate = data?.split('-')
    let newDate = ''
    if (splitedDate) {
      newDate =  `${splitedDate[2]}/${splitedDate[1]}/${splitedDate[0]}`
    }
    return newDate
  }