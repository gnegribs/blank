import React from 'react';
import { renderToString } from 'react-dom/server';
import Meta from '../../frontend/components/Meta/Meta';
import App from '../../frontend/components/App/App';
// eslint-disable-next-line import/no-unresolved
import WebpackManifest from '../../frontend/manifest.json';

const renderHTML = () => (`<!DOCTYPE html><html lang="en-GB"><head>${renderToString(<Meta />)}</head><body>`
    + `<div id="app">${renderToString(<App />)}</div>`
    + `<script src="/${WebpackManifest['index.js']}"></script></body></html>`);

module.exports = {
  renderHTML,
};
