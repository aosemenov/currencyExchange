/* eslint-disable import/no-anonymous-default-export */
/* eslint-disable react/jsx-no-undef */

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Root } from './pages/Root';

import { Wrapper } from './components/wrapper';

import './scss/styles.scss'



export default () => (
  <BrowserRouter>
    <Wrapper >
      <Routes>
        <Route path={'*'} element={<Root />} />
      </Routes>
    </Wrapper>
  </BrowserRouter>
)


