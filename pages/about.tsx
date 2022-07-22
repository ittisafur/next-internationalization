import { useRouter } from "next/router";

const About = () => {

  const router = useRouter();

  const about = router.locale === 'en-US' ? 
        "It's been a while since I've been tinkering with programming. I started with HTML/CSS in 2013 slowly moved in WordPress in 2015. Done some small projects and some small contract jobs.But, this is the time I want to really contribute to the society, to the community, using my academic knowledge, self taught knowledge and work experience. A dedicated person willing to get out of his comfort zone in order to finish the task and the responsibility that I was assigned." :
    router.locale === 'fr' ?
    "Cela faisait un moment que je n'avais pas bricolé de programmation. J'ai commencé avec HTML/CSS en 2013 et j'ai lentement évolué vers WordPress en 2015. J'ai fait quelques petits projets et quelques petits contrats. Mais c'est le moment où je veux vraiment contribuer à la société, à la communauté, en utilisant mes connaissances académiques, moi-même. acquis des connaissances et une expérience de travail. Une personne dévouée prête à sortir de sa zone de confort afin de terminer la tâche et la responsabilité qui m'ont été confiées." : "";

  return (
    <div>
      <p>
        {about}
      </p>
    </div>
  )
}

export default About;
