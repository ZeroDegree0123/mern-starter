import './OrderHistoryPage.css'

export default function OrderHistoryPage() {

    const handleCheckToken = async (evt) => {
        alert('click')
    }

    return( 
        <>
            <h1>hello Order History</h1>
            <button onClick={handleCheckToken}>Check When My Login Expires</button>
        </>
    )
}