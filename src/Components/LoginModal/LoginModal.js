import { nanoid } from 'nanoid';
import React from 'react';
import { useState } from 'react';
import { Header, Text, Input, Modal, Overlay } from './LoginModalStyled';
import PrimaryButton from '../Buttons/PrimaryButton';

export default function LoginModal({ open, onClose, setUser }) {
  const [value, setValue] = useState('');
  if (open) return null;

  const saveUser = (e) => {
    if (e) e.preventDefault();
    if (value) {
      setUser({ name: value, id: nanoid() });
      setValue('');
      onClose();
    } else {
      alert('Name cannot be empty.');
    }
  };

  return (
    <>
      <Overlay />
      <Modal>
        <Header>Welcome</Header>
        <Text>Please enter your name:</Text>
        <form onSubmit={saveUser}>
          <Input
            value={value}
            maxLength='15'
            onChange={(e) => setValue(e.target.value)}
            type='text'
            placeholder='Enter your name...'
          />
          <PrimaryButton onClick={saveUser}>Enter</PrimaryButton>
        </form>
      </Modal>
    </>
  );
}
