import axios from "axios"
import Certificat from "pages/Personne/certificat/list"
import { post, del, get, put } from "./api_helper"
import * as url from "./url_helper"
import Banque from "pages/Personne/banque"
import Objet from "pages/Personne/object"
import Qualification from "pages/Personne/qualification"
import Entreprise from "pages/Employeur/Entreprise"
// Gets the logged in user data from local session
const getLoggedInUser = () => {
  const user = localStorage.getItem("user")
  if (user) return JSON.parse(user)
  return null
}

//is user is logged in
const isUserAuthenticated = () => {
  return getLoggedInUser() !== null
}

// Register Method
const postFakeRegister = (data) => post(url.POST_FAKE_REGISTER, data)

// Login Method
const postFakeLogin = data => post(url.POST_FAKE_LOGIN, data)

// postForgetPwd
const postFakeForgetPwd = data => post(url.POST_FAKE_PASSWORD_FORGET, data)

// Edit profile
const postJwtProfile = data => post(url.POST_EDIT_JWT_PROFILE, data)

const postFakeProfile = data => post(url.POST_EDIT_PROFILE, data)

// Register Method
const postJwtRegister = (url, data) => {
  return axios
    .post(url, data)
    .then(response => {
      if (response.status >= 200 || response.status <= 299) return response.data
      throw response.data
    })
    .catch(err => {
      let message
      if (err.response && err.response.status) {
        switch (err.response.status) {
          case 404:
            message = "Sorry! the page you are looking for could not be found"
            break
          case 500:
            message =
              "Sorry! something went wrong, please contact our support team"
            break
          case 401:
            message = "Invalid credentials"
            break
          default:
            message = err[1]
            break
        }
      }
      throw message
    })
}

// Login Method
const postJwtLogin = data => post(url.POST_FAKE_JWT_LOGIN, data)

// postForgetPwd
const postJwtForgetPwd = data => post(url.POST_FAKE_JWT_PASSWORD_FORGET, data)

// get Groupes
export const getDashboreds = () => get(url.GET_DASHBOREDS)
// get Events
export const getEvents = () => get(url.GET_EVENTS)

// get Banques
export const getBanques = () => get(url.GET_BANQUES)
//add new Banques
export const addNewBanque = banque => post(url.ADD_NEW_BANQUE, banque)
// update banque
export const updateBanque = banque => put(url.UPDATE_BANQUE+banque.id, banque)
//del banque
export const deleteBanque = banque =>
  del(url.DELETE_BANQUE+banque.id, banque )

// get Groupes
export const getGroupes = () => get(url.GET_GROUPES)
//add new Groupes
export const addNewGroupe = groupe => post(url.ADD_NEW_GROUPE, groupe)
// update groupe
export const updateGroupe = groupe => put(url.UPDATE_GROUPE+groupe.id, groupe)
//del groupe
export const deleteGroupe = groupe =>
    del(url.DELETE_GROUPE+groupe.id, groupe )

// get Categories
export const getCategories = () => get(url.GET_CATEGORIES)
//add new Categories
export const addNewCategorie = categorie => post(url.ADD_NEW_CATEGORIE, categorie)
// update categorie
export const updateCategorie = categorie => put(url.UPDATE_CATEGORIE+categorie.id, categorie)
//del categorie
export const deleteCategorie = categorie =>
    del(url.DELETE_CATEGORIE+categorie.id, categorie )

  // Certificats
export const getCertificats = () => get(url.GET_CERTIFICATS)
// add
export const addNewCertificat = certificat => post(url.ADD_NEW_CERTIFICAT, certificat)
// update
export const updateCertificat= certificat => put(url.UPDATE_CERTIFICAT+certificat.id, certificat)
//delate
export const deleteCertificat= certificat =>
  del(url.DELETE_CERTIFICAT+certificat.id, certificat )

 // Personnels
 export const getPersonnels = () => get(url.GET_PERSONNELS)
 // add
 export const addNewPersonnel = personnel => post(url.ADD_NEW_PERSONNEL, personnel)
 // update
 export const updatePersonnel= personnel => put(url.UPDATE_PERSONNEL+personnel.id, personnel)
 //delate
 export const deletePersonnel= personnel =>
   del(url.DELETE_PERSONNEL+personnel.id, personnel )
   
 // Listactivites
 export const getListactivites = () => get(url.GET_LISTACTIVITES)
 // add
 export const addNewListactivite = listactivite => post(url.ADD_NEW_LISTACTIVITE, listactivite)
 // update
 export const updateListactivite= listactivite => put(url.UPDATE_LISTACTIVITE+listactivite.id, listactivite)
 //delate
 export const deleteListactivite= listactivite =>
   del(url.DELETE_LISTACTIVITE+listactivite.id, listactivite )
 
   // get Objets
 export const getObjets = () => get(url.GET_OBJETS)
 //add 
 export const addNewObjet = objet => post(url.ADD_NEW_OBJET, objet)
 // update 
 export const updateObjet= objet => put(url.UPDATE_OBJET+objet.id, objet)
 //delate
 export const deleteObjet= objet =>
   del(url.DELETE_OBJET+objet.id, objet )

     // get Smartphones
  export const getSmartphones = () => get(url.GET_SMARTPHONES)
     // get Smartphone
  export const getSmartphone = smartphone => get(url.GET_SMARTPHONES+entreprise.id, smartphone)
  //add 
  export const addNewSmartphone = smartphone => post(url.ADD_NEW_SMARTPHONE, smartphone)
  // update 
  export const updateSmartphone= smartphone => put(url.UPDATE_SMARTPHONE+smartphone.id, smartphone)
  //delate
  export const deleteSmartphone= smartphone =>
    del(url.DELETE_SMARTPHONE+smartphone.id, smartphone )

    
  // get Users
 export const getUsers = () => get(url.GET_USERS)
 export const getUser= user => get(url.GET_USERS+user.id, user)
 //add 
 export const addNewUser = user => post(url.ADD_NEW_USER, user)
 // update 
 export const updateUser= user => put(url.UPDATE_USER+user.id, user)
 //delate
 export const deleteUser= user =>
   del(url.DELETE_USER+user.id, user )

   // get Qualifications
   export const getQualifications = () => get(url.GET_QUALIFICATIONS)
   //add 
   export const addNewQualification = qualification => post(url.ADD_NEW_QUALIFICATION, qualification)
   // update
   export const updateQualification= qualification => put(url.UPDATE_QUALIFICATION+qualification.id, qualification)
   //del 
   export const deleteQualification= qualification =>
     del(url.DELETE_QUALIFICATION+qualification.id, qualification )

  // Personnes
  export const getPersonnes = () => get(url.GET_PERSONNES)
  // add
  export const addNewPersonne = personne => post(url.ADD_NEW_PERSONNE, personne)
  // update
  export const updatePersonne= personne => put(url.UPDATE_PERSONNE+personne.id, personne)
  //delate
  export const deletePersonne= personne =>
    del(url.DELETE_PERSONNE+personne.id, personne )

  // Xpersonnes
  export const getXpersonnes = () => get(url.GET_XPERSONNES)
  export const getInpersonnes = () => get(url.GET_INPERSONNES)
export const getIpersonnes = () => get(url.GET_IPERSONNES)
  // add
  export const addNewXpersonne = xpersonne => post(url.ADD_NEW_XPERSONNE, xpersonne)
  // update
  export const updateXpersonne= xpersonne => put(url.UPDATE_XPERSONNE+xpersonne.id, xpersonne)
  //delate
  export const deleteXpersonne= xpersonne =>
    del(url.DELETE_XPERSONNE+xpersonne.id, xpersonne )

    
 // ALL personnes
 export const getSecpersonnes = () => get(url.GET_SECPERSONNES)
  // AUT personnes
  export const getAutpersonnes = () => get(url.GET_AUTPERSONNES)

// Absences
export const getAbsences = () => get(url.GET_ABSENCES)
export const getAbsence = absence => get(url.GET_ABSENCES+absence.id, absence)
 // add
 export const addNewAbsence = absence => post(url.ADD_NEW_ABSENCE, absence)
 // update
 export const updateAbsence= absence => put(url.UPDATE_ABSENCE+absence.id, absence)
 //delate
 export const deleteAbsence= absence =>
   del(url.DELETE_ABSENCE+absence.id, absence )


   
   // Holidays
   export const getHolidays = () => get(url.GET_HOLIDAYS)
   export const getHoliday = holiday => get(url.GET_HOLIDAYS+holiday.id, holiday)
    // add
    export const addNewHoliday = holiday => post(url.ADD_NEW_HOLIDAY, holiday)
    // update
    export const updateHoliday= holiday => put(url.UPDATE_HOLIDAY+holiday.id, holiday)
    //delate
    export const deleteHoliday= holiday =>
      del(url.DELETE_HOLIDAY+holiday.id, holiday )
      
   // Demandes
 export const getDemandes = () => get(url.GET_DEMANDES)
 export const getDemande = demande => get(url.GET_DEMANDES+demande.id, demande)
  // add
  export const addNewDemande = demande => post(url.ADD_NEW_DEMANDE, demande)
  // update
  export const updateDemande= demande => put(url.UPDATE_DEMANDE+demande.id, demande)
  //delate
  export const deleteDemande= demande =>
    del(url.DELETE_DEMANDE+demande.id, demande )

   // Tarifs
export const getTarifs = () => get(url.GET_TARIFS)
export const getTarif = tarif => get(url.GET_TARIFS+tarif.id, tarif)
 // add
 export const addNewTarif = tarif => post(url.ADD_NEW_TARIF, tarif)
 // update
 export const updateTarif= tarif => put(url.UPDATE_TARIF+tarif.id, tarif)
 //delate
 export const deleteTarif= tarif =>
   del(url.DELETE_TARIF+tarif.id, tarif ) 

 // Entreprises
 export const getEntreprises = () => get(url.GET_ENTREPRISES)
export const getEntreprise = entreprise => get(url.GET_ENTREPRISES+entreprise.id, entreprise)
 // add
 export const addNewEntreprise = entreprise => post(url.ADD_NEW_ENTREPRISE, entreprise)
 // update
 export const updateEntreprise= entreprise => put(url.UPDATE_ENTREPRISE+entreprise.id, entreprise)
 //delate
 export const deleteEntreprise= entreprise =>
   del(url.DELETE_ENTREPRISE+entreprise.id, entreprise )


 // Chantier
 export const getChantiers = () => get(url.GET_CHANTIERS)
export const getChantier = chantier => get(url.GET_CHANTIERS+chantier.id, chantier)
 // add
 export const addNewChantier = chantier => post(url.ADD_NEW_CHANTIER, chantier)
 // update
 export const updateChantier= chantier => put(url.UPDATE_CHANTIER+chantier.id, chantier)
 //delate
 export const deleteChantier= chantier =>
   del(url.DELETE_CHANTIER+chantier.id, chantier )
     
   
   // Contrats
  export const getContrats = () => get(url.GET_CONTRATS)
  export const getContrat = contrat => get(url.GET_CONTRATS+contrat.id, contrat)
  // add
  export const addNewContrat = contrat => post(url.ADD_NEW_CONTRAT, contrat)
  // update
  export const updateContrat= contrat => put(url.UPDATE_CONTRAT+contrat.id, contrat)
  //delate
  export const deleteContrat= contrat =>
    del(url.DELETE_CONTRAT+contrat.id, contrat )

    
 // Exobjets
 export const getExobjets = () => get(url.GET_EXOBJETS)
 // add

 export const addNewExobjet = exobjet => post(url.ADD_NEW_EXOBJET, exobjet)
 // update
 export const updateExobjet= exobjet => put(url.UPDATE_EXOBJET+exobjet.id, exobjet)
 //delate
 export const deleteExobjet= exobjet =>
   del(url.DELETE_EXOBJET+exobjet.id, exobjet )


  // Inobjets
  export const getInobjets = () => get(url.GET_INOBJETS)
  // add
  export const addNewInobjet = inobjet => post(url.ADD_NEW_INOBJET, inobjet)
  // update
  export const updateInobjet= inobjet => put(url.UPDATE_INOBJET+inobjet.id, inobjet)
  //delate
  export const deleteInobjet= inobjet =>
    del(url.DELETE_INOBJET+inobjet.id, inobjet )


  // Interne remarques
  export const getInremarques = () => get(url.GET_INREMARQUES)
  // add
  export const addNewInremarque = inremarque => post(url.ADD_NEW_INREMARQUE, inremarque)
  // update
  export const updateInremarque= inremarque => put(url.UPDATE_INREMARQUE+inremarque.id, inremarque)
  //delate
  export const deleteInremarque= inremarque =>
    del(url.DELETE_INREMARQUE+inremarque.id, inremarque )

// Externa remarques
export const getExremarques = () => get(url.GET_EXREMARQUES)
// add

export const addNewExremarque = exremarque => post(url.ADD_NEW_EXREMARQUE, exremarque)
// update
export const updateExremarque= exremarque => put(url.UPDATE_EXREMARQUE+exremarque.id, exremarque)
//delate
export const deleteExremarque= exremarque =>
  del(url.DELETE_EXREMARQUE+exremarque.id, exremarque )


 // Interne evaluations
 export const getInevaluations = () => get(url.GET_INEVALUATIONS)
 // add
 export const addNewInevaluation = inevaluation => post(url.ADD_NEW_INEVALUATION, inevaluation)
 // update
 export const updateInevaluation= inevaluation => put(url.UPDATE_INEVALUATION+inevaluation.id, inevaluation)
 //delate
 export const deleteInevaluation= inevaluation =>
   del(url.DELETE_INEVALUATION+inevaluation.id, inevaluation )

// Externe evaluations
export const getExevaluations = () => get(url.GET_EXEVALUATIONS)
// add

export const addNewExevaluation = exevaluation => post(url.ADD_NEW_EXEVALUATION, exevaluation)
// update
export const updateExevaluation= exevaluation => put(url.UPDATE_EXEVALUATION+exevaluation.id, exevaluation)
//delate
export const deleteExevaluation= exevaluation =>
 del(url.DELETE_EXEVALUATION+exevaluation.id, exevaluation )

// get Activite
export const getActivites = () => get(url.GET_ACTIVITE)
//add 
export const addNewActivite = activite => post(url.ADD_NEW_ACTIVITE,activite)
// update 
export const updateActivite= activite => put(url.UPDATE_ACTIVITE+activite.id, activite)
//delate
export const deleteActivite= activite =>
  del(url.DELETE_ACTIVITE+activite.id, activite )

 // get Pointages
export const getPointages = () => get(url.GET_POINTAGES)
//add 
export const addNewPointage = pointage => post(url.ADD_NEW_POINTAGE, pointage)
// update 
export const updatePointage= pointage => put(url.UPDATE_POINTAGE+pointage.id, pointage)
//delate
export const deletePointage= pointage =>
  del(url.DELETE_POINTAGE+pointage.id, pointage )

// get Production
export const getProductions = () => get(url.GET_PRODUCTION)
//add 
export const addNewProduction = production => post(url.ADD_NEW_PRODUCTION,production)
// update 
export const updateProduction= production => put(url.UPDATE_PRODUCTION+production.productionId, production)
//delate
export const deleteProduction= production =>
  del(url.DELETE_PRODUCTION+production.productionId, production )

 // Contacts
 export const getContacts = () => get(url.GET_CONTACTS+id, contact)
 // add
 export const addNewContact = contact => post(url.ADD_NEW_CONTACT, contact)
 // update
 export const updateContact= contact => put(url.UPDATE_CONTACT+contact.id, contact)
 //delate
 export const deleteContact= contact =>
   del(url.DELETE_CONTACT+contact.id, contact )

// add Events
export const addNewEvent = event => post(url.ADD_NEW_EVENT, event)

// update Event
export const updateEvent = event => put(url.UPDATE_EVENT, event)

// delete Event
export const deleteEvent = event =>
  del(url.DELETE_EVENT, { headers: { event } })

// get Categories


export {
  getLoggedInUser,
  isUserAuthenticated,
  postFakeRegister,
  postFakeLogin,
  postFakeProfile,
  postFakeForgetPwd,
  postJwtRegister,
  postJwtLogin,
  postJwtForgetPwd,
  postJwtProfile,
}
