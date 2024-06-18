import React, { useState } from 'react';

const Journey = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [selectedPage, setSelectedPage] = useState(null);

  const bookmarks = [
    { id: 1, color: '#9caa83', content: '1998-2005', 
    details: 'Due to financial constraints, I worked as a model for Agabang from birth to support my family. I completed the kindergarten education in Ilsan, South Korea.' },
    { id: 2, color: '#d0ced0', content: '2005-2010', 
    details: 'I attended Yangcheon Elementary School in Gangseo-gu, Seoul. Exhibiting musical talent from a young age, I actively participated in various school contests. On the recommendation of my friends, I served as the student president during my sixth-grade year.' },
    { id: 3, color: '#a3b5b2', content: '2011-2014', 
    details: 'During my first year of middle school, I faced bullying, which led to difficulties in forming friendships and caused significant trauma. In my struggle, I found solace in literature and music, which indirectly enhanced my understanding of human nature through the experiences portrayed in literature. Energized by music, I wanted to share this positive energy with others through the same medium. By my second year, I had made good friends who helped me overcome the bullying. I resumed dancing at the school arts festival and joined the vocal team in my third year. \n After being accepted to Pai-Chai High School, I became actively involved in extracurricular activities, joining the school dance team, a hip-hop crew, and becoming the director of a rock band. Upon realizing that my peers were already well-prepared musically, I felt it was too late to start a music career influenced by Korean cultural norms. This led me to pivot towards the entertainment industry rather than pursuing music directly. During this time, I showed a keen interest in college admissions but soon shifted my focus towards contemplating long-term success in capitalism. I read various autobiographies of successful individuals, which further motivated me. Believing that many successful Koreans had gained from studying in the United States, I traveled to the U.S. with little money, aiming to carve out my path to success.' },
    { id: 4, color: '#c2cbca', content: '2014-2018',
    details: "Initially, I learned English and American culture from the welcoming community at Highland Academy in Portland, TN, which helped me overcome the trauma of bullying I had believed I had conquered during my middle school years. This was largely because relationships in the U.S. are not stratified by hierarchy as they often are in Korea. Later, seeking better educational opportunities, I transferred to Lipscomb Academy, where I graduated with a 3.8 GPA, and I founded a culture club to support students who were not familiar with multicultural global environments. Although I was not interested in engineering and preferred to major in business, my uncertainty about English as a non-native speaker led me to choose computer science. This field allowed me the freedom for creative activities akin to music. Feeling homesick, I continued my education at Virginia Tech, Virginia, the state known for its Korean influences. After my first year, during I joined the school's premier dance club, \"Dancing's Our Poison\" out of curiosity about how American culture-based dance teams operate. I planned to enlist in the Korean military due to Korean law." },
    { id: 5, color: '#ccd7cf', content: '2019-2021', 
    details: "During my training camp experience, I served as a squad leader trainee for a month, guiding a team composed of individuals from various backgrounds. This role taught me that my middle school belief in \"living harmoniously with everyone\" was fundamentally unattainable due to inherent differences among people, leading me to understand how to keep a healthy distance from those I didn't connect with and ultimately freeing me from my previous obsession with maintaining relationships. \n Subsequently, I worked as a company quartermaster in the Korean military's supply unit, where I also took on a leadership role. My responsibilities included counseling soldiers on their personal concerns, providing them with hope, and deeply understanding the perspectives of both newcomers and experienced personnel in any organization. This experience enriched my leadership skills and interpersonal understanding, which I carried with me upon discharge from the military. \n After being discharged from the military, I reminded on my experiences from high school, where I had received considerable support from the Korean student community in adapting to life in the U.S. This community, founded by Min-Jae Kim and home to over 60,000 Korean students, became a significant part of my life. I met Min-Jae Kim through various social activities and eventually became a human resources manager in the community. \n I devoted myself to helping other Korean students with the same passion with which I was helped during my formative years." },
    { id: 6, color: '#c9ced2', content: '2021-2024', 
    details: "Upon returning to Virginia Tech, I became actively involved in the executive activities of the Korean Students Association. During this time, I worked to repair and improve relationships among the Korean community at Virginia Tech, which had been adversely affected by the COVID-19 pandemic. I dedicated my efforts to organizing department-specific group chats and various events, striving to support and enhance the Korean community. I devoted all my time and energy to my studies upon returning to Virginia Tech, realizing that working in society required applying everything I had learned, which left me with little time for academics. Curious about practical aspects not covered in the school curriculum, such as developing and distributing a product, I developed a project called \"YouTube Overlay Comments\" as a Chrome extension under the guidance of Professor Sangwon Lee, a Seoul National University alumnus, at Echolab. While the project was not commercially distributed, through this process, I realized that in the field of coding, learning how to learn is more crucial than the study material itself. \n While actively involved in the Virginia Tech Korean Students Association, I utilized the connections I established and my experience from the YouTube overlay comments project to secure my first practical outsourcing opportunity. I successfully undertook and completed the project of developing the official website for an NHA company that facilitates connections between Korean students and major Korean corporations such as LG." },
  ];

  const handleFlip = () => {
    if(!isFlipped) {
      setIsFlipped(!isFlipped);
    }
    
  };

  const handleSelectPage = (event, bookmark) => {
    event.stopPropagation(); // This stops the event from bubbling up
    setSelectedPage(bookmark);
  };

  return (
    <div className="journey">
      <div className={`book ${isFlipped ? 'flipped' : ''}`} onClick={handleFlip}>
        <div className="cover">
          <h2 className="diary">Diary</h2>
        </div>
        <div className="page"></div>
        <div className="page"></div>
        <div className="page"></div>
        <div className="page"></div>
        <div className="page"></div>
        <div className="last-page">
            {/* <h2>Click the bookmarks</h2> */}
          </div>
        {bookmarks.map(bookmark => (
          <div key={bookmark.id} className="bookmark" style={{ backgroundColor: bookmark.color }} onClick={(event) => handleSelectPage(event, bookmark)}>
            
          </div>
        ))}
        {selectedPage && (
          <div className="last-page">
            <h2>{selectedPage.content}</h2>
            <p>{selectedPage.details}</p>
          </div>
        )}
        <div className="back-cover"></div>
      </div>
    </div>
  );
};

export default Journey;
