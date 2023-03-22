import type { Apartment } from '@/reducers/apartment'
import db from '@/database.json';

export const setLocalStoWithBaseData = () => {
    const isSet = localStorage.getItem('nestor-immo')
    if (isSet) {
        return JSON.parse(isSet)
    } else {
        saveToLocalSto(db)
        return db
    }
}

export const getApartmentList = () => {
    const getLocal = localStorage.getItem('nestor-immo')
    if (getLocal) {
        const data = JSON.parse(getLocal)
        return data
    }
    return null
}

export const getApartmentById = (id: number) => {
    const data = getApartmentList()
    const apartment = data?.find((item) => item.id === id)
    return apartment
}

export function deleteApartment(id: number) { 
    const data = getApartmentList()
    const filteredList = data.filter((item) => item.id !== id)
    
    if (filteredList.length < data.length) {
        saveToLocalSto(filteredList)
        return true
    } else {
        return false
    }
}

export function update(apartment: Apartment) {
    // const filteredData = _apartmentList.filter((item) => item.id !== apartment.id)
    // const newDataSet = [...filteredData, apartment]
    // saveApartmentList(newDataSet)
}

function saveToLocalSto(newData: any) {
    localStorage.setItem('nestor-immo', JSON.stringify(newData))
}
