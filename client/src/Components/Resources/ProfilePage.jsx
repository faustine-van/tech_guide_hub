import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const EditProfile = ({ profile, onSave }) => {
  const [name, setName] = useState(profile.name);
  const [title, setTitle] = useState(profile.title);
  const [about, setAbout] = useState(profile.about);

  const handleSave = () => {
    onSave({ ...profile, name, title, about });
  };

  return (
    <div className="edit-profile">
      <h3>Edit Profile</h3>
      <div>
        <label>Name:</label>
        <input 
          type="text" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
        />
      </div>
      <div>
        <label>Title:</label>
        <input 
          type="text" 
          value={title} 
          onChange={(e) => setTitle(e.target.value)} 
        />
      </div>
      <div>
        <label>About:</label>
        <textarea 
          value={about} 
          onChange={(e) => setAbout(e.target.value)} 
        />
      </div>
      <button onClick={handleSave}>Save Changes</button>
    </div>
  );
};

const ProfilePage = ({ profiles, onSaveProfile }) => {
  const { id } = useParams();
  const profile = profiles.find(p => p.id === id);
  const [activeTab, setActiveTab] = useState('profile');

  if (!profile) return <div>Profile not found</div>;

  return (
    <div className="profile-page">
      <div className="profile-header">
        <img src={profile.avatar} alt={profile.name} className="profile-avatar" />
        <h2>{profile.name}</h2>
        <p className="profile__title">{profile.title}</p>
        <div className="mentor__stats">
          <span>{profile.menteesCount || 0} Mentees Trained</span>
          <span>{profile.yearsOfExperience || 0} Years Experience</span>
        </div>
      </div>
      <div className="profile__tabs">
        <button 
          className={activeTab === 'profile' ? 'active' : ''}
          onClick={() => setActiveTab('profile')}
        >
          Profile
        </button>
        <button 
          className={activeTab === 'professional' ? 'active' : ''}
          onClick={() => setActiveTab('professional')}
        >
          Professional
        </button>
        <button 
          className={activeTab === 'edit' ? 'active' : ''}
          onClick={() => setActiveTab('edit')}
        >
          Edit
        </button>
      </div>
      <div className="profile-content">
        {activeTab === 'profile' && (
          <>
            <div className="about-section">
              <h4>About</h4>
              <p>{profile.about || 'No information available'}</p>
            </div>
            <div className="expertise-section">
              <h4>Areas of Expertise</h4>
              <ul>
                {(profile.expertise || []).map((area, index) => (
                  <li key={index}>{area}</li>
                ))}
              </ul>
            </div>
          </>
        )}
        {activeTab === 'professional' && (
          <>
            <h3>Professional Information</h3>
            <div className="education-section">
              <h4>Education</h4>
              <ul>
                {(profile.education || []).map((edu, index) => (
                  <li key={index}>{edu}</li>
                ))}
              </ul>
            </div>
            <div className="experience-section">
              <h4>Work Experience</h4>
              <ul>
                {(profile.workExperience || []).map((exp, index) => (
                  <li key={index}>
                    <strong>{exp.title}</strong> at {exp.company}<br />
                    {exp.duration}
                  </li>
                ))}
              </ul>
            </div>
            <div className="certifications-section">
              <h4>Certifications</h4>
              <ul>
                {(profile.certifications || []).map((cert, index) => (
                  <li key={index}>{cert}</li>
                ))}
              </ul>
            </div>
          </>
        )}
        {activeTab === 'edit' && (
          <EditProfile 
            profile={profile} 
            onSave={(updatedProfile) => {
              onSaveProfile(updatedProfile);
              setActiveTab('profile'); // Switch back to the profile tab after saving
            }} 
          />
        )}
      </div>
    </div>
  );
};



export const profiles = [
  {
    id: '1',
    name: 'John Doe',
    avatar: '/Default_tech_enthusiast_0.jpg',
    title: 'Senior Software Engineer',
    menteesCount: 15,
    yearsOfExperience: 8,
    expertise: ['JavaScript', 'React', 'Node.js'],
    joinDate: '2023-01-01',
    about: 'Passionate about mentoring and helping others grow in their tech careers.',
    education: ['M.S. Computer Science, XYZ University', 'B.S. Software Engineering, ABC College'],
    workExperience: [
      { title: 'Senior Software Engineer', company: 'Tech Corp', duration: '2018 - Present' },
      { title: 'Software Developer', company: 'StartUp Inc', duration: '2015 - 2018' }
    ],
    certifications: ['AWS Certified Developer', 'Google Cloud Professional']
  },
  {
    id: '2',
    name: 'Jane Smith',
    avatar: '/Default_different_people_3.jpg',
    title: 'UX/UI Designer',
    menteesCount: 10,
    yearsOfExperience: 6,
    expertise: ['User Research', 'Wireframing', 'Prototyping'],
    joinDate: '2023-03-15',
    about: 'Dedicated to creating user-centric designs and sharing knowledge with aspiring designers.',
    education: ['B.A. Graphic Design, Design Institute'],
    workExperience: [
      { title: 'Senior UX Designer', company: 'Design Studio', duration: '2020 - Present' },
      { title: 'UI Designer', company: 'Creative Agency', duration: '2017 - 2020' }
    ],
    certifications: ['Adobe Certified Expert', 'Google UX Design Professional Certificate']
  },
  {
    id: '3',
    name: 'Alice Johnson',
    avatar: '/Cybersecurity Expert.jpg',
    title: 'Data Scientist',
    menteesCount: 8,
    yearsOfExperience: 5,
    expertise: ['Data Analysis', 'Machine Learning', 'Python'],
    joinDate: '2022-05-20',
    about: 'Experienced data scientist with a focus on predictive modeling and data-driven decision making.',
    education: ['Ph.D. Data Science, University of Data', 'B.S. Mathematics, State University'],
    workExperience: [
      { title: 'Lead Data Scientist', company: 'Data Analytics Ltd.', duration: '2021 - Present' },
      { title: 'Data Analyst', company: 'Analytics Inc.', duration: '2018 - 2021' }
    ],
    certifications: ['Certified Data Scientist', 'TensorFlow Developer Certificate']
  },
  {
    id: '4',
    name: 'Michael Brown',
    avatar: '/Data Scientist.jpg',
    title: 'Project Manager',
    menteesCount: 12,
    yearsOfExperience: 10,
    expertise: ['Project Planning', 'Agile Methodology', 'Team Leadership'],
    joinDate: '2021-11-12',
    about: 'Skilled project manager with a proven track record in delivering projects on time and within budget.',
    education: ['M.B.A. Project Management, Business School', 'B.A. Business Administration, College of Commerce'],
    workExperience: [
      { title: 'Senior Project Manager', company: 'Global Projects Ltd.', duration: '2019 - Present' },
      { title: 'Project Coordinator', company: 'Startup Ventures', duration: '2014 - 2019' }
    ],
    certifications: ['PMP Certification', 'Certified ScrumMaster (CSM)']
  },
  {
    id: '5',
    name: 'Emily Davis',
    avatar: '/project manager.jpg',
    title: 'Marketing Specialist',
    menteesCount: 6,
    yearsOfExperience: 7,
    expertise: ['Digital Marketing', 'SEO', 'Content Strategy'],
    joinDate: '2023-02-08',
    about: 'Creative marketing specialist with experience in developing impactful marketing strategies and content.',
    education: ['B.A. Marketing, Marketing University'],
    workExperience: [
      { title: 'Marketing Manager', company: 'AdWorks Agency', duration: '2021 - Present' },
      { title: 'Content Strategist', company: 'Content Creators', duration: '2018 - 2021' }
    ],
    certifications: ['Google Analytics Certified', 'HubSpot Content Marketing Certification']
  },
  {
    id: '6',
    name: 'Robert Wilson',
    avatar: '/market specialist.jpg',
    title: 'Cybersecurity Expert',
    menteesCount: 7,
    yearsOfExperience: 9,
    expertise: ['Network Security', 'Ethical Hacking', 'Threat Analysis'],
    joinDate: '2021-06-01',
    about: 'Expert in cybersecurity with extensive experience in safeguarding systems against threats and vulnerabilities.',
    education: ['M.Sc. Cybersecurity, Cyber University', 'B.Sc. Information Security, Tech College'],
    workExperience: [
      { title: 'Cybersecurity Consultant', company: 'SecureTech Solutions', duration: '2018 - Present' },
      { title: 'Security Analyst', company: 'Defense Corp', duration: '2014 - 2018' }
    ],
    certifications: ['Certified Ethical Hacker (CEH)', 'CISSP Certification']
  }
];

export default ProfilePage;