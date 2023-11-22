import React, { useState } from 'react'
import { FaStar } from 'react-icons/fa'
const Rating = ({ size = 22, style }) => {
  const [rating, setRating] = useState(null)
  const [hover, setHover] = useState(null)
  console.log('rating', rating)
  return (
    <div className='flex gap-1' style={style}>
      {[...Array(5)].map((star, idx) => {
        const currentRating = idx + 1
        return (
          <FaStar
            key={idx}
            size={size}
            className='cursor-pointer'
            onClick={() => setRating(currentRating)}
            color={currentRating <= (hover || rating) ? '#FF3F6C' : '#e4e5e9'}
            onMouseEnter={() => setHover(currentRating)}
            onMouseLeave={() => setHover(null)}
          />
        )
      })}
    </div>
  )
}

export default Rating
