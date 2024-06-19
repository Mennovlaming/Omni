import { useParams, useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import CustomerDetail from './CustomerDetail/CustomerDetail';
import Products from './Products/Products';
import Logs from './Logs/Logs';
import Navbar from '../Navbar/Navbar';

function Customer() {
    const { id } = useParams();
    const [customer, setCustomer] = useState(null);
    const [isLogAdded, setIsLogAdded] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchCustomer = async () => {
            try {
                const response = await fetch(`http://localhost:3001/customer/${id}`);
                if (!response.ok) {
                    throw new Error('Fout bij het ophalen van de gegevens');
                }
                const data = await response.json();
                setCustomer(data);
            } catch (error) {
                console.error('Er is een fout opgetreden bij het ophalen van de klantgegevens.', error);
            }
        };

        fetchCustomer();
    }, [id]);

    //Bij het afsluiten, klant afluiten met setcustomer null, navigeer home
    const handleFlagClick = () => {
        if (isLogAdded) {
            setCustomer(null);  
            navigate('/');  
        } else {
            alert('Voeg eerst een log toe voordat je de klantpagina verlaat.');
        }
    };

    if (!customer) {
        return <div>Laden...</div>;
    }

    return (
        <>
        <Navbar onFlagClick={handleFlagClick} isLogAdded={isLogAdded} />
        <main>
            <CustomerDetail customer={customer} />
            <Products />
            <Logs 
                customerId={id} 
                logs={customer.logs} 
                setCustomerLogs={(logs) => {
                    setCustomer(prevCustomer => ({ ...prevCustomer, logs }));
                    setIsLogAdded(true);
                }}
            />
       </main>
       </>
    );
}

export default Customer;
