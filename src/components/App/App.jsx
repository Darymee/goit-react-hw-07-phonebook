import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { MdOutlineContactPhone } from 'react-icons/md';

import { getContacts, getError, getIsLoading } from 'redux/selectors';
import { fetchContacts } from 'redux/operations';

import ContactForm from '../ContactForm/ContactForm';
import { ContactsList } from '../ContactsList/ContactsList';
import { Filter } from 'components/Filter/Filter';

import {
  PhonebookWrap,
  ContactWrap,
  Title,
  ContactsTitle,
} from './App.styled.js';

export default function App() {
  const dispatch = useDispatch();

  const items = useSelector(getContacts);
  const error = useSelector(getError);
  const isLoading = useSelector(getIsLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <PhonebookWrap>
      <Title>
        Phonebook <MdOutlineContactPhone />
      </Title>
      <ContactForm />
      <ContactsTitle>Contacts</ContactsTitle>
      <ContactWrap>
        <Filter />
        {isLoading && <p>Loading your contacts, please wait...</p>}

        {error && <p>{error}</p>}
        {items.length > 0 && <ContactsList />}
      </ContactWrap>
    </PhonebookWrap>
  );
}
