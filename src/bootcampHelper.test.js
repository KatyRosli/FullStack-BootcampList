import { addDeveloper, removeDeveloper, updateDeveloper } from './bootcampHelper';

describe('taskHelper behavior on tasks', ()=>{
  it('should add developer to the list', () => {
    const startDevelopers = [];
    
    const expected =[{ name: 'Lisa Blackpink', bootcamp: 'jsfs' }];
    const result = addDeveloper(startDevelopers, 'Lisa Blackpink', 'jsfs')
    expect(result).toEqual(expected)
  })

  it('should update developer in the list', () => {
    const startDevelopers = [{ name: 'Lisa Blackpink', bootcamp: 'jsfs' }];
    
    const expected = { id: 'developer-2', name: 'Lisa Blackpink', bootcamp: 'jsfs' };
    const result = updateDeveloper(startDevelopers, expected);
    expect(result).toEqual([expected])
  })

  it('should remove developer from the list', () => {
    const startDevelopers = [{ id: 'developer-1', name: 'Lisa Blackpink', bootcamp: 'jsfs', toggled: true }];
    
    const expected = [];
    const result = removeDeveloper(startDevelopers, 'developer-1');
    expect(result).toEqual(expected)
  })
});
