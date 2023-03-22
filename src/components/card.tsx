import type { Apartment } from "@/reducers/apartment";
import Image from "next/image";
import Link from "next/link";

type Props = {
    apartment: Apartment
}

function Card({ apartment }: Props) {
  return (
    <div className="max-w-sm bg-white  rounded-lg shadow overflow-hidden flex flex-col">
        <Link href={`/${apartment.id}`} className="flex max-h-[25vh]">
            <Image 
                className="rounded-t-lg w-full object-cover h-auto" 
                src={apartment.image} 
                alt="Image of the apartment"
                width={500} 
                height={500} 
            />
        </Link>
        <div className="p-5 bg-stone-500 text-gray-100 flex flex-col flex-grow justify-between">
            <Link href={`/${apartment.id}`}>
                <h5 className="mb-2 text-2xl font-bold "> {apartment.name} </h5>
            </Link>
            <p className="mb-3 max-h-24 overflow-hidden relative opacity-60 h-full">
                {apartment.description}
                <span className="shadow-box"></span>
            </p>
            <div className="flex items-center justify-between">
                <Link href={`/${apartment.id}`} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white rounded-lg focus:ring-4 focus:outline-none focus:ring-blue-300 border">
                    En savoir plus
                    <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                </Link>
                <span className="font-bold">
                    {apartment.price} € CC.
                </span>
            </div>
        </div>
    </div>
  );
}

export default Card;
