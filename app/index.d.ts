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