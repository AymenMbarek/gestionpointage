import { combineReducers } from "redux"

// Front
import Layout from "./layout/reducer"

// Authentication
import Login from "./auth/login/reducer"
import Account from "./auth/register/reducer"
import ForgetPassword from "./auth/forgetpwd/reducer"
import Profile from "./auth/profile/reducer"

//Personne
import Dashbored from "./home/dashbored/reducer"
import Banque from "./personne/banque/reducer"
import Certificat from "./personne/certification/reducer"
import Qualification from "./personne/qualification/reducer"
import Objet from "./personne/objet/reducer"
import Personne from "./personne/interne/reducer"
import Xpersonne from "./personne/externe/reducer"
import Inpersonne from "./personne/inpersonne/reducer"
import Secpersonne from "./personne/secpersonne/reducer"
import Autpersonne from "./personne/autpersonne/reducer"



//Employeur
import Entreprise from "./employeur/entreprise/reducer"
import Contrat from "./employeur/contrat/reducer"
import Exobjet from "./employeur/exobjet/reducer"
import Inobjet from "./employeur/inobjet/reducer"
import Exevaluation from "./employeur/exevaluation/reducer"
import Inevaluation from "./employeur/inevaluation/reducer"
import Exremarque from "./employeur/exremarque/reducer"
import Inremarque from "./employeur/inremarque/reducer"
import Pointage from "./exploitation/pointage/reducer"

//Calendar
import calendar from "./calendar/reducer"

import Absence from "./exploitation/abscence/reducer"
import Demande from "./exploitation/demande/reducer"
import Tarif from "./employeur/tarif/reducer"
import Chantier from "./chantier/chantier/reducer"
import Listactivite from "./chantier/listactivite/reducer"
import Personnel from "./chantier/personnel/reducer"
import Activite from "./chantier/activite/reducer"
import Contact from "./employeur/contact/reducer"
import Categorie from "./chantier/categorie/reducer"
import Groupe from "./chantier/groupe/reducer"
import Holiday from "./employeur/holiday/reducer"

import User from "./parametrage/user/reducer"
import Smartphone from "./parametrage/smartphone/reducer"
const rootReducer = combineReducers({
  // public
  Layout,
  Login,
  Account,
  ForgetPassword,
  Profile,Dashbored,
  Contact,Tarif,Demande,Absence,Holiday,
  calendar,
  Banque,
  User,
  Smartphone,
  Certificat,
  Qualification,
  Objet,
  Personne,Inpersonne,
  Personnel,
  Listactivite,
  Xpersonne,
  Autpersonne,Secpersonne,
  Entreprise,
  Contrat,
  Exobjet,
  Inobjet,
  Chantier,
  Exremarque,
  Inremarque,
  Exevaluation,
  Inevaluation,
  Pointage,
  Activite,
  Groupe,
  Categorie
})

export default rootReducer
