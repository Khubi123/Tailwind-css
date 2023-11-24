import React from 'react'
import Nav from './Section/Nav';
import {
  Footer,
  Hero,
  PopularProducts,
  Services,
  Subscribe,
  SuperQuality,
} from "./components";


const App = () => {
  return (
    <main className='relative'>
      <Nav />
      <section className='xl:padding-l wide:padding-r padding-b'>
        <Hero />
      </section>

      <section className="padding">
        <PopularProducts />
      </section>

      <section className="padding">
        <SuperQuality />
      </section>

      <section className="padding-x">
        <Services />
      </section>

      <section className="padding-x sm:py-32 py-16 w-full">
        <Subscribe />
      </section>

      <section className="bg-black padding-x pading-t pb-8">
        <Footer />
      </section>
    </main>
  )
}

export default App