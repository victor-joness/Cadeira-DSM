import {useState, useEffect} from "react";
import axios from "axios";

const useFetch = () => {
    const [data, setData] = useState([]);

    const fetchData = async () => {
        try {
            const response = await axios.get("http://10.0.2.2:3001/livros");
            setData(response.data);
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    const refetch = () => {
        fetchData();
    }

    return {data, refetch};
};

export default useFetch;