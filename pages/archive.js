import Header from 'components/Header';
import PageLayout from 'components/PageLayout';
import ProductCard from 'components/ProductCard';


import { getArchivePage } from 'lib/api';




export default function IndexPage({ archivePage }) {
  return (
    <PageLayout className="index">
      <Header
          title={archivePage[0].title}
          subtitle={archivePage[0].subtitle}
        ></Header>
        <div className='cardGallery'>
            {archivePage[0].products.map(product => 
                <ProductCard  
                    key={product.name}
                    slug={product.slug}
                    name={product.name}
                    price={product.price}
                    image={product.image}
                >
                </ProductCard>
            )}
        </div>
    </PageLayout>
  );
}


export async function getStaticProps() {
  const archivePage = await getArchivePage();
  return {
    props: {
        archivePage
    }
  };
}