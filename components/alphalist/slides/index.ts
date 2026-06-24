import { K01_Title } from './K01_Title';
import { K01b_OrganizationalImpact } from './K01b_OrganizationalImpact';
import { K01c_GoogleAICodeQuote } from './K01c_GoogleAICodeQuote';
import { K01d_AIGeneratedNotDoneWell } from './K01d_AIGeneratedNotDoneWell';
import { K01e_DisciplineComparison } from './K01e_DisciplineComparison';
import { K01f_FuzzyPath } from './K01f_FuzzyPath';
import { K01g_FrozenOrganisation } from './K01g_FrozenOrganisation';
import { K01h_OwnExperienceChallenge } from './K01h_OwnExperienceChallenge';
import { K01i_ChallengeOverload } from './K01i_ChallengeOverload';
import { K01j_CodeReviewTradeoff } from './K01j_CodeReviewTradeoff';
import { K01k_ExpectationsAndEmotions } from './K01k_ExpectationsAndEmotions';
import { K01l_JobDescriptionShift } from './K01l_JobDescriptionShift';
import { K01m_DeveloperRoleChanging } from './K01m_DeveloperRoleChanging';
import { K01n_OpportunityThreat } from './K01n_OpportunityThreat';
import { K01o_MovingTarget } from './K01o_MovingTarget';
import { K01oa_DeprecatedITOrg } from './K01oa_DeprecatedITOrg';
import { K01p_TheDifferenceChoice } from './K01p_TheDifferenceChoice';
import { P01_Agenda } from './P01_Agenda';
import { P03_HouseRules } from './P03_HouseRules';
import { P04_Hosts } from './P04_Hosts';
import { P05_Breakouts } from './P05_Breakouts';
import { P05a_ParticipantRound } from './P05a_ParticipantRound';
import { P05aa_EmotionCheck } from './P05aa_EmotionCheck';
import { P05_TakeAways } from './P05_TakeAways';
import { P06_SolutionWorkshop } from './P06_SolutionWorkshop';
import { P07_PeerRotations } from './P07_PeerRotations';
import { S01a_NotLate } from './S01a_NotLate';
import { S01b_AdoptionCurve } from './S01b_AdoptionCurve';
// Hidden: live coding session
// import { D00_PromptingGuidelines } from './D00_PromptingGuidelines';
// import { D01_DemoWhat } from './D01_DemoWhat';
// Hidden: Berlin guests (Arthur Viegers, Ernst-Cornelius Koch)
// import { G01_Arthur } from './G01_Arthur';
// import { G02_Cornelius } from './G02_Cornelius';
import { G03_Balleyguier } from './G03_Balleyguier';
import { G04_Tschochohei } from './G04_Tschochohei';
import { G05_Hudlberger } from './G05_Hudlberger';
import { Z01_Feedback } from './Z01_Feedback';
import { ComponentType } from 'react';

export interface AlphalistSlide {
  id: string;
  component: ComponentType<{ index: number; total: number }>;
}

export const alphalistSlides: AlphalistSlide[] = [
  { id: 'K01', component: K01_Title },
  { id: 'P04', component: P04_Hosts },
  { id: 'K01b', component: K01b_OrganizationalImpact },
  { id: 'K01c', component: K01c_GoogleAICodeQuote },
  { id: 'K01d', component: K01d_AIGeneratedNotDoneWell },
  { id: 'K01e', component: K01e_DisciplineComparison },
  { id: 'K01f', component: K01f_FuzzyPath },
  { id: 'K01g', component: K01g_FrozenOrganisation },
  { id: 'K01h', component: K01h_OwnExperienceChallenge },
  { id: 'K01o', component: K01o_MovingTarget },
  { id: 'K01oa', component: K01oa_DeprecatedITOrg },
  { id: 'K01i', component: K01i_ChallengeOverload },
  { id: 'K01j', component: K01j_CodeReviewTradeoff },
  { id: 'K01m', component: K01m_DeveloperRoleChanging },
  { id: 'K01l', component: K01l_JobDescriptionShift },
  { id: 'K01k', component: K01k_ExpectationsAndEmotions },
  { id: 'K01n', component: K01n_OpportunityThreat },
  { id: 'K01p', component: K01p_TheDifferenceChoice },
  { id: 'S01b', component: S01b_AdoptionCurve },
  { id: 'S01a', component: S01a_NotLate },
  { id: 'P05b', component: P05_TakeAways },
  { id: 'P01', component: P01_Agenda },
  { id: 'P03', component: P03_HouseRules },
  { id: 'P05aa', component: P05aa_EmotionCheck },
  { id: 'P05a', component: P05a_ParticipantRound },
  // Hidden: live coding session
  // { id: 'D00', component: D00_PromptingGuidelines },
  // { id: 'D01', component: D01_DemoWhat },
  // Fireside chat guests, in agenda order
  { id: 'G03', component: G03_Balleyguier },
  { id: 'P05', component: P05_Breakouts },
  { id: 'G04', component: G04_Tschochohei },
  { id: 'G05', component: G05_Hudlberger },
  { id: 'P06', component: P06_SolutionWorkshop },
  // Hidden: Berlin guest (Ernst-Cornelius Koch)
  // { id: 'G02', component: G02_Cornelius },
  { id: 'P07', component: P07_PeerRotations },
  { id: 'Z01', component: Z01_Feedback },
];
