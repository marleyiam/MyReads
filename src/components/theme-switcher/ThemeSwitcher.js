import React, { Component } from 'react';

export default class ThemeSwitcher extends Component {

  state = {
      theme: ''
  }

  stylesheetPromises = [];

  loadStyleSheet(url) {
    let sheet = document.createElement('link');
    sheet.title = 'theme';
    sheet.rel = 'stylesheet';
    sheet.href = url;
    sheet.type = 'text/css';
    document.querySelector('link[title="theme"]') &&
      document.querySelector('link[title="theme"]').remove();
    document.head.appendChild(sheet);
    let timer;

    return new Promise((resolve) => {
      sheet.onload = resolve;
      sheet.addEventListener('load', resolve);
      sheet.onreadystatechange = () => {
        if (sheet.readyState === 'loaded' || sheet.readyState === 'complete') {
          resolve();
        }
      };

      timer = setInterval(() => {
        try {
          for (let i = 0; i < document.styleSheets.length; i++) {
            if (document.styleSheets[i].href === sheet.href) {
              resolve();
            }
          }
        } catch (e) {
          console.log('css not loaded');
        }

      }, 0);
    }).then(() => {
      clearInterval(timer);
      return sheet;
    });
  }

  componentWillMount() {
    this.stylesheetPromises = [];
  }

  setTheme(theme) {
    let url = `${theme}.css`;

    this
      .stylesheetPromises
      .push(this.loadStyleSheet(url));

  this.stylesheetPromises
    .forEach((p) => {
    p.then((link) => {
        this.setState({
          theme: theme
        });
      });
    });
  }

  componentWillUnmount() {
    this
      .stylesheetPromises
      .forEach((p) => {
        p.then((link) => {
          if (link.parentNode)
            link.parentNode.removeChild(link);
        });
      });
  }

  componentWillMount() {
    if (this.state.theme === '')
      this.setState({ theme: this.props.defaultTheme });
  }

  componentDidMount() {
    this.setTheme(this.state.theme);
  }

  render() {
    return (
      React.cloneElement(
        this.props.children, {
          themeContext: this
        }
      )
    )
  }
}