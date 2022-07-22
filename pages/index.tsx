import type { NextPage } from 'next'
import { useRouter } from 'next/router';

const Home: NextPage = () => {
  const regionNamesInFrench= new Intl.DisplayNames(['fr'], { type: 'region' });

  const router = useRouter();

  const intro = router.locale === 'en-US' ? 
    `Hi, I'm a web developer based in Dhaka, Bangladesh. Click on About to get to know about me.` :
    router.locale === 'fr' ?
    "Bonjour, je suis un développeur web basé en Dhaka, Bangladesh. Cliquez sur À propos pour en savoir plus sur moi." : "";

  return (
    <div className="w-full h-screen flex flex-col justify-center items-center">

      <button onClick={() => alert(`United States in French is ${regionNamesInFrench.of('US')}`)
        } className="hidden">
        Click me and i'll pop open
      </button>

      <p>
        {intro}
      </p>
    </div>
  )
}

export default Home
