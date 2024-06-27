'use client';

import { uploadImage } from "@/app/lib/action";
import { Button } from '@/app/ui/button';
import { useFormState } from "react-dom";
import ImgSlick from '@/app/ui/dashboard/inventory/upload-slick';
import { useEffect, useState } from "react";
import { CarImage } from "@/app/lib/definitions";
import { deleteImg, getImgs, updateDefaultImg } from "@/app/lib/cdata";

export default function UploadImageForm({
    carId,
    defaultImg
}: {
    carId: string;
    defaultImg: number | null;
}) {

    const initialState = { status: '', message: '' };
    const [state, dispatch] = useFormState(uploadImage, initialState);
    const [images, setImages] = useState<CarImage[]>();
    const [defaultImage, setDefaultImage] = useState<number | null>(defaultImg);

    useEffect(() => {
        if (state.status !== 'error') {
            console.log('fetching images');
            getImgs(carId)
                .then((data) => {
                    setImages(data.Image);})
                .catch((error) => {
                    console.error('Error fetching images:', error);
            });
        }
    }, [state.status]);

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

    return (
        <div className="form-wrapper mt-6 bg-gray-50 p-4 md:p-6 rounded-md overflow-hidden border">
            <form action={dispatch} className=" flex gap-4">
                <input
                    type="file"
                    name="file"
                    multiple={true}
                    className=" flex border-0  w-80 h-10 items-center rounded-lg bg-gray-300 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
                ></input>
                <input type="hidden" name="carId" value={carId} />
                <Button type="submit" className=" w-20">Upload</Button>
            </form>
            {state?.status && (
                <div className="mt-2 text-xs text-red-500">
                    {state?.message}
                </div>
            )}

            <ImgSlick images={images as CarImage[]} 
                deleteHandle = {handleDelete} 
                updateDefaultImg = {handleDefault}
                defaultImg = {defaultImage}/>
        </div>
    )
}