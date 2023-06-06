import "./newsletter.css"

const Newsletter = () => {
  return (
    <div className="newsletter">
        <div className="newsContainer">
            <h2>Submit your email to get the latest updates on Base</h2>
            <div className="inputContainer">
            <input type="email" classname="newsInput" placeholder="E-mail Address" />
            <button classname="newsButton">Subscribe</button>
            </div>
        </div>
    </div>
  )
}

export default Newsletter