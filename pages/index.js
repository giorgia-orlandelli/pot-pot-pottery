import Link from 'next/link';

import Header from 'components/Header';
import PageLayout from 'components/PageLayout';
import ProductCard from 'components/ProductCard';


import { getArchivePage } from 'lib/api';
import { getHomePage } from 'lib/api';

export default function IndexPage({ archivePage, home }) {
  return (
    <PageLayout>

        <div className='imageContainer'>
          <img
            src={home[0].image}
            alt={'main-image'}
          />
        </div>
      
        <Header
          title={home[0].title}
          subtitle={home[0].subtitle}
        ></Header>

        <div className='cardGallery'>
          { archivePage[0].products.slice(0,3).map(product => 
                  <ProductCard  
                      key={product.name}
                      name={product.name}
                      price={product.price}
                      image={product.image}
                      link={{
                        href: '/[slug]',
                        as: `/${product.slug}`
                      }}
                  >
                  </ProductCard>
              )
          }
        </div>
        <Link href="/archive"><p className="homepage-cta text-regular color-1">Discover All</p></Link>
    </PageLayout>
  );
}


export async function getStaticProps() {
  const archivePage = await getArchivePage();
  const home = await getHomePage();
  
  return {
    props: {
      archivePage,
      home
    },
    revalidate: 1
  };
}