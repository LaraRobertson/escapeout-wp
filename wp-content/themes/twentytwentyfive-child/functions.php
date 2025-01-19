     <?php
     function fse_child_styles() {
	     wp_enqueue_style( 'fse-child-style', get_stylesheet_uri() );
     }
     add_action( 'wp_enqueue_scripts', 'fse_child_styles' );
     function tg_include_custom_post_types_in_archive_pages( $query ) {
	     if ( $query->is_main_query() && ! is_admin() && ( is_category() || is_tag() && empty( $query->query_vars['suppress_filters'] ) ) ) {
		     $query->set( 'post_type', array( 'eo-game' ) );
	     }
	     if ($query->is_author) {

		     $query->set('post_type', array('eo-game', 'post'));

	     }
     }
     add_action( 'pre_get_posts', 'tg_include_custom_post_types_in_archive_pages' );

     function reg_tag() {
	     register_taxonomy_for_object_type('post_tag', 'eo-game');
     }
     add_action('init', 'reg_tag');