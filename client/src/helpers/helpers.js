export const reSort = (numObj, type) => {
  if(type === 'Ascending'){
    return numObj.sort((a,b) => {
      a = Number(a.phoneNumber.replace(/-/g, ''))
      b = Number(b.phoneNumber.replace(/-/g, ''))
  
      return a - b
    })
  } else {
    return numObj.sort((a,b) => {
      a = Number(a.phoneNumber.replace(/-/g, ''))
      b = Number(b.phoneNumber.replace(/-/g, ''))
      return b - a
    })
  }
}

