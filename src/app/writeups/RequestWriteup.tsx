export default function RequestWriteup() {
    // return <span>
    //     {`Thank you so much for engaging with me! I really appreciate your song requests and will try my best to fulfil every single request. 
    //     However as a new busker, I am still expanding my repertoire and may not be able to fulfil some song requests.
    //     If that happens, don't hesitate to request another song! Thank you so much for your understanding :)`}
    // </span>
    return (
        <div>
            <div style={{ border: '1px solid #ccc', padding: '10px', borderRadius: '5px', backgroundColor: '#f9f9f9' }}>
                <h2>Privé Special</h2>
                <span>
                    Note: I seek your understanding that there will be more restrictions for this event.
                    <br />
                    <span>
                        1. Only English songs will be played.
                        <br />
                        2. Songs should match and contribute to the ambience of Privé.
                        <br />
                    Thank you for your understanding!
                    </span>
                </span>
            </div>
            <br />
            <span>
                Thank you so much for engaging with me! I really appreciate your song requests and will try my best to fulfil every single request. 
                If your song has not been called for a while, don't hesitate to request another song! Thank you so much for your understanding :)
            </span>
            <br />
        </div>
    )
}