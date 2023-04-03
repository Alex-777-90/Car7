import React from 'react';
import Banner from "../../components/Banner/Banner";
import Search from "../../components/Search/Search";
import Products from "../../components/Products/Products";

type Props = {}

const home = (props: Props) => {

  return (
      <section>

            <article>
                  <Banner/>
            </article>
           
            <article>
                  <Search/>
            </article>

            <article>
                  <Products/>
            </article>

      </section>
  )

}

export default home;