import "../styles/GlobalStyles.scss"
import Backdrop from "../assets/imgs/cupcakes/backdrop_cupcake.jpg"
import { CakeOptions } from "./Cakes"

const Flavors: CakeOptions = [
  {
    id: 1,
    name: "Chocolate Chip",
  },
  {
    id: 2,
    name: "Peanut Butter",
  },
  {
    id: 3,
    name: "Snickerdoodle",
  },
  {
    id: 4,
    name: "Chocolate",
  },
  {
    id: 5,
    name: "Red Velvet",
  },
  {
    id: 6,
    name: "Birthday Cake",
  },

  {
    id: 7,
    name: "Oreo",
  },
  {
    id: 8,
    name: "Coconut",
  },
  {
    id: 9,
    name: "Vanilla Bean",
  },
  {
    id: 10,
    name: "Lemon",
  },
  {
    id: 11,
    name: "Strawberry",
  },
]

const Frostings = [
  {
    id: 1,
    name: "Swiss Buttercream",
  },
  {
    id: 2,
    name: "Cream Cheese Buttercream",
  },
  {
    id: 3,
    name: "Buttercream",
  },
]

const Cupcakes = () => {
  return (
    <>
      <h5 className="main-section-header-title cupcakes-title">Cupcakes</h5>
      <div className="main-section-container">
        <div className="img-section-container">
          <div className="img-section">
            <img src={Backdrop} alt="cupcake" className="display-img cupcake" />
          </div>
        </div>
        <div className="description-container">
          <div className="flavors-container">
            <div className="flavors-title-container">
              <h3 className="flavors-title">Flavors</h3>
            </div>
            <div className="flavors-content-container">
              <div className="flavors-list-container">
                <ul className="flavors-content">
                  {Flavors.map(({ id, name }) => {
                    if (id <= 3) {
                      return (
                        <li key={id} className="flavor-item">
                          {name}
                        </li>
                      )
                    } else {
                      return null
                    }
                  })}
                </ul>
                <ul className="flavors-content">
                  {Flavors.map(({ id, name }) => {
                    if (id > 3 && id <= 6) {
                      return (
                        <li key={id} className="flavor-item">
                          {name}
                        </li>
                      )
                    } else {
                      return null
                    }
                  })}
                </ul>
              </div>
              <div className="flavors-list-container">
                <ul className="flavors-content">
                  {Flavors.map(({ id, name }) => {
                    if (id > 6 && id <= 9) {
                      return (
                        <li key={id} className="flavor-item">
                          {name}
                        </li>
                      )
                    } else {
                      return null
                    }
                  })}
                </ul>
                <ul className="flavors-content">
                  {Flavors.map(({ id, name }) => {
                    if (id > 9) {
                      return (
                        <li key={id} className="flavor-item">
                          {name}
                        </li>
                      )
                    } else {
                      return null
                    }
                  })}
                </ul>
              </div>
            </div>
          </div>
          <div className="frostings-container">
            <div className="frostings-title-container">
              <h3 className="frostings-title">Frostings</h3>
            </div>
            <div className="frostings-content-container">
              <div className="frostings-list-container">
                <ul className="frostings-content">
                  {Frostings.map(({ id, name }) => {
                    if (id <= 3) {
                      return (
                        <li key={id} className="frostings-item">
                          {name}
                        </li>
                      )
                    } else {
                      return <div></div>
                    }
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Cupcakes
