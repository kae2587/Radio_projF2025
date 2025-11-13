function About() {
  const columns = [
    { 
      title: 'Live Shows', 
      content: 'Live shows are hosted weekly...',
      img: 'https://apply.uclastudentmedia.com/media/organization/4-Untitled%20design.png'
    },
    { 
      title: 'Special Events', 
      content: 'Special events bring the community together.',
      img: 'https://apply.uclastudentmedia.com/media/organization/4-Untitled%20design.png'
    },
    { 
      title: 'Pre-Recorded Segments', 
      content: 'Pre-recorded segments allow students to create content on their schedule.',
      img: 'https://apply.uclastudentmedia.com/media/organization/4-Untitled%20design.png'
    },
    { 
      title: 'Student Involvement', 
      content: 'Students can volunteer and take part in all aspects of radio.',
      img: 'https://apply.uclastudentmedia.com/media/organization/4-Untitled%20design.png'
    },
  ];

  return (
    <div style={{ padding: '2em' }}>
      {/* About section */}
      <div style={{ textAlign: 'center', marginBottom: '3em' }}>
        <h1>About ISP</h1>
        <div
          style={{
            borderRadius: '20px',
            padding: '3em',
            backgroundColor: '#FEE7FF',
            margin: '1em auto',
            maxWidth: '1000px',
          }}
        >
          <p style={{ textAlign: 'left' }}>
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
                border: '1px solid #333',
                borderRadius: '20px',
                padding: '1.5em',
                backgroundColor: '#f9f9f9',
                maxWidth: '500px',
                flex: '1 1 300px',
                boxSizing: 'border-box',
                textAlign: 'center',
                margin: '1em auto',
              }}
            >
              <h2>{col.title}</h2>
              {/* Each column’s individual image */}
              <img
                src={col.img}
                alt={col.title}
                style={{ width: '100%', borderRadius: '10px', marginBottom: '1em' }}
              />
          
              <p>{col.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default About;
