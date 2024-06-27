'use client';

export default function MapFrame() {

    const googleUrl :string = "https://www.google.com/maps/embed/v1/place";
    const API_KEY: string = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string;
    const address: string = encodeURIComponent("Town Park Aurora");
    const zoom: number = 13;
    const maptype: string = "roadmap";

    const url = `${googleUrl}?key=${API_KEY}&q=${address}&zoom=${zoom}&maptype=${maptype}`

    return(
    <div className=" w-full h-96">
        <iframe className=" w-full h-full" src={url}>
        </iframe>
    </div>
    )
}