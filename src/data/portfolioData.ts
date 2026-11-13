import { CertificateItem, SkillItem, TimelineMilestone, ProjectItem, KnowledgeTopic } from '../types';

export const certificatesData: CertificateItem[] = [
  {
    id: 1,
    fileName: '1.jpg',
    institution: 'Cisco Networking Academy',
    institutionAr: 'أكاديمية سيسكو للشبكات (Cisco)',
    institutionAbout: 'Global US Leader in Networking Infrastructure & Cybersecurity Education',
    institutionAboutAr: 'الشركة الأمريكية الرائدة عالمياً في الشبكات والبنية التحتية والأمن السيبراني',
    courseTitle: 'Ethical Hacker',
    courseTitleAr: 'مخترق أخلاقي (Ethical Hacker)',
    description: 'An introduction to ethical hacking methodologies, penetration-testing concepts, vulnerability assessment, and network security practices.',
    descriptionAr: 'مقدمة لمنهجيات القرصنة الأخلاقية، ومفاهيم اختبار الاختراق، وتقييم الثغرات الأمنية، وممارسات أمن الشبكات.',
    careerValue: 'Validates core Red Team reconnaissance, exploitation workflows, and structured ethical hacking methodology.',
    careerValueAr: 'تثبت إتقان منهجيات القرصنة الأخلاقية، وفحص الثغرات، وأسس اختبار الاختراق الاحترافي.',
    verificationPlatform: 'Credly',
    verificationId: 'd086a162-6800-4d2e-bc0f-3091278e7bc2',
    verificationUrl: 'https://www.credly.com/badges/d086a162-6800-4d2e-bc0f-3091278e7bc2',
    issueDate: 'Dec 29, 2025',
    issueDateAr: '29 ديسمبر 2025',
    category: 'redteam'
  },
  {
    id: 2,
    fileName: '2.jpg',
    institution: 'Fortinet Training Institute',
    institutionAr: 'معهد فورتينت للتدريب (Fortinet)',
    institutionAbout: 'Global Enterprise Cybersecurity, NGFW & Network Defense Leader',
    institutionAboutAr: 'مؤسسة عالمية رائدة في أمن الشبكات، وجدران الحماية المتقدمة، وحلول الدفاع المؤسسي',
    courseTitle: 'Fortinet Certified Fundamentals in Cybersecurity',
    courseTitleAr: 'أساسيات الأمن السيبراني المعتمدة من فورتينت',
    description: 'Fundamental cybersecurity concepts covering digital threats, security awareness, and essential cybersecurity protection principles.',
    descriptionAr: 'المفاهيم الأساسية للأمن السيبراني بما يغطي التهديدات الرقمية، والتوعية الأمنية، ومبادئ الحماية الرقمية الحيوية.',
    careerValue: 'Demonstrates readiness in understanding modern threat landscapes and enterprise network protection models.',
    careerValueAr: 'تؤكد الفهم العملي لمشهد التهديدات الرقمية الحديثة ونماذج حماية الشبكات المؤسسية.',
    verificationId: '1116581960MA',
    verificationUrl: 'https://training.fortinet.com/admin/tool/certificate/index.php',
    issueDate: 'January 2, 2026',
    issueDateAr: '2 يناير 2026',
    expirationDate: 'January 2, 2028',
    expirationDateAr: '2 يناير 2028',
    category: 'fundamentals'
  },
  {
    id: 3,
    fileName: '3.jpg',
    institution: 'Harvard University / CS50',
    institutionAr: 'جامعة هارفارد الأمريكية (Harvard University)',
    institutionAbout: 'Prestigious American Ivy League Research University (Cambridge, MA)',
    institutionAboutAr: 'جامعة هارفارد الأمريكية العريقة — من أرقى الجامعات البحثية في العالم (كامبريدج، أمريكا)',
    courseTitle: "CS50's Introduction to Cybersecurity",
    courseTitleAr: 'مقدمة CS50 في الأمن السيبراني',
    description: 'An academic introduction to cybersecurity principles, security risks, threat analysis, privacy, and protecting digital systems.',
    descriptionAr: 'مقدمة أكاديمية لمبادئ الأمن السيبراني، والمخاطر الأمنية، وتحليل التهديدات، والخصوصية، وحماية الأنظمة الرقمية.',
    careerValue: 'Establishes rigorous academic foundations from Harvard University in system security, cryptography, and risk defense.',
    careerValueAr: 'توثق تأسيساً أكاديمياً رفيع المستوى من جامعة هارفارد في أمان الأنظمة، التشفير، وتحليل المخاطر.',
    verificationId: '64a5f80e-20a9-4781-954d-8c4773414622',
    verificationUrl: 'https://cs50.harvard.edu/certificates/64a5f80e-20a9-4781-954d-8c4773414622',
    issueDate: '2026 (Cambridge, MA)',
    issueDateAr: '2026 (كامبريدج، ماساتشوستس)',
    category: 'fundamentals'
  },
  {
    id: 4,
    fileName: '4.jpg',
    institution: 'Mahara-Tech / Information Technology Institute (ITI)',
    institutionAr: 'منصة مهارة-تك / معهد تكنولوجيا المعلومات (ITI)',
    institutionAbout: 'Premier Egyptian Government IT & Cybersecurity Training Institute (MCIT)',
    institutionAboutAr: 'المعهد القومي الرائد لتطوير الكوادر التقنية التابع لوزارة الاتصالات وتكنولوجيا المعلومات المصرية',
    courseTitle: 'Web PenTesting in Practice: Recon to Remediation',
    courseTitleAr: 'اختبار اختراق الويب عملياً: من الاستطلاع إلى المعالجة',
    description: 'Practical training covering the web penetration-testing workflow, from reconnaissance and vulnerability discovery to remediation and security improvements.',
    descriptionAr: 'تدريب عملي يغطي مراحل اختبار اختراق تطبيقات الويب، من الاستطلاع واكتشاف الثغرات إلى المعالجة والتحسينات الأمنية.',
    careerValue: 'Proves hands-on web exploitation, vulnerability reporting, and practical remediation proficiency.',
    careerValueAr: 'تثبت القدرة التطبيقية على استكشاف ثغرات تطبيقات الويب وتوثيقها وتقديم الحلول الأمنية لمعالجتها.',
    verificationPlatform: 'Mahara-Tech (ITI)',
    verificationId: 'kOo67mglkM',
    verificationUrl: 'https://maharatech.gov.eg/mod/customcert/verify_certificate.php',
    issueDate: 'November 10, 2026',
    issueDateAr: '10 نوفمبر 2026',
    category: 'websec'
  },
  {
    id: 5,
    fileName: '5.jpg',
    institution: 'IBM SkillsBuild',
    institutionAr: 'آي بي إم سكيلز بيلد (IBM SkillsBuild)',
    institutionAbout: 'Global Enterprise Technology, Cloud & Security Corporation (USA)',
    institutionAboutAr: 'شركة IBM الأمريكية العالمية الرائدة في الحوسبة المؤسسية والذكاء الاصطناعي والأمن السيبراني',
    courseTitle: 'Cybersecurity Fundamentals',
    courseTitleAr: 'أساسيات الأمن السيبراني (IBM)',
    description: 'Fundamental cybersecurity learning covering security concepts, common digital threats, and essential approaches to protecting information and systems.',
    descriptionAr: 'تعليم أساسي في الأمن السيبراني يغطي المفاهيم الأمنية، والتهديدات الرقمية الشائعة، والأساليب الأساسية لحماية المعلومات والأنظمة.',
    careerValue: 'Certifies industry-aligned understanding of enterprise defense strategies and threat intelligence fundamentals.',
    careerValueAr: 'تعكس إلماماً بمعايير الصناعة لدى شركة IBM في استراتيجيات الدفاع ومعلومات التهديدات.',
    verificationPlatform: 'Credly',
    verificationId: '73444606-0deb-4543-8ffa-d6de3256ba1a',
    verificationUrl: 'https://www.credly.com/badges/73444606-0deb-4543-8ffa-d6de3256ba1a',
    issueDate: 'March 27, 2026',
    issueDateAr: '27 مارس 2026',
    category: 'fundamentals'
  },
  {
    id: 6,
    fileName: '6.jpg',
    institution: 'HP LIFE / HP Foundation',
    institutionAr: 'مؤسسة إتش بي العالمية (HP LIFE)',
    institutionAbout: 'Global Technology & Digital Education Initiative by HP Inc.',
    institutionAboutAr: 'مبادرة عالمية للتعليم التقني والوعي الرقمي تابعة لشركة HP العالمية',
    courseTitle: 'مقدمة للتوعية بالأمن السيبراني',
    courseTitleAr: 'مقدمة للتوعية بالأمن السيبراني (HP LIFE)',
    description: 'Cybersecurity awareness training introducing safe digital practices, data protection, and recognizing common cybersecurity risks.',
    descriptionAr: 'تدريب للتوعية بالأمن السيبراني يقدم الممارسات الرقمية الآمنة، وحماية البيانات، والتعرف على المخاطر السيبرانية الشائعة.',
    careerValue: 'Strengthens practical digital hygiene, social engineering awareness, and data protection standards.',
    careerValueAr: 'تعزز المهارات العملية في الحماية من الهندسة الاجتماعية وتأمين البيانات الشخصية والمؤسسية.',
    verificationId: '50c8bc1c-94a6-4095-9bcf-588ae9de0bba',
    issueDate: 'October 2, 2026',
    issueDateAr: '2 أكتوبر 2026',
    category: 'awareness'
  },
  {
    id: 7,
    fileName: '7.jpg',
    institution: 'Simplilearn SkillUp',
    institutionAr: 'سيمبلي ليرن سكيل آب (Simplilearn)',
    institutionAbout: 'Global Online Professional IT & Cybersecurity Bootcamp Provider',
    institutionAboutAr: 'منصة تدريب تقنية عالمية متخصصة في تأهيل الكوادر في الأمن السيبراني والتقنية',
    courseTitle: 'Introduction to Cyber Security',
    courseTitleAr: 'مقدمة إلى الأمن السيبراني',
    description: 'An introductory cybersecurity course covering essential security concepts, common cyberattacks, and basic protection methods.',
    descriptionAr: 'دورة تمهيدية في الأمن السيبراني تغطي المفاهيم الأمنية الجوهرية، والهجمات السيبرانية الشائعة، وطرق الحماية الأساسية.',
    careerValue: 'Validates baseline understanding of common cyberattack vectors and defensive controls.',
    careerValueAr: 'تثبت الإلمام بالهجمات السيبرانية الشائعة وضوابط الوقاية والحماية الأساسية.',
    verificationId: '10010497',
    issueDate: 'March 26, 2026',
    issueDateAr: '26 مارس 2026',
    category: 'fundamentals'
  },
  {
    id: 8,
    fileName: '8.jpg',
    isPortrait: true,
    institution: 'The Open University (OpenLearn) — UK',
    institutionAr: 'الجامعة المفتوحة في المملكة المتحدة (The Open University)',
    institutionAbout: 'One of the UK’s largest & most prestigious public research universities',
    institutionAboutAr: 'واحدة من أكبر وأعرق الجامعات الحكومية البحثية في المملكة المتحدة (بريطانيا)',
    courseTitle: 'Network Security (25-Hour Advanced Course · T823_1)',
    courseTitleAr: 'أمان الشبكات ومرونة الأنظمة (برنامج متقدم — 25 ساعة دراسية)',
    description: 'Academic statement of participation for a 25-hour Advanced-level training course on network security and the intricacies of maintaining resilient systems.',
    descriptionAr: 'شهادة إتمام أكاديمية لبرنامج تدريبي متقدم (مستوى Advanced) يمتد لـ 25 ساعة دراسية حول أمان الشبكات ومرونة الأنظمة.',
    careerValue: 'Proves an advanced academic foundation in protecting digital infrastructure, hardening networks, and maintaining system resilience.',
    careerValueAr: 'تثبت امتلاك أساس أكاديمي متقدم في حماية البنية التحتية الرقمية، تأمين الشبكات، وضمان مرونة الأنظمة أمام الهجمات.',
    verificationPlatform: 'The Open University (OpenLearn)',
    verificationId: 'T823_1 · Profile zq106163',
    verificationUrl: 'https://www.open.edu/openlearn/profiles/zq106163/achievements?p=0&b=dateissued&o=desc',
    issueDate: 'November 13, 2026',
    issueDateAr: '13 نوفمبر 2026',
    category: 'fundamentals'
  }
];

export const skillsData: SkillItem[] = [
  // Programming Languages
  { name: 'Python', level: 'Practiced & Applied', levelAr: 'مُمارسة وتطبيق عملي', category: 'programming', highlight: true, notes: 'Scripting, network automation, reconnaissance utilities', notesAr: 'البرمجة النصية، أتمتة الشبكات، أدوات الاستطلاع' },
  { name: 'Bash', level: 'Practiced & Applied', levelAr: 'مُمارسة وتطبيق عملي', category: 'programming', highlight: true, notes: 'Linux automation, CLI pipelines, security scripting', notesAr: 'أتمتة بيئات لينكس، خطوط الأوامر، سكربتات الأمان' },
  { name: 'PHP', level: 'Practiced & Applied', levelAr: 'مُمارسة وتطبيق عملي', category: 'programming', highlight: true, notes: 'Web backend architecture, input sanitization, API handling', notesAr: 'هيكلة الويب الخلفية، تعقيم المدخلات، التعامل مع الواجهات' },
  { name: 'SQL', level: 'Practiced & Applied', levelAr: 'مُمارسة وتطبيق عملي', category: 'programming', highlight: true, notes: 'Relational databases, queries, SQL injection analysis', notesAr: 'قواعد البيانات العلائقية، الاستعلامات، تحليل ثغرات حقن SQL' },
  { name: 'HTML', level: 'Basic', levelAr: 'أساسي', category: 'programming', notes: 'Semantic markup, web document structures', notesAr: 'الترميز الدلالي وهياكل وثائق الويب' },
  { name: 'CSS', level: 'Basic', levelAr: 'أساسي', category: 'programming', notes: 'Styling, responsive design principles', notesAr: 'التنسيق ومبادئ التصميم المتجاوب' },
  { name: 'JavaScript', level: 'Basic', levelAr: 'أساسي', category: 'programming', notes: 'DOM manipulation, client-side web interactions', notesAr: 'التفاعل مع المتصفح والواجهات الأمامية' },
  { name: 'C', level: 'Currently Learning', levelAr: 'قيد التعلم حالياً', category: 'programming', notes: 'Low-level systems programming, memory model concepts', notesAr: 'برمجة النظم منخفضة المستوى ومفاهيم إدارة الذاكرة' },
  { name: 'C++', level: 'Currently Learning', levelAr: 'قيد التعلم حالياً', category: 'programming', notes: 'Object-oriented low-level architecture', notesAr: 'البرمجة كائنية التوجه وتطوير البرمجيات عالية الأداء' },

  // Red Team - Primary Direction
  { name: 'Ethical Hacking Fundamentals', level: 'Proficient & Practiced', levelAr: 'مُتقنة ومُمارسة عملياً', category: 'redteam', highlight: true, notes: 'Methodologies, scopes, legal and ethical standards', notesAr: 'المنهجيات، نطاق الفحص، المعايير القانونية والأخلاقية' },
  { name: 'Penetration Testing Concepts', level: 'Proficient & Practiced', levelAr: 'مُتقنة ومُمارسة عملياً', category: 'redteam', highlight: true, notes: 'Reconnaissance, scanning, exploitation, and reporting', notesAr: 'مراحل الاستطلاع، الفحص، الاستغلال، والتوثيق' },
  { name: 'Web Application Security', level: 'Proficient & Practiced', levelAr: 'مُتقنة ومُمارسة عملياً', category: 'redteam', highlight: true, notes: 'OWASP Top 10 concepts, authorization flaws, parameter tampering', notesAr: 'مفاهيم OWASP Top 10، عيوب الصلاحيات، والتلاعب بالمدخلات' },
  { name: 'Reconnaissance & OSINT', level: 'Proficient & Practiced', levelAr: 'مُتقنة ومُمارسة عملياً', category: 'redteam', notes: 'Asset mapping, subdomain enumeration, passive intelligence', notesAr: 'تخطيط الأصول، استكشاف النطاقات الفرعية، الاستخبارات المفتوحة' },
  { name: 'Vulnerability Identification', level: 'Proficient & Practiced', levelAr: 'مُتقنة ومُمارسة عملياً', category: 'redteam', notes: 'Scanning methodologies, signature detection, vulnerability assessment', notesAr: 'منهجيات الفحص، استكشاف البصمات، وتقييم الثغرات' },
  { name: 'Linux Security Environments', level: 'Proficient & Practiced', levelAr: 'مُتقنة ومُمارسة عملياً', category: 'redteam', notes: 'Permissions, security tools configuration, privilege structures', notesAr: 'أذونات الملفات، تهيئة أدوات الأمان، وهياكل الصلاحيات' },
  { name: 'Network Security Fundamentals', level: 'Proficient & Practiced', levelAr: 'مُتقنة ومُمارسة عملياً', category: 'redteam', notes: 'TCP/IP inspection, packet analysis, port mapping', notesAr: 'فحص حزم TCP/IP، تحليل الحزم، ومسح المنافذ' },
  { name: 'Security Testing Methodologies', level: 'Proficient & Practiced', levelAr: 'مُتقنة ومُمارسة عملياً', category: 'redteam', notes: 'Structured testing workflows, reproducible proof-of-concepts', notesAr: 'خطوات الاختبار المنظم، وإثبات المفاهيم القابل للتكرار' },

  // Blue Team - Defensive Knowledge
  { name: 'Defensive Security Fundamentals', level: 'Proficient & Practiced', levelAr: 'مُتقنة ومُمارسة عملياً', category: 'blueteam', notes: 'Defense-in-depth principles, secure architecture overview', notesAr: 'مبادئ الدفاع المتعمق ونظرة عامة على الهيكلة الآمنة' },
  { name: 'Security Awareness & Hygiene', level: 'Proficient & Practiced', levelAr: 'مُتقنة ومُمارسة عملياً', category: 'blueteam', notes: 'Recognizing phishing vectors, social engineering, credential hygiene', notesAr: 'التعرف على التصيد الاحتيالي، الهندسة الاجتماعية، وأمان كلمات المرور' },
  { name: 'Threat Understanding', level: 'Proficient & Practiced', levelAr: 'مُتقنة ومُمارسة عملياً', category: 'blueteam', notes: 'Adversary behaviors, common attack chains, threat modeling', notesAr: 'سلوكيات المهاجمين، سلاسل الهجمات، ونمذجة التهديدات' },
  { name: 'Basic Incident Response Concepts', level: 'Proficient & Practiced', levelAr: 'مُتقنة ومُمارسة عملياً', category: 'blueteam', notes: 'Triage, containment principles, remediation planning', notesAr: 'فرز البلاغات، مبادئ العزل والاحتواء، وخطط المعالجة' },
  { name: 'Network Defense Fundamentals', level: 'Proficient & Practiced', levelAr: 'مُتقنة ومُمارسة عملياً', category: 'blueteam', notes: 'Firewall rules, DMZ concepts, network segmentation', notesAr: 'قواعد الجدران النارية، مفاهيم DMZ، وتقسيم الشبكات' },

  // Infrastructure & Systems
  { name: 'Linux Environments', level: 'Proficient & Practiced', levelAr: 'مُتقنة ومُمارسة عملياً', category: 'infrastructure', highlight: true, notes: 'Debian/Ubuntu distributions, command-line administration, systemd', notesAr: 'توزيعات ديبيان وأوبونتو، إدارة سطر الأوامر، وخدمات النظام' },
  { name: 'Networking (CCNA Studies)', level: 'Studied & Practiced', levelAr: 'دراسة وممارسة متقدمة', category: 'infrastructure', highlight: true, notes: 'Subnetting, routing basics, switches, OSI 7-layer model', notesAr: 'تقسيم الشبكات (Subnetting)، التوجيه، والنموذج السباعي OSI' },
  { name: 'Web Technologies', level: 'Practiced & Applied', levelAr: 'مُمارسة وتطبيق عملي', category: 'infrastructure', notes: 'HTTP/HTTPS methods, headers, client-server models, REST concepts', notesAr: 'بروتوكولات HTTP/HTTPS، الترويسات، وهيكلية العميل والخادم' },
  { name: 'SQL Databases', level: 'Practiced & Applied', levelAr: 'مُمارسة وتطبيق عملي', category: 'infrastructure', notes: 'Relational data modeling, secure database access configurations', notesAr: 'نمذجة البيانات العلائقية وتهيئة الوصول الآمن لقواعد البيانات' },
  { name: 'Scripting & Automation', level: 'Practiced & Applied', levelAr: 'مُمارسة وتطبيق عملي', category: 'infrastructure', notes: 'Repetitive task automation, custom workflow toolkits', notesAr: 'أتمتة المهام المتكررة وبناء أدوات مخصصة لتسهيل العمل' },

  // Newly Added Professional Skills from Credentials & Images
  { name: 'Cybersecurity', level: '5 Sources Verified', levelAr: 'الأمن السيبراني (5 مصادر لإثبات المهارة)', category: 'redteam', highlight: true, notes: 'Core security principles across multiple verified coursework', notesAr: 'الأمن السيبراني (خمسة مصادر لإثبات المهارة)' },
  { name: 'Social Engineering', level: '4 Sources Verified', levelAr: 'الهندسة الاجتماعية (4 مصادر لإثبات المهارة)', category: 'redteam', notes: 'Phishing vectors, human factor analysis, awareness', notesAr: 'الهندسة الاجتماعية (أربعة مصادر لإثبات المهارة)' },
  { name: 'Information Security Management', level: '3 Sources Verified', levelAr: 'إدارة أمن المعلومات (3 مصادر لإثبات المهارة)', category: 'blueteam', notes: 'Governance, risk frameworks, policy implementation', notesAr: 'إدارة أمن المعلومات (3 مصادر لإثبات المهارة)' },
  { name: 'Network Security', level: '3 Sources Verified', levelAr: 'أمن الشبكة (3 مصادر لإثبات المهارة)', category: 'redteam', notes: 'TCP/IP, inspection, hardening, and firewall rules', notesAr: 'أمن الشبكة (3 مصادر لإثبات المهارة)' },
  { name: 'Threat Intelligence', level: '3 Sources Verified', levelAr: 'معلومات التهديدات (3 مصادر لإثبات المهارة)', category: 'blueteam', notes: 'Adversary tracking, indicators of compromise, analysis', notesAr: 'معلومات التهديدات (3 مصادر لإثبات المهارة)' },
  { name: 'Cloud Services', level: '2 Sources Verified', levelAr: 'خدمات سحابية (مصدران لإثبات المهارة)', category: 'infrastructure', notes: 'Cloud infrastructure security and cloud environments', notesAr: 'خدمات سحابية (مصدران لإثبات المهارة)' },
  { name: 'Cryptography', level: '2 Sources Verified', levelAr: 'التشفير (مصدران لإثبات المهارة)', category: 'infrastructure', notes: 'Encryption algorithms, data confidentiality, hashing', notesAr: 'التشفير (مصدران لإثبات المهارة)' },
  { name: 'Firewalls', level: '2 Sources Verified', levelAr: 'جدران الحماية (مصدران لإثبات المهارة)', category: 'blueteam', notes: 'Packet filtering, network segmentation, rules configuration', notesAr: 'جدران الحماية (مصدران لإثبات المهارة)' },
  { name: 'Fortinet', level: '2 Sources Verified', levelAr: 'فورتينيت (مصدران لإثبات المهارة)', category: 'blueteam', notes: 'Fortinet Certified Fundamentals and security tools', notesAr: 'فورتينيت (مصدران لإثبات المهارة)' },
  { name: 'Symantec Endpoint Protection', level: '2 Sources Verified', levelAr: 'حماية نقطة النهاية من سيمانتك (مصدران)', category: 'blueteam', notes: 'Endpoint security agents, threat mitigation', notesAr: 'حماية نقطة النهاية من سيمانتك (مصدران لإثبات المهارة)' },
  { name: 'Threat Detection', level: '2 Sources Verified', levelAr: 'كشف التهديدات (مصدران لإثبات المهارة)', category: 'blueteam', notes: 'Monitoring anomalies, intrusion detection', notesAr: 'كشف التهديدات (مصدران لإثبات المهارة)' },
  { name: 'Access Control', level: 'Verified Skill', levelAr: 'التحكم في الوصول', category: 'blueteam', notes: 'IAM policies, RBAC, least privilege principles', notesAr: 'التحكم في الوصول (مصدر لأداة المهارات)' },
  { name: 'Application Security', level: 'Verified Skill', levelAr: 'أمان التطبيقات', category: 'redteam', notes: 'OWASP Top 10, secure coding practices', notesAr: 'أمان التطبيقات (مصدر لأداة المهارات)' },
  { name: 'Cyber Defense', level: 'Verified Skill', levelAr: 'الدفاع السيبراني', category: 'blueteam', notes: 'Defense-in-depth, hardening networks and systems', notesAr: 'الدفاع السيبراني (مصدر لأداة المهارات)' },
  { name: 'Cybersecurity Assessment', level: 'Verified Skill', levelAr: 'تقييم الأمن السيبراني', category: 'redteam', notes: 'Audits, compliance checks, vulnerability scanning', notesAr: 'تقييم الأمن السيبراني (مصدر لأداة المهارات)' },
  { name: 'Data Privacy', level: 'Verified Skill', levelAr: 'خصوصية البيانات', category: 'blueteam', notes: 'GDPR concepts, data protection, confidentiality', notesAr: 'خصوصية البيانات (مصدر لأداة المهارات)' },
  { name: 'Ethical Hacking', level: 'Verified Skill', levelAr: 'القرصنة الأخلاقية', category: 'redteam', highlight: true, notes: 'Authorized penetration testing workflows', notesAr: 'القرصنة الأخلاقية (مصدر لأداة المهارات)' },
  { name: 'Incident Response', level: 'Verified Skill', levelAr: 'الاستجابة للحوادث', category: 'blueteam', notes: 'Triage, containment, and forensics overview', notesAr: 'الاستجابة للحوادث (مصدر لأداة المهارات)' },
  { name: 'Internet of Things (IoT)', level: 'Verified Skill', levelAr: 'إنترنت الأشياء (IoT)', category: 'infrastructure', notes: 'Connected device security and protocol analysis', notesAr: 'إنترنت الأشياء (IoT) (مصدر لأداة المهارات)' },
  { name: 'iptables', level: 'Verified Skill', levelAr: 'iptables', category: 'infrastructure', notes: 'Linux kernel packet filtering firewall management', notesAr: 'iptables (مصدر لأداة المهارات)' },
  { name: 'Technical Reporting', level: 'Verified Skill', levelAr: 'التقارير التقنية', category: 'redteam', notes: 'Documenting findings and actionable remediation advice', notesAr: 'التقارير التقنية (مصدر لأداة المهارات)' },
  { name: 'Penetration Testing', level: 'Verified Skill', levelAr: 'اختبار الاختراق', category: 'redteam', highlight: true, notes: 'Simulated cyber attacks to identify exploitable vulnerabilities', notesAr: 'اختبار الاختراق (مصدر لأداة المهارات)' },
  { name: 'Security Strategy', level: 'Verified Skill', levelAr: 'استراتيجيات الأمان', category: 'blueteam', notes: 'Security roadmap development and risk governance', notesAr: 'استراتيجيات الأمان (مصدر لأداة المهارات)' },
  { name: 'Technical Coverage', level: 'Verified Skill', levelAr: 'التغطية التقنية', category: 'infrastructure', notes: 'System monitoring and asset inventory coverage', notesAr: 'التغطية التقنية (مصدر لأداة المهارات)' },
  { name: 'Technical Information', level: 'Verified Skill', levelAr: 'معلومات تقنية', category: 'infrastructure', notes: 'Technical documentation and architecture specs', notesAr: 'معلومات تقنية (مصدر لأداة المهارات)' },
  { name: 'Risk Assessment', level: 'Verified Skill', levelAr: 'تقييم المخاطر', category: 'blueteam', notes: 'Analyzing likelihood and impact of security risks', notesAr: 'تقييم المخاطر (مصدر لأداة المهارات)' },
  { name: 'Threat Management', level: 'Verified Skill', levelAr: 'إدارة التهديدات', category: 'blueteam', notes: 'Proactive mitigation of advanced persistent threats', notesAr: 'إدارة التهديدات (مصدر لأداة المهارات)' },
  { name: 'Vulnerability Assessment', level: 'Verified Skill', levelAr: 'تقييم الثغرات الأمنية', category: 'redteam', notes: 'Identifying, quantifying, and prioritizing vulnerabilities', notesAr: 'تقييم الثغرات الأمنية (مصدر لأداة المهارات)' },
  { name: 'Vulnerability Management', level: 'Verified Skill', levelAr: 'إدارة الثغرات الأمنية', category: 'blueteam', notes: 'Lifecycle patching and remediation tracking', notesAr: 'إدارة الثغرات الأمنية (مصدر لأداة المهارات)' },
  { name: 'Vulnerability Scanning', level: 'Verified Skill', levelAr: 'فحص الثغرات الأمنية', category: 'redteam', notes: 'Automated scanners and manual validation', notesAr: 'فحص الثغرات الأمنية (مصدر لأداة المهارات)' },
  { name: 'Analytical Skills', level: 'Professional Skill', levelAr: 'مهارات تحليلية', category: 'infrastructure', notes: 'Problem-solving and methodical root-cause analysis', notesAr: 'مهارات تحليلية' },
  { name: 'Cloud Security', level: 'Professional Skill', levelAr: 'أمان السحابة', category: 'infrastructure', notes: 'Securing cloud deployments and IAM best practices', notesAr: 'أمان السحابة' },
  { name: 'Intelligence', level: 'Professional Skill', levelAr: 'استخبارات', category: 'blueteam', notes: 'OSINT gathering and intelligence correlation', notesAr: 'استخبارات' },
  { name: 'Microsoft Azure', level: 'Professional Skill', levelAr: 'مايكروسوفت أزور', category: 'infrastructure', notes: 'Cloud platform security and administrative controls', notesAr: 'مايكروسوفت أزور' },
  { name: 'Project Management', level: 'Professional Skill', levelAr: 'إدارة المشاريع', category: 'infrastructure', notes: 'Planning, execution, and milestone tracking', notesAr: 'إدارة المشاريع' },
  { name: 'Risk Management', level: 'Professional Skill', levelAr: 'إدارة المخاطر', category: 'blueteam', notes: 'Enterprise risk mitigation frameworks', notesAr: 'إدارة المخاطر' },
  { name: 'Solution Oriented', level: 'Professional Skill', levelAr: 'موجه نحو الحلول', category: 'infrastructure', notes: 'Actionable outcomes and technical resolution focus', notesAr: 'موجه نحو الحلول' }
];

export const timelineMilestones: TimelineMilestone[] = [
  {
    period: 'Year 1 · Discovery & Trial-and-Error',
    periodAr: 'السنة الأولى · الاستكشاف والتجربة الأولية',
    title: 'Linux Systems Discovery & Raw Hacking Curiosity',
    titleAr: 'اكتشاف أنظمة الاختراق (Linux) والتعلم الذاتي الأولي',
    description: 'Discovered Linux operating systems designed for security. Started through raw exploration, copy-pasting tools, and trial-and-error—building an early passion for cybersecurity mechanisms and recognizing the need for structured study.',
    descriptionAr: 'معرفة أنظمة الاختراق المخصصة (Linux) والبداية في البحث والتعلم العشوائي وتجربة الأدوات ونسخها، واكتشاف الشغف بالأمن السيبراني والإدراك التدريجي لأهمية الفهم بدلاً من مجرد الاستخدام.',
    skillsAcquired: ['Linux OS Discovery', 'CLI Basics', 'Tool Testing', 'Initial Self-Study'],
    skillsAcquiredAr: ['استكشاف أنظمة الاختراق (Linux)', 'أساسيات سطر الأوامر', 'تجارب واختبار الأدوات', 'البداية والتعلم الذاتي']
  },
  {
    period: 'Year 2 · Fundamentals & Team DF',
    periodAr: 'السنة الثانية · التدرج وتأسيس تيم DF',
    title: 'Structured Learning & Founding Global Team DF',
    titleAr: 'التدرج البرمجي الصحيح وتأسيس تيم DF العالمي',
    description: 'Began learning systematically from specialists, doctors, and structured materials. Founded Team "DF" to gather cyber enthusiasts globally—leading members who had higher technical experience than him, yielding profound leadership lessons when DF disbanded.',
    descriptionAr: 'الانتقال إلى التعلم المنظم والتدريجي ومتابعة المتخصصين والدكاترة لفهم الطريق الصحيح. تأسيس تيم "DF" لجمع مهتمين وخبراء أعلى خبرة من أنحاء العالم وقيادتهم، واستخلاص دروس قيادية حاسمة عند تفكك التيم.',
    skillsAcquired: ['Structured Fundamentals', 'Team DF Leadership', 'Global Collaboration', 'Leadership Lessons'],
    skillsAcquiredAr: ['التعلم المنظم والدراسة التدرجية', 'قيادة تيم DF العالمي', 'التعاون الدولي والتشاركي', 'دروس القيادة والتعلم من التحديات']
  },
  {
    period: 'Year 3 · Specialized R&D, Team EH & Onion Chat',
    periodAr: 'السنة الثالثة · الكورسات التخصصية، تيم EH، وشبكة Onion',
    title: 'Advanced Lectures, Team EH & Dark Web Onion Chat',
    titleAr: 'الكورسات التخصصية، تيم EH، ونظام محادثة Onion',
    description: 'Immersed deeply in specialized advanced lectures, career maps, and security role specifications. Founded Team "EH" for global cross-border collaboration and built an end-to-end encrypted chat system on Tor (.onion Dark Web) for private team messaging and tool sharing.',
    descriptionAr: 'التعمق في المحاضرات التخصصية وتحديد المسارات والوظائف الأمنية. تأسيس تيم "EH" للتعاون عابر الدول وبناء نظام محادثة آمن ومشفر ع الشبكة المظلمة (.onion) للتواصل التشاركي وتبادل الأدوات والمعرفة.',
    skillsAcquired: ['Career Path Mapping', 'Team EH Assembly', 'Dark Web (.onion) Infrastructure', 'Encrypted Chat System'],
    skillsAcquiredAr: ['تحديد المسارات والوظائف الأمنية', 'تأسيس وتطوير تيم EH', 'بنية الشبكة المظلمة (.onion)', 'نظام المحادثة المشفر']
  },
  {
    period: 'Year 4 · Major Certifications & Team SM',
    periodAr: 'السنة الرابعة · الشهادات العالمية وتأسيس تيم SM',
    title: 'CEH & CCNA Curriculum Study, Verified Credentials & Team SM (@A_Y_TR)',
    titleAr: 'الكورسات الاحترافية (CEH, CCNA)، الشهادات العالمية، وتأسيس تيم SM',
    description: 'Studied curriculum for major certifications (CCNA, CEH) from Arabic instructors and official platforms. Earned verified credentials from world-renowned organizations (Cisco, Harvard, Fortinet, IBM, ITI Mahara-Tech). Established Team "SM" as a strong team for technical tasks and team growth under handle @A_Y_TR.',
    descriptionAr: 'دراسة ومتابعة كورسات شهادات كبرى مثل CCNA وCEH، والحصول على شهادات موثقة من مؤسسات عالمية (سيسكو، هارفارد، فورتينت، IBM، معهد ITI). تأسيس تيم "SM" القوي لمواصلة الأبحاث والمهام الجماعية تحت المعرف الرسمي A_Y_TR@.',
    skillsAcquired: ['Verified Global Credentials', 'CEH & CCNA Coursework', 'Team SM Leadership', 'Official Handle @A_Y_TR'],
    skillsAcquiredAr: ['الشهادات المعتمدة من جهات عالمية', 'دراسة كورسات CCNA وCEH', 'قيادة تيم SM المتقدم', 'المعرف الرسمي A_Y_TR@']
  },
  {
    period: 'Year 5 · Present & Active Trajectory',
    periodAr: 'السنة الخامسة · الحاضر والتعمق في المسار الصحيح',
    title: 'Continuous Deepening in Red Team & Enterprise Vision',
    titleAr: 'الاستمرار والتعمق المتواصل في المسار الصحيح (السنة الخامسة)',
    description: 'Currently in the 5th year of continuous learning and active development. Deepening technical expertise in Red Team penetration testing, advancing SM team operations, and building a solid, disciplined cybersecurity trajectory.',
    descriptionAr: 'حالياً في السنة الخامسة من التعلم المستمر والتعمق العملي. مواصلة التركيز التخصصي في اختراق وتأمين الأنظمة، وتطوير تيم SM، والسير بثبات وانضباط عالي في المسار الصحيح.',
    skillsAcquired: ['Advanced Red Team Operations', 'Continuous Self-Discipline', 'SM Brand Operations', 'Relentless Mastery'],
    skillsAcquiredAr: ['عمليات الفريق الأحمر المتقدمة', 'الانضباط الذاتي المستمر', 'إدارة وتطوير تيم SM', 'التعمق في المسار الصحيح']
  }
];

export const projectsData: ProjectItem[] = [
  {
    id: 'sm-core',
    title: 'SM Cyber Core Platform',
    titleAr: 'منصة SM للأمن السيبراني والحلول التقنية',
    tagline: 'Future cybersecurity & intelligence platform foundation',
    taglineAr: 'أساس المنصة المستقبلية للأمن السيبراني والتحليل المتقدم',
    description: 'The architectural blueprint and technology hub for the future SM cybersecurity company. Designed to unify automated vulnerability tracking, security audits, and defensive insights for modern digital infrastructures.',
    descriptionAr: 'المخطط المعماري والنواة التقنية لشركة SM المستقبلية للأمن السيبراني، المصممة لدمج الفحص الآلي للثغرات، وتدقيق الأنظمة، والرؤى الدفاعية للبنى التحتية الحديثة.',
    technologies: ['Architecture', 'Security Strategy', 'Full-Stack', 'SM Identity'],
    status: 'Concept Architecture',
    statusAr: 'مخطط معماري مستقبلي',
    image: '/src/assets/images/sm_project_platform_1794421081096.jpg',
    githubUrl: 'https://github.com/mohamedabual-saud'
  },
  {
    id: 'recon-toolkit',
    title: 'Red Team Recon & Asset Discovery Utility',
    titleAr: 'أداة الاستطلاع واكتشاف الأصول للفريق الأحمر',
    tagline: 'Automated modular script for passive reconnaissance & asset mapping',
    taglineAr: 'سكربت نمطي مؤتمت للاستطلاع غير الفعال وتخطيط الأصول',
    description: 'A personal research tool developed in Python and Bash to streamline the initial reconnaissance phase of authorized penetration tests. Collects open-source metadata, enumerates endpoints, and organizes targets systematically.',
    descriptionAr: 'أداة بحثية شخصية طُوّرت بلغة بايثون وباش لتسريع وتسهيل مرحلة الاستطلاع الأولي أثناء اختبارات الاختراق المصرح بها، مع تنظيم الأهداف والبيانات بدقة.',
    technologies: ['Python', 'Bash', 'OSINT', 'Linux CLI'],
    status: 'In Development',
    statusAr: 'قيد التطوير الفعلي',
    image: '/src/assets/images/redteam_pentest_lab_1794421081258.jpg',
    githubUrl: 'https://github.com/mohamedabual-saud'
  },
  {
    id: 'web-vuln-auditor',
    title: 'Web Header & Security Misconfiguration Auditor',
    titleAr: 'أداة تدقيق ترويسات الويب وعيوب التهيئة الأمنية',
    tagline: 'Targeted analyzer inspecting HTTP response headers and SSL posture',
    taglineAr: 'أداة فحص متخصصة لتحليل ترويسات الاستجابة وضبط الحماية والتشفير',
    description: 'Built with PHP and Python to examine web applications for common security omissions: missing HSTS, CSP misconfigurations, clickjacking vulnerability headers, and exposed server versions.',
    descriptionAr: 'أداة بُنيت بواسطة PHP وبايثون لفحص تطبيقات الويب واكتشاف الأخطاء الشائعة: غياب HSTS، وعيوب CSP، وضعف الحماية من Clickjacking، وتسريب إصدارات الخوادم.',
    technologies: ['PHP', 'Python', 'HTTP Headers', 'Web Security'],
    status: 'Research Tool',
    statusAr: 'أداة بحثية عملية',
    image: '/src/assets/images/blueteam_soc_defense_1794421082094.jpg',
    githubUrl: 'https://github.com/mohamedabual-saud'
  }
];

export const knowledgeTopics: KnowledgeTopic[] = [
  {
    id: 'cyber-fundamentals',
    title: 'Demystifying Ethical Hacking',
    titleAr: 'تبسيط مفاهيم القرصنة الأخلاقية',
    summary: 'Breaking down the difference between malicious hacking and authorized penetration testing, explaining the ethics, methodology, and mindset needed in modern cybersecurity.',
    summaryAr: 'شرح الفرق الجوهري بين الاختراق التخريبي واختبار الاختراق المصرح به، وتوضيح أخلاقيات المهنة ومنهجيات التفكير اللازمة.',
    category: 'Cybersecurity Learning',
    categoryAr: 'تعليم الأمن السيبراني'
  },
  {
    id: 'linux-essentials',
    title: 'Linux for Cybersecurity Enthusiasts',
    titleAr: 'لينكس للمهتمين بالأمن الرقمي',
    summary: 'Essential command-line skills, file permission structures, bash pipe wizardry, and how to configure a productive terminal workspace for security research.',
    summaryAr: 'أهم مهارات سطر الأوامر، وهياكل أذونات الملفات، واستخدام خطوط الأنابيب (Pipes)، وتهيئة بيئة طرفية منتجة للأبحاث الأمنية.',
    category: 'Linux & Networking',
    categoryAr: 'لينكس والشبكات'
  },
  {
    id: 'web-defenses',
    title: 'Understanding Common Web Vulnerabilities',
    titleAr: 'فهم الثغرات الشائعة في مواقع الويب',
    summary: 'Explaining SQL injection, Cross-Site Scripting (XSS), and flawed authentication in simple, visual terms so junior developers can build safer software.',
    summaryAr: 'شرح حقن SQL، وثغرات XSS، وعيوب التوثيق بأسلوب مبسط وعملي لمساعدة المطورين المبتدئين في كتابة كود برمجية أكثر أماناً.',
    category: 'Web Security',
    categoryAr: 'أمن تطبيقات الويب'
  },
  {
    id: 'networking-core',
    title: 'How Data Travels: The TCP/IP Journey',
    titleAr: 'كيف تنتقل البيانات: رحلة حزم TCP/IP',
    summary: 'A step-by-step visual exploration of packet flow, routing decisions, DNS lookups, and port mechanics that make the worldwide web operate.',
    summaryAr: 'استكشاف بصري تفاعلي لحركة الحزم، وقرارات التوجيه، واستعلامات خوادم DNS، وآليات عمل المنافذ التي تقوم عليها الشبكة العالمية.',
    category: 'Networking',
    categoryAr: 'أسس الشبكات'
  },
  {
    id: 'digital-hygiene',
    title: 'Everyday Digital Privacy & Hygiene',
    titleAr: 'الخصوصية والأمان الرقمي اليومي',
    summary: 'Practical guidance for students, families, and professionals on defending against phishing scams, using strong multi-factor authentication, and securing devices.',
    summaryAr: 'إرشادات عملية للطلاب والأسر والمهنيين للحماية من رسائل الاحتيال، واستخدام التوثيق متعدد العوامل، وتأمين الأجهزة الشخصية.',
    category: 'Security Awareness',
    categoryAr: 'التوعية الأمنية'
  },
  {
    id: 'curated-roadmaps',
    title: 'Curated Roadmaps for Young Learners',
    titleAr: 'خرائط طريق موجهة للمتعلمين الشباب',
    summary: 'Honest resources, free high-quality tutorials, and practice platforms for aspiring students starting their cybersecurity journey without expensive prerequisites.',
    summaryAr: 'دليل صادق للمصادر المجانية عالية الجودة ومنصات التدريب العملي المتاحة للشباب الراغبين في دخول مجال الأمن السيبراني دون تكاليف باهظة.',
    category: 'Learning Resources',
    categoryAr: 'مصادر التعلم'
  }
];

export const ambitionsList = [
  {
    en: 'Become an elite penetration tester with deep offensive capabilities',
    ar: 'الوصول إلى مستوى احترافي رفيع في اختبار الاختراق والعمليات الهجومية'
  },
  {
    en: 'Master Red Team operations and advanced adversary simulation',
    ar: 'إتقان عمليات الفريق الأحمر ومحاكاة التهديدات المتقدمة'
  },
  {
    en: 'Deepen Blue Team knowledge to understand defense-in-depth comprehensively',
    ar: 'تعميق المعرفة بعمليات الفريق الأزرق لفهم الدفاع المتكامل والشامل'
  },
  {
    en: 'Engineer practical cybersecurity tools and open-source security utilities',
    ar: 'برمجة أدوات أمان عملية ونافعة للمجتمع البرمجي المفتوح'
  },
  {
    en: 'Attain world-class recognized industry credentials (such as CEH, eJPT, and OSCP)',
    ar: 'الحصول مستقبلاً على أبرز الشهادات العالمية المعتمدة مثل CEH وeJPT وOSCP'
  },
  {
    en: 'Empower the youth learning community through accessible technical content',
    ar: 'إلهام مجتمع الطلاب والمبتدئين من خلال محتوى تقني واضح ومجاني'
  },
  {
    en: 'Establish and lead SM as a premier future cybersecurity enterprise',
    ar: 'تأسيس وقيادة شركة SM ككيان ريادي مستقبلي في أمن المعلومات والتقنية'
  },
  {
    en: 'Continuously expand boundaries through relentless curiosity and discipline',
    ar: 'الاستمرار الدائم في التطور والتعلم بدافع الشغف والانضباط'
  }
];
