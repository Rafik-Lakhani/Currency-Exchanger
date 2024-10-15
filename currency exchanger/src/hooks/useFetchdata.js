import { useEffect, useState } from "react";


function useFetchdata(currency) {
    const [option, setOption] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`api/${currency}`); //add your api key
                const data = await response.json();
                setOption(data['conversion_rates']);
                console.log('api call')
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData(); 
    }, [currency]);
    return option;
}

export default useFetchdata