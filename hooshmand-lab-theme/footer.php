    </main>
    <footer class="site-footer">
        <div class="site-footer__inner">
            <section>
                <p class="site-branding__kicker"><?php esc_html_e('Research Community', 'hooshmand-lab'); ?></p>
                <h2 class="footer-title"><?php bloginfo('name'); ?></h2>
                <p><?php esc_html_e('A formal academic presence for research, student mentorship, and scientific updates.', 'hooshmand-lab'); ?></p>
            </section>

            <section>
                <h2 class="footer-title"><?php esc_html_e('Navigate', 'hooshmand-lab'); ?></h2>
                <?php
                wp_nav_menu([
                    'theme_location' => 'footer',
                    'container'      => false,
                    'fallback_cb'    => 'hooshmand_lab_menu_fallback',
                ]);
                ?>
            </section>

            <section>
                <h2 class="footer-title"><?php esc_html_e('Contact', 'hooshmand-lab'); ?></h2>
                <ul>
                    <li><?php esc_html_e('Center for Sciences', 'hooshmand-lab'); ?></li>
                    <li><?php esc_html_e('Texas A&M University-Corpus Christi', 'hooshmand-lab'); ?></li>
                    <li><a href="mailto:lab@hooshmandlab.org">lab@hooshmandlab.org</a></li>
                </ul>
            </section>
        </div>
        <div class="site-footer__meta">
            <div class="site-footer__inner" style="display:block;padding:0;">
                <span><?php echo esc_html(date_i18n('Y')); ?> <?php bloginfo('name'); ?></span>
            </div>
        </div>
    </footer>
</div>
<?php wp_footer(); ?>
</body>
</html>