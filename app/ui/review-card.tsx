import Image from 'next/image'

type ReviewCardProps = {
    user: string;
    grade: number;
    review: string;
}

export default function ReviewCard({ user, grade, review}: ReviewCardProps) {
    const gLogo = "/google-logo.png";
    return (
        <div className="flex w-full p-2">
            <div className=" bg-white flex flex-col grow shadow rounded-md overflow-hidden">
                <div className=" flex items-center bg-aem-500 text-white p-6">
                    <div >
                        <p className=" font-bold text-xl mb-1">{user}</p>
                    </div>
                </div>
                <div className=" p-8 flex flex-col grow">
                    <div className="flex justify-between items-center border-b mb-4 pb-4">
                        <p className=" mr-4">
                            {Array.from({ length: grade }, (_, index) => (
                                <span key={index} className="text-yellow-500">★</span>
                            ))}
                        </p>
                        <div>
                            <Image src={gLogo} alt='glogo' width={40} height={40}></Image>
                        </div>
                    </div>
                    <div className="text-gray-600 line-clamp-3 leading-7 mb-6">
                        {review}
                    </div>
                    <div className="flex  items-center gap-2  justify-end text-sm text-gray-600 font-semibold mt-auto">
                        <a> Read More </a>
                        <span className='flex rounded-md px-2 py-1 bg-aem-500 text-white'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor"><path d="M6 10c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2z"></path></svg>
                            </span>
                    </div>
                </div>
            </div>
        </div>
    )
}