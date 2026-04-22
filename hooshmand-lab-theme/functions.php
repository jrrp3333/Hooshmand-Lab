<?php

declare(strict_types=1);

if (! defined('ABSPATH')) {
    exit;
}

function hooshmand_lab_setup(): void
{
    add_theme_support('title-tag');
    add_theme_support('post-thumbnails');
    add_theme_support('html5', ['search-form', 'gallery', 'caption', 'style', 'script']);
    add_theme_support('editor-styles');
    add_editor_style('style.css');

    register_nav_menus([
        'primary' => __('Primary Menu', 'hooshmand-lab'),
        'footer'  => __('Footer Menu', 'hooshmand-lab'),
    ]);
}
add_action('after_setup_theme', 'hooshmand_lab_setup');

function hooshmand_lab_enqueue_assets(): void
{
    $theme = wp_get_theme();

    wp_enqueue_style(
        'hooshmand-lab-style',
        get_stylesheet_uri(),
        [],
        $theme->get('Version')
    );

    wp_enqueue_script(
        'hooshmand-lab-script',
        get_template_directory_uri() . '/script.js',
        [],
        $theme->get('Version'),
        true
    );
}
add_action('wp_enqueue_scripts', 'hooshmand_lab_enqueue_assets');

function hooshmand_lab_register_content_types(): void
{
    register_post_type('research', [
        'labels' => [
            'name'          => __('Research Projects', 'hooshmand-lab'),
            'singular_name' => __('Research Project', 'hooshmand-lab'),
        ],
        'public'            => true,
        'has_archive'       => true,
        'menu_icon'         => 'dashicons-search',
        'rewrite'           => ['slug' => 'research'],
        'supports'          => ['title', 'editor', 'excerpt', 'thumbnail', 'page-attributes'],
        'show_in_rest'      => true,
        'publicly_queryable'=> true,
    ]);
}
add_action('init', 'hooshmand_lab_register_content_types');

function hooshmand_lab_menu_fallback(): void
{
    echo '<ul>';
    echo '<li><a href="' . esc_url(home_url('/')) . '">' . esc_html__('Home', 'hooshmand-lab') . '</a></li>';
    echo '<li><a href="' . esc_url(home_url('/research/')) . '">' . esc_html__('Research', 'hooshmand-lab') . '</a></li>';
    echo '<li><a href="' . esc_url(home_url('/publications/')) . '">' . esc_html__('Publications', 'hooshmand-lab') . '</a></li>';
    echo '<li><a href="' . esc_url(home_url('/team/')) . '">' . esc_html__('Team', 'hooshmand-lab') . '</a></li>';
    echo '<li><a href="' . esc_url(home_url('/news/')) . '">' . esc_html__('News', 'hooshmand-lab') . '</a></li>';
    echo '<li><a href="' . esc_url(home_url('/contact/')) . '">' . esc_html__('Contact', 'hooshmand-lab') . '</a></li>';
    echo '</ul>';
}

function hooshmand_lab_research_query(int $count = 3): WP_Query
{
    return new WP_Query([
        'post_type'      => 'research',
        'posts_per_page' => $count,
        'post_status'    => 'publish',
        'orderby'        => ['menu_order' => 'ASC', 'date' => 'DESC'],
    ]);
}