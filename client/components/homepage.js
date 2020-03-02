import React from 'react'

/**
 * COMPONENT
 */
class HomePage extends React.Component {
  render() {
    return (
      <div>
        <div className="home-line-a">
          <img
            src="https://bpcdn.co/images/2016/12/fearful-trader-275x300.jpg"
            className="home-img"
            alt="Nervous person looking at laptop"
          />
          <h5 className="home-text">Trading shares can be intimidating...</h5>
        </div>
        <div className="home-line-b">
          <img
            className="home-img"
            src="https://capital.com/files/imgs/glossary/600xx/Fundamental%20Analysis.jpg"
            alt="Person learning about trading"
            height="300"
            width="300"
          />
          <h5 className="home-text">
            That's why The Trading Post is here - to let you practice the
            fundamentals of trading!
          </h5>
        </div>
        <div className="home-line-a">
          <h5 className="home-text">
            {' '}
            No one becomes brilliant at trading overnight
          </h5>
          <img
            className="home-img"
            src="https://fxscouts.com/wp-content/uploads/sites/20/2019/09/technical-fundamental-analysis.png"
            alt="data analytics"
            height="300"
            width="300"
          />
          <h5 className="home-text">
            With The Trading Post, you can learn what works and what doesn't
            when you sign up and start building a hypothetical portfolio
          </h5>
        </div>
        <div className="home-line-b">
          <img
            src="https://files.tofugu.com/articles/japanese/2016-05-10-how-to-type-in-japanese/header-1280x.jpg"
            className="home-img"
            alt="Happy person on laptop"
            height="300"
            width="340"
          />
          <h5 className="home-text">
            Sign up now to start honing your trading skills without the risk!
          </h5>
        </div>
      </div>
    )
  }
}

export default HomePage
