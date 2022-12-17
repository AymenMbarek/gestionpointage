import { all, fork } from "redux-saga/effects"

//public
import AccountSaga from "./auth/register/saga"
import AuthSaga from "./auth/login/saga"
import ForgetSaga from "./auth/forgetpwd/saga"
import ProfileSaga from "./auth/profile/saga"
import LayoutSaga from "./layout/saga"
import calendarSaga from "./calendar/saga"

import DashboardSaga from "./home/dashbored/saga"

import BanqueSaga from "./personne/banque/saga"
import CertificatSaga from "./personne/certification/saga"
import QualificationSaga from "./personne/qualification/saga"
import ObjetSaga from "./personne/objet/saga"
import PersonneSaga from "./personne/interne/saga"
import XpersonneSaga from "./personne/externe/saga"
import InpersonneSaga from "./personne/inpersonne/saga"
import SecpersonneSaga from "./personne/secpersonne/saga"

import AutpersonneSaga from "./personne/autpersonne/saga"
import EntrepriseSaga from "./employeur/entreprise/saga"
import ContactSaga from "./employeur/contact/saga"
import ContratSaga from "./employeur/contrat/saga"
import InobjetSaga from "./employeur/inobjet/saga"
import ExobjetSaga from "./employeur/exobjet/saga"
import InremarqueSaga from "./employeur/inremarque/saga"
import ExremarqueSaga from "./employeur/exremarque/saga"
import InevaluationSaga from "./employeur/inevaluation/saga"
import ExevaluationSaga from "./employeur/exevaluation/saga"
import ChantierSaga from "./chantier/chantier/saga"
import ActiviteSaga from "./chantier/activite/saga"
import PointageSaga from "./exploitation/pointage/saga"
import CategorieSaga from "./chantier/categorie/saga"
import GroupeSaga from "./chantier/groupe/saga"
import PersonnelSaga from "./chantier/personnel/saga"
import ListactiviteSaga from "./chantier/listactivite/saga"
import dashboredSaga from "./home/dashbored/saga"
import AbsenceSaga from "./exploitation/abscence/saga"
import DemandeSaga from "./exploitation/demande/saga"
import TarifSaga from "./employeur/tarif/saga"
import HolidaySaga from "./employeur/holiday/saga"
import UserSaga from "./parametrage/user/saga"
import SmartphoneSaga from "./parametrage/smartphone/saga"

export default function* rootSaga() {
  yield all([
    //public
    AccountSaga(),
    ActiviteSaga(),
    dashboredSaga(),
    TarifSaga(),
    UserSaga(),SmartphoneSaga(),HolidaySaga(),
    DemandeSaga(),
    AbsenceSaga(),
    BanqueSaga(),
    GroupeSaga(),
    PersonnelSaga(),
    ListactiviteSaga(),
    CategorieSaga(),
    CertificatSaga(),
    QualificationSaga(),
    ObjetSaga(),
    PersonneSaga(),
    XpersonneSaga(),
    InpersonneSaga(),
    AutpersonneSaga(),
    SecpersonneSaga(),
    EntrepriseSaga(),
    ContactSaga(),
    ContratSaga(),
    PointageSaga(),
    InobjetSaga(),
    ExobjetSaga(),
    InevaluationSaga(),
    ExevaluationSaga(),
    InremarqueSaga(),
    ExremarqueSaga(),
    ChantierSaga(),
    fork(AuthSaga),
    ProfileSaga(),
    ForgetSaga(),
    LayoutSaga(),
    fork(calendarSaga),
  ])
}
