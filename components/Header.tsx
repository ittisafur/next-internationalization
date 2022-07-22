import Link from 'next/link';
import { useRouter } from 'next/router';



const Header = () => {
  const router = useRouter();

  const renderLocales = () => {
    return router.locales?.map(locale => 
      <li key={locale}>
        <Link href={router.asPath} locale={locale}>
          <a href="#">{locale.toUpperCase()}</a>
        </Link>
      </li>
    );
  }

  return (
    <header className="py-4 ">
      <nav className="flex justify-between items-center">
        <ul className="flex space-x-4">
          <li>
            <Link href="/">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about">
              About
            </Link>
          </li>
        </ul>

        <ul className="flex justify-center items-center space-x-4">
          {renderLocales()}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
