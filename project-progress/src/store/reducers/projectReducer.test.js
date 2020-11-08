import projectReducer from "./projectReducer"

describe('Project Reducer', () => {
    it('Should return default state if no action', () => {
        const newState = projectReducer(undefined, {});
        expect(newState).toEqual({})
    })
})