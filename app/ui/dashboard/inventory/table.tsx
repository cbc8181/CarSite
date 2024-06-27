import Image from 'next/image';
import { UpdateInvoice } from '@/app/ui/dashboard/inventory/buttons';
import DisplayStatus from '@/app/ui/dashboard/inventory/status';
import SaleStatus from '@/app/ui/dashboard/inventory/saleStatus';
import { formatDateToLocal, formatCurrency } from '@/app/lib/util';
import { fetchFilteredInvoices } from '@/app/lib/data';

export default async function InvoicesTable({
  query,
  currentPage,
}: {
  query: string;
  currentPage: number;
}) {
  const cars = await fetchFilteredInvoices(query, currentPage);
  const imgPath = "/carImage";
  return (
    <div className="mt-6 flow-root">
      <div className="inline-block min-w-full align-middle">
        <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
          <div className="md:hidden">
            {cars?.map((car) => (
              <div
                key={car.id}
                className="mb-2 w-full rounded-md bg-white p-4"
              >
                <div className="flex items-center justify-between border-b pb-4">
                  <div>
                    <div className="mb-2 flex items-center">
                      {/* <Image
                        src={`${imgPath}/${car.id}.${car.defaultImageId}.jpeg`}
                        className="mr-2 rounded-full"
                        width={28}
                        height={28}
                        alt={`${car.model}'s profile picture`}
                      /> */}
                      <p>{car.year}-{car.make}-{car.model}</p>
                    </div>
                    <p className="text-sm text-gray-500">{car.mileage} Km</p>
                  </div>
                  <DisplayStatus status={car.display} />
                </div>
                <div className="flex w-full items-center justify-between pt-4">
                  <div>
                    <p className="text-xl font-medium">
                      {formatCurrency(car.price)}
                    </p>
                    <p>{formatDateToLocal(car.createdAt.toString())}</p>
                  </div>
                  <div className="flex justify-end gap-2">
                    <UpdateInvoice id={car.id.toString()} />
                    {/* <DeleteInvoice id={invoice.id} /> */}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <table className="hidden min-w-full text-gray-900 md:table">
            <thead className="rounded-lg text-left text-sm font-normal">
              <tr>
                <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                  Car
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Mileage
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Price
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Posted date
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Display
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Sale
                </th>
                <th scope="col" className="relative py-3 pl-6 pr-3">
                  <span className="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {cars?.map((car) => (
                <tr
                  key={car.id}
                  className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
                >
                  <td className="whitespace-nowrap py-3 pl-6 pr-3">
                    <div className="flex items-center gap-3">
                      {/* <Image
                        src={`${imgPath}/${car.id}.${car.defaultImageId}.jpeg`}
                        className="rounded-full"
                        width={28}
                        height={28}
                        alt={`${car.model}'s profile picture`}
                      /> */}
                      <p>{car.year}-{car.make}-{car.model}</p>
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {car.mileage} Km
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {formatCurrency(car.price)}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {formatDateToLocal(car.createdAt.toString())}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    <DisplayStatus status={car.display} />
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    <SaleStatus status={car.sold} />
                  </td>
                  <td className="whitespace-nowrap py-3 pl-6 pr-3">
                    <div className="flex justify-end gap-3">
                      <UpdateInvoice id={car.id.toString()} />
                      {/* <DeleteInvoice id={car.id} /> */}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
