import React, { useState, useEffect } from 'react';
import Card from './Card';

const FetchingData = () => {
    const [data, setData] = useState([]);
    const[loading, setLoading] = useState(true);

    useEffect(() => { 
        const fetchData = async () => {
            try {
                const res = await fetch("https://dummyjson.com/products");
                if (res.ok) {
                    const result = await res.json();
                    setData(result.products);
                    console.log(result.products);
                    setLoading(false);
                }
            } catch (err) {
                console.log(err);
            } 
        };
        fetchData();
    }, []);

        
    
    // let handleChange = () => {
    //     console.log("start");
    //     setData(5);
    //     console.log(data);
    //     console.log("end");
    // }
    if (loading) {
        return <h1>Loading...</h1>;
    }

    return (
        <>
            {data.map((product) => (
                <Card key={product.id} data={product} />
            ))}
        </>
    );
};

export default FetchingData;

