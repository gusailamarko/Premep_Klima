import { FaQs } from "~/constants/texts"
import { useState, useRef } from "react"

const Faq = () => {
  const [currentIdx, setCurrentIdx] = useState(0)
  const touchStartX = useRef(0)
  const touchEndX = useRef(0)

  const HandleNext = () => {
    setCurrentIdx((prev) => (prev + 1) % FaQs.length)
  }

  const HandlePrev = () => {
    setCurrentIdx((prev) => (prev - 1 + FaQs.length) % FaQs.length)
  }

  const HandleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX
  }

  const HandleTouchEnd = (e: React.TouchEvent) => {
    touchEndX.current = e.changedTouches[0].clientX
    HandleSwipe()
  }

  const HandleSwipe = () => {
    const swipeThreshold = 50
    const diff = touchStartX.current - touchEndX.current

    if (Math.abs(diff) > swipeThreshold) {
      if (diff > 0) {
        // Swiped left, go to next
        HandleNext()
      } else {
        // Swiped right, go to previous
        HandlePrev()
      }
    }
  }

  return (
    <div className="flex flex-col items-center w-[90%]">
        <h2 className="text-center text-[2.5rem] font-bold">GYIK</h2>
        <p className="text-center text-[1.5rem] font-bold italic mb-[2rem]">Gyakran ismételt kérdések</p>
        <div className="flex justify-center items-center gap-x-[1rem]">
            <div onClick={HandlePrev} className="prevBtn">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-chevron-left" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"/>
                </svg>
            </div>
            <div className="flex flex-col items-start QandACard w-full" onTouchStart={HandleTouchStart} onTouchEnd={HandleTouchEnd}>
                <div className="w-full">
                    <h3 className="text-center text-[1.5rem] font-bold">{FaQs[currentIdx].question}</h3>
                    <hr className="w-full text-black my-[1rem]"/>
                    <p className="text-[1.2rem] font-bold italic text-gray-800">{FaQs[currentIdx].answer}</p>
                </div>
            </div>
            <div onClick={HandleNext} className="nextBtn">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-chevron-right" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"/>
                </svg>
            </div>
        </div>
    </div>
  )
}

export default Faq