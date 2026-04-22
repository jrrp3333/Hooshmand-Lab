<?php

declare(strict_types=1);

get_header();
?>

<section class="page-hero">
    <div class="section-inner">
        <div class="surface-card page-hero__panel">
            <span class="eyebrow"><?php esc_html_e('News', 'hooshmand-lab'); ?></span>
            <h1><?php bloginfo('name'); ?></h1>
            <p class="section-copy"><?php esc_html_e('Use posts for ongoing updates, announcements, and milestones.', 'hooshmand-lab'); ?></p>
        </div>
    </div>
</section>

<section class="content-shell">
    <div class="section-inner cards-grid">
        <?php if (have_posts()) : ?>
            <?php while (have_posts()) : the_post(); ?>
                <article <?php post_class('surface-card news-card'); ?>>
                    <span class="entry-meta"><?php echo esc_html(get_the_date()); ?></span>
                    <h2 class="card-title"><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h2>
                    <div class="entry-summary"><?php the_excerpt(); ?></div>
                </article>
            <?php endwhile; ?>
            <?php the_posts_pagination(); ?>
        <?php else : ?>
            <article class="surface-card news-card">
                <h2 class="card-title"><?php esc_html_e('No posts yet', 'hooshmand-lab'); ?></h2>
                <p><?php esc_html_e('Publish the first News post from the WordPress dashboard to populate this archive.', 'hooshmand-lab'); ?></p>
            </article>
        <?php endif; ?>
    </div>
</section>

<?php get_footer(); ?>