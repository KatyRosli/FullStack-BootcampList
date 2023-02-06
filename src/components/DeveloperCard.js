import React from 'react';

const DeveloperCard = props => {
  let toggledClass = '';
  if (props.toggled) {
     toggledClass = '--deletable';
  }
   return <li data-testid={`liDeveloper-${props.id}`} className = {`developer${toggledClass}`} key={props.id} onClick={props.onToggleShowDeleteBtn}>
        <span>{props.name}</span>
        {props.toggled && <span><button data-testid='btnDeleteDeveloper' className='btnDelete__Developer' onClick={props.onDelete}>Delete</button></span>}
      </li>
}

export default DeveloperCard;
