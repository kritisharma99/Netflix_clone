import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { selectUser } from "../features/userSlice"
import db from "../firebase"
import { loadStripe } from "@stripe/stripe-js"
function PlanScreen (){

    const [products, setProducts] = useState([])
    const user = useSelector(selectUser)
    const [subscription,setSubscription] = useState(null);

    useEffect(()=>{
        db.collection('customers')
        .doc(user.uid)
        .collection('subscriptions')
        .get()
        .then(querySnapshot => {
            querySnapshot.forEach(async subscription =>{
                setSubscription({
                    role: subscription.data().role,
                    current_period_end:subscription.data().current_period_end.seconds,
                    current_period_start:subscription.data().current_period_start.seconds
                })
            })
        })
    },[user.uid])

    useEffect(()=>{
        db.collection('products')
        .where("active","==",true)
        .get()
        .then((querySnapshot)=>{
            const products = {};
            querySnapshot.forEach(async productDoc =>{
                products[productDoc.id] = productDoc.data();
                const priceSnap = await productDoc.ref.collection('prices').get();
                priceSnap.docs.forEach(price =>{
                    products[productDoc.id].prices = {
                        priceId : price.id,
                        priceData : price.data(),

                    }
                })

            })
            setProducts(products);
        })
    },[])

    const loadCheckout = async(priceId) => {
        const docRef = await db.collection('customers')
        .doc(user.uid).collection("checkout_sessions")
        .add({
            price:priceId,
            success_url : window.location.origin,
            cancel_url : window.location.origin, 
        })
        //redirects the user to checkout page
        docRef.onSnapshot(async(snap)=>{
            const {error, sessionId} = snap.data();
            if(error){
                //throw an error to your customer
                alert( `An error occurred: ${error.message}`)
            }
            if(sessionId){
                //we have a session, lets redirect to checkout
                //Init stripe
                const stripe = await loadStripe(
                    'PUBLIC_STRIPE_KEY'
                )
                stripe.redirectToCheckout({sessionId})
            }
        })
    }
    console.log(products)
    console.log(subscription)


    return(
        <div className="planScreen">
            {subscription && <p>Renewal Date : {new Date(subscription?.current_period_end * 1000).toLocaleDateString()}</p>}
            {/* to map through object */}
            {Object.entries(products).map(([productId,productData]) =>{
                //TODO://add some logic to check if users subscription is active
                const isCurrentPackage = productData.name?.toLowerCase().includes(subscription?.role)
                return(
                    <div key={productId} className={`${isCurrentPackage && 'planScreen_plan__disabled'} planScreen__plan`}>
                        <div className="planScreen__info">
                            <h5>{productData.name}</h5>
                            <h6>{productData.description}</h6>
                        </div>
                        <button onClick={!isCurrentPackage &&  loadCheckout(productData.prices.priceId)}>{isCurrentPackage ? 'Current Package' : 'Subscribe'}</button>
                    </div>
                )
            })}
            
            PlansScreen
        </div>
    )
}
export default PlanScreen