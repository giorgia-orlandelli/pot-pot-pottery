import Link from 'next/link';


export default function ProductCard({name, price, image, slug}) {
    return (
        <div className='ProductCard'>
            <Link href='/[slug]'>
            <img
                src={image}
                alt={name}
            />
            <div className='ProductCard_info'>
                <p className='text-regular color-1'>{name}</p>
                <p className='text-regular color-1'>€{price},00</p>
            </div>
            </Link>
        </div>
    ) 
}