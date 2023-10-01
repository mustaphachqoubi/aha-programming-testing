const Mustapha = {
  firstName: "mustapha",
  lastName: "chqoubi",
  ref: "Engineer"
}

const getMustaphaInfos = (user, {includeRef = false } = {} ) => {

  let displayName = `${user.firstName} ${user.lastName}`

  if(includeRef){
    displayName = `${user.ref} ${user.firstName} ${user.lastName}`
  }

  return displayName

}


const one = getMustaphaInfos( Mustapha, { includeRef: true } )
console.log(one)

const two = getMustaphaInfos(Mustapha)
console.log(two)

const three = getMustaphaInfos(Mustapha)
console.log(three)

