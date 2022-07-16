import React from 'react'
import PropTypes from 'prop-types'
import { Contact } from '../../models/contact/contact.class';

const ContactComponent = ({ contact }) => {
  return (
    <div>
      <h2>
      { contact.online }
      </h2>        
    </div>
  );
};

ContactComponent.propTypes = {
  contact: PropTypes.instanceOf(Contact)
}

export default ContactComponent