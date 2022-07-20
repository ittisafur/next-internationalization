import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import Link from 'next/link'

const About = () => {
  const { t } = useTranslation();
  return (
    <div>
      <Link href="/">Home</Link>
      <h1>{t('about:about_title')}</h1>
    </div>
  )
}

export default About

export async function getStaticProps({locale}: {locale:any}) {
  return {
    props: {
      ...( await serverSideTranslations(locale, ['about']) )
    }
  }
}
