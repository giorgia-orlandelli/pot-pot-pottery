import Link from 'next/link';

export default function Header({ title, subtitle }) {
    return (
        <div className='headerContainer'>
            <Link href="/">
                <h1 className="text-regular color-1">{ title }</h1>
            </Link>
            <h2 className="text-regular color-2">{ subtitle }</h2>
        </div>
    ) 
}