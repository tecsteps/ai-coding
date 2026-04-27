import { K00_AboutMe } from './K00_AboutMe';
import { K01_Title } from './K01_Title';
import { K02_TurningPoint } from './K02_TurningPoint';
import { K04_SelfAdoptionGap } from './K04_SelfAdoptionGap';
import { K05_WhyNoCross } from './K05_WhyNoCross';
import { K06_Taxonomy } from './K06_Taxonomy';
import { K07_Pillars } from './K07_Pillars';
import { K08_EasyHard } from './K08_EasyHard';
import { K09_TagCloud } from './K09_TagCloud';
import { K10_BeyondIT } from './K10_BeyondIT';
import { K11_AgentsInProduct } from './K11_AgentsInProduct';
import { K12_ProductivityRange } from './K12_ProductivityRange';
import { K13_VerificationCost } from './K13_VerificationCost';
import { K15_InnovationStructure } from './K15_InnovationStructure';
import { K16_HandOff } from './K16_HandOff';
import { P01_Agenda } from './P01_Agenda';
import { P03_HouseRules } from './P03_HouseRules';
import { P04_Hosts } from './P04_Hosts';
import { P05_Breakouts } from './P05_Breakouts';
import { P05a_ParticipantRound } from './P05a_ParticipantRound';
import { P05_TakeAways } from './P05_TakeAways';
import { S01_Maturity } from './S01_Maturity';
import { S01a_NotLate } from './S01a_NotLate';
import { S01b_AdoptionCurve } from './S01b_AdoptionCurve';
import { S02_BeyondIT } from './S02_BeyondIT';
import { S02b_InternalPaaS } from './S02b_InternalPaaS';
import { S03_NewBottleneck } from './S03_NewBottleneck';
import { D01_DemoWhat } from './D01_DemoWhat';
import { G01_Arthur } from './G01_Arthur';
import { G02_Cornelius } from './G02_Cornelius';
import { ComponentType } from 'react';

export interface AlphalistSlide {
  id: string;
  component: ComponentType<{ index: number; total: number }>;
}

export const alphalistSlides: AlphalistSlide[] = [
  { id: 'K01', component: K01_Title },
  { id: 'K00', component: K00_AboutMe },
  { id: 'K02', component: K02_TurningPoint },
  { id: 'K04', component: K04_SelfAdoptionGap },
  { id: 'K05', component: K05_WhyNoCross },
  { id: 'K06', component: K06_Taxonomy },
  { id: 'K07', component: K07_Pillars },
  { id: 'K08', component: K08_EasyHard },
  { id: 'K15', component: K15_InnovationStructure },
  { id: 'K09', component: K09_TagCloud },
  { id: 'K10', component: K10_BeyondIT },
  { id: 'K11', component: K11_AgentsInProduct },
  { id: 'K12', component: K12_ProductivityRange },
  { id: 'K16', component: K16_HandOff },
  { id: 'S01', component: S01_Maturity },
  { id: 'S01b', component: S01b_AdoptionCurve },
  { id: 'S01a', component: S01a_NotLate },
  { id: 'S02', component: S02_BeyondIT },
  { id: 'S02b', component: S02b_InternalPaaS },
  { id: 'S03', component: S03_NewBottleneck },
  { id: 'K13', component: K13_VerificationCost },
  { id: 'P05b', component: P05_TakeAways },
  { id: 'P01', component: P01_Agenda },
  { id: 'P03', component: P03_HouseRules },
  { id: 'P04', component: P04_Hosts },
  { id: 'P05a', component: P05a_ParticipantRound },
  { id: 'D01', component: D01_DemoWhat },
  { id: 'G01', component: G01_Arthur },
  { id: 'P05', component: P05_Breakouts },
  { id: 'G02', component: G02_Cornelius },
];
