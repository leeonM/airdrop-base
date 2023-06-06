import "./second.css"
import baseAssets from "../assets/base-assets.png"

const Second = () => {
  return (
    <div className="second">
        <div className="sContainer">
        <div className="left">
            <img className="sImg" src={baseAssets} alt="" />
        </div>
        <div className="right">
            <h1 className="rightTitle">Empowered by Coinbase</h1>
            <h2 className="rightSubHeading">
                Airdrop depending on your wallet activity, check how much you can claim or 
                bridge to increase eligibility before the airdrop deadline. Average claim values of $500
            </h2>
        </div>
        </div>
        </div>
  )
}

export default Second