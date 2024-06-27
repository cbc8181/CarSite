import Form from '@/app/ui/dashboard/inventory/create-form';
import Breadcrumbs from '@/app/ui/dashboard/inventory/breadcrumbs';
import { getFeatures } from '@/app/lib/data';
// import { fetchCustomers } from '@/app/lib/data';
 
export default async function Page() {
  // const customers = await fetchCustomers();
  const features = await getFeatures();

  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Inventory', href: '/dashboard/inventory' },
          {
            label: 'Create Car',
            href: '/dashboard/inventory/create',
            active: true,
          },
        ]}
      />
      <Form features={features} />
    </main>
  );
}