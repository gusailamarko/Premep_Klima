import { OfferTexts } from '~/constants/texts';
import {Hero, Intro, Pros, Offer, Process, TrustBuild, Faq, CTASection} from '../../components/index';

const home = () => {
  return (
    <main className='flex flex-col items-center'>
      <Hero />
      <Intro />
      <Pros />
      <Offer title={OfferTexts.title} subtitle={OfferTexts.subtitle} listTitle={OfferTexts.listTitle} listItems={OfferTexts.listItems} finalWord={OfferTexts.finalWord} />
      <Process />
      <TrustBuild />
      <Faq />
      <CTASection />
    </main>
  )
}

export default home