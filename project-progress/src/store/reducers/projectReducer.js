const initState = {
    projects: [
        {id: '2', projectTitle: 'Students Project Progress System', regNumber: 'SCII/00329/2016', course: 'BTECHIT',
         projectDesc: 'Automation of project management processes'  },
        {id: '3', projectTitle: 'Portfolio', regNumber: 'SCII/00329/2016', course: 'BTECHIT',
        projectDesc: 'A portfolio web app showing projects I have worked on'  },
        {id: '4', projectTitle: 'Draxx', regNumber: 'SCII/00329/2016', course: 'BTECHIT',
        projectDesc: 'A portfolio web app showing projects I have worked on'  }
    ]
}

const projectReducer = (state = initState, action) =>{
    switch(action.type){
        case 'ADD_PROJECT':
            console.log ('added a project', action.project);
            return state;
        case 'ADD_PROJECT_ERROR':
            console.log ('An error occured', action.err);
            return state;
        default:
            return state;
    }
}

export default projectReducer;