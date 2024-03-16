export default function ProfileInfo() {
    return (
      <div style={{ 
        position: 'relative',
        width: '402.67px',
        height: '1023.33px',
        backgroundColor: 'white',
        color: 'black'
      }}>
        <div style={{ 
            position: 'absolute',
            left: '15px',
            right: '15px',
            fontFamily: 'sans-serif'
        }}>
            <h1 style={{ fontSize: '40px', fontWeight: 800, color: 'black', marginBottom: '10px', marginTop: '60px' }}>JOHN MUNGCAL</h1>
            <h2 style={{ fontSize: '20px', fontWeight: 600, color: 'black', marginBottom: '20px' }}>COMPUTER ENGINEERING STUDENT</h2>
            <h3 style={{ fontSize: '25px', fontWeight: 800, color: '#c72f3c', marginBottom: '10px', marginTop: '40px' }}>MAIN OBJECTIVE</h3>
            <p style={{ fontSize: '16px', fontWeight: 500, color: 'black', marginBottom: '20px', textAlign: 'justify' }}>
            An ambitious 2nd year computer engineering student seeking internship opportunities to contribute to software or hardware development projects. Experienced in C/C++, Python, Verilog, and various other programming languages. Interested in working with embedded systems or back-end programming.</p>
            <h3 style={{ fontSize: '25px', fontWeight: 800, color: '#c72f3c', marginBottom: '10px' }}>WORK EXPERIENCE</h3>
            <p style={{ fontSize: '16px', fontWeight: 600, color: 'black', marginBottom: '10px' }}>SOFTWARE ENGINEERING INTERN</p>
            <p style={{ fontSize: '16px', fontWeight: 600, color: 'black', marginBottom: '20px' }}>Google LLC | May 2023 - Aug 2023</p>
            <p style={{ marginBottom: '10px', fontSize: '16px', fontFamily: 'sans-serif', textAlign: 'justify'  }}>
            - Improved the performance of storing data by 60% from one of the sources, which also eliminated the error rate of importing data.
            </p>
            <p style={{ marginBottom: '10px', fontSize: '16px', fontFamily: 'sans-serif', textAlign: 'justify'  }}>
            - Improved internetal access control turnaround time and security by developing a module using Python (Flask-Appbuilder) to automate access control for internal applications used by over 40 engineers
            </p>
            <p style={{ marginBottom: '10px', fontSize: '16px', fontFamily: 'sans-serif', textAlign: 'justify'  }}>
            - Wrote detailed technical and non-technical documentation for the source code of the application for seamless async collaboration with other engineers.
            </p>
            <h3 style={{ fontSize: '25px', fontWeight: 800, color: '#c72f3c', marginBottom: '10px', marginTop: '40px' }}>ACADEMIC BACKGROUND</h3>
            <p style={{ fontSize: '16px', fontWeight: 600, color: 'black', marginBottom: '10px' }}>B.S. IN COMPUTER ENGINEERING</p>
            <p style={{ fontSize: '16px', fontWeight: 500, color: 'black', marginBottom: '20px' }}>
            - University of the Assumption  
            </p>
            <p style={{ fontSize: '16px', fontWeight: 500, color: 'black', marginBottom: '20px' }}>
            - Aug 2023 - Present (2nd year)
            </p>

        </div>
      </div>
    );
  }