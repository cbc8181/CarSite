import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

export default function AddressCard() {

    return (
        <Card className="p-3">
            <CardHeader>
                <CardTitle>Address</CardTitle>
                <CardDescription>Aurora, ON L4G 1H1</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col">
                <a className="basis-11 text-center bg-aem-500 text-white py-2 rounded-sm mb-2" href=""><span>Get Directions</span> </a>
                <a className="basis-11 text-center py-2 bg-slate-50 rounded-sm" href=""><span>Call Us Now</span> </a>
            </CardContent>
        </Card>
    )

}