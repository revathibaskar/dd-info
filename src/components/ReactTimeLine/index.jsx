import React from "react"
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import './index.css'

  const ReactTimeLine = () => {
    
    return (
<div className="react">
 <VerticalTimeline lineColor="gray">
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'black', color: '#CEA57B',border:'0.1em solid #CEA57B'}}
    contentArrowStyle={{ borderRight: '7px solid #CEA57B' }}
    iconStyle={{ background: '#CEA57B', height:'60px',width:'60px', boxShadow: 'none' 
    }}

  >
    <h3 style={{fontSize:'28px'}}>Fast Executions  <span style={{fontSize:'40px'}}> 01</span></h3>
    <p style={{color:'#BDBDBD', fontSize:'18px'}}>
     We Complete The Project In Very Short Time With Best Quality.
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
   contentStyle={{backgroundColor:'black',color:'#CEA57B',border:'0.1em solid #CEA57B'}}
    iconStyle={{ background: '#CEA57B', height:'60px',width:'60px', boxShadow: 'none', right:'0px'}}
    contentArrowStyle={{ borderRight: '7px solid #CEA57B' }}
   
  >
    <h3  style={{fontSize:'28px'}}><span style={{fontSize:'40px'}}>02   </span>Guide & Support</h3>
    <p style={{color:'#BDBDBD',fontSize:'18px'}}>
     We complete the project of the planned cost without any hidden fees and give their client.
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{backgroundColor:'black',color:'#CEA57B',border:'0.1em solid #CEA57B'}}
    iconStyle={{ background: '#CEA57B', height:'60px',width:'60px', boxShadow: 'none'}}
    contentArrowStyle={{ borderRight: '7px solid #CEA57B' }}
    
  >
    <h3  style={{fontSize:'28px'}}>Financial Secure <span style={{fontSize:'40px'}}>03</span> </h3>
    <p style={{color:'#BDBDBD',fontSize:'18px'}}>
    We Complete The Project At The Planned Cost Without Any Hidden Fees And Give Their Client.
    </p>
  </VerticalTimelineElement>  
</VerticalTimeline>
</div>
    )
  }
  export default ReactTimeLine