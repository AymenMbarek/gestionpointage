import PropTypes from "prop-types"
import React, { useEffect, useRef } from "react"

// //Import Scrollbar
import SimpleBar from "simplebar-react"

// MetisMenu
import MetisMenu from "metismenujs"
import { withRouter } from "react-router-dom"
import { Link } from "react-router-dom"

//i18n
import { withTranslation } from "react-i18next"

const SidebarContent = props => {
  const ref = useRef()
  // Use ComponentDidMount and ComponentDidUpdate method symultaniously
  useEffect(() => {
    const pathName = props.location.pathname

    const initMenu = () => {
      new MetisMenu("#side-menu")
      let matchingMenuItem = null
      const ul = document.getElementById("side-menu")
      const items = ul.getElementsByTagName("a")
      for (let i = 0; i < items.length; ++i) {
        if (pathName === items[i].pathname) {
          matchingMenuItem = items[i]
          break
        }
      }
      if (matchingMenuItem) {
        activateParentDropdown(matchingMenuItem)
      }
    }
    initMenu()
  }, [props.location.pathname])

  useEffect(() => {
    ref.current.recalculate()
  })

  function scrollElement(item) {
    if (item) {
      const currentPosition = item.offsetTop
      if (currentPosition > window.innerHeight) {
        ref.current.getScrollElement().scrollTop = currentPosition - 300
      }
    }
  }

  function activateParentDropdown(item) {
    item.classList.add("active")
    const parent = item.parentElement
    const parent2El = parent.childNodes[1]
    if (parent2El && parent2El.id !== "side-menu") {
      parent2El.classList.add("mm-show")
    }

    if (parent) {
      parent.classList.add("mm-active")
      const parent2 = parent.parentElement

      if (parent2) {
        parent2.classList.add("mm-show") // ul tag

        const parent3 = parent2.parentElement // li tag

        if (parent3) {
          parent3.classList.add("mm-active") // li
          parent3.childNodes[0].classList.add("mm-active") //a
          const parent4 = parent3.parentElement // ul
          if (parent4) {
            parent4.classList.add("mm-show") // ul
            const parent5 = parent4.parentElement
            if (parent5) {
              parent5.classList.add("mm-show") // li
              parent5.childNodes[0].classList.add("mm-active") // a tag
            }
          }
        }
      }
      scrollElement(item);
      return false
    }
    scrollElement(item);
    return false
  }

  return (
    <React.Fragment>
      <SimpleBar style={{ maxHeight: "100%" }} ref={ref}>
        <div id="sidebar-menu">
          <ul className="metismenu list-unstyled" id="side-menu">
    
            <li>
                <Link to="/dashboard" className="waves-effect">
                    <i className="ti-dashboard"></i><span className="badge rounded-pill bg-success float-end" style={{background:"#efb615 !important"}}>3</span>
                    <span className="ms-1">{props.t('Dashboard')}</span>
                </Link>
            </li>
            <li>
                            <Link to="/#" className="has-arrow waves-effect">
                            <i className="ti-package"></i>
                                <span className="ms-1">{props.t('Exploitation')}</span>
                            </Link>
                            <ul className="sub-menu">
                                {/* <li><Link to="/#">{props.t('Saisie')}</Link></li> */}
                                
                                <li><Link to="/pointage">{props.t('Pointage')}</Link></li>
                                <li><Link to="/absence">{props.t('Absences')}</Link></li>
                                <li><Link to="/ferie">{props.t('Jours Fériés')}</Link></li>
                                <li><Link to="/production">{props.t('Production')}</Link></li>
                                <li><Link to="/rapport">{props.t('Rapport')}</Link></li>
                                <li><Link to="/recaptulatif">{props.t('Récapitulatif')}</Link></li>
                                <li><Link to="demandes-personnels">{props.t('Demande Personnel')}</Link></li>
                                
                                
                            </ul>
                        </li>
            <li>
                <Link to="/#" className="has-arrow waves-effect">
                    <i className="ti-user"></i>
                    <span className="ms-1">{props.t('Administration')}</span>
                </Link>
                <ul className="sub-menu">
                <li><Link to="/#" className="has-arrow">{props.t('Chantiers')}</Link>
                        <ul className="sub-menu">
                            <li><Link to="/chantiers">{props.t('Chantiers')}</Link></li>

                            <li><Link to="/categories">{props.t('Groupes Chantiers')}</Link></li>
                            <li><Link to="/activites">{props.t('Activités')}</Link></li>
                            <li><Link to="/groupes">{props.t('Groupes Activités')}</Link></li>
                        </ul>
                </li>

                    <li><Link to="/#" className="has-arrow">{props.t('Personnes')}</Link>
                        <ul className="sub-menu">
                            <li><Link to="/personne_interne">{props.t('Interne')}</Link></li>
                            <li><Link to="/personne_externe">{props.t('Externe')}</Link></li>
                            <li><Link to="/demandes-encours">{props.t('Demande Personnel')}</Link></li>
                            <li><Link to="/qualification">{props.t('Qualification')}</Link></li>
                            <li><Link to="/certificat">{props.t('Certification')}</Link></li>


                        </ul>
                </li>

                <li><Link to="/#" className="has-arrow">{props.t('Employeurs')}</Link>
                        <ul className="sub-menu">

                            <li><Link to="/entreprises">{props.t('Employeurs')}</Link></li>
                            <li><Link to="/contrats">{props.t('Contrat')}</Link></li>
                            <li><Link to="/tarifs">{props.t('Tarifs')}</Link></li>
                       </ul>
                </li>
                    <li><Link to="/#" className="has-arrow">{props.t('Evaluations')}</Link>
                        <ul className="sub-menu">
                            <li><Link to="/evaluation_externe">{props.t('Externe')}</Link></li>
                            <li><Link to="/evaluation_interne">{props.t('Interne')}</Link></li>

                        </ul>
                    </li>
                    <li><Link to="/#" className="has-arrow">{props.t('Remarques')}</Link>
                        <ul className="sub-menu">

                            <li><Link to="/remarque_externe">{props.t('Externe')}</Link></li>
                            <li><Link to="/remarque_interne">{props.t('Interne')}</Link></li>
                        </ul>
                    </li>
                    <li><Link to="/#" className="has-arrow">{props.t('Objets')}</Link>
                        <ul className="sub-menu">
                            <li><Link to="/objet">{props.t('Objets')}</Link></li>
                            <li><Link to="/objet_externe">{props.t('Externe')}</Link></li>
                            <li><Link to="/objet_interne">{props.t('Interne')}</Link></li>

                        </ul>
                    </li>

                </ul>
            </li>
            <li>
                <Link to="/#" className="has-arrow waves-effect">
                    <i className="ti-settings"></i>
                    <span className="ms-1">{props.t('Paramétrage')}</span>
                </Link>
                <ul className="sub-menu">
                    <li><Link to="/smartphone">{props.t('Smartphones')}</Link></li>
                    <li><Link to="/userweb">{props.t('Users web')}</Link></li>
                    <li><Link to="/usermobile">{props.t('User mobile')}</Link></li>


                </ul>
            </li>


                       

        
         
          </ul>
        </div>
      </SimpleBar>
    </React.Fragment>
  )
}

SidebarContent.propTypes = {
  location: PropTypes.object,
  t: PropTypes.any,
}

export default withRouter(withTranslation()(SidebarContent))
