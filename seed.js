const mongoose = require('mongoose');

// Resume Schema
const resumeSchema = new mongoose.Schema({
    name: String,
    location: String,
    phone: String,
    email: String,
    linkedin: String,
    github: String,
    summary: String,
    education: [
        {
            qualification: String,
            institution: String,
            period: String
        }
    ],
    technicalSkills: [
        {
            category: String,
            items: String
        }
    ],
    softSkills: [String],
    certifications: [
        {
            title: String,
            platform: String,
            date: String
        }
    ],
    projects: [
        {
            title: String,
            period: String,
            tech: String,
            points: [String]
        }
    ],
    languages: [String]
});

// Resume Model
const Resume = mongoose.model('Resume', resumeSchema, 'resumes');

// Resume Data for Adwaith P
const resumeData = {
    name: 'ADWAITH P',
    location: 'Kozhikode, Kerala, India',
    phone: '+91 8592935415',
    email: 'to.adwaithpramod@gmail.com',
    linkedin: 'https://www.linkedin.com/in/adwaith-p-70b564250',
    github: 'https://github.com/adwaithp15',
    summary: 'Dedicated BCA graduate with a strong technical foundation in software applications, game development, and systems configuration. Eager to bring a blend of analytical problem-solving and technical execution to a dynamic software or game development team.',
    education: [
        {
            qualification: 'MVoc In Software Application Development',
            institution: 'Cochin University of Science and Technology',
            period: '2026 - Present'
        },
        {
            qualification: 'Bachelor of Computer Applications (BCA)',
            institution: 'Mangalore University',
            period: '2022 - 2025'
        }
    ],
    technicalSkills: [
        {
            category: 'Programming Languages',
            items: 'Java (J2EE), C, C++, C#, Python'
        },
        {
            category: 'Game Development',
            items: 'Unity, Unreal Engine'
        },
        {
            category: 'Web Technologies & Data Base',
            items: 'HTML, CSS, Java Script, PHP, SQL'
        },
        {
            category: 'Systems & Tools',
            items: 'Git, Basic LLM Implementation, AI Tools'
        },
        {
            category: 'Creative Tools',
            items: 'Digital Editing & Media Tools'
        }
    ],
    softSkills: [
        'Communication',
        'Problem Solving',
        'Creativity',
        'Adaptability',
        'Team Collaboration',
        'Time Management'
    ],
    certifications: [
        {
            title: 'Python Masters',
            platform: 'Udemy',
            date: 'June 2023'
        },
        {
            title: 'The Complete 2023 Web Development Bootcamp',
            platform: 'Udemy',
            date: 'October 2023'
        }
    ],
    projects: [
        {
            title: 'FUTURE.IT (Job Portal Website)',
            period: '2025',
            tech: 'HTML, CSS, PHP, MySQL',
            points: [
                'User authentication, Job posting, Application management, and User dashboard'
            ]
        }
    ],
    languages: [
        'English',
        'Malayalam',
        'Hindi'
    ]
};

// Insert or update resume in MongoDB
async function seedDatabase() {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/resumeDB');
        console.log('MongoDB Connected Successfully');

        await Resume.findOneAndUpdate(
            { email: resumeData.email },
            resumeData,
            {
                upsert: true,
                returnDocument: 'after',
                runValidators: true
            }
        );
        console.log('Resume data inserted/updated successfully!');

    } catch (error) {
        console.error('Error:', error.message);
    } finally {
        await mongoose.disconnect();
        console.log('MongoDB connection closed');
    }
}

seedDatabase();
