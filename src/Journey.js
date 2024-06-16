import React, { useState } from 'react';

const Journey = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [selectedPage, setSelectedPage] = useState(null);

  const bookmarks = [
    { id: 1, color: '#9caa83', content: '1998-2005', details: 'Due to financial constraints, he worked as a model for Agabang from birth to support his family. He completed his kindergarten education in Ilsan, South Korea.' },
    { id: 2, color: '#d0ced0', content: '2005-2010', details: 'He attended Yangcheon Elementary School in Gangseo-gu, Seoul. Exhibiting musical talent from a young age, he actively participated in various school contests. On the recommendation of his friends, he served as the student president during his sixth-grade year.' },
    { id: 3, color: '#a3b5b2', content: '2011-2014', details: 'During his first year of middle school, he faced bullying, which led to difficulties in forming friendships and caused significant trauma. In his struggle, he found solace in literature and music, which indirectly enhanced his understanding of human nature through the experiences portrayed in literature. Energized by music, he wanted to share this positive energy with others through the same medium. By his second year, he had made good friends who helped him overcome the bullying. He resumed dancing at the school arts festival and joined the vocal team in his third year. \n After being accepted to Pai-Chai High School, he became actively involved in extracurricular activities, joining the school dance team, a hip-hop crew, and becoming the director of a rock band. Upon realizing that his peers were already well-prepared musically, he felt it was too late to start a music career influenced by Korean cultural norms. This led him to pivot towards the entertainment industry rather than pursuing music directly. During this time, he showed a keen interest in college admissions but soon shifted his focus towards contemplating long-term success in capitalism. He read various autobiographies of successful individuals, which further motivated him. Believing that many successful Koreans had gained from studying in the United States, he traveled to the U.S. with little money, aiming to carve out his path to success.' },
    { id: 4,
      color: '#c2cbca',
      content: '2014-2018',
      details: "Initially, he learned English and American culture from the welcoming community at Highland Academy in Portland, TN, which helped him overcome the trauma of bullying he had believed he had conquered during his middle school years. This was largely because relationships in the U.S. are not stratified by hierarchy as they often are in Korea. Later, seeking better educational opportunities, he transferred to Lipscomb Academy, where he graduated with a 3.8 GPA, and he founded a culture club to support students who were not familiar with multicultural global environments. Although he was not interested in engineering and preferred to major in business, his uncertainty about English as a non-native speaker led him to choose computer science. This field allowed him the freedom for creative activities akin to music. Feeling homesick, he continued his education at Virginia Tech, Virginia, the state known for its Korean influences. After his first year, during he joined the school's premier dance club, \"Dancing's Our Poison\" out of curiosity about how American culture-based dance teams operate. he planned to enlist in the Korean military due to Korean law." },
    { id: 5, color: '#ccd7cf', content: '2019-2021', details: "During his training camp experience, he served as a squad leader trainee for a month, guiding a team composed of individuals from various backgrounds. This role taught him that his middle school belief in \"living harmoniously with everyone\" was fundamentally unattainable due to inherent differences among people, leading him to understand how to keep a healthy distance from those he didn't connect with and ultimately freeing him from his previous obsession with maintaining relationships. \n Subsequently, he worked as a company quartermaster in the Korean military's supply unit, where he also took on a leadership role. His responsibilities included counseling soldiers on their personal concerns, providing them with hope, and deeply understanding the perspectives of both newcomers and experienced personnel in any organization. This experience enriched his leadership skills and interpersonal understanding, which he carried with him upon discharge from the military. \n After being discharged from the military, he reminded on his experiences from high school, where he had received considerable support from the Korean student community in adapting to life in the U.S. This community, founded by Min-Jae Kim and home to over 60,000 Korean students, became a significant part of his life. He met Min-Jae Kim through various social activities and eventually became a human resources manager in the community. \n He devoted himself to helping other Korean students with the same passion with which he was helped during his formative years." },
    { id: 6, color: '#c9ced2', content: '2021-2024', details: "Upon returning to Virginia Tech, he became actively involved in the executive activities of the Korean Students Association. During this time, he worked to repair and improve relationships among the Korean community at Virginia Tech, which had been adversely affected by the COVID-19 pandemic. He dedicated his efforts to organizing department-specific group chats and various events, striving to support and enhance the Korean community. He devoted all his time and energy to his studies upon returning to Virginia Tech, realizing that working in society required applying everything he had learned, which left him with little time for academics. Curious about practical aspects not covered in the school curriculum, such as developing and distributing a product, he developed a project called \"YouTube Overlay Comments\" as a Chrome extension under the guidance of Professor Sangwon Lee, a Seoul National University alumnus, at Echolab. While the project was not commercially distributed, through this process, he realized that in the field of coding, learning how to learn is more crucial than the study material itself. \n While actively involved in the Virginia Tech Korean Students Association, he utilized the connections he established and his experience from the YouTube overlay comments project to secure his first practical outsourcing opportunity. He successfully undertook and completed the project of developing the official website for an NHA company that facilitates connections between Korean students and major Korean corporations such as LG." },
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
