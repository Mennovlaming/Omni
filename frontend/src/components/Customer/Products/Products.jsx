import { useState } from 'react'
import './Products.css'


function Products() {
    const [showDetails, setshowDetails] = useState(false);

    const toggleInfo = () => {
        setshowDetails(!showDetails);
    }
  
    return (
        <section className='products'>
        <ul>
            <li className=''>
                <article className='product-card'>
                    <div className='product-content'>
                    <img src="/images/phone.svg" alt="" />
                        <div className='text'>
                            <p>0642490486</p>
                            <p>KPN unlimited</p>
                        </div>
                    </div>
                    <button className={`arrow ${showDetails ? 'rotate' : ''}`} onClick={toggleInfo}>
                        <img src="/images/arrow.svg" alt="" />
                    </button>
                </article> 

                <div className={`product-info ${showDetails ? 'show' : ''}`}>
                    <hr />
                    <p><strong>Rekeningnummer: </strong>NL86 INGB 0001 9366 28</p>
                    <p><strong>Adres: </strong>Martinus van der hamstraat 6</p>
                    <p><strong>Startdatum contract: </strong> 27-01-2024</p>
                    <p><strong>Einddatum contract: </strong>27-01-2026</p>
                </div>
            </li>

        </ul>
    </section>
    );
}

export default Products;
