<?php
  require __DIR__ . '/auth0/vendor/autoload.php';
  use Auth0\SDK\Auth0;

  ////$domain        = 'dev-joamahi.eu.auth0.com';
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
    'persist_refresh_token' => true
  ]);

  $userInfo = $auth0->getUser();
?>
<html>
    <head>
        <script src="http://code.jquery.com/jquery-3.1.0.min.js" type="text/javascript"></script>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <!-- font awesome from BootstrapCDN -->
        <link href="//maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" rel="stylesheet">
        <link href="//maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css" rel="stylesheet">
        <link href="public/app.css" rel="stylesheet">
    </head>
    <body class="home">
        <div class="container">
            <div class="login-page clearfix">

              <?php if(!$userInfo): ?>
                <div class="login-box auth0-box before">
                  <img src="https://i.cloudup.com/StzWWrY34s.png" />
                  <h3>Auth0 Example</h3>
                  <p>Zero friction identity infrastructure, built for developers</p>
                  <a id="qsLoginBtn" class="btn btn-primary btn-lg btn-login btn-block" href="login.php">Sign In</a>
                </div>

              <?php else: ?>
                <div class="logged-in-box auth0-box logged-in">
                  <h1 id="logo"><img src="//cdn.auth0.com/samples/auth0_logo_final_blue_RGB.png" /></h1>
                  <img class="avatar" src="<?php echo $userInfo['picture'] ?>"/>
                  <h2>Welcome <span class="nickname"><?php echo $userInfo['nickname'] ?></span></h2>

                  <h4><span class="nickname">
                  <?php 
                    echo '<pre>';
                    print_r($userInfo); 
                    echo '</pre>';
                  ?>
                  </span></h4>

                  <a id="qsLogoutBtn" class="btn btn-warning btn-logout" href="logout.php">Logout</a>
                </div>
              <?php endif ?>
            </div>
        </div>
    </body>
</html>
