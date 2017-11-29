import React from 'react';
import URI from 'urijs';
import { MenuItem } from 'react-bootstrap';

function followLink() {
  const uri = new URI(window.location.href);

  uri.setSearch('search', this.trim());
  window.Turbolinks.visit(uri.toString());
  return false;
}

const Bookmark = ({ text, query }) => <MenuItem onClick={followLink.bind(query)}>{text}</MenuItem>;

export default Bookmark;
