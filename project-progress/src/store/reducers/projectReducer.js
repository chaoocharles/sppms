const initState = {
    projects: [
        {id: '2', projectTitle: 'Students Project Progress System', regNumber: 'SCII/00329/2016', course: 'BTECHIT',
         projectDesc: 'Automation of project management processes'  },
        {id: '3', projectTitle: 'Portfolio', regNumber: 'SCII/00329/2016', course: 'BTECHIT',
        projectDesc: 'A portfolio web app showing projects I have worked on'  }
    ]
}

const projectReducer = (state = initState, action) =>{
    switch(action.type){
        case 'ADD_PROJECT':
            console.log ('added a project', action.project)
    }
    return state;
}

export default projectReducer;