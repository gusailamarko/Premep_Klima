import {Hero, Intro} from '../../components/index';

const home = () => {
  return (
    <main className='flex flex-col items-center'>
      <Hero />
      <Intro />
    </main>
  )
}

export default home