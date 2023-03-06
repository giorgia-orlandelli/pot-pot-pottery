import { getProductBySlug } from 'lib/api';
import { useRouter} from 'next/router'
import { useState } from "react";

import { AnimatePresence, motion } from 'framer-motion';



const ProductDetail = ({productDetail}) => {
    const router = useRouter();
    const [show, setShow] = useState(true);
    return (
        <AnimatePresence>
            {show && (
                <motion.div 
                    className='product-details-container'
                    key={router.route}
                    initial={{ y: "100%"  }}
                    animate={{ y: "calc(100vh - 100%)" }}
                    transition={{ duration: 0.2 }}
                    exit={{ y: "100%"}}
                    >
                    <button className='text-regular color-1' type="button" onClick={function(){ router.back(); setShow(!show)}}>
                        Close
                    </button>

                    <img 
                        src="https://cdn.sanity.io/images/rlunmw3q/production/7c871b3a3684041335724fb1bfe6c71d6ce61ded-1836x2000.jpg"
                    />
                    <div className='product-details-footer'>
                        <p className='text-regular color-1'>Titolo</p>
                        <p className='text-regular color-1'>Prezzo</p>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
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