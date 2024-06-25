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
          <p>Java, Python, JavaScript, C, SQL, OOP</p>
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
          <p>- Reviewed and established the requirements and details of web development through discussions with management</p>
          <p>- Referred to the free CSS template using Bootstrap and functions from CodePen</p>
          <p>- Deployed a web by Netlify, Created a favicon</p>
          <br></br>
          <a href="https://www.github.com/doooh98/Youtube-Overlay-Comments" target="_blank" rel="noopener noreferrer">YouTube Overlay Comments</a>
          <p>Project Advisor:</p>
          <p> Professor <a href="https://echolab.cs.vt.edu/sangwonlee/" target="_blank" rel="noopener noreferrer">Sangwon Lee (VT)</a></p>
          <p> Produced a YouTube Overlay Comments program to experiment with how it affects viewers' mental state by showing comments on the YouTube video screen</p>
          <p>- YouTube comment data was accessed through YouTube Data API v3, implemented as a Chrome extension to facilitate direct web operation</p>
          <p>- Used JavaScript and jQuery</p>
          <p>- Research on video and comment-related topics in the human-computer interaction category was conducted across ten papers to develop a program focused on consumer comfort</p>
        </>
      )
    },
    { id: 'awards', title: 'Awards & Certifications', image: './award.jpeg',content: (
        <>
          <p>Dean’s List issued by Virginia Tech, Fall 2021 - Spring 2023</p>
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
            <p style={{ fontSize: '1.8rem' }}>Computer Science (Major) & Human-Computer Interaction (Minor)</p>
            
            <p style={{ whiteSpace: 'pre-wrap', fontSize: '1.4rem' }}>Overall GPA          3.65 | 4.0</p>
            <p style={{ whiteSpace: 'pre-wrap', fontSize: '1.4rem' }}>In Major GPA         3.82 | 4.0</p>
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
        <p>Mar 2023 - May 2024</p>
        <p>Project Advisor: Professor <a href="https://echolab.cs.vt.edu/sangwonlee/" target="_blank" rel="noopener noreferrer">Sangwon Lee (VT)</a></p>
        <p>▪ Team leader in <a href="https://www.github.com/doooh98/Youtube-Overlay-Comments" target="_blank" rel="noopener noreferrer">Overlay YouTube Comments project</a></p>
        <p>○ Produced a YouTube Overlay Comments program to experiment with how it affects viewers' mental state by showing comments on the YouTube video screen</p>
        <p>- YouTube comment data was accessed through YouTube Data API v3, implemented as a Chrome extension to facilitate direct web operation</p>
        <p>- Used JavaScript and jQuery</p>
        <p>- Research on video and comment-related topics in the human-computer interaction category was conducted across ten papers to develop a program focused on consumer comfort</p>
        
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
        <p>- Reviewed and established the requirements and details of web development through discussions with management</p>
        <p>- Referred to the free CSS template using Bootstrap and functions from CodePen</p>
        <p>- Deployed a web by Netlify, Created a favicon</p>
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
        <p>▪ Chief of the MiHan Alliance (Korean Student Association in U.S. universities)</p>
        <p>- Managed the group chats and contact lists of 97 KSA presidents to enable support for Korean students needing to transfer under compelling circumstances and to facilitate the sharing of career development opportunities often difficult for Korean students to find on their own</p>
        <p>- Searched unassociated KSA, and encouraged them to join our alliance through connections</p>
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
        <p>- To support those with limited cryptocurrency knowledge, posted a variety of terms and news related to cryptocurrency, which led to an increase in our group members</p>
        <p>- Increased group members from 0 to 200 using the Open Chatting function of KakaoTalk</p>
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
        <p>- Streamlined the management of a munitions list comprising over 60 types of war supplies by transitioning from manual recording to an efficient Excel-based coding system, significantly reducing the warehouse management staff by fivefold.</p>
        <p>- Collected the opinions of the soldiers and created stormwater channels, wood doors, fixed sockets, lights, and water dispensers to make a better base environment.</p>
        <p>- Mowed lawn, gardened, cleaned, and painted 2 storages.</p>
        <p>▪ Squad Leader</p>
        <p>- Enhanced staffing efficiency by replacing the old method of deploying surplus staff with a targeted approach that places suitable employees in understaffed departments, based on individual interviews that assess MBTI, future aspirations, and responsibilities.</p>
        <p>- To tackle manpower shortages on overlapping vacation days, facilitated a meeting among those scheduled to take leave, guiding a discussion that prioritized personal commitments like celebrations and interviews to decide who would postpone their vacation.</p>
        <p>- Moved the victim soldier to a department that is sympathetic to their situation to address bullying and boss violence due to poor work conditions, and establish a regular department rotation day for victim protection.</p>
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
              <p>▪ Managed the Virginia Tech Korean International Students' contact list using Excel to assist the future KSA officer, a non-CS major, and streamlined the event registration process by implementing a QR code and Google Form system, significantly reducing waiting times compared to the previous method of collecting information manually at the table</p>
              <p>▪ Realizing that high-achieving international students often struggle with referral systems for job hunting due to their less social inclinations, created and managed dedicated group chats for different majors to facilitate peer tutoring and networking, effectively addressing these challenges</p>
              <p>▪ Collaborated with the educational company, <a href="https://www.timelyedu.kr" target="_blank" rel="noopener noreferrer">Timely Edu</a>, securing financial support by presenting Virginia Tech to their customer base of high school parents</p>
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
