import React, { useState } from 'react';

const Journey = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [selectedPage, setSelectedPage] = useState(null);

  const bookmarks = [
    { id: 1, color: '#9caa83', content: '1998-2005', 
    details: 'This page is currently under maintenance' },
    { id: 2, color: '#d0ced0', content: '2005-2010', 
    details: 'This page is currently under maintenance' },
    { id: 3, color: '#a3b5b2', content: '2011-2014', 
    details: 'This page is currently under maintenance' },
    { id: 4, color: '#c2cbca', content: '2014-2018',
    details: "This page is currently under maintenance" },
    { id: 5, color: '#ccd7cf', content: '2019-2021', 
    details: "This page is currently under maintenance" },
    { id: 6, color: '#c9ced2', content: '2021-2024', 
    details: "This page is currently under maintenance" },
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
