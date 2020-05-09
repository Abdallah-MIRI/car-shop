<!DOCTYPE html>
<html <?php language_attributes(); ?>>
  <head>
    <meta charset="<?php bloginfo( 'charset' ); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?php bloginfo( 'name' ); ?></title>

    <!-- ---------- Font Google ---------- -->
    <link href="https://fonts.googleapis.com/css?family=Almarai&display=swap" rel="stylesheet">

    <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
    <script src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"></script>
    <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->
    <?php wp_head(); ?> 
  </head>
  <body>
    <div class="container">
      <!-- ---------------------------- Header ---- -->
      <header class="header">
        <!-- Top Menu -->
        <div class="top-menu pl-3">
          <!-- Content -->
          <div class="content d-flex align-items-center flex-wrap pt-2 pb-2">
            <!-- Date -->
            <div class="date mr-4">
              <p class="m-0"><?php the_time('F j, Y'); ?></p>
            </div>
            <!-- Un List -->
            <?php dm_top_menu(); ?>
          </div>
        </div>
        <!-- Logo and Ads -->
        <div class="logo-and-ads d-flex align-items-center justify-content-between flex-wrap pt-4 pb-4">
          <!-- Logo -->
          <div class="logo">
            <!-- <a href="" class="link-logo text-decoration-none"><?php // bloginfo( 'name' ); ?></a> -->
            <div class="img-logo">
              <?php echo get_custom_logo(); ?>
            </div>
          </div>
          <!-- Top Ads -->
          <?php dynamic_sidebar('adstopsite'); ?>
        </div>
        <!-- Navigation -->
        <nav class="navbar navbar-expand-lg navbar-light">
          <button class="navbar-toggler text-light border-0" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <i class="fa fa-bars"></i>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <?php dm_primary_menu(); ?>
          </div>            
        </nav>
      </header>