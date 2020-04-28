import React, { Component, Fragment } from "react";
class Home extends Component {
  render() {
    return (
      <Fragment>
        <div class="banner">
          <section style={{ marginTop: 80 + "px" }}>
                    <img
                      src="https://fcaryk.com/wp-content/uploads/2019/09/main-qimg-2055ee889c730f4ac6a52f49e08f822e.png"
                      alt=""
                    />
                    <div className="container ">
                    <h4> Welcome To Our Studio!</h4>
                      <h1>Welcome</h1>
                      <a href="/About" className="btn btn-success ">
                      ABOUT US
                      </a>
                    </div>
          </section>
        </div>
        <section>
                  <div className="container">
                    <h2>About Us</h2>
                      <div className="row">
                      <div className="col-lg-12">
                          <p>
                          Charitable giving is the act of giving money, goods or time to the unfortunate, either directly or by means of a charitable trust or other worthy cause.[9] Charitable giving as a religious act or duty is referred to as almsgiving or alms. The name stems from the most obvious expression of the virtue of charity; giving the recipients of it the means they need to survive. The impoverished, particularly those widowed or orphaned, and the ailing or injured, are generally regarded as the proper recipients of charity. The people who cannot support themselves and lack outside means of support sometimes become "beggars", directly soliciting aid from strangers encountered in public.

                          Some groups regard charity as being distributed towards other members from within their particular group. Although giving to those nearly connected to oneself is sometimes called charity—as in the saying "Charity begins at home"—normally charity denotes giving to those not related, with filial piety and like terms for supporting one's family and friends. Indeed, treating those related to the giver as if they were strangers in need of charity has led to the figure of speech "as cold as charity"—providing for one's relatives as if they were strangers, without affection.[10]

                          Most forms of charity are concerned with providing basic necessities such as food, water, clothing, healthcare and shelter, but other actions may be performed as charity: visiting the imprisoned or the homebound, ransoming captives, educating orphans, even social movements. Donations to causes that benefit the unfortunate indirectly, such as donations to fund cancer research, are also charity
                          </p>
                        </div>
                      </div>
                  </div>
        </section>
      </Fragment>
    );
  }
}

export default Home;
