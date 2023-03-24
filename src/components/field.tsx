import { ChangeEvent } from "react";

type Props = {
    id: number;
    type: string;
    name: string;
    placeholder?: string;
    required: boolean;
    label?: string;
    value: string;
}

const Field = ({ type, name, placeholder, required, label, id, value }: Props) => {

    const inputId = `nestor-${name}`
    
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        console.log(event.target.value)
    }

    return (
        <div className="mb-6">
            { label && (
                <label 
                htmlFor={inputId} 
                className="block mb-2 text-sm font-medium text-gray-900"
            >
                {label}
            </label>
            )}
            
            <input 
                id={inputId}
                type={type} 
                onChange={handleChange}
                className="bg-gray-50 border text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  border-gray-600 "
                placeholder={placeholder}
                required={required}
                value={value}
            />
        </div>
    );
}

export default Field;
