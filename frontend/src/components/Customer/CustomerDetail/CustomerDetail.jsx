import './CustomerDetail.css';

function CustomerDetail( { customer} ) {
    

    return (
       
            
            <section className='customerinfo'>
                <div className='box'>
                    <div className='intro'>
                        <div>
                            <img src="/images/user.svg" alt="" />
                            <h2>{customer.name}</h2>
                        </div>
                        <img src="/images/dots.png" alt="" />
                    </div>
                    <ul>
                        <li>Klantnummer: {customer.cnumber}</li>
                        <li>Postcode: {customer.zipcode}</li>
                        <li>Huisnummer: {customer.hnumber}</li>
                        <li>Telefoonnummer: {customer.fnumber}</li>
                    </ul>
                </div>
            </section>

       
    );
}

export default CustomerDetail;
