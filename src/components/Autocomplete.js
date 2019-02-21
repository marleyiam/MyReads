import React, { Component } from 'react';
import {DebounceInput} from 'react-debounce-input';
import SearchTerms from '../data/SearchTerms';
import PropTypes from 'prop-types';

export default class Autocomplete extends DebounceInput {

    constructor(props) {
        super(props);
    
        this.state = {
          activeSuggestion: 0,
          filteredSuggestions: [],
          showSuggestions: false,
          userInput: ""
        };
    }
}
