import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { searchShowMain } from "../api/tvMaze";

const Show = () =>{
    const { showId } = useParams();

    const [showData, setShowData] = useState(null);
    const [showError, setShowError] = useState(null);

    useEffect(()=>{
        async function fetchData(){
            try{
                let result = await searchShowMain(showId);
                setShowData(result);
            }
            catch (error){
                setShowError(error);
            }

        }
        fetchData();
    },[showId])
    
    if(showError){
        return <div>Some Error Occured: {showError}</div>
    }
    
    if(showData){
        return <div>{showData.name}</div>
    }

    return (
        <div>Content Loading</div>
    );
}

export default Show;