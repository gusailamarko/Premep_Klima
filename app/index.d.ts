declare interface CTAButtonsProps
{
    text: string;
    Action?: () => void | undefined;
}

declare interface OfferProps
{
    title: string,
    subtitle: string,
    listTitle: string,
    listItems: string[],
    finalWord: string
}

declare interface AlertProps {
  open: boolean
  type: "success" | "failure" | "empty"
  message: string
  duration?: number
  onClose: () => void
}

declare interface AlertState {
  open: boolean
  type: 'success' | 'failure' | 'empty'
  message: string
}