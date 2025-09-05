const complianceContent = {
  "information-security-policy": {
    title: "Information Security Policy",
    banner: [
      {
        heading: "Information Security Policy",
        para: "In alignment with the Commonwealth of Virginia’s Information Security Standard SEC-530-01.2, our Security Policy Management as a Service clearly defines the essential governance roles and accountabilities that support a robust security posture:",
        button: false,
        pricingView: false,
      },
    ],
    mainSection: [
      {
        heading: "Information Security Policy",
        content:
          "This section establishes a base standard for information security and risk management across the agency. Drawing from NIST SP 800-53 Rev. 5, it defines baseline expectations for protecting confidentiality, integrity, and availability. Agencies must meet or exceed these baselines and may then tailor and document controls to suit their environment and sensitivity of their systems and data.",
        quote:
          "Agencies are required to develop, document, and enforce an information security program that aligns with SEC530 Information Security Standard. Exceptions may only be granted with proper justification, mitigation, and approval.",
        image: "/images/security.jpeg",
      },
    ],
    subSection: [
      {
        heading: "Information Security Program Objectives",
        content:
          "Key objectives include defining clear roles and responsibilities, establishing and maintaining the security program, managing exceptions appropriately, and identifying exemptions where applicable.",
        list: [
          "Define Roles & Responsibilities",
          "Establish and Enforce the Security Program",
          "Manage Exceptions and Document Mitigations",
        ],
      },
      {
        heading: "Access Control Policy",
        content:
          "Agencies must document and implement access control procedures. This includes account management, timely disabling of unused accounts, audits, and monitoring. Shared accounts are prohibited, and privileged access must be restricted and documented.",
      },
      {
        heading: "Security Control Framework",
        content:
          "The Information Security Standard is based on 17 control families, such as Access Control, Incident Response, Awareness and Training, and Supply Chain Risk Management. Each control includes baseline requirements and optional enhancements to strengthen security as needed.",
        list: [
          {
            heading: "Risk & Classification",
            content:
              "Agencies must conduct Business Impact Analyses (BIAs), classify systems and data, and document results in the eGRC system. Sensitive systems require additional oversight.",
          },
          {
            heading: "Assessment & Audits",
            content:
              "Risk assessments must be conducted every three years, with annual self-assessments, and sensitive systems audited independently according to SEC502 requirements.",
          },
          {
            heading: "Roles & Governance",
            content:
              "Agency Heads, CIOs, CISOs, and ISOs each have specific duties in overseeing security, enforcing compliance, and maintaining accountability.",
          },
          {
            heading: "Program Enforcement",
            content:
              "Documented programs, exception processes, and control tailoring ensure agencies meet statewide requirements while managing operational risk effectively.",
          },
        ],
      },
    ],
  },

//   2) Information Security Policy: Roles & Responsibilities
"roles-and-responsibilities": {
  title: "Information Security Policy: Roles & Responsibilities",
  banner: [
    {
      heading: "Roles and Responsibilities",
      para: "In alignment with the Commonwealth of Virginia’s Information Security Standard SEC-530-01.2, our Security Policy Management as a Service clearly defines the essential governance roles and accountabilities that support a robust security posture:",
      button: false,
      pricingView: false,
    },
  ],
  mainSection: [ {
      heading: "Information Security Policy: Roles & Responsibilities",
      content:
        "This section defines the key IT security roles and responsibilities within the Commonwealth’s Information Security Program. Individuals may hold multiple roles— as long as separation of duties is maintained to prevent conflicts of interest or fraud.",
      quote:
        "Each agency should utilize an organization chart that depicts the reporting structure… and shall maintain documentation regarding specific roles and responsibilities relating to information security.",
      image: "/images/vita1.webp",
    },
  ],

  subSection: [
    {
      heading: "Chief Information Officer of the Commonwealth (CIO)",
      content:
        "The CIO directs the development of policies, procedures, and standards for assessing security risks, determining appropriate measures, and performing security audits of government electronic information.",
    },
    {
      heading: "Chief Information Security Officer (CISO)",
      content:
        "The CISO administers the Commonwealth’s Information Security Program, reviews exceptions, provides guidance and expertise, monitors sensitive system security status, and facilitates implementation of security policies and education.",
    },
    {
      heading: "Agency Head",
      content:
        "The Agency Head holds responsibility for the agency’s IT system and data security.",
      list: [
        "Designate an Information Security Officer (ISO) at least biennially, reporting directly to the Agency Head.",
        "Ensure the information security program is maintained and communicated, and review BIAs, risk assessments, and contingency plans.",
        "Approve or reject System Security Plans for sensitive systems and require corrective measures as needed.",
        "Ensure compliance with IT security audit standards (SEC 502), oversee corrective actions, and report findings to the CISO.",
        "Establish an information security awareness and training program and provide necessary resources.",
        "Assign roles: System Owner, Data Owner, Data Custodian, and System Administrator for each sensitive system.",
      ],
    },
    {
      heading: "Information Security Officer (ISO)",
      content:
        "The ISO’s responsibilities include:",
      list: [
        "Developing and managing the agency’s information security program in line with Commonwealth policies.",
        "Classifying all agency systems and data by sensitivity.",
        "Establishing and maintaining security awareness and training programs for all staff and contractors.",
        "Implementing preventive, detective, and corrective security controls appropriate to system risk and criticality.",
        "Reporting and mitigating security incidents per Virginia law and VITA requirements.",
        "Coordinating with the CISO and completing ISO certification requirements annually.",
      ],
    },
    {
      heading: "System Owner, Data Owner, System Administrator & Other Roles",
      content:
        "Additional responsibilities include:",
      list: [
        "System Owners: Ensure users complete system-specific security training and manage system risk appropriately.",
        "Users: Comply with security requirements, and report breaches or suspected incidents.",
      ],
    },
  ],
},
    // 3) Business Impact Analysis (BIA)
"business-impact-analysis": {
  title: "Business Impact Analysis (BIA)",
  banner: [
    {
      heading: "Business Impact Analysis (BIA)",
      para: "In alignment with the Commonwealth of Virginia’s Information Security Standard SEC-530-01.2, our Security Policy Management as a Service clearly defines the essential governance roles and accountabilities that support a robust security posture:",
      button: false,
      pricingView: false,
    },
  ],
  mainSection: [
    {
      heading: "Business Impact Analysis (BIA)",
      content:
        "A Business Impact Analysis (BIA) identifies essential business functions and the systems and data that support them. It helps agencies understand how the loss or disruption of services impacts confidentiality, integrity, and availability. The results guide risk management, contingency planning, and system classification efforts.",
      quote:
        "Agencies are required to complete and document BIAs for all information systems and business processes, ensuring they are reviewed annually and fully updated every three years.",
      image: "/images/business.webp",
    },
  ],
  subSection: [
    {
      heading: "Core Objectives of a BIA",
      content:
        "The BIA ensures that each agency can define and prioritize essential functions, assess dependencies, and prepare recovery strategies. Outcomes of a BIA feed directly into risk assessments and contingency planning activities.",
      list: [
        "Identify essential business functions and supporting IT systems/data",
        "Assess impacts on confidentiality, integrity, and availability",
        "Define Recovery Time Objectives (RTO) and Recovery Point Objectives (RPO)",
        "Document interdependencies between systems and processes",
        "Align results with risk management and contingency planning",
      ],
    },
    {
      heading: "BIA Review Cycle",
      content:
        "Each agency must review its BIA annually and fully update it every three years. This ensures business functions and supporting systems remain accurately assessed, even as technology and operations evolve. Updated BIAs must be integrated into the Commonwealth’s risk management process.",
    },
    {
      heading: "Why Business Impact Analysis Matters",
      content:
        "A well-executed BIA helps agencies prioritize resources, strengthen resilience, and ensure that critical services remain available during and after disruptions. By identifying vulnerabilities and recovery needs, agencies can plan effectively to protect citizens, data, and mission-essential operations.",
      list: [
        "Identify Critical Functions: Determine which agency functions are essential for mission continuity.",
        "Assess Impact: Evaluate the effects of downtime, data loss, or compromised availability.",
        "Set Recovery Objectives: Establish RTO and RPO targets for essential systems and processes.",
        "Support Risk Management: Integrate BIA results into overall risk assessments and contingency plans.",
      ],
    },
  ],
},
    // 4) IT System and Data Sensitivity Classification
"system-and-data-sensitivity-classification": {
  title: "IT System and Data Sensitivity Classification",
  banner: [
    {
      heading: "IT System and Data Sensitivity Classification",
      para: "In alignment with the Commonwealth of Virginia’s Information Security Standard SEC-530-01.2, our Security Policy Management as a Service clearly defines the essential governance roles and accountabilities that support a robust security posture:",
      button: false,
      pricingView: false,
    },
  ],
  mainSection: [
    {
      heading: "IT System and Data Sensitivity Classification",
      content:
        "System and data sensitivity classification is the process of assigning a sensitivity level to information systems and the data they store, process, or transmit. This ensures that agencies apply appropriate safeguards to protect confidentiality, integrity, and availability in line with business and regulatory requirements.",
      quote:
        "Agencies must classify their IT systems and data based on sensitivity to ensure appropriate security controls are implemented and maintained.",
      image: "/images/data.webp",
    },
  ],
  subSection: [
    {
      heading: "Core Objectives of Sensitivity Classification",
      content:
        "Classification establishes the foundation for system security planning and determines the level of controls necessary to protect agency operations and citizen data. This process also supports risk assessments and compliance efforts.",
      list: [
        "Identify and categorize IT systems and associated data",
        "Assess the impact of loss of confidentiality, integrity, or availability",
        "Assign appropriate sensitivity levels (e.g., Low, Moderate, High)",
        "Ensure alignment with business needs and compliance standards",
        "Integrate results into risk management and security controls",
      ],
    },
    {
      heading: "Sensitivity Classification Levels",
      content:
        "The classification framework typically includes the following levels, each guiding the selection of security measures:",
      list: [
        "Low Sensitivity: Loss has limited adverse impact; minimal disruption to operations.",
        "Moderate Sensitivity: Loss could cause significant disruption or damage to agency functions.",
        "High Sensitivity: Loss would result in severe or catastrophic effects on operations, finances, public trust, or safety.",
      ],
    },
    {
      heading: "Why Sensitivity Classification Matters",
      content:
        "Accurate classification ensures that resources are prioritized for the most critical systems and data. It provides a structured approach to safeguarding sensitive information, maintaining compliance, and reducing risks to mission-essential services.",
    },
  ],
},
    // 4) Sensitive IT System Inventory
"sensitive-it-system-inventory": {
  title: "Sensitive IT System Inventory",
  banner: [
    {
      heading: "Sensitive IT System Inventory",
      para: "In alignment with the Commonwealth of Virginia’s Information Security Standard SEC-530-01.2, our Security Policy Management as a Service clearly defines the essential governance roles and accountabilities that support a robust security posture:",
      button: false,
      pricingView: false,
    },
  ],
  mainSection: [
    {
      heading: "Sensitive IT System Inventory",
      content:
        "Sensitive IT systems are those that process, store, or transmit information essential to an agency’s mission, public safety, or regulatory compliance. Maintaining an accurate inventory of these systems ensures that appropriate security controls are applied and continuously monitored.",
      quote:
        "Agencies are required to identify, define, and maintain an inventory of sensitive IT systems to ensure security measures align with business, legal, and operational requirements.",
      image: "/images/inventory.jpeg",
    },
  ],
  subSection: [
    {
      heading: "Overview of Sensitive IT Systems",
      content:
        "A system is considered sensitive if unauthorized access, disclosure, modification, or loss of availability would cause significant adverse impact to the agency, its stakeholders, or the public.",
      list: [
        "Processes mission-critical or confidential information",
        "Supports essential business or government operations",
        "Handles data regulated by law or compliance requirements",
        "Has high potential impact if compromised or unavailable",
      ],
    },
    {
      heading: "Maintaining a Sensitive System Inventory",
      content:
        "Agencies must document and regularly update an inventory of all sensitive IT systems. This inventory serves as the foundation for risk assessments, security planning, and compliance reporting.",
      list: [
        "System Identification: List all IT systems that process or store sensitive data.",
        "Classification: Define sensitivity level (Low, Moderate, High) based on business impact.",
        "Ownership: Assign business and technical owners accountable for security.",
        "Documentation: Record system details including data types, dependencies, and compliance obligations.",
        "Review & Update: Regularly validate and update inventory to reflect system changes.",
      ],
    },
    {
      heading: "Why Inventory Matters",
      content:
        "An accurate and up-to-date sensitive IT system inventory enables agencies to focus security resources on the most critical assets, comply with state and federal regulations, and minimize risks to operations, reputation, and public trust.",
    },
  ],
},
    // 5) Risk Assessment
"risk-assessment": {
  title: "Risk Assessment",
  banner: [
    {
      heading: "Risk Assessment",
      para: "In alignment with the Commonwealth of Virginia’s Information Security Standard SEC-530-01.2, our Security Policy Management as a Service clearly defines the essential governance roles and accountabilities that support a robust security posture:",
      button: false,
      pricingView: false,
    },
  ],
  mainSection: [
    {
      heading: "Risk Assessment",
      content:
        "Risk assessment is the foundation of information security management. Agencies are required to identify threats, vulnerabilities, and potential impacts to ensure appropriate security controls are in place. This process aligns business objectives with security measures, reducing the likelihood and severity of incidents.",
      quote:
        "Agencies must conduct regular risk assessments to identify, evaluate, and prioritize risks to IT systems and data, ensuring decisions are based on business impact and security requirements.",
      image: "/images/risk.jpg",
    },
  ],
  subSection: [
    {
      heading: "Key Components of Risk Assessment",
      list: [
        "Asset Identification: Recognize critical systems, applications, and data.",
        "Threat Identification: Determine potential sources of harm (internal or external).",
        "Vulnerability Analysis: Identify weaknesses that could be exploited.",
        "Impact Assessment: Evaluate the potential business, legal, and operational impact.",
        "Risk Determination: Measure likelihood and severity to assign a risk level.",
      ],
    },
    {
      heading: "Risk Assessment Process",
      list: [
        "Preparation: Define scope, stakeholders, and methodology for assessment.",
        "Data Collection: Gather information about assets, threats, and vulnerabilities.",
        "Analysis: Evaluate risk likelihood and impact using qualitative or quantitative methods.",
        "Mitigation Planning: Develop risk treatment strategies: avoid, transfer, mitigate, or accept risk.",
        "Documentation & Review: Record results and ensure assessments are reviewed periodically.",
      ],
    },
    {
      heading: "Why Risk Assessment Matters",
      content:
        "By systematically identifying and analyzing risks, agencies can focus resources on the most critical threats, reduce exposure to cyberattacks, and ensure compliance with legal and regulatory obligations. Risk assessments also strengthen incident response planning and improve overall resilience.",
    },
  ],
},
    // 6) IT Security Audits
"it-security-audits": {
  title: "IT Security Audits",
  banner: [
    {
      heading: "IT Security Audits",
      para: "In alignment with the Commonwealth of Virginia’s Information Security Standard SEC-530-01.2, our Security Policy Management as a Service clearly defines the essential governance roles and accountabilities that support a robust security posture:",
      button: false,
      pricingView: false,
    },
  ],
  mainSection: [
    {
      heading: "IT Security Audits",
      content:
        "IT Security Audits are independent reviews required by the Commonwealth to evaluate how well agencies protect sensitive systems. They measure compliance with SEC 530 and SEC 502 standards, ensuring security policies, procedures, and technical safeguards are being followed.",
      quote:
        "Each agency shall ensure that an IT security audit of all sensitive systems is conducted every three years in accordance with the Commonwealth’s security audit standard (SEC 502). All findings must be documented and corrective actions tracked until resolution.",
      image: "/images/vita1.webp",
    },
  ],
  subSection: [
    {
      heading: "Objectives of IT Security Audits",
      list: [
        "Verify compliance with Commonwealth security policies, standards, and laws.",
        "Identify risks, vulnerabilities, or non-compliance within sensitive systems.",
        "Evaluate the effectiveness of technical, operational, and management controls.",
        "Confirm corrective actions from previous audits are fully implemented.",
        "Provide assurance to agency leadership and the CISO that systems are safeguarded.",
      ],
    },
    {
      heading: "Agency Responsibilities",
      list: [
        "Ensuring sensitive systems are audited at least once every three years.",
        "Maintaining updated Risk Assessments, BIAs, and Contingency Plans for review.",
        "Developing and implementing corrective action plans for all audit findings.",
        "Reporting audit results and progress on corrective actions to the Commonwealth’s CISO.",
      ],
    },
    {
      heading: "Corrective Action & Compliance Tracking",
      content:
        "Following an IT security audit, agencies must track, document, and report corrective actions until all findings are resolved. Progress must be regularly communicated to the CISO to ensure compliance and continuous improvement of the Commonwealth’s security posture.",
    },
  ],
},
// 7) Security Control Catalogue

"security-controls-catalog": {
  title: "Security Controls Catalog",
  banner: [
    {
      heading: "Security Controls Catalog",
      para: "In alignment with the Commonwealth of Virginia’s Information Security Standard SEC-530-01.2, our Security Policy Management as a Service clearly defines the essential governance roles and accountabilities that support a robust security posture:",
      button: false,
      pricingView: false,
    },
  ],
  mainSection: [
    {
      heading: "Security Controls Catalog",
      content:
        "The Commonwealth’s Information Security Standard (SEC-530) defines a catalog of security controls organized into families. Each control contains a statement, a discussion to explain intent, and possible enhancements for higher-risk or sensitive systems.",
      quote:
        "Security controls described in this standard are organized into families. Each family contains controls related to the same security functionality.",
      image: "/images/catalog.jpeg",
    },
  ],
  subSection: [
    {
    //   heading: "Objectives of IT Security Audits",
      catalog: [
        {
            heading: "Access Control (AC)",
            content:
            "Controls that limit access to systems, applications, and data to authorized users and processes, including account management, least privilege, and session controls.",
        },
        {
            heading: "Awareness and Training (AT)",
            content:
            "Controls to ensure all personnel receive appropriate security and privacy training, promoting awareness of risks and responsibilities.",
        },
        {
            heading: "Audit and Accountability (AU)",
            content:
            "Controls for creating, protecting, reviewing, and analyzing audit logs to ensure accountability for user and system activities.",
        },
        {
            heading: "Assessment, Authorization, and Monitoring (CA)",
            content:
            "Controls for security assessments, system authorizations, continuous monitoring, and vulnerability management.",
        },
        {
            heading: "Configuration Management (CM)",
            content:
            "Controls for establishing baselines, monitoring configuration changes, and enforcing secure settings to prevent unauthorized changes.",
        },
        {
            heading: "Contingency Planning (CP)",
            content:
            "Controls to ensure agencies can respond to and recover from disruptions, including disaster recovery and business continuity planning.",
        },
        {
            heading: "Identification and Authentication (IA)",
            content:
            "Controls requiring unique identification and robust authentication methods for users, devices, and processes before granting system access.",
        },
        {
            heading: "Incident Response (IR)",
            content:
            "Controls for establishing, training, and testing an incident response capability to detect, report, and recover from incidents.",
        },
    ]
}
,{
    heading: "Sample Control: Access Control (AC-2)",
      list: [
        "Define allowed account types and assign account managers.",
        "Require approval for creating accounts and promptly disable accounts when users leave.",
        "Review all accounts at least annually.",
        "Implement enhancements such as automated account management and disabling inactive accounts.",
      ],
    },
    {
      heading: "Structure of Controls",
      content: "",
      list: [
          {
            heading: "Control :",
            content:
              "The requirement statement.",
          },
          {
            heading: "Discussion :",
            content:
              "Explanation and intent of the control.",
          },
          {
            heading: "Control Enhancements :",
            content:
              "Additional or stronger requirements for sensitive systems.",
          },
         
        ],
    },
    
  ],
},
    // 7) SEC 540 — Data Classifications
"sec-540-data-classifications": {
  title: "SEC 540 — Data Classifications",
  banner: [
    {
      heading: "SEC 540 — Data Classifications",
      para: "The Data Classification Standard (SEC 540) sets the baseline for how agencies across the Commonwealth of Virginia (COV) classify and protect information. Each Agency Head is responsible for safeguarding electronic data in line with the Code of Virginia (§2.2-603.F and §2.2-2009). Agencies must also comply with any federal regulations tied to the type of information they handle such as HIPAA, FERPA, IRS 1075, PCI, CJIS, and others.",
      button: false,
      pricingView: false,
    },
  ],
  mainSection: [
    {
      heading: "Why It Matters",
      content:
        "",
        list:[
            "This standard provides a framework to:",
            "- Identify the type of data an agency uses." , 
            "Separate data classification from sensitivity classification.",
            " Ensure information is managed in a way that protects confidentiality, integrity, and availability.",
            " Meet legal, regulatory, and business requirements."
        ],
      image: "/images/vita11.webp",
    },
  ],
  subSection: [
    {
      heading: "Who It Applies To",
      list: [
        "All employees, contractors, consultants, and third-party partners who create, manage, store, transmit, or access organizational data.",
        "All formats — digital, paper, or otherwise.",
        "COV agencies must also enforce compliance when data is processed by third-party providers.",
      ],
    },
    {
      heading: "How Data is Classified",
      list: [
        "Confidentiality: What happens if unauthorized access occurs?",
        "Regulatory needs: Is the data subject to HIPAA, PCI, or other requirements?",
        "Business impact: Could disclosure cause financial loss or reputational harm?",
        "Access needs: Who inside or outside the agency needs access?",
      ],
    },
    {
      heading: "Classification Labels",
      list: [
        "Every dataset must carry a clear label that identifies:",
        "How it can be used and shared.",
        "Whether regulatory compliance applies.",
        "Sensitivity or special handling requirements.",
        "Retention period and disposal guidelines.",
      ],
    },
  ],
},








  // 2) IT System and Data Sensitivity Classification
//   "it-system-and-data-sensitivity-classification": {
//     title: "IT System and Data Sensitivity Classification",
//     banner: [
//       {
//         heading: "IT System and Data Sensitivity Classification",
//         para: "System and data sensitivity classification ensures that agencies apply appropriate safeguards to protect confidentiality, integrity, and availability in line with business and regulatory requirements.",
//         button: false,
//         pricingView: false,
//       },
//     ],
//     mainSection: [
//       {
//         heading: "System and Data Sensitivity Classification",
//         content:
//           "System and data sensitivity classification is the process of assigning a sensitivity level to information systems and the data they store, process, or transmit. This ensures that agencies apply appropriate safeguards to protect confidentiality, integrity, and availability in line with business and regulatory requirements.",
//         quote:
//           "Agencies must classify their IT systems and data based on sensitivity to ensure appropriate security controls are implemented and maintained. — SEC 530 Standard",
//         image: "/images/classification.png",
//       },
//     ],
//     subSection: [
//       {
//         heading: "Core Objectives of Sensitivity Classification",
//         list: [
//           "Identify and categorize IT systems and associated data",
//           "Assess the impact of loss of confidentiality, integrity, or availability",
//           "Assign appropriate sensitivity levels (e.g., Low, Moderate, High)",
//           "Ensure alignment with business needs and compliance standards",
//           "Integrate results into risk management and security controls",
//         ],
//       },
//       {
//         heading: "Sensitivity Classification Levels",
//         list: [
//           {
//             heading: "Low Sensitivity",
//             content:
//               "Loss has limited adverse impact; minimal disruption to operations.",
//           },
//           {
//             heading: "Moderate Sensitivity",
//             content:
//               "Loss could cause significant disruption or damage to agency functions.",
//           },
//           {
//             heading: "High Sensitivity",
//             content:
//               "Loss would result in severe or catastrophic effects on operations, finances, public trust, or safety.",
//           },
//         ],
//       },
//       {
//         heading: "Why Sensitivity Classification Matters",
//         content:
//           "Accurate classification ensures that resources are prioritized for the most critical systems and data. It provides a structured approach to safeguarding sensitive information, maintaining compliance, and reducing risks to mission-essential services.",
//       },
//     ],
//   },

  // 3) Business Impact Analysis (BIA)
//   "business-impact-analysis": {
//     title: "Business Impact Analysis (BIA)",
//     banner: [
//       {
//         heading: "Business Impact Analysis (BIA)",
//         para: "A Business Impact Analysis (BIA) identifies essential business functions and the systems and data that support them, helping agencies prepare for disruptions and maintain resilience.",
//         button: false,
//         pricingView: false,
//       },
//     ],
//     mainSection: [
//       {
//         heading: "Business Impact Analysis (BIA)",
//         content:
//           "A Business Impact Analysis (BIA) identifies essential business functions and the systems and data that support them. It helps agencies understand how the loss or disruption of services impacts confidentiality, integrity, and availability. The results guide risk management, contingency planning, and system classification efforts.",
//         quote:
//           "Agencies are required to complete and document BIAs for all information systems and business processes, ensuring they are reviewed annually and fully updated every three years. — SEC 530 Standard",
//         image: "/images/bia.png",
//       },
//     ],
//     subSection: [
//       {
//         heading: "Core Objectives of a BIA",
//         list: [
//           "Identify essential business functions and supporting IT systems/data",
//           "Assess impacts on confidentiality, integrity, and availability",
//           "Define Recovery Time Objectives (RTO) and Recovery Point Objectives (RPO)",
//           "Document interdependencies between systems and processes",
//           "Align results with risk management and contingency planning",
//         ],
//       },
//       {
//         heading: "BIA Review Cycle",
//         content:
//           "Each agency must review its BIA annually and fully update it every three years. This ensures business functions and supporting systems remain accurately assessed, even as technology and operations evolve. Updated BIAs must be integrated into the Commonwealth’s risk management process.",
//       },
//       {
//         heading: "Why Business Impact Analysis Matters",
//         list: [
//           {
//             heading: "Identify Critical Functions",
//             content:
//               "Determine which agency functions are essential for mission continuity.",
//           },
//           {
//             heading: "Assess Impact",
//             content:
//               "Evaluate the effects of downtime, data loss, or compromised availability.",
//           },
//           {
//             heading: "Set Recovery Objectives",
//             content:
//               "Establish RTO and RPO targets for essential systems and processes.",
//           },
//           {
//             heading: "Support Risk Management",
//             content:
//               "Integrate BIA results into overall risk assessments and contingency plans.",
//           },
//         ],
//       },
//     ],
//   },

  // 4) Sensitive IT System Inventory
//   "sensitive-it-system-inventory": {
//     title: "Sensitive IT System Inventory",
//     banner: [
//       {
//         heading: "Sensitive IT System Inventory",
//         para: "Sensitive IT systems are those that process, store, or transmit information essential to an agency’s mission, public safety, or regulatory compliance.",
//         button: false,
//         pricingView: false,
//       },
//     ],
//     mainSection: [
//       {
//         heading: "Sensitive IT System Inventory",
//         content:
//           "Sensitive IT systems are those that process, store, or transmit information essential to an agency’s mission, public safety, or regulatory compliance. Maintaining an accurate inventory of these systems ensures that appropriate security controls are applied and continuously monitored.",
//         quote:
//           "Agencies are required to identify, define, and maintain an inventory of sensitive IT systems to ensure security measures align with business, legal, and operational requirements. — SEC 530 Standard",
//         image: "/images/sensitive-systems.png",
//       },
//     ],
//     subSection: [
//       {
//         heading: "Overview of Sensitive IT Systems",
//         list: [
//           "Processes mission-critical or confidential information",
//           "Supports essential business or government operations",
//           "Handles data regulated by law or compliance requirements",
//           "Has high potential impact if compromised or unavailable",
//         ],
//       },
//       {
//         heading: "Maintaining a Sensitive System Inventory",
//         list: [
//           "System Identification: List all IT systems that process or store sensitive data.",
//           "Classification: Define sensitivity level (Low, Moderate, High) based on business impact.",
//           "Ownership: Assign business and technical owners accountable for security.",
//           "Documentation: Record system details including data types, dependencies, and compliance obligations.",
//           "Review & Update: Regularly validate and update inventory to reflect system changes.",
//         ],
//       },
//       {
//         heading: "Why Inventory Matters",
//         content:
//           "An accurate and up-to-date sensitive IT system inventory enables agencies to focus security resources on the most critical assets, comply with state and federal regulations, and minimize risks to operations, reputation, and public trust.",
//       },
//     ],
//   },


};

export default complianceContent;
