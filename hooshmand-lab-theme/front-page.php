<?php

declare(strict_types=1);

get_header();

$research_query = hooshmand_lab_research_query(3);
$news_query     = new WP_Query([
    'post_type'      => 'post',
    'posts_per_page' => 3,
    'post_status'    => 'publish',
]);
?>

<section class="hero">
    <div class="section-inner hero__grid">
        <div class="hero__panel">
            <span class="eyebrow"><?php esc_html_e('Biomedical Research Lab', 'hooshmand-lab'); ?></span>
            <h1><?php esc_html_e('A more credible digital home for research, mentoring, and new findings.', 'hooshmand-lab'); ?></h1>
            <p><?php esc_html_e('This theme foregrounds lab identity, active research, and timely updates while keeping routine editing simple through WordPress.', 'hooshmand-lab'); ?></p>
            <div class="hero__actions">
                <a class="button button--primary" href="<?php echo esc_url(home_url('/research/')); ?>"><?php esc_html_e('Explore Research', 'hooshmand-lab'); ?></a>
                <a class="button button--secondary" href="<?php echo esc_url(home_url('/news/')); ?>"><?php esc_html_e('View News', 'hooshmand-lab'); ?></a>
            </div>
        </div>

        <div class="hero__aside">
            <article class="surface-card metric-card">
                <h2><?php esc_html_e('Designed for academic credibility', 'hooshmand-lab'); ?></h2>
                <p><?php esc_html_e('The first build focuses on clarity, institutional polish, and a simple admin workflow for research updates and news posts.', 'hooshmand-lab'); ?></p>
                <div class="stats-row">
                    <div class="stat">
                        <strong>3</strong>
                        <span><?php esc_html_e('editable content zones', 'hooshmand-lab'); ?></span>
                    </div>
                    <div class="stat">
                        <strong>6</strong>
                        <span><?php esc_html_e('core navigation sections', 'hooshmand-lab'); ?></span>
                    </div>
                    <div class="stat">
                        <strong>1</strong>
                        <span><?php esc_html_e('clear faculty-facing workflow', 'hooshmand-lab'); ?></span>
                    </div>
                </div>
            </article>

            <article class="surface-card contact-card">
                <span class="card-meta"><?php esc_html_e('Institutional context', 'hooshmand-lab'); ?></span>
                <h2 class="card-title"><?php esc_html_e('Texas A&M University-Corpus Christi', 'hooshmand-lab'); ?></h2>
                <p><?php esc_html_e('Use this area for the lab address, a concise mission statement, or an admissions and collaboration callout.', 'hooshmand-lab'); ?></p>
            </article>
        </div>
    </div>
</section>

<section class="section">
    <div class="section-inner">
        <div class="section-header">
            <div>
                <div class="section-kicker"><?php esc_html_e('Research focus', 'hooshmand-lab'); ?></div>
                <h2 class="section-title"><?php esc_html_e('Show the lab agenda before anything else.', 'hooshmand-lab'); ?></h2>
            </div>
            <p class="section-copy"><?php esc_html_e('This section can pull from the custom Research Projects content type or stay as editorial feature cards while the site is being populated.', 'hooshmand-lab'); ?></p>
        </div>

        <div class="cards-grid">
            <?php if ($research_query->have_posts()) : ?>
                <?php while ($research_query->have_posts()) : $research_query->the_post(); ?>
                    <article <?php post_class('surface-card research-card'); ?>>
                        <span class="card-meta"><?php esc_html_e('Research project', 'hooshmand-lab'); ?></span>
                        <h3 class="card-title"><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h3>
                        <div class="entry-summary"><?php the_excerpt(); ?></div>
                    </article>
                <?php endwhile; wp_reset_postdata(); ?>
            <?php else : ?>
                <article class="surface-card research-card">
                    <span class="card-meta"><?php esc_html_e('Template placeholder', 'hooshmand-lab'); ?></span>
                    <h3 class="card-title"><?php esc_html_e('Cellular signaling and disease mechanisms', 'hooshmand-lab'); ?></h3>
                    <p><?php esc_html_e('Replace this with a concise research summary that helps students, collaborators, and reviewers understand the lab focus immediately.', 'hooshmand-lab'); ?></p>
                </article>
                <article class="surface-card research-card">
                    <span class="card-meta"><?php esc_html_e('Template placeholder', 'hooshmand-lab'); ?></span>
                    <h3 class="card-title"><?php esc_html_e('Emerging methods and translational applications', 'hooshmand-lab'); ?></h3>
                    <p><?php esc_html_e('Use this card to highlight an active initiative, core methodology, or collaboration area with a one-paragraph description.', 'hooshmand-lab'); ?></p>
                </article>
                <article class="surface-card research-card">
                    <span class="card-meta"><?php esc_html_e('Template placeholder', 'hooshmand-lab'); ?></span>
                    <h3 class="card-title"><?php esc_html_e('Student-led projects and mentorship', 'hooshmand-lab'); ?></h3>
                    <p><?php esc_html_e('This can become a recruitment and mentoring section that signals opportunities for undergraduates, graduates, and collaborators.', 'hooshmand-lab'); ?></p>
                </article>
            <?php endif; ?>
        </div>
    </div>
</section>

<section class="section">
    <div class="section-inner grid-two">
        <div>
            <div class="section-kicker"><?php esc_html_e('Latest news', 'hooshmand-lab'); ?></div>
            <h2 class="section-title"><?php esc_html_e('Recent updates stay easy to publish.', 'hooshmand-lab'); ?></h2>
            <p class="section-copy"><?php esc_html_e('Standard WordPress posts power the news feed so your professor can publish updates without touching layout code.', 'hooshmand-lab'); ?></p>
        </div>

        <div class="cards-grid">
            <?php if ($news_query->have_posts()) : ?>
                <?php while ($news_query->have_posts()) : $news_query->the_post(); ?>
                    <article <?php post_class('surface-card news-card'); ?>>
                        <span class="entry-meta"><?php echo esc_html(get_the_date()); ?></span>
                        <h3 class="card-title"><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h3>
                        <div class="entry-summary"><?php the_excerpt(); ?></div>
                    </article>
                <?php endwhile; wp_reset_postdata(); ?>
            <?php else : ?>
                <article class="surface-card news-card">
                    <span class="entry-meta"><?php esc_html_e('Sample post flow', 'hooshmand-lab'); ?></span>
                    <h3 class="card-title"><?php esc_html_e('Publish lab milestones directly from WordPress admin', 'hooshmand-lab'); ?></h3>
                    <p><?php esc_html_e('Use posts for conference appearances, new publications, grant announcements, student awards, or major research updates.', 'hooshmand-lab'); ?></p>
                </article>
            <?php endif; ?>
        </div>
    </div>
</section>

<section class="section">
    <div class="section-inner grid-two">
        <article class="surface-card team-card">
            <span class="card-meta"><?php esc_html_e('Team visibility', 'hooshmand-lab'); ?></span>
            <h2 class="card-title"><?php esc_html_e('Make room for faculty, students, and collaborators.', 'hooshmand-lab'); ?></h2>
            <p><?php esc_html_e('The next implementation slice can turn this into a proper Team page template, but the homepage should already signal who the lab is and who belongs to it.', 'hooshmand-lab'); ?></p>
        </article>

        <article class="surface-card publication-card">
            <span class="card-meta"><?php esc_html_e('Publication credibility', 'hooshmand-lab'); ?></span>
            <h2 class="card-title"><?php esc_html_e('Publications should look curated, not buried.', 'hooshmand-lab'); ?></h2>
            <p><?php esc_html_e('A later pass can decide whether publications stay on a managed page or move into a dedicated content type. This slot keeps that priority visible from day one.', 'hooshmand-lab'); ?></p>
        </article>
    </div>
</section>

<?php get_footer(); ?>