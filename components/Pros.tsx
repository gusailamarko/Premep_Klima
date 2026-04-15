import { ProsTexts } from "~/constants/texts"
import { useEffect, useRef, useState } from "react"

const Pros = () => {
  const [visibleCards, setVisibleCards] = useState<number[]>([])
  const cardsRef = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = cardsRef.current.indexOf(entry.target as HTMLDivElement)
          if (index !== -1) {
            if (entry.isIntersecting) {
              setVisibleCards((prev) => {
                if (!prev.includes(index)) {
                  return [...prev, index]
                }
                return prev
              })
            }
          }
        })
      },
      {
        threshold: 0.1,
      }
    )

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card)
    })

    return () => {
      cardsRef.current.forEach((card) => {
        if (card) observer.unobserve(card)
      })
    }
  }, [])

  return (
    <div className="flex flex-col items-center justify-center w-[90%]">
        <h2 className="text-center text-[2.5rem] font-bold mb-[3rem]">Mit nyújthat Önnek a Premep klímaajánlata?</h2>
        <div className="flex flex-col md:flex-row justify-evenly items-center flex-wrap gap-[2rem]">
            {ProsTexts.map((text, idx) => (
              <div key={idx} ref={(el) => {cardsRef.current[idx] = el}} className={`proCard text-center text-[1.2rem] font-bold italic w-[80%] md:w-[40%] ${visibleCards.includes(idx) ? "visible" : ""}`}>
                <p>{text}</p>
              </div>
            ))}
        </div>
    </div>
  )
}

export default Pros