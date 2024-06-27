import Pagination from '@/app/ui/dashboard/inventory/pagination';
import Search from '@/app/ui/dashboard/inventory/search';
import Table from '@/app/ui/dashboard/inventory/table';
import { AddCar } from '@/app/ui/dashboard/inventory/buttons';
import { lusitana } from '@/app/ui/fonts';
import { InventoryTableSkeleton } from '@/app/ui/dashboard/inventory/skeletons';
import { Suspense } from 'react';
import { fetchInventoryPages } from '@/app/lib/data';

export default async function Page({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) {

  const query = searchParams?.query || '';
  const currentPage = Number(searchParams?.page) || 1;
  const totalPages = await fetchInventoryPages(query);
  
  return (
    <div className="w-full">
      <div className="flex w-full items-center justify-between">
        <h1 className={`${lusitana.className} text-2xl`}>Inventory</h1>
      </div>
      <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
        <Search placeholder="Search inventory..." />
        <AddCar />
      </div>
      <Suspense key={query + currentPage} fallback={<InventoryTableSkeleton />}>
        <Table query={query} currentPage={currentPage} />
      </Suspense>
      <div className="mt-5 flex w-full justify-center">
        <Pagination totalPages={totalPages} />
      </div>
    </div>
  );
}
