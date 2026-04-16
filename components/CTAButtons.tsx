import { cn } from "~/lib/utils"

const CTAButtons = ({text, Action}:CTAButtonsProps) => {
  const isInfoRequest = text == 'Kérek tájékoztatást'
  
  return (
    <button onClick={Action} className={cn("inline-block", "ctaBtn")} style={{backgroundColor: isInfoRequest ? "rgb(244, 188, 67)" : "rgb(31, 62, 109)", color: !isInfoRequest ? "white" : "black"}}>
      {text}
    </button>
  )
}

export default CTAButtons