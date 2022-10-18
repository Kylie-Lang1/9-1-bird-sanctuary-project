export default function Cart ({ adoptedBirds }) {
    
    return (
        <aside>
            <h1>Cart</h1>
            <h2>Discount: </h2>
            <h2>Total: $ </h2>
            <ol>{
                adoptedBirds.map((bird, index) => {
                    return (
                        <li key={index}>
                            {bird.name}: ${bird.amount}
                        </li>
                    )
                })
            }
            </ol>
        </aside>
    )
}