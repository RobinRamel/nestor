import type { NextPage } from 'next'
import { useRouter } from "next/router";
import Image from "next/image";
import { useSelector } from "react-redux";
import { useEffect, useState } from 'react';

import Navbar from "@/components/navBar";
import Button from '@/components/button';
import { AppState } from "@/store";
import { MapIcon } from "@heroicons/react/24/outline"
import { getApartmentById } from '@/helpers/apiAction';

const ApartmentView: NextPage = () => {
    const router = useRouter()
    const { id } = router.query
    let apartmentId = useSelector((state: AppState) => state.apartments.data.find((apartment) => apartment.id === Number(id) ));
    const [apartmentData, setApartmentData] = useState(apartmentId)
    const [error, setError] = useState(false)

    useEffect(() => {
      if(!id) {
        return
      }

      if ( !apartmentData && router.isReady ) {
        const newData = getApartmentById(Number(id))

        if (newData) {
          setApartmentData(newData)
        } else {
          setError(false)
        }
      }

    }, [id])

  return (

    <div className="px-64 py-24 relative">
        <Navbar />
        <header className="w-full py-4 relative mt-[7vh]">
            <div className="flex justify-between items-center">
              <h2 className="font-bold text-3xl mb-4"> {apartmentData?.name} </h2>
              <span className="font-bold text-xl"> {apartmentData?.price} € / mois CC. </span>
            </div>
            <div className='flex items-center'> 
              <MapIcon className="h-6 w-6 mr-2" /> 
              <p className="font-normal text-lg"> {apartmentData?.localisation.adress} {apartmentData?.localisation.zipcode} {apartmentData?.localisation.city}</p>
            </div>
        </header>
        <main>
          {/* gallery */}
          {/* Ici je fais un peu de SCSS pour montrer que je ne fais pas que du Tailwind :) c'est un choix purement demonstratif */}
          <div className="gallery">
            {
              apartmentData?.gallery.map((pictureUrl, index) => {
                return (<Image 
                  className={`childN${index+1}`} 
                  src={pictureUrl} 
                  alt="Image of the apartment"
                  width={500} 
                  height={500} 
                  key={index}
                />)
              })
            }
          </div>
          {/* tags */}
          <div className="flex overflow-x-auto overflow-y-hidden">
            { apartmentData?.tags.map((tag, index) => (
              <div key={index} className="mr-4 py-1 px-6 bg-gray-200 rounded">
                <span className="font-semibold"> {tag} </span>
              </div>
            )) }
          </div>

          {/* criteria */}
          <div className="my-10">
              <h3 className="font-semibold text-xl"> Plus sur le logement :  </h3>
              <p className="text-xl font-thin"> { `${apartmentData?.chamber} chambres - ${apartmentData?.rooms} pièces - ${apartmentData?.surface} m²` }  </p>
          </div>
          <hr className="mb-10" />

          {/* description */}
          <div className="mb-10">
            <p> {apartmentData?.description} </p>
          </div>

          {/* buttons */}
          <div className="flex justify-end gap-4 py-8">
              <Button id={id} actionType="update" />
              <Button id={id} actionType="delete" />
          </div>
        </main>
    </div>
  );
}

export default ApartmentView;
