import React from 'react'
import FeatureComponent from '../components/FeatureComponent'
import chatIcon from "../images/icon-chat.png"
import moneyIcon from "../images/icon-money.png"
import securityIcon from "../images/icon-security.png"

const HomePage = () => {
  return (
    <React.Fragment>
        <main>
            <div className="hero">
                <section className="hero-content">
                <h2 className="sr-only">Promoted Content</h2>
                <p className="subtitle">No fees.</p>
                <p className="subtitle">No minimum deposit.</p>
                <p className="subtitle">High interest rates.</p>
                <p className="text">Open a savings account with Argent Bank today!</p>
                </section>
            </div>
        </main>
        <section className="features">
            <h2 className="sr-only">Features</h2>
            <FeatureComponent
                img={chatIcon}
                alt="Chat Icon"
                title="You are our #1 priority"
                content="Need to talk to a representative? You can get in touch through our
                24/7 chat or through a phone call in less than 5 minutes."
            /> 
            <FeatureComponent
                img={moneyIcon}
                alt="Money Icon"
                title="More savings means higher rates"
                content="The more you save with us, the higher your interest rate will be!"
            />
              <FeatureComponent
                img={securityIcon}
                alt="security Icon"
                title="Security you can trust"
                content="We use top of the line encryption to make sure your data and money
                is always safe."
            />
        </section>
    </React.Fragment>
  )
}

export default HomePage
