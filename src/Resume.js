import React, { useState } from 'react';

const Resume = () => {
  const [isOpen, setIsOpen] = useState({
    researcher: true,
    fullstack: false,
    hrmanager: false,
    social: false,
    supply: false,
    ksa: false,
    dop: false
  });

  const toggleSection = (section) => {
    setIsOpen((prevState) => ({ ...prevState, [section]: !prevState[section] }));
  };

  const [flipped, setFlipped] = useState({});

  const toggleFlip = (section) => {
    setFlipped((prevState) => ({ ...prevState, [section]: !prevState[section] }));
  };

  const sections = [
    // { id: 'education', title: 'Education', image: '/vt.jpg', content: (
    //     <>
    //       <p>Virginia Tech</p>
    //       <p>Bachelor of Computer Science and Human-Computer Interaction</p>
    //       <p>Overall GPA 3.65/4.0 | Major GPA 3.9/4.0</p>
    //     </>
    //   )
    // },
    { id: 'skills', title: 'Skills', image: './skill.jpeg',content: (
        <>
          <span style={{color: '#493f41' }}>Programming Languages:</span>
          <p>Python, C, Java, SQL, JavaScript, RISC-V, asm</p>
          <span style={{color: '#493f41' }}>Languages:</span> 
          <p>English(fluent), Korean(native), HTML(proficient), CSS(proficient)</p>
          <span style={{color: '#493f41' }}>Programming Tools:</span>
          <p>React, MongoDB, Node.js, Bootstrap, MySQL, Git, Figma, Netlify, Eclipse, VS code, ChromeExtension, J-Unit</p>
          <span style={{color: '#493f41' }}>Office Tools:</span>
          <p>MS(Excel, Word, PowerPoint), Slack, Jira</p>
          <span style={{color: '#493f41' }}>Research Tools:</span>
          <p>Zotero, Google Scholar</p>
        </>
      )
    },
    { id: 'projects', title: 'Projects', image: './projects.jpeg',content: (
        <>
          <span style={{color: '#493f41' }}>Static Web</span>
          <p><a href="https://www.nhaamerica.com" target="_blank" rel="noopener noreferrer">National Headhunt Agency</a> at Washington D.C</p>
          <p>Developed a static website</p>
          <p>1) Reviewed and established the requirements and details of web development through discussions with management.</p>
          <p>2) Referred to the free CSS template using Bootstrap.</p>
          <p>3) Deployed a web by Netlify.</p>
          <br></br>
          <a href="https://www.github.com/doooh98/Youtube-Overlay-Comments" target="_blank" rel="noopener noreferrer">YouTube Overlay Comments</a>
          <p>Project Advisor:</p>
          <p> Professor <a href="https://echolab.cs.vt.edu/sangwonlee/" target="_blank" rel="noopener noreferrer">Sangwon Lee (VT)</a></p>
          <p>Developed Chrome Extension app to overlay YouTube comments on the video</p>
        </>
      )
    },
    { id: 'awards', title: 'Awards & Certifications', image: './award.jpeg',content: (
        <>
          <p>Dean’s List issued by Virginia Tech, Feb 2022 - May 2024</p>
          <p><a href="https://www.citiprogram.org/verify/?wb6a819aa-79d7-421a-8c88-a86bb9ca5ea9-60799093" target="_blank" rel="noopener noreferrer">Social and Behavior Research</a> issued by CITI Program, Jan 2024</p>
          <p><a href="https://www.credly.com/badges/8366db78-548b-49b1-9f1e-ee1e0e9fa1c6/linked_in_profile" target="_blank" rel="noopener noreferrer">Unity Essentials</a> issued by Unity, Feb 2024</p>
        </>
      )
    }
  ];

  return (
    <main className="App-main">
      <div className="vt-content">
        <div className="vt-section">
          <img src="./vt.jpg" alt="Virginia Tech"></img>
          <div className="vt-text-content">
            <p className="vt-text-header" style={{ fontSize: '2.6rem' }}>Bachelor</p>
            <p style={{ fontSize: '1.8rem' }}>Computer Science & Human-Computer Interaction (Minor)</p>
            
            <p style={{ whiteSpace: 'pre-wrap', fontSize: '1.4rem' }}>Overall GPA          3.65 | 4.0</p>
            <p style={{ whiteSpace: 'pre-wrap', fontSize: '1.4rem' }}>In Major GPA          3.9 | 4.0</p>
            </div>
        </div>
      </div>

      <div className="resume-container">
      {sections.map((section) => (
        <div key={section.id} className="card" onClick={() => toggleFlip(section.id)}>
          <div className={`card-inner ${flipped[section.id] ? 'flipped' : ''}`}>
            <div className="card-front" style={{ backgroundImage: `url(${section.image})` }}>
              <h2>{section.title}</h2>
            </div>
            <div className="card-back">
              {section.content}
            </div>
          </div>
        </div>
      ))}
      </div>

      <div className="work-experience">
      <h1 className="left-title">Work Experience</h1>

<div className="accordion-container">
  <div className="accordion-section" onClick={() => toggleSection('researcher')}>
    <div className="accordion-header">
      <h2>Researcher</h2>
      <button className={`toggle-button ${isOpen.researcher ? 'open' : ''}`}></button>
    </div>
    {isOpen.researcher && (
      <div className="accordion-content">
        <p><a href="https://echolab.cs.vt.edu/members" target="_blank" rel="noopener noreferrer">Echolab</a> | Virginia Tech</p>
        <p>Mar 2023 -</p>
        <p>▪ Team leader in <a href="https://www.github.com/doooh98/Youtube-Overlay-Comments" target="_blank" rel="noopener noreferrer">Overlay YouTube Comments project</a></p>
      </div>
    )}
  </div>
  <div className="accordion-section" onClick={() => toggleSection('fullstack')}>
    <div className="accordion-header">
      <h2>Full Stack</h2>
      <button className={`toggle-button ${isOpen.fullstack ? 'open' : ''}`}></button>
    </div>
    {isOpen.fullstack && (
      <div className="accordion-content">
        <p>National Headhunt Agency | Washington D.C.</p>
        <p>May 2023 - July 2023</p>
        <p>▪ Created a <a href="https://www.nhaamerica.com" target="_blank" rel="noopener noreferrer">static web</a></p>
      </div>
    )}
  </div>
  
  <div className="accordion-section" onClick={() => toggleSection('hrmanager')}>
    <div className="accordion-header">
      <h2>HR Manager</h2>
      <button className={`toggle-button ${isOpen.hrmanager ? 'open' : ''}`}></button>
    </div>
    {isOpen.hrmanager && (
      <div className="accordion-content">
        <p>U.S. Korean International Students Association (<a href="https://www.facebook.com/groups/MiHanYuHoei" target="_blank" rel="noopener noreferrer">MiHanYuHoei</a>)</p>
        <p>Feb 2021 - Oct 2021</p>
        <p>▪ Chief of the MiHan Alliance, most of Korean Student Association in U.S. universities.</p>
        <p>- Managed the group chats and contact list of 97 KSA presidents by KakaoTalk and Excel.</p>
        <p>- Searched unassociated KSA, encouraged them to join our alliance.</p>
      </div>
    )}
  </div>
  <div className="accordion-section" onClick={() => toggleSection('social')}>
    <div className="accordion-header">
      <h2>Social Media Manager</h2>
      <button className={`toggle-button ${isOpen.social ? 'open' : ''}`}></button>
    </div>
    {isOpen.social && (
      <div className="accordion-content">
        <p><a href="https://www.facebook.com/kimlab1002" target="_blank" rel="noopener noreferrer">Kimlab</a></p>
        <p>Feb 2021 - Oct 2021</p>
        <p>▪ Administer of Facebook Page "Kimlab, Crypto community".</p>
        <p>- Uploaded the various cryptocurrency vocabularies and news.</p>
        <p>- Increased group members from 0 to 200 used by the Open Chatting function of KakaoTalk.</p>
      </div>
    )}
  </div>
  <div className="accordion-section" onClick={() => toggleSection('supply')}>
    <div className="accordion-header">
      <h2>Supply Sergeant</h2>
      <button className={`toggle-button ${isOpen.supply ? 'open' : ''}`}></button>
    </div>
    {isOpen.supply && (
      <div className="accordion-content">
        <p><a href="https://www.army.mil.kr/english/index..do" target="_blank" rel="noopener noreferrer">Republic of Korea Army</a></p>
        <p>July 2019 - Feb 2021</p>
        <p>▪ Company Quartermaster Sergeant</p>
        <p>- Managed munition list including 60+ types of war supplies by Excel.</p>
        <p>- Created stormwater channel, wood door, fixed sockets, lights, and water dispensers.</p>
        <p>- Mowed lawn, gardened, cleaned, and painted 2 storages.</p>
        <p>▪ Squad Leader</p>
        <p>- Managed barracks problems with other leaders.</p>
        <p>- Counseled for soldiers who are struggling in the unit.</p>
        <p>▪ Awards</p>
        <p>- Got “Mental Strength King" award at Army Boot Camp, Aug 2019.</p>
        <p>- Got “Barracks Manager” award, Oct 2019.</p>
        <p>- Got “Squad Leader” award, Aug 2020.</p>
        <p>- Got “The Best Soldier” award, June 2020.</p>
      </div>
    )}
  </div>
</div>
      </div>
      <div className='clubs'>
      <h1 className="left-title">Clubs</h1>
      
      <div className="accordion-container">
        <div className="accordion-section" onClick={() => toggleSection('ksa')}>
          <div className="accordion-header">
            <h2>Korean Student Association (KSA)</h2>
            <button className={`toggle-button ${isOpen.ksa ? 'open' : ''}`}></button>
          </div>
          {isOpen.ksa && (
            <div className="accordion-content">
              <p>HR Manager @ <a href="http://vtksa.org/board.php?board=sub11n&command=body&no=2" target="_blank" rel="noopener noreferrer">VTKSA</a></p>
              <p>Jun 2021 - May 2022</p>
              <p>▪ Managed the contact list of Virginia Tech Korean International students.</p>
              <p>▪ Created & Managed multiple major group chats to let students help each other.</p>
              <p>▪ Reached out to education company, Timely Edu, to get the financial support.</p>
              <p>▪ Presented about Virginia Tech to Timely Edu customers (High school parents).</p>
              <p>▪ Prepared many events helping Korean international students such as Newcomers event.</p>
            </div>
          )}
        </div>
        <div className="accordion-section" onClick={() => toggleSection('dop')}>
          <div className="accordion-header">
            <h2>Dancing's Our Poison</h2>
            <button className={`toggle-button ${isOpen.dop ? 'open' : ''}`}></button>
          </div>
          {isOpen.dop && (
            <div className="accordion-content">
              <p>▪ Performed in the <a href="https://www.youtube.com/watch?v=V6IZhdKh-iQ" target="_blank" rel="noopener noreferrer">Momentum Showcase 2019</a>.</p>
              <p>▪ Performed in the 10th Annual Coalescence <a href="https://www.youtube.com/watch?v=l2BOf2UiPGg" target="_blank" rel="noopener noreferrer">Coalescence 2019</a>.</p>
              <p>▪ Taught my <a href="https://youtu.be/80vYFJTU2GE?si=pYUGSDLBl4rqNoxh&t=83" target="_blank" rel="noopener noreferrer">choreography</a> to the Chinese American Society.</p>
            </div>
          )}
        </div>
      </div>
      </div>
      
      
      
    </main>
  );
};

export default Resume;
