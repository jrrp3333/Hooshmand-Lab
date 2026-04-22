<?php

declare(strict_types=1);

get_header();
?>

<section class="page-hero">
    <div class="section-inner">
        <div class="surface-card page-hero__panel">
            <span class="eyebrow"><?php esc_html_e('Team', 'hooshmand-lab'); ?></span>
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

        <div style="margin-top: 48px; padding-top: 48px; border-top: 1px solid rgba(12, 35, 64, 0.08);">
            <p style="color: var(--color-muted); font-size: 0.92rem;">
                <?php esc_html_e('Tip: Use the page editor to add team member information, roles, and contact details. Consider adding featured images for each team member to personalize this section.', 'hooshmand-lab'); ?>
            </p>
        </div>
    </div>
</section>

<?php get_footer(); ?>
