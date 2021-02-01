import React from 'react';

class Meta extends React.PureComponent {
  render() {
    return (
      <>
        <meta charSet="utf-8" />
        <title>Blank app</title>
        <meta name="description" content="meta description" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=PT+Serif:400,700&display=swap" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="twitter:card" content="summary" />
        <meta property="og:site_name" content="app" />
        <meta property="og:locale" content="en_GB" />
        <meta property="og:title" content="Blank app" />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="/" />
        <meta property="og:description" content="meta description" />
        <meta property="og:image" content="img url" />
        <meta property="og:image:secure_url" content="img url" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com/" />
        <link rel="shortcut icon" href="/icons/favicon.ico" />
        <link rel="icon" type="image/png" sizes="16x16" href="/icons/favicon-16x16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/icons/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="96x96" href="/icons/favicon-96x96.png" />
        <link rel="apple-touch-icon" href="/icons/apple-touch-120x120.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/icons/apple-touch-180x180.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="/icons/apple-touch-152x152.png" />
        <link rel="apple-touch-icon" sizes="167x167" href="/icons/apple-touch-167x167.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/icons/favicon.svg" color="#ffffff" />
        <link rel="stylesheet" type="text/css" href="/main.css" />
      </>
    );
  }
}

export default Meta;
