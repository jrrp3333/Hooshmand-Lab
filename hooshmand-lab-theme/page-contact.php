<?php

declare(strict_types=1);

get_header();
?>

<section class="page-hero">
    <div class="section-inner">
        <div class="surface-card page-hero__panel">
            <span class="eyebrow"><?php esc_html_e('Contact', 'hooshmand-lab'); ?></span>
            <h1><?php the_title(); ?></h1>
        </div>
    </div>
</section>

<section class="content-shell">
    <div class="section-inner grid-two">
        <?php while (have_posts()) : the_post(); ?>
            <article <?php post_class('surface-card page-hero__panel'); ?>>
                <div class="entry-content"><?php the_content(); ?></div>
            </article>
        <?php endwhile; ?>

        <div class="surface-card contact-card">
            <span class="card-meta"><?php esc_html_e('Quick info', 'hooshmand-lab'); ?></span>
            <h2 class="card-title"><?php esc_html_e('Hooshmand Lab', 'hooshmand-lab'); ?></h2>
            <p>
                <strong><?php esc_html_e('Center for Sciences', 'hooshmand-lab'); ?></strong><br>
                <?php esc_html_e('Texas A&M University-Corpus Christi', 'hooshmand-lab'); ?><br>
                <?php esc_html_e('Corpus Christi, TX 78412', 'hooshmand-lab'); ?>
            </p>
            <p>
                <strong><?php esc_html_e('Email', 'hooshmand-lab'); ?></strong><br>
                <a href="mailto:lab@hooshmandlab.org">lab@hooshmandlab.org</a>
            </p>
            <p style="color: var(--color-muted); font-size: 0.92rem; margin-top: 18px;">
                <?php esc_html_e('Edit the Contact page content above to add a contact form, office hours, or inquiry instructions. Update the quick info card in the theme code to reflect current email, office location, or phone if needed.', 'hooshmand-lab'); ?>
            </p>
        </div>
    </div>
</section>

<?php get_footer(); ?>
