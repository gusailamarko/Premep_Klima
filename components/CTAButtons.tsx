const CTAButtons = ({text, Action}:CTAButtonsProps) => {
  return (
    <button onClick={Action} className="inline-block ctaBtn">{text}</button>
  )
}

export default CTAButtons