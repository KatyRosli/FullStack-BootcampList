import { render, screen } from '@testing-library/react';
import DeveloperCard from './DeveloperCard';

const showDeleteBtnMocked = () => {}
const deleteDeveloperMocked = () => {}

test('show added developerCard', () => {
  render(<DeveloperCard
    id='developer-1'
        name='Selena Gomez'
        toggled={false}
        onToggledShowDeleteBtn={showDeleteBtnMocked}
        key='developer-1'
        onDelete={deleteDeveloperMocked}
  />);
  const liElement = screen.getByTestId('liDeveloper-developer-1');
  expect(liElement).toBeInTheDocument();
  expect(liElement).toHaveClass('developer');
  const deleteButton = screen.queryByTestId('btnDeleteDeveloper');
  expect(deleteButton).not.toBeInTheDocument();
});

test('show delete button when toggled on developerCard', () => {
  render(<DeveloperCard
    id='developer-1'
        name='Selena Gomez'
        toggled={true}
        onToggledShowDeleteBtn={showDeleteBtnMocked}
        key='developer-1'
        onDelete={deleteDeveloperMocked}
  />);
  const liElement = screen.getByTestId('liDeveloper-developer-1');
  expect(liElement).toBeInTheDocument();
  expect(liElement).toHaveClass('developer--deletable');
  const deleteButton = screen.getByTestId('btnDeleteDeveloper');
  expect(deleteButton).toBeInTheDocument();
});
