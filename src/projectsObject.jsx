import cloudcurbimage from './images/cloudcurbimage.png'
import gourmetGatherimage from './images/gourmetGatherimage.png'
import poemAPIimage from './images/poemAPIimage.png'

export const projectsObject = 
    [
        {
            title: 'CurbCloud',
            description: 'This was a team project that created a free marketplace for items you put on the curb.', 
            github: 'https://github.com/jozkan30/MERN-Stack-Group-Project-', 
            deployedSite: 'https://63d3f7e48864f50e9ff4c5b9--quiet-cascaron-42b4ff.netlify.app/', 
            concepts: 'CRUD, APIs, DBs, state / hooks.', 
            technologies: 'MongoDB, Express, React, Node, HTML, CSS, Heroku, Netlify.', 
            image: cloudcurbimage, 
        },
        
        {
            title: 'Poetry API Project',
            description: 'This app populates a screen with poems from a Railway-hosted db created by a 3rd party. Clicking the each poem triggers an event listener, showing a modal with the full text of the selected poem and other information. The site may not be live when you are seeing this given how finnicky Railway has been.', 
            github: 'https://github.com/alpakas96/modal-api-project', 
            deployedSite: '', 
            concepts: 'Read requests, delete requests, modals with state / hooks, parsing responses. ', 
            technologies: 'MongoDB, Express, React, Node, HTML, CSS, Railway, Netlify.', 
            image: poemAPIimage, 
        },

        {
            title: 'Gourmet Gather',
            description: 'A food-based social network where users can create posts about dishes and recipes. They can also leave comments and browse posts by country of origin.', 
            github: '', 
            deployedSite: 'https://aesthetic-malasada-e5d24c.netlify.app/', 
            concepts: 'Authentication, comments, CRUD, APIs, relational DBs, state / hooks, modals. ', 
            technologies: 'Python, SQL, React, Express, Node.',
            image: gourmetGatherimage,  
        }, 

    ]
