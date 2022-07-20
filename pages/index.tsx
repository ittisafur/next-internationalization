import type { NextPage } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import Link from 'next/link'

const Home: NextPage = (props) => {
  const { t } = useTranslation()
  return (
    <div>

      <Link href="/about">{t('menu:about')}</Link>
      <h1>
        {t('home:welcome_message')}
      </h1>
    </div>
  )
}

export default Home

export async function getStaticProps({locale}: {locale:any}) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['home', 'menu']))
    }
  }
}
