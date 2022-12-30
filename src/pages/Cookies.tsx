import "../styles/GlobalStyles.scss"
import ChocolateChip from "../assets/imgs/cookies/gooey-chip-cookies.jpg"
import { CakeOptions } from "./Cakes"

export const Flavors: CakeOptions = [
  {
    id: 1,
    name: "Chocolate Chip",
  },
  {
    id: 2,
    name: "Sugar Cookie",
  },
  {
    id: 3,
    name: "Peanut Butter",
  },
  {
    id: 4,
    name: "Oatmeal Raisin",
  },
  {
    id: 5,
    name: "Snickerdoodle",
  },
  {
    id: 6,
    name: "Dark Chocolate",
  },
  {
    id: 7,
    name: "Red Velvet",
  },
  {
    id: 8,
    name: "Birthday Cake",
  },
  {
    id: 9,
    name: "Brownie",
  },
  {
    id: 11,
    name: "Oreo",
  },
  {
    id: 12,
    name: "Coconut",
  },
  {
    id: 13,
    name: "Drop Cookies",
  },
]

const Cookies = () => {
  return (
    <>
      <h5 className="main-section-header-title cupcake">Cookies</h5>
      <div className="main-section-container">
        <div className="img-section-container">
          <div className="img-section">
            <img
              src={ChocolateChip}
              alt="chocolate-chip"
              className="display-img chocolate-chip-cookie"
            />
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

export default Cookies
