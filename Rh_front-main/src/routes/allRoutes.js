import React from "react"
import { Redirect } from "react-router-dom"

// Profile
import UserProfile from "../pages/Authentication/user-profile"

// Authentication related pages
import Login from "../pages/Authentication/Login"
import Logout from "../pages/Authentication/Logout"
import Register from "../pages/Authentication/Register"
import ForgetPwd from "../pages/Authentication/ForgetPassword"

// Dashboard
import Dashboard from "../pages/Dashboard/index"
import Production from "../pages/Dashboard/production"
import Categorie from "../pages/Employeur/Categorie/index"
import Groupe from "../pages/Employeur/Groupe/index"
// Personne
import Banque from "../pages/Personne/banque/list"
import Objet from "../pages/Personne/object/index"
import Certificat from "../pages/Personne/certificat/list"
import Qualification from "../pages/Personne/qualification/index"
import Personne from "../pages/Personne/interne/index"
import NewPersonne from "../pages/Personne/interne/add"
import Xpersonne from "../pages/Personne/externe/index"
import NewXpersonne from "../pages/Personne/externe/add"
import FilterTable from "../pages/Personne/table/index"
import Detail from "../pages/Personne/interne/detail"
import Profile from "../pages/Personne/externe/detail"
// Employeur
import ChartjsChart from "../pages/Employeur/Chantier/statistique"
import ChantierList from "../pages/Employeur/Chantier/index"
import DemandesList from "../pages/Employeur/Chantier/demandes"
import NewChantier from "../pages/Employeur/Chantier/add"
import Activite from "../pages/Employeur/Activite/index"
import EditChantier from "../pages/Employeur/Chantier/edit"
import ListActivite from "../pages/Employeur/Chantier/ListActivite/index"
import EntrepriseList from "../pages/Employeur/Entreprise/index"
import NewEntreprise from "../pages/Employeur/Entreprise/add"
import EditEntreprise from "../pages/Employeur/Entreprise/edit"

import NewContrat from "../pages/Employeur/Contrat/add"
import Contrats from "../pages/Employeur/Contrat/list"
import ContratList from "../pages/Employeur/Contrat/index"
import EditContrat from "../pages/Employeur/Contrat/edit"
import NewExobjet from "../pages/Employeur/Objet/externe"
import Exobjet from "../pages/Employeur/Objet/ex-index"
import NewInobjet from "../pages/Employeur/Objet/interne"
import Inobjet from "../pages/Employeur/Objet/in-index"
import Exevaluation from "../pages/Employeur/Evaluation/ex-index"
import NewExevaluation from "../pages/Employeur/Evaluation/externe"
import NewInevaluation from "../pages/Employeur/Evaluation/interne"
import Inevaluation from "../pages/Employeur/Evaluation/in-index"
import NewExremarque from "../pages/Employeur/Remarque/externe"
import Exremarque from "../pages/Employeur/Remarque/ex-index"
import NewInremarque from "../pages/Employeur/Remarque/interne"
import Inremarque from "../pages/Employeur/Remarque/in-index"
import Tarifs from "../pages/Employeur/Tarifs/index"
import Recaptulatif from "../pages/Dashboard/recaptulatif"
import AddPointage from "../pages/Exploitation/Pointage/add"
import Pointage from "../pages/Exploitation/Pointage/index"
import Form from "../pages/Exploitation/Pointage/addrows"
import Rapport from "../pages/Exploitation/Rapport/index"
import Absence from "../pages/Exploitation/Absence/index"
import PointManquant from "../pages/Exploitation/Absence/pointmanquant"
import { addNewInobjet } from "store/actions"
// Demande Personnel
import Demandes from "../pages/Demande/index"

// Parametrage
import Smartphone from "../pages/Parametrage/smartphone/index"
import UserWeb from "../pages/Parametrage/userweb/index"
import UserMobile from "../pages/Parametrage/usermobile/index"
import Calender from "../pages/Calendar/index"
import Ferier from "../pages/Exploitation/Ferier/index"


const userRoutes = [
  { path: "/table", component: FilterTable },

  { path: "/dashboard", component: Dashboard },
  { path: "/production", component: Production },
  { path: "/recaptulatif", component: Recaptulatif },
  { path: "/banque", component: Banque },
  { path: "/categories", component: Categorie },
  { path: "/groupes", component: Groupe },
  { path: "/certificat", component: Certificat },
  { path: "/qualification", component: Qualification},
  { path: "/objet", component: Objet },
  { path: "/personne_interne", component: Personne },
  { path: "/personne_externe", component: Xpersonne },
  { path: "/add_personne_interne", component: NewPersonne },
  { path: "/add_personne_externe", component: NewXpersonne },
  { path: "/detailinterne/:id", component: Detail },
  { path: "/detailexterne/:id", component: Profile },
  // Employeur
  { path: "/entreprises", component: EntrepriseList },
  { path: "/add_entreprise", component: NewEntreprise },
  { path: "/edit_entreprise/:id", component: EditEntreprise },
  { path: "/add_objet_externe", component: NewExobjet},
  { path: "/objet_externe", component: Exobjet},
  { path: "/add_objet_interne", component: NewInobjet},
  { path: "/objet_interne", component: Inobjet},
  { path: "/add_evaluation_interne", component: NewInevaluation},
  { path: "/add_evaluation_externe", component: NewExevaluation },
  { path: "/evaluation_externe", component: Exevaluation },
  { path: "/evaluation_interne", component: Inevaluation},
  { path: "/remarque_interne", component: Inremarque},
  { path: "/remarque_externe", component: Exremarque },
  { path: "/add_remarque_interne", component: NewInremarque},
  { path: "/add_remarque_externe", component: NewExremarque },
  { path: "/chantiers", component: ChantierList },
  { path: "/contrats", component: ContratList },
  { path: "/add_chantier", component: NewChantier },
  { path: "/activites", component: Activite },
  { path: "/listactivites", component: ListActivite},
  { path: "/edit_chantier/:id", component: EditChantier },
  { path: "/statistique", component: ChartjsChart },
  { path: "/contrat-en-cours", component: Contrats },
  { path: "/tarifs", component: Tarifs },
  { path: "/add_contrat", component: NewContrat },
  { path: "/edit_contrat/:id", component: EditContrat },
  //Exploitation
  { path: "/pointage", component: Pointage },
  { path: "/add-pointage", component: AddPointage },
  { path: "/addrows", component: Form },
  { path: "/rapport", component: Rapport },
  { path: "/absence", component: Absence },
  { path: "/pointage-manquant", component: PointManquant },
  // // //profile
  { path: "/profile", component: UserProfile },
  // this route should be at the end of all other routes
  { path: "/", exact: true, component: () => <Redirect to="/dashboard" /> },

  { path: "/demandes-encours", component: DemandesList },
  { path: "/jour-ferier", component: Calender},
  //Prametrage
  { path: "/smartphone", component: Smartphone },
  { path: "/userweb", component: UserWeb },
  { path: "/usermobile", component: UserMobile},
  { path: "/ferie", component: Ferier},
  { path: "/demandes-personnels", component: Demandes },
  // //calendar

]

const authRoutes = [
  //Email
 

  { path: "/logout", component: Logout },
  { path: "/login", component: Login },
  { path: "/forgot-password", component: ForgetPwd },
  { path: "/register", component: Register },
    //user route


]

export { userRoutes, authRoutes }
