import { getProductBySlug } from 'lib/api';
import { useRouter} from 'next/router'


const ProductDetail = ({productDetail}) => {
    const router = useRouter();
    return (
        <div className='product-details-container'>
            <button className='text-regular color-1' type="button" onClick={() => router.back()}>
                Close
            </button>

            <img 
                src="https://cdn.sanity.io/images/rlunmw3q/production/7c871b3a3684041335724fb1bfe6c71d6ce61ded-1836x2000.jpg"
            />
            <div className='product-details-footer'>
                <p className='text-regular color-1'>Titolo</p>
                <p className='text-regular color-1'>Prezzo</p>
            </div>
        </div>
    ) 
}

export async function GetServerSideProps({params}) {
    const productDetail = await getProductBySlug(params.slug);
    return {
        props: {
            productDetail
        }
    }
}

export default ProductDetail;