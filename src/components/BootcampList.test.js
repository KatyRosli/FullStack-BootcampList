import { render, screen } from '@testing-library/react';
import BootcampList from './BootcampList';

const deleteTaskMocked = () => {}

test('show all bootcamps', () => {
  render(<BootcampList
    bootcamps =  {
      [ 
        { 
          bootcamp: 'jsfs',
          instructors: [
            {
              name: 'Kim Jisoo'
            },
          ],
        },
        { 
          bootcamp: 'dnfs',
          instructors: [
            {
              name: 'Elon Musk'
            },
          ],
        },
      ]
    }
    developers = { 
      [
        { id: 1, name: 'Karina Aespa', bootcamp: 'jsfs'},
        { id: 2, name: 'Bill Gates', bootcamp: 'dnfs'},
      ]
    }
        galleryFilter='all'
        deleteTask={deleteTaskMocked}
  />);
  const ulJsfsElement = screen.getByTestId('liBootcamp-jsfs');
  expect(ulJsfsElement).toBeInTheDocument();
  const pJsfsElement = screen.getByTestId('pBootcamp-jsfs');
  expect(pJsfsElement).toBeInTheDocument();
  const ulDnfsElement = screen.getByTestId('liBootcamp-dnfs');
  expect(ulDnfsElement).toBeInTheDocument();
  const pDnfsElement = screen.getByTestId('pBootcamp-dnfs');
  expect(pDnfsElement).toBeInTheDocument();
});

test('show dnfs bootcamp', () => {
  render(<BootcampList
    bootcamps =  {
      [ 
        { 
          bootcamp: 'jsfs',
          instructors: [
            {
              name: 'Kim Jisoo'
            },
          ],
        },
        { 
          bootcamp: 'dnfs',
          instructors: [
            {
              name: 'Elon Musk'
            },
          ],
        },
      ]
    }
    developers = { 
      [
        { id: 1, name: 'Karina Aespa', bootcamp: 'jsfs'},
        { id: 2, name: 'Bill Gates', bootcamp: 'dnfs'},
      ]
    }
        galleryFilter='dnfs'
        deleteTask={deleteTaskMocked}
  />);
  const ulJsfsElement = screen.queryByTestId('liBootcamp-jsfs');
  expect(ulJsfsElement).not.toBeInTheDocument();
  const pJsfsElement = screen.queryByTestId('pBootcamp-jsfs');
  expect(pJsfsElement).not.toBeInTheDocument();
  const ulDnfsElement = screen.getByTestId('liBootcamp-dnfs');
  expect(ulDnfsElement).toBeInTheDocument();
  const pDnfsElement = screen.getByTestId('pBootcamp-dnfs');
  expect(pDnfsElement).toBeInTheDocument();
});
