export type Language = 'en' | 'ar';

export interface CertificateItem {
  id: number;
  fileName: string;
  institution: string;
  institutionAr: string;
  courseTitle: string;
  courseTitleAr: string;
  description: string;
  descriptionAr: string;
  verificationPlatform?: string;
  verificationId: string;
  verificationUrl?: string;
  issueDate?: string;
  issueDateAr?: string;
  expirationDate?: string;
  expirationDateAr?: string;
  category: 'redteam' | 'fundamentals' | 'websec' | 'awareness';
}

export interface SkillItem {
  name: string;
  level: string;
  levelAr: string;
  category: 'programming' | 'redteam' | 'blueteam' | 'infrastructure';
  highlight?: boolean;
  notes?: string;
  notesAr?: string;
}

export interface TimelineMilestone {
  period: string;
  periodAr: string;
  title: string;
  titleAr: string;
  description: string;
  descriptionAr: string;
  skillsAcquired: string[];
  skillsAcquiredAr: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  titleAr: string;
  tagline: string;
  taglineAr: string;
  description: string;
  descriptionAr: string;
  technologies: string[];
  status: 'In Development' | 'Research Tool' | 'Concept Architecture';
  statusAr: string;
  image: string;
  githubUrl?: string;
}

export interface KnowledgeTopic {
  id: string;
  title: string;
  titleAr: string;
  summary: string;
  summaryAr: string;
  category: string;
  categoryAr: string;
}
