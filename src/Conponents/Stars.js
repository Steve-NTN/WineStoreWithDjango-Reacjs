import React from 'react'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faStar} from '@fortawesome/free-solid-svg-icons'
// import { faStar as faStarr } from '@fortawesome/free-regular-svg-icons'

const Stars = ({numberStar}) => {
  let stars = []
  if(numberStar < 5){
    for (let i = 0; i < numberStar; ++i) {
        stars.push(<FontAwesomeIcon icon={faStar} key={i}/>)
      }
    for (let i = numberStar; i < 5; ++i) {
    stars.push(<FontAwesomeIcon icon={faStarr} key={i}/>)
    }
  }
  else{
    for (let i = 0; i < numberStar; ++i) {
        stars.push(<FontAwesomeIcon icon={faStar} key={i}/>)
      }
  }
  
  return (
    <div className="Stars">
      {stars}
    </div>
  )
}

export default Stars