import Link from 'next/link';


export default function HomeLogin() {
    return (
        <div className=" container text-xs flex flex-row justify-between text-gray-600 py-6">
            <div className="">
                <Link href="/login"> Log in </Link>
            </div>
            <div> 
                Powered by xxxxx
            </div>
        </div>
    )
}