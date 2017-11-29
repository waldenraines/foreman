import React from 'react';
import { MenuItem } from 'react-bootstrap';
import Icon from '../Icon';

function onClickedLink(e) {
  e.preventDefault();
  window.open(this, '_blank');
}

export default ({ href, id = 'documentationLink' }) => (
  <MenuItem key="documentationUrl" id={id} href={href} onClick={onClickedLink.bind(href)}>
    <Icon type="question-sign" className="icon-black" />
    {` ${__('Documentation')}`}
  </MenuItem>
);
