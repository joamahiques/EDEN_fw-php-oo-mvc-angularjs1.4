<?php
  require __DIR__ . '/auth0/vendor/autoload.php';
  use Auth0\SDK\Auth0;

  //$domain        = 'dev-joamahi.eu.auth0.com';
  //$client_id     = 'aYPcWGlcntjkw3OONL7YHHEDgHUxfcMF';
  //$client_secret = 'ff85EC0i9O2PGfqyrR004SV0zKkB9MOiMx-qu2ewUSZsQLDKySVJDxHxrN2QTRLv';
  $redirect_uri  = 'http://localhost/www/auth0-php-web-app/';
  $audience      = 'https://' . 'dev-joamahi.eu.auth0.com' . '/userinfo';

  $auth0 = new Auth0([
      'domain' => $domain,
      'client_id' => $client_id,
      'client_secret' => $client_secret,
      'redirect_uri' => $redirect_uri,
      'audience' => $audience,
      'scope' => 'openid profile',
      'persist_id_token' => true,
      'persist_access_token' => true,
      'persist_refresh_token' => true,
  ]);

  $auth0->login(); 
  