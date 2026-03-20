import {TrophyOutlined, BuildOutlined,CalculatorOutlined, 
  SafetyCertificateTwoTone,TeamOutlined, 
  ClockCircleOutlined, MessageOutlined, SafetyCertificateOutlined, PhoneFilled,EnvironmentFilled,MailFilled} from '@ant-design/icons';
  import constructionImage from './assets/foundation.jpg';
  import consultantImage from './assets/consulant.jpg';
  import civilImage from './assets/civil_engineering.jpg';
  import balanceImage from './assets/balance.jpg';
  import projectImage from './assets/projectmanagement.jpg';
  import renovationImage from './assets/renovation.jpg'

  const color = {
    navyDark:'#0B1F3B',
    navy:'#122C54',
    gold:'#B68A2A'
  }

  const featureIcon={
    color:'white',
    fontWeight:'900',
    fontSize:'40px',

  }
  const reasonIcon = {
    fontSize:'27px',
    color:"white",
    padding:'15px',
    borderRadius:'15px'
  }
  

export const reasonList = [
  {
    icon: <TrophyOutlined style={{ background: color.navyDark, ...reasonIcon }} />,
    title: "Experienced leadership and skilled professionals",
    description:
      "Our team is led by experienced professionals who bring deep industry knowledge and hands-on expertise to deliver high-quality construction projects."
  },
  {
    icon: <SafetyCertificateOutlined style={{ background: 'green', ...reasonIcon }} />,
    title: "Strict quality & safety standards",
    description:
      "We enforce rigorous safety protocols and quality control measures to ensure every project meets industry standards and protects everyone on site."
  },
  {
    icon: <ClockCircleOutlined style={{ background: color.gold, ...reasonIcon }} />,
    title: "Timely and cost-effective delivery",
    description:
      "Through efficient planning and project management, we deliver projects on schedule while optimizing costs without compromising quality."
  },
  {
    icon: <MessageOutlined style={{ background: 'purple', ...reasonIcon }} />,
    title: "Client-focused approach",
    description:
      "We prioritize clear communication and transparency, keeping you informed and involved at every stage of the construction process."
  },
  {
    icon: <BuildOutlined style={{ background: 'orange', ...reasonIcon }} />,
    title: "Compliance with industry regulations",
    description:
      "All our projects strictly adhere to local building codes and regulatory requirements, ensuring safe, legal, and reliable structures."
  },
  {   "icon":<CalculatorOutlined style={{background:color.navy,...reasonIcon}}/>,
      "title": "Budget Conscious",
      "description": "We work within your budget constraints while maintaining quality standards. No hidden costs, just transparent pricing and value delivery."
   }
];



export const serviceList = [
    {
      image: constructionImage,
      title: "Building Design & Construction",
      description:
        "We handle both design and construction, delivering functional, modern, and durable buildings from concept to completion."
    },
    {
      "image":balanceImage,
      "title": "Estimation & Bill of Quantities",
      "description": "We offer accurate cost estimation and detailed bills of quantities to help plan and manage construction budgets effectively."
    },
    {
      "image":civilImage,
      "title": "Civil Engineering Services",
      "description": "Our civil engineering services include concrete works, drainage systems, road works and infrastructure development."
    },
    {
      "image":projectImage,
      "title": "Project Management",
      "description": "We Provide end-to-end project management services ensuring cost control, quality assurance, and timely delivery."
    },
    {
      "image":renovationImage,
      "title": "Renovation & Remodeling",
      "description": "We transform existing structures through professional renovation and remodelling solutions."
    },
    {
      "image":consultantImage,
      "title": "Construction Consultancy & Supervision",
      "description": "Expert advisory and supervision services to ensure compliance with specifications and industry standards."
    }
  ]


  export const processList = [
  {
    step: 1,
    title: "Initial Consultation & Assessment",
    color: "#1A3A6B",
    description:
      "We meet to understand your vision, requirements, and budget. Our team conducts a thorough site assessment and provides expert recommendations."
  },
  {
    step: 2,
    title: "Planning & Design",
    color: "red",
    description:
      "Detailed project planning, architectural drawings, and cost estimates are prepared. We ensure all plans meet structural requirements and your expectations."
  },
  {
    step: 3,
    title: "HSE (Health, Safety & Environment)",
    color: "orange",
    description:
      "We implement strict health, safety, and environmental policies to protect workers, clients, and the environment throughout every phase of the project."
  },
  {
    step: 4,
    title: "Construction Execution",
    color: "#122C54",
    description:
      "Our skilled team brings your project to life with professional workmanship, strict safety protocols, and regular progress updates throughout construction."
  },
  {
    step: 5,
    title: "Quality Inspection & Handover",
    color: "green",
    description:
      "Final inspections ensure everything meets our quality standards and your requirements. We hand over a completed project ready for occupancy."
  }
];

 export const contactInfo = [
  {
    icon: <PhoneFilled style={{...reasonIcon}}/>,
    label: "Call us directly",
    value:<a href="tel:+2348080548331">+234 808 054 8331</a>
  },
  {
    icon: <MailFilled style={{...reasonIcon}}/>,
    label: "Email us anytime",
    value: <a href="mailto:info@dewhynoconstruction.ng">info@dewhynoconstruction.ng</a>
  },
  {
    icon: <EnvironmentFilled style={{...reasonIcon}}/>,
    label: "Visit our office",
    value: "portharcourt, Nigeria"
  }
];

export const ctaFeaturesList = [
  { id: 1, text: "Quality Commitment", icon:<h1 style={{...featureIcon}}>100%</h1> },
  { id: 2, text: "Expert Team", icon:<TeamOutlined style={{...featureIcon}}/> },
  { id: 3, text: "Safety Standards",icon:<SafetyCertificateTwoTone style={{...featureIcon}}/> },
  { id: 4, text: "Professional Service", icon:<TrophyOutlined style={{...featureIcon}}/> }
];