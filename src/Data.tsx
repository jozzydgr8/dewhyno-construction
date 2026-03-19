import {TrophyOutlined, BuildOutlined,CalculatorOutlined, 
  ClockCircleOutlined, MessageOutlined, SafetyCertificateOutlined} from '@ant-design/icons';
  import demoImage from './assets/catimage.jpg'

  const color = {
    navyDark:'#0B1F3B',
    navy:'#122C54',
    gold:'#B68A2A'
  }

  const reasonIcon = {
    fontSize:'30px',
    color:"white",
    padding:'15px',
    borderRadius:'15px'
  }
export const reasonList = [
  {
    "icon":<SafetyCertificateOutlined style={{background:color.navyDark,...reasonIcon }}/>,
    "title": "Well Planned Projects",
    "description": "From initial blueprints to final execution, every project phase is carefully planned to ensure structural integrity and quality outcomes."
  },
  {
    "icon":<BuildOutlined style={{background:'green',...reasonIcon}}/>,
    "title": "Safety First Approach",
    "description": "Site safety is non-negotiable. We maintain strict safety protocols and professional standards throughout every construction phase."
  },
  {
    "icon":<ClockCircleOutlined style={{background:color.gold,...reasonIcon}}/>,
    "title": "On-Time Delivery",
    "description": "We respect your timeline. Our project management ensures milestones are met and construction is completed within agreed schedules."
  },
  {
    "icon":<MessageOutlined style={{background:'purple',...reasonIcon}}/>,
    "title": "Transparent Communication",
    "description": "Stay informed at every stage. We provide regular updates, clear documentation, and open communication throughout your project."
  },
  {
    "icon":<TrophyOutlined style={{background:'orange',...reasonIcon}}/>,
    "title": "Quality Workmanship",
    "description": "We take pride in delivering structurally sound buildings with attention to detail and high standards of professional craftsmanship."
  },
  {
    "icon":<CalculatorOutlined style={{background:color.navy,...reasonIcon}}/>,
    "title": "Budget Conscious",
    "description": "We work within your budget constraints while maintaining quality standards. No hidden costs, just transparent pricing and value delivery."
  }
]



export const serviceList = [
    {
      "image":demoImage,
      "title": "Building Construction",
      "description": "We deliver residential, commercial, and institutional buildings using modern construction methods and quality materials."
    },
    {
      "image":demoImage,
      "title": "Building Design",
      "description": "Our building design service focuses on creating functional, aesthetic, and sustainable architectural plans for residential and commercial projects."
    },
    {
      "image":demoImage,
      "title": "Estimation & Bill of Quantities",
      "description": "We offer accurate cost estimation and detailed bills of quantities to help plan and manage construction budgets effectively."
    },
    {
      "image":demoImage,
      "title": "Civil Engineering Services",
      "description": "Our civil engineering services include concrete works, drainage systems, road works and infrastructure development."
    },
    {
      "image":demoImage,
      "title": "Project Management",
      "description": "We Provide end-to-end project management services ensuring cost control, quality assurance, and timely delivery."
    },
    {
      "image":demoImage,
      "title": "Renovation & Remodeling",
      "description": "We transform existing structures through professional renovation and remodelling solutions."
    },
    {
      "image":demoImage,
      "title": "Construction Consultancy & Supervision",
      "description": "Expert advisory and supervision services to ensure compliance with specifications and industry standards."
    }
  ]
