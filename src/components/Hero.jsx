import "./hero.css"

const Hero = () => {
  return (
    <div className="hero">
        <div className="hContainer">
            <h1 className="hTitle">CLAIM BASE AIRDROP OR EARN REWARDS</h1>
            <div>
            <h2 className="hSubHeading">
            Base is a secure, low-cost, developer-friendly Ethereum L2 built to bring the next billion users to web3. 
            Check how much you are eligible to claim or bridge assets to increase your eligibility before the deadline
            </h2>
            <div className="hButtonContainer">
                <button className="hButtonOne">Claim</button>
                <button className="hButtonTwo">Bridge Assets</button>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Hero