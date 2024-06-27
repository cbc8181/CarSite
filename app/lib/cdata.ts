import { countBodyStyles, countMakes, countModels } from "../lib/util";

export function fetchCarData() {
    console.log('fetch car data from api.............');
    fetch('/api/carsinfo').then((res) => {
        if (!res.ok) {
            throw new Error('Failed to fetch car data');
        }
        return res.json();
    }).catch((error) => {
        console.error(error);
        return [];
    });
}

export function fetchCarInfo() {
    return fetch('/api/carinfo')
        .then((res) => res.json())
        .then((data) => {
            // console.log(data);
            const bodyStyle = countBodyStyles(data);
            const make = countMakes('', data);
            const model = countModels('', '', data);
            return { cars: data, bodyStyle, make, model };
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            throw error;
        });
}


export function fetchCarDetail(carId: string) {
    return fetch(`/api/cardetail?id=${carId}`)
        .then((res) => res.json())
        .then((data) => {
            return data;
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            throw error;
        });
}



// export async function fetchCarData() {

//     fetch('/api/carsInfo').then((res) => {
//         if (!res.ok) {
//             throw new Error('Failed to fetch car data');
//         }
//         return res.json();
//     }).catch((error) => {
//         console.error(error);
//         return [];
//     });
// }

export async function getImgs(carId: string) {
    return fetch(`/api/carImage?id=${carId}`)
        .then((res) => res.json())
        .then((data) => {
            return data;
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            throw error;
        });
}

export async function deleteImg(id: number) {
    return fetch(`/api/deleteImage?id=${id}`)
        .then((res) => res.json())
        .then((data) => {
            return data;
        })
        .catch(error => {
            console.error('Error delele image:', error);
            throw error;
        });
}


export async function updateDefaultImg(carId: number, imgId: number) {
    return fetch(`/api/updateDefaultImg?carId=${carId}&imgId=${imgId}`)
        .then((res) => res.json())
        .then((data) => {
            return data;
        })
        .catch(error => {
            console.error('Error update default image:', error);
            throw error;
        });
}
