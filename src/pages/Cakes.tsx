import "../styles/GlobalStyles.scss"
import "../styles/Cakes.scss"
import WeddingCake from "../assets/imgs/cakes/wedding-cake-1.jpg"

export type CakeOptions = {
  id: number
  name: string
}[]

export const CakeFlavors: CakeOptions = [
  {
    id: 1,
    name: "Vanilla Bean",
  },
  {
    id: 2,
    name: "Almond",
  },
  {
    id: 3,
    name: "Carrot",
  },
  {
    id: 4,
    name: "Coconut",
  },
  {
    id: 5,
    name: "Chocolate Earthquake",
  },
  {
    id: 6,
    name: "Strawberry Champagne",
  },
  {
    id: 7,
    name: "Red Velvet",
  },
  {
    id: 8,
    name: "Chocolate",
  },
  {
    id: 9,
    name: "Birthday",
  },
  {
    id: 10,
    name: "Oreo",
  },
  {
    id: 11,
    name: "Brown Butter",
  },
  {
    id: 12,
    name: "Lemon",
  },
]

export const CakeFillings: CakeOptions = [
  {
    id: 1,
    name: "Blueberry Jam",
  },
  {
    id: 2,
    name: "Strawberry Jam",
  },
  {
    id: 3,
    name: "Ganache",
  },
  {
    id: 4,
    name: "Vanilla Mousse",
  },
  {
    id: 5,
    name: "Chocolate Mousse",
  },
  {
    id: 6,
    name: "Strawberry Mousse",
  },
  {
    id: 7,
    name: "Caramel Mousse",
  },
  {
    id: 8,
    name: "Peanut Butter Mousse",
  },
  {
    id: 9,
    name: "Boston Cream",
  },
  {
    id: 10,
    name: "Fresh Fruit",
  },
]

export const CakeFrostings: CakeOptions = [
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

const Cakes = () => {
  return (
    <>
      <h5 className="main-section-header-title cakes-title">Cakes</h5>
      <div className="main-section-container">
        <div className="img-section-container">
          <img src={WeddingCake} alt="chocolate-cake" className="display-img" />
        </div>
        <div className="description-container">
          <div className="flavors-container">
            <div className="flavors-title-container">
              <h3 className="flavors-title">Flavors</h3>
            </div>
            <div className="flavors-content-container">
              <div className="flavors-list-container">
                <ul className="flavors-content">
                  {CakeFlavors.map(({ id, name }) => {
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
                  {CakeFlavors.map(({ id, name }) => {
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
                  {CakeFlavors.map(({ id, name }) => {
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
                  {CakeFlavors.map(({ id, name }) => {
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
          <div className="fillings-container">
            <div className="fillings-title-container">
              <h3 className="fillings-title">Fillings</h3>
            </div>
            <div className="fillings-content-container">
              <div className="fillings-list-container">
                <ul className="fillings-content">
                  {CakeFillings.map(({ id, name }) => {
                    if (id <= 3) {
                      return (
                        <li key={id} className="fillings-item">
                          {name}
                        </li>
                      )
                    } else {
                      return null
                    }
                  })}
                </ul>
                <ul className="fillings-content">
                  {CakeFillings.map(({ id, name }) => {
                    if (id > 3 && id <= 6) {
                      return (
                        <li key={id} className="fillings-item">
                          {name}
                        </li>
                      )
                    } else {
                      return null
                    }
                  })}
                </ul>
              </div>
              <div className="fillings-list-container">
                <ul className="fillings-content">
                  {CakeFillings.map(({ id, name }) => {
                    if (id > 6 && id <= 9) {
                      return (
                        <li key={id} className="fillings-item">
                          {name}
                        </li>
                      )
                    } else {
                      return null
                    }
                  })}
                </ul>
                <ul className="fillings-content">
                  {CakeFillings.map(({ id, name }) => {
                    if (id > 9) {
                      return (
                        <li key={id} className="fillings-item">
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
                  {CakeFrostings.map(({ id, name }) => {
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

export default Cakes
