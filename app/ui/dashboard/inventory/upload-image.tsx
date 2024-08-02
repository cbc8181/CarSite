// 'use client';

// import { uploadImage } from "@/app/lib/action";
// import { Button } from '@/app/ui/button';
// import { useFormState } from "react-dom";
// import ImgSlick from '@/app/ui/dashboard/inventory/upload-slick';
// import { useEffect, useState } from "react";
// import { CarImage } from "@/app/lib/definitions";
// import { deleteImg, getImgs, updateDefaultImg } from "@/app/lib/cdata";

// export default function UploadImageForm({
//     carId,
//     defaultImg
// }: {
//     carId: string;
//     defaultImg: number | null;
// }) {

//     const initialState = { status: '', message: '' };
//     const [state, dispatch] = useFormState(uploadImage, initialState);
//     const [images, setImages] = useState<CarImage[]>();
//     const [defaultImage, setDefaultImage] = useState<number | null>(defaultImg);

//     useEffect(() => {
//         if (state.status !== 'error') {
//             console.log('fetching images');
//             getImgs(carId)
//                 .then((data) => {
//                     setImages(data.Image);})
//                 .catch((error) => {
//                     console.error('Error fetching images:', error);
//             });
//         }
//     }, [state.status]);

//     function handleDelete(id: number) {
//         deleteImg(id).then(() => {
//             setImages(images?.filter((img) => img.id !== id));
//         });
//     }

//     function handleDefault(id: number) {
//         updateDefaultImg(Number(carId), id).then(() => {
//             setDefaultImage(id);
//         });
//     }

//     return (
//         <div className="form-wrapper mt-6 bg-gray-50 p-4 md:p-6 rounded-md overflow-hidden border">
//             <form action={dispatch} className=" flex gap-4">
//                 <input
//                     type="file"
//                     name="file"
//                     multiple={true}
//                     className=" flex border-0  w-80 h-10 items-center rounded-lg bg-gray-300 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
//                 ></input>
//                 <input type="hidden" name="carId" value={carId} />
//                 <Button type="submit" className=" w-20">Upload</Button>
//             </form>
//             {state?.status && (
//                 <div className="mt-2 text-xs text-red-500">
//                     {state?.message}
//                 </div>
//             )}

//             <ImgSlick images={images as CarImage[]} 
//                 deleteHandle = {handleDelete} 
//                 updateDefaultImg = {handleDefault}
//                 defaultImg = {defaultImage}/>
//         </div>
//     )
// }


'use client';

// import { nUploadImage } from "@/app/lib/action";
import { Button } from '@/app/ui/button';
import { useFormState } from "react-dom";
import ImgSlick from '@/app/ui/dashboard/inventory/upload-slick';
import { useEffect, useState } from "react";
import { CarImage } from "@/app/lib/definitions";
import { deleteImg, getImgs, updateDefaultImg } from "@/app/lib/cdata";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { isImage, validateSize } from '@/lib/utils';

export default function UploadImageForm({
    carId,
    defaultImg
}: {
    carId: string;
    defaultImg: number | null;
}) {

    const initialState = { status: '', message: '' };
    // const [state, dispatch] = useFormState(nUploadImage, initialState);
    const [images, setImages] = useState<CarImage[]>();
    const [defaultImage, setDefaultImage] = useState<number | null>(defaultImg);


    // const [file, setFile] = useState(null);

    // useEffect(() => {
    //     if (state.status !== 'error') {
    //         console.log('fetching images');
    //         getImgs(carId)
    //             .then((data) => {
    //                 setImages(data.Image);})
    //             .catch((error) => {
    //                 console.error('Error fetching images:', error);
    //         });
    //     }
    // }, [state.status]);

    function handleDelete(id: number) {
        deleteImg(id).then(() => {
            setImages(images?.filter((img) => img.id !== id));
        });
    }

    function handleDefault(id: number) {
        updateDefaultImg(Number(carId), id).then(() => {
            setDefaultImage(id);
        });
    }


    // return (
    //     <div className="form-wrapper mt-6 bg-gray-50 p-4 md:p-6 rounded-md overflow-hidden border">
    //         {/* <form action={dispatch} className=" flex gap-4"> */}
    //         <form onSubmit={handleSubmit} className=" flex gap-4">
    //             <input
    //                 type="file"
    //                 name="file"
    //                 multiple={true}
    //                 className=" flex border-0  w-80 h-10 items-center rounded-lg bg-gray-300 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
    //             ></input>
    //             <input type="hidden" name="carId" value={carId} />
    //             <Button type="submit" className=" w-20">Upload</Button>
    //         </form>
    //         {state?.status && (
    //             <div className="mt-2 text-xs text-red-500">
    //                 {state?.message}
    //             </div>
    //         )}

    //         <ImgSlick images={images as CarImage[]} 
    //             deleteHandle = {handleDelete} 
    //             updateDefaultImg = {handleDefault}
    //             defaultImg = {defaultImage}/>
    //     </div>
    // )


    const [imageSrc, setImageSrc] = useState('');
    const [image, setImage] = useState<File | undefined>();
    const [imageError, setImageError] = useState('');

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setImageError('');
        const img = e.target.files?.[0];
        // if no image selected
        if (!img) {
            return;
        }

        // check if image
        const result = isImage(img.name);
        if (!result) {
            const error = 'File type should be an image (jpg, jpeg, png)';
            toast(error, { type: 'error' });
            setImageError(error);
            return;
        }

        const isImageLarge = validateSize(img);
        if (isImageLarge) {
            const error = 'File must be smaller than 5MB';
            toast(error, { type: 'error' });
            setImageError(error);
            return;
        }

        const reader = new FileReader();
        // converts to BASE 64
        reader.readAsDataURL(img);
        reader.addEventListener('load', () => {
            const result = reader.result as string;
            setImageSrc(result || ''); // Assign an empty string if result is null
            setImage(img);
        });
    };

    const handleSubmit = async () => {
        // if (!cardName || !front || !back || !image || !category) {
        //   toast('Please enter required fields with asterisk', { type: 'error' });
        //   return;
        // }
        // setLoading(true);
        const formData = new FormData();
        // formData.append('cardName', cardName);
        // formData.append('cardColor', cardColor);
        // formData.append('front', front);
        formData.append('car_id', carId);
        formData.append('image', image as Blob);
        // formData.append('video', video);
        // formData.append('category', category);
        fetch('/api/uploadImage', {
            method: 'POST',
            body: formData,
        })
            .then((res) => res.json())
            .then((data) => {
                toast('upload successfully', { type: 'success' });
                // get all images for the current card
                // getImgs(carId)
                //     .then((data) => {
                //         setImages(data.Image);
                //     })
                //     .catch((error) => {
                //         console.error('Error fetching images:', error);
                //     });
            })
            .catch((error) => {
                toast('There was error', { type: 'error' });
                console.error('Error:', error);
            });

    };

    return (
        <div className="my-5">
            {/* <form action={dispatch}> */}
                <ToastContainer />
                <div className="">
                    <label>
                        Select Picture
                        {' '}
                        <span className="text-red-500">(Max 5MB)</span>
                        <span className="text-red-400">*</span>
                    </label>
                    <p className="my-5 text-red-400">{imageError}</p>
                    <input type="file" onChange={handleImageChange} className="block" />
                </div>
                <button type="button" onClick={handleSubmit} className="p-2 bg-aem-600 text-white my-5 rounded-md">
                    upload
                </button>
                {image && <img alt="card" src={imageSrc} className="basis-1/2 h-auto w-48 my-5" />}
            {/* </form> */}
            {/* <ImgSlick images={images as CarImage[]}
                deleteHandle={handleDelete}
                updateDefaultImg={handleDefault}
                defaultImg={defaultImage} /> */}

        </div>



    )
}


