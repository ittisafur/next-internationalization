import type { NextPage } from 'next'
import { Fragment } from 'react';

const Home: NextPage = () => {

      const regionNamesInFrench= new Intl.DisplayNames(['fr'], { type: 'region' });
  return (
    <Fragment>
      <h1>Hello World</h1>
      <button onClick={() => alert(`United States in French is ${regionNamesInFrench.of('US')}`)
        }>
        Click me and i'll pop open
      </button>
    </Fragment>
  )
}

export default Home
