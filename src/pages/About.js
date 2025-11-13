function About() {
  const columns = [
    { 
      title: 'Live Shows', 
      content: 'Students perform live on air...',
      img: 'https://uclaradio.com/wp-content/uploads/2024/04/R1-04802-0018.jpg',
      gradient: 'linear-gradient(to bottom, #FEE7FF, #6D9EEA)'
    },
    { 
      title: 'Special Events', 
      content: 'This could include live concerts...',
      img: 'https://uclaradio.com/wp-content/uploads/2024/04/R1-04802-0021.jpg',
      gradient: 'linear-gradient(to bottom, #FEE7FF, #6D9EEA)'
    },
    { 
      title: 'Pre-Recorded Segments', 
      content: 'Pre-recorded segments allow students...',
      img: 'https://i.ytimg.com/vi/R6Fcv59Kp3I/hq720.jpg',
      gradient: 'linear-gradient(to bottom, #FEE7FF, #6D9EEA)'
    },
    { 
      title: 'Student Involvement', 
      content: 'Many performances are by students...',
      img: 'https://i.ytimg.com/vi/JRW2GG6edY8/hq720.jpg',
      gradient: 'linear-gradient(to bottom, #FEE7FF, #6D9EEA)'
    },
  ];

  // Icons/buttons data
  const buttons = [
    { icon: '🎵', label: 'Music' },
    { icon: '🎤', label: 'Talk' },
    { icon: '🎧', label: 'DJ' },
    { icon: '⭐', label: 'Special' },
    { icon: '📺', label: 'Video' },
  ];

  return (
    <div style={{ padding: '2em', fontFamily: 'inherit', backgroundColor: '#ffffff' }}>
      
      {/* About section */}
      <div style={{ textAlign: 'center', marginBottom: '3em' }}>
        <h1 style={{ fontSize: '3em', marginBottom: '0.5em' }}>About ISP</h1>
        <div
          style={{
            borderRadius: '20px',
            padding: '3em',
            backgroundColor: '#FEE7FF',
            margin: '1em auto',
            maxWidth: '1000px',
            boxShadow: '0 4px 10px rgba(0,0,0,0.0)',
          }}
        >
          <p style={{ textAlign: 'left', fontSize: '1.2em', lineHeight: '1.6' }}>
            ISPs' (In station Performances) at UCLA Radio offers students a platform to showcase
            their talents, develop community, and engage with the campus. ISPs' are special aired
            events that include live concerts, themed programming, talk shows, live DJ sets, etc.
          </p>
        </div>
      </div>

      {/* Cards / columns section */}
      <div style={{ textAlign: 'center', marginBottom: '3em' }}>
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '1.5em',
            justifyContent: 'center',
            margin: '1em auto',
          }}
        >
          {columns.map((col, index) => (
            <div
              key={index}
              style={{
                borderRadius: '20px',
                padding: '1.5em',
                background: col.gradient || '#ffffff',
                maxWidth: '400px',
                flex: '1 1 300px',
                boxSizing: 'border-box',
                textAlign: 'center',
                margin: '1em auto',
                boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
              }}
            >
              {/* Image */}
              <img
                src={col.img}
                alt={col.title}
                style={{ width: '100%', borderRadius: '10px', marginBottom: '1em' }}
              />

              {/* Title */}
              <h2 style={{ fontSize: '1.5em', marginBottom: '0.5em' }}>{col.title}</h2>

              {/* Content */}
              <p style={{ fontSize: '1em', lineHeight: '1.5', color: '#333' }}>{col.content}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Circle Icon Buttons BELOW the cards */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '1em', marginTop: '2em' }}>
        {buttons.map((btn, index) => (
          <button
            key={index}
            style={{
              width: '60px',
              height: '60px',
              borderRadius: '50%',
              backgroundColor: '#6D9EEA',
              border: 'none',
              cursor: 'pointer',
              color: '#fff',
              fontSize: '28px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'all 0.2s ease',
            }}
            onClick={() => alert(`${btn.label} button clicked!`)}
            onMouseOver={e => e.currentTarget.style.backgroundColor = '#5B81D6'}
            onMouseOut={e => e.currentTarget.style.backgroundColor = '#6D9EEA'}
          >
            {btn.icon}
          </button>
        ))}
      </div>
    </div>
  );
}

export default About;
