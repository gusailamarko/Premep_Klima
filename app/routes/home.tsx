import { OfferTexts } from '~/constants/texts';
import {Hero, Intro, Pros, Offer, Process, TrustBuild, Faq, CTASection, Footer} from '../../components/index';
import { useEffect } from 'react';
import { setMetaTag } from '~/lib/utils';

const home = () => {
  useEffect(() => {
      setMetaTag("PREMEP - Klíma", "Csökkentse rezsijét modern hűtő-fűtő klímával!", "/icons/premep_icon.jpg");
    }, []);

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
      <Footer />
    </main>
  )
}

export default home