import { useSelector } from "react-redux";
import type { AppState } from '@/store'
import Card from "./card";


function CardsList() {
    const listOfApartments = useSelector((state: AppState) => state.apartments.data)

    return (
        <div>
            {
                listOfApartments.map(apartment => (
                    <Card key={apartment.id} apartment={apartment} />
                ))
            }
        </div>
    );
}

export default CardsList;
