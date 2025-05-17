import Image from "next/image";

export default function RequestWriteup() {
    // return <span>
    //     {`Thank you so much for engaging with me! I really appreciate your song requests and will try my best to fulfil every single request. 
    //     However as a new busker, I am still expanding my repertoire and may not be able to fulfil some song requests.
    //     If that happens, don't hesitate to request another song! Thank you so much for your understanding :)`}
    // </span>
    return (
        <div>
            <div
                style={{
                    border: '1px solid #ccc',
                    padding: '10px',
                    borderRadius: '5px',
                    backgroundColor: '#f9f9f9',
                }}
            >
                <Image 
                    src="/../../assets/prive.png" 
                    alt="Privé" 
                    width={300} 
                    height={200} 
                    style={{ margin: '10px 0', borderRadius: '5px' }} 
                />
                <h2 style={{fontWeight: 'bold'}}>Privé Special</h2>
                <p>
                    I seek your understanding that there will be more restrictions on song requests for this event:
                </p>
                <ul>
                    <li>1. Only English songs will be played.</li>
                    <li>2. Songs should match and contribute to the ambience of Privé.</li>
                </ul>
                <p>Thank you for your understanding!</p>
            </div>
            <br />
            <p>
                Thank you so much for engaging with me! I really appreciate your song requests and will try my best to fulfil every single request. 
                If your song has not been called for a while, don't hesitate to request another song! Thank you so much for your understanding :)
            </p>
        </div>
    );
}