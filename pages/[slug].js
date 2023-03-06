import PageLayout from 'components/PageLayout'
import { getProductByslug } from 'lib/api';


const ProductDetail = ({productDetails}) => {
    debugger
    return (
        <PageLayout>
            <div>Hello - {productDetails?.slug}</div>
        </PageLayout>
    ) 
}

/*
export async function getServerSideProps({params}) {
    const productDetails = await getProductByslug(params.slug);
    return {
        props: {
            productDetails
        }
    }
}
*/
export default ProductDetail;

