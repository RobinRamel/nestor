import { useSelector } from "react-redux";
import type { AppState } from '@/store'
import Card from "./card";


function CardsList() {
    const listOfApartments = useSelector((state: AppState) => state.apartments.data)
    
    return (
        <div className="grid gap-8 grid-cols-1 p-12 md:grid-cols-2 lg:grid-cols-3">
            {
                listOfApartments.map(apartment => (
                    <Card key={apartment.id} apartment={apartment} />
                ))
            }
        </div>
    );
}

export default CardsList;
