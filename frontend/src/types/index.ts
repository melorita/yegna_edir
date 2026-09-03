export type PrimaryActor = 'SYSTEM_ADMIN' | 'COMMITTEE_MEMBER' | 'YEGNA_MEMBER';

export type CommitteeRole = 
  | 'CHAIRPERSON'
  | 'SECRETARY'
  | 'TREASURER'
  | 'INVENTORY_OFFICER'
  | 'AUDITOR';

export interface UserAccount {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  memberId: string;
  primaryActor: PrimaryActor;
  committeeRole?: CommitteeRole;
}

export interface MemberRegistration {
  firstName: string;
  middleName?: string;
  lastName?: string;
  email?: string;
  phone: string;
  woreda?: string;
  kebele?: string;
  woredaKebele?: string;
}
