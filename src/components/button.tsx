import { deleteApartment } from "@/helpers/apiAction";
import { removeItem } from "@/reducers/apartment";
import { useRouter } from "next/router"
import { useDispatch } from "react-redux";

type Props = {
    id: string | string[] | undefined;
    actionType: 'update' | 'delete'
}

const Button = ({ id, actionType }: Props) => {
    const { push } = useRouter()
    const dispatch = useDispatch()
    const color = actionType === 'update' 
    ? 'bg-sky-800 hover:bg-sky-700' 
    : 'bg-red-500 hover:bg-red-400'

    const handleUpdate = () => {
        // Link to edit page with good id
        push(`/update/${id}`)
    }

    const handleDelete = () => {
        const doDelete = deleteApartment(Number(id))
        dispatch(removeItem(id))
        if(doDelete) {
            push('/')
        } else {
            console.log("error")
        }
    }

    return(
        <button
            className={`${color} text-white py-1 px-6 rounded-md text-lg`} 
            onClick={ actionType === 'update' ? handleUpdate : handleDelete }
        >
            { actionType }
        </button>
    )
}

export default Button;