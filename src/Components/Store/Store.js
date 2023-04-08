import React from 'react'
import { legacy_createStore as createStore } from 'redux';
import { counter } from '../Reducer';

let store = createStore(counter);

