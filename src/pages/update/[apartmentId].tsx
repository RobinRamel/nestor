import Field from "@/components/field";
import Navbar from "@/components/navBar";
import { setLocalStoWithBaseData } from "@/helpers/apiAction";
import { initiateData } from "@/reducers/apartment";
import { AppState } from "@/store";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { ChangeEvent, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const UpdateApartment: NextPage = () => {
    const router = useRouter()
    const dispatch = useDispatch()
    const id = Number(router.query.apartmentId)
    let apartmentById = useSelector((state: AppState) => state.apartments.data.find(apartment => apartment.id === id))
    const [tags, setTags] = useState(apartmentById?.tags || [])
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(false)
    
    useEffect(() => {
        if(!id) {
            return
        }
        
        
        if ( !apartmentById && router.isReady ) {
            // setLoading(true)
            const newData = setLocalStoWithBaseData()
            console.log(newData)
            if(newData) {
                dispatch(initiateData(newData))
                setLoading(false)
            } else {
                setError(true)
                setLoading(false)
            }
        }
    }, [router])

    // gandling the click on checkboxes 
    const handleCheckbox = (event: ChangeEvent<HTMLInputElement>) => {
        const find = tags.find(element => element === event.target.value)
        // means it already exist so remove
        if (find) {
            setTags(tags.filter(element => element !== event.target.value))
        } else {
        // doesn't exist so add  
            setTags([...tags, event.target.value])
        }
    }

    // determine if the checkbox is checked or not depending of the state
    const isChecked = (value: string): boolean => {
        if(apartmentById) {
            const find = tags.find(element => element === value)
            return find ? true : false 
        } else {
            return false
        }
    }

  return (
    <div className="px-64 py-24 relative">
        {loading && <p>veuillez patienter...</p>}
        {apartmentById && (
            
            <>
                <Navbar />
                <main>
                    <form>
                        <Field id={id} value={apartmentById.surface.toString()} type="text" name="surface" label="Surface en m²" required/>
                        

                        {/* Form part divided in 2 */}
                        <div className="grid gap-6 my-6 md:grid-cols-2">
                            <Field id={id} value={apartmentById.price.toString()} type="text" name="price" label="Prix" required/>
                            <Field id={id} value={apartmentById.rooms.toString()} type="text" name="rooms" label="Nombre de pièces" required/>
                            <Field id={id} value={apartmentById.chamber.toString()} type="text" name="chamber" label="Nombre de chambres" required/>
                            <Field id={id} value={apartmentById.surface.toString()} type="text" name="surface" label="Surface en m²" required/>
                        </div>

                        <Field id={id} value={apartmentById.image} type="text" name="image" label="Image (URL)" required/>
                        
                        <div className="mb-6">
                            <label  className="block mb-2 text-sm font-medium text-gray-900 ">Gallery</label>
                            <>
                                {
                                    apartmentById.gallery.map((img, index) => {
                                        return <Field key={index} id={id} value={img} type="text" name="gallery" required />
                                    })
                                }
                            </>
                        </div> 
                        <div className="mb-6">
                            <Field id={id} value={apartmentById.localisation.adress} type="text" name="adress" label="Adresse" required/>
                            <Field id={id} value={apartmentById.localisation.zipcode} type="text" name="zipCode" label="Code postal" required/>
                            <Field id={id} value={apartmentById.localisation.adress} type="text" name="city" label="Ville" required/>
                        </div> 
                        <div className="flex items-start mb-6 gap-4 flex-wrap">
                            <div className="flex items-center h-5">
                                <input id="tags" onChange={handleCheckbox} checked={isChecked("balcon")} type="checkbox" value="balcon" className="w-6 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" required />
                                <label  className="ml-2 text-sm font-medium text-gray-900 -300"> Balcon </label>
                            </div>
                            <div className="flex items-center h-5">
                                <input id="tags" onChange={handleCheckbox} checked={isChecked("terrasse")} type="checkbox" value="terrasse" className="w-6 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" required />
                                <label  className="ml-2 text-sm font-medium text-gray-900 -300"> Terrasse </label>
                            </div>
                            <div className="flex items-center h-5">
                                <input id="tags" onChange={handleCheckbox} checked={isChecked("jardin")} type="checkbox" value="jardin" className="w-6 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" required />
                                <label  className="ml-2 text-sm font-medium text-gray-900 -300"> Jardin </label>
                            </div>
                            <div className="flex items-center h-5">
                                <input id="tags" onChange={handleCheckbox} checked={isChecked("piscine")} type="checkbox" value="piscine" className="w-6 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" required />
                                <label  className="ml-2 text-sm font-medium text-gray-900 -300"> Piscine </label>
                            </div>
                            <div className="flex items-center h-5">
                                <input id="tags" onChange={handleCheckbox} checked={isChecked("parking")} type="checkbox" value="parking" className="w-6 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" required />
                                <label  className="ml-2 text-sm font-medium text-gray-900 -300"> Parking </label>
                            </div>
                            <div className="flex items-center h-5">
                                <input id="tags" onChange={handleCheckbox} checked={isChecked("garage")} type="checkbox" value="garage" className="w-6 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" required />
                                <label  className="ml-2 text-sm font-medium text-gray-900 -300"> Garage </label>
                            </div>
                            <div className="flex items-center h-5">
                                <input id="tags" onChange={handleCheckbox} checked={isChecked("sous-sol")} type="checkbox" value="sous-sol" className="w-6 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" required />
                                <label  className="ml-2 text-sm font-medium text-gray-900 -300"> Sous-sol </label>
                            </div>
                            <div className="flex items-center h-5">
                                <input id="tags" onChange={handleCheckbox} checked={isChecked("cave")} type="checkbox" value="cave" className="w-6 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" required />
                                <label  className="ml-2 text-sm font-medium text-gray-900 -300"> Cave </label>
                            </div>
                            <div className="flex items-center h-5">
                                <input id="tags" onChange={handleCheckbox} checked={isChecked("ascenseur")} type="checkbox" value="ascenseur" className="w-6 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" required />
                                <label  className="ml-2 text-sm font-medium text-gray-900 -300"> Ascenseur </label>
                            </div>
                            <div className="flex items-center h-5">
                                <input id="tags" onChange={handleCheckbox} checked={isChecked("Handicap")} type="checkbox" value="Handicap" className="w-6 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" required />
                                <label  className="ml-2 text-sm font-medium text-gray-900 -300"> Handicap </label>
                            </div>
                            <div className="flex items-center h-5">
                                <input id="tags" onChange={handleCheckbox} checked={isChecked("meublé")} type="checkbox" value="meublé" className="w-6 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" required />
                                <label  className="ml-2 text-sm font-medium text-gray-900 -300"> Meublé </label>
                            </div>
                        </div>
                        <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
                    </form>
                </main>
            </>
        )}  
    
    </div>
  );
}

export default UpdateApartment;
