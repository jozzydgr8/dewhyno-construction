import {TrophyOutlined, BuildOutlined,CalculatorOutlined, 
  ClockCircleOutlined, MessageOutlined, SafetyCertificateOutlined} from '@ant-design/icons';

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