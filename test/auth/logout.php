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
    'persist_refresh_token' => true,
  ]);

  $auth0->logout(

  );
  // $return_to = 'http://' . $_SERVER['HTTP_HOST'];
  // $logout_url = sprintf('http://%s/v2/logout?client_id=%s&returnTo=%s', $domain, $client_id, $return_to);
  // header('Location: ' . $logout_url);

  $redirect_uri  = 'http://localhost/www/auth0-php-web-app/';
  header('Location: ' . $redirect_uri);
  die();
