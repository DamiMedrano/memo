import { nanoid } from 'nanoid';
import React from 'react';
import { useState } from 'react';
import { Header, Text, Input, Modal, Overlay } from './LoginModalStyled';
import PrimaryButton from '../Buttons/PrimaryButton';
import SecondaryButton from '../Buttons/SecondaryButton';

export default function LoginModal({ open, onClose, setUser, reload }) {
  const [value, setValue] = useState('');

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

  return open ? (
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
          <div style={{ display: 'flex' }}>
            <PrimaryButton onClick={saveUser}>Enter</PrimaryButton>
            <SecondaryButton onClick={reload()} screen='/' text='Go Back' />
          </div>
        </form>
      </Modal>
    </>
  ) : null;
}
