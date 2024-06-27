import { CarsBaseInfo } from "./definitions";


export function countBodyStyles(cars: { bodyStyle: string; }[]) {
    return cars.reduce((acc: { [key: string]: number }, car) => {
        acc[car.bodyStyle] = (acc[car.bodyStyle] || 0) + 1;
        return acc;
    }, {});
}

export function countMakes(bodyStyle: string, cars: CarsBaseInfo[]) {
    if (bodyStyle === '') {
        return cars.reduce((acc: { [key: string]: number }, car) => {
            acc[car.make] = (acc[car.make] || 0) + 1;
            return acc;
        }, {})
    } else {
        return cars.reduce((acc: { [key: string]: number }, car) => {
            if (car.bodyStyle === bodyStyle) {
                acc[car.make] = (acc[car.make] || 0) + 1;
            }
            return acc;
        }, {})
    };
}

export function countModels(bodyStyle: string, makes: string, cars: CarsBaseInfo[]) {

    if (bodyStyle === '' && makes === '') {
        return cars.reduce((acc: { [key: string]: number }, car) => {
            acc[car.model] = (acc[car.model] || 0) + 1;
            return acc;
        }, {})
    } else if (bodyStyle !== '' && makes === '') {
        return cars.reduce((acc: { [key: string]: number }, car) => {
            if (car.bodyStyle === bodyStyle) {
                acc[car.model] = (acc[car.model] || 0) + 1;
            }
            return acc;
        }, {})
    } else if (bodyStyle !== '' && makes !== '') {
        return cars.reduce((acc: { [key: string]: number }, car) => {
            if (car.bodyStyle === bodyStyle && car.make === makes) {
                acc[car.model] = (acc[car.model] || 0) + 1;
            }
            return acc;
        }, {})
    } else {
        return cars.reduce((acc: { [key: string]: number }, car) => {
            if (car.make === makes) {
                acc[car.model] = (acc[car.model] || 0) + 1;
            }
            return acc;
        }, {})
    }
}

export const formatCurrency = (amount: number) => {

    return amount.toLocaleString('en', {
        style: 'currency',
        currency: 'CAD',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
    });
};


export const formatDateToLocal = (
    dateStr: string,
    locale: string = 'en-US',
) => {
    const date = new Date(dateStr);
    const options: Intl.DateTimeFormatOptions = {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
    };
    const formatter = new Intl.DateTimeFormat(locale, options);
    return formatter.format(date);
};


export const generatePagination = (currentPage: number, totalPages: number) => {
    // If the total number of pages is 7 or less,
    // display all pages without any ellipsis.
    if (totalPages <= 7) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }
  
    // If the current page is among the first 3 pages,
    // show the first 3, an ellipsis, and the last 2 pages.
    if (currentPage <= 3) {
      return [1, 2, 3, '...', totalPages - 1, totalPages];
    }
  
    // If the current page is among the last 3 pages,
    // show the first 2, an ellipsis, and the last 3 pages.
    if (currentPage >= totalPages - 2) {
      return [1, 2, '...', totalPages - 2, totalPages - 1, totalPages];
    }
  
    // If the current page is somewhere in the middle,
    // show the first page, an ellipsis, the current page and its neighbors,
    // another ellipsis, and the last page.
    return [
      1,
      '...',
      currentPage - 1,
      currentPage,
      currentPage + 1,
      '...',
      totalPages,
    ];
  };