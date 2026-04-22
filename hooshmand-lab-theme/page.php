<?php

declare(strict_types=1);

get_header();
?>

<section class="page-hero">
    <div class="section-inner">
        <div class="surface-card page-hero__panel">
            <span class="eyebrow"><?php esc_html_e('Page', 'hooshmand-lab'); ?></span>
            <h1><?php the_title(); ?></h1>
        </div>
    </div>
</section>

<section class="content-shell">
    <div class="section-inner">
        <?php while (have_posts()) : the_post(); ?>
            <article <?php post_class('surface-card page-hero__panel'); ?>>
                <div class="entry-content"><?php the_content(); ?></div>
            </article>
        <?php endwhile; ?>
    </div>
</section>

<?php get_footer(); ?>