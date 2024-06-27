import Form from '@/app/ui/dashboard/inventory/edit-form';
import Breadcrumbs from '@/app/ui/dashboard/inventory/breadcrumbs';
import { getCarDetailById, getFeatures } from '@/app/lib/data';
import { notFound } from 'next/navigation'
import UploadImageForm from '@/app/ui/dashboard/inventory/upload-image';

export default async function Page({ params }: { params: { id: string } }) {
    const id = params.id;
    const [car, features] = await Promise.all([
        getCarDetailById(id),
        getFeatures(),
    ]);
    if (!car) {
        notFound();
    }

    return (
        <main>
            <Breadcrumbs
                breadcrumbs={[
                    { label: 'Inventory', href: '/dashboard/inventory' },
                    {
                        label: 'Edit Inventory',
                        href: `/dashboard/inventory/${id}/edit`,
                        active: true,
                    },
                ]}
            />
            <Form car={car} features={features} />
            <UploadImageForm carId={id} defaultImg = {car.defaultImageId}/>
        </main>
    );
}