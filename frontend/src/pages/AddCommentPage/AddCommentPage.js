import React from 'react'
import { useNavigate } from "react-router-dom0"
import useAuth from "../..hooks/useAuth"
import useCustomForm  from "../../hooks/useCustomForm"

let initialValues = {
    user: "",
    video_id: "", 
    text: "",
    like: 0,
    dislikes: 0,
};

const AddCarPage = () =>{
    const [user, token] = useAuth()
    const navigate = useNavigate()
    const [formData, handleInputChange, handleSubmit] = useCustomForm(initialValues)

    return (
        <div>
            <form>
                <label>
                    
                </label>

            </form>
        </div>
    )
}

export default AddCarPage