<?php

declare(strict_types=1);

?><!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
<?php wp_body_open(); ?>
<div class="site-shell">
    <header class="site-header">
        <div class="shell-inner site-header__bar">
            <a class="site-branding" href="<?php echo esc_url(home_url('/')); ?>">
                <span class="site-branding__kicker"><?php esc_html_e('Hooshmand Lab', 'hooshmand-lab'); ?></span>
                <span class="site-branding__title"><?php bloginfo('name'); ?></span>
                <span class="site-branding__meta"><?php esc_html_e('Texas A&M University-Corpus Christi', 'hooshmand-lab'); ?></span>
            </a>

            <button class="menu-toggle" type="button" aria-expanded="false" aria-controls="primary-nav">
                <?php esc_html_e('Menu', 'hooshmand-lab'); ?>
            </button>

            <nav id="primary-nav" class="primary-nav" aria-label="<?php esc_attr_e('Primary navigation', 'hooshmand-lab'); ?>">
                <?php
                wp_nav_menu([
                    'theme_location' => 'primary',
                    'container'      => false,
                    'fallback_cb'    => 'hooshmand_lab_menu_fallback',
                ]);
                ?>
            </nav>
        </div>
    </header>
    <main>