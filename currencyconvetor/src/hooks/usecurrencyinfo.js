import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
    const [data, setData] = useState({});
    const API_KEY = "YOUR_API_KEY"; // Replace with your actual API key

    useEffect(() => {
        const fetchCurrencyInfo = async () => {
            try {
                // Using a CORS proxy (remove this if you set up a backend)
                const proxyUrl = "https://cors-anywhere.herokuapp.com/";
                const apiUrl = `https://v6.exchangerate-api.com/v6/${API_KEY}/latest/${currency}`;

                const response = await fetch(proxyUrl + apiUrl);

                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }

                const jsonData = await response.json();
                setData(jsonData.conversion_rates);
            } catch (error) {
                console.error("Error fetching currency data:", error);
            }
        };

        fetchCurrencyInfo();
    }, [currency]);

    return data;
}

export default useCurrencyInfo;
