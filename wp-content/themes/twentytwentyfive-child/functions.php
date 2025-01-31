     <?php
     function fse_child_styles() {
	     wp_enqueue_style( 'fse-child-style', get_stylesheet_uri(), array(), '1.2', 'all' );
     }
     add_action( 'wp_enqueue_scripts', 'fse_child_styles' );
     function tg_include_custom_post_types_in_archive_pages( $query ) {
	    if ( $query->is_main_query() && ! is_admin() && ( is_category() || is_tag() && empty( $query->query_vars['suppress_filters'] ) ) ) {
		     $query->set( 'post_type', array( 'eo-game', 'post' ) );
	     }
     }
     add_action( 'pre_get_posts', 'tg_include_custom_post_types_in_archive_pages' );

     /* causes a little error in author post screen
     function tg_include_custom_post_types_in_author_pages( $query ) {
	     if ($query->is_author) {

		     $query->set('post_type', array('eo-game') );
		     remove_action( 'pre_get_posts', 'tg_include_custom_post_types_in_author_pages' );

	     }
     }
     add_action( 'pre_get_posts', 'tg_include_custom_post_types_in_author_pages' );*/

     function reg_tag() {
	     register_taxonomy_for_object_type('post_tag', 'eo-game');
     }
     add_action('init', 'reg_tag');

     /* added meta box so only admin can change test vs live on post by authors
      - see below for extra classes and styles to hide meta box */

    // https://learn.wordpress.org/lesson/custom-post-type-data/#:~:text=Then%2C%20when%20editing%20a%20custom,a%20name%20and%20a%20value.
     function wporg_add_custom_box() {
	     add_meta_box(
		     'wporg_box_id',                 // Unique ID
		     'Test or Live game',      // Box title
		     'wporg_custom_box_html',  // Content callback, must be of type callable
		     'eo-game'                          // Post type
	     );
     }
     add_action( 'add_meta_boxes', 'wporg_add_custom_box' );

     function wporg_custom_box_html( $post ) {
	     $value = get_post_meta( $post->ID, '_wporg_meta_key', true );
	     ?>
	     <label for="wporg_field">Admin Only (change to Live when ready)</label>
	     <select name="wporg_field" id="wporg_field" class="postbox">
		     <option value="eo-test-game" <?php selected( $value, 'eo-test-game' ); ?>>Test Game</option>
		     <option value="eo-live-game" <?php selected( $value, 'eo-live-game' ); ?>>Live Game</option>
	     </select>
	     <?php
     }

     function wporg_save_postdata( $post_id ) {
	     if ( array_key_exists( 'wporg_field', $_POST ) ) {
		     update_post_meta(
			     $post_id,
			     '_wporg_meta_key',
			     $_POST['wporg_field']
		     );
	     }
     }
     add_action( 'save_post', 'wporg_save_postdata' );
     /* end add meta box */

     /* added class so can hide meta box with test vs live on post by authors */
     add_filter( 'admin_body_class', 'admin_body_class' );
     function admin_body_class( $classes ) {
	     // Wrong: No space in the beginning/end.
	     //$classes .= 'my-class1 my-class2';
	     $user = wp_get_current_user();
	     $roles = ( array ) $user->roles;
	     if( $roles[0] ){
		     $classes .= ' user-role-'.$roles[0].' ';
	     }
	     // Right: Add a leading space and a trailing space.
	     //$classes .= ' my-class1 my-class2 ';

	     return $classes;
     }
     function my_admin_style() {
	     wp_enqueue_style(
		     'my-admin-styles',
		     get_stylesheet_directory_uri() . '/style-admin.css'
	     );
     }
     add_action('admin_enqueue_scripts', 'my_admin_style');
     function weplugins_query_vars( $qvars ) {
	     $qvars[] = 'city';
	     $qvars[] = 'location';
	     $qvars[] = 'level';
	     return $qvars;
     }
     add_filter( 'query_vars', 'weplugins_query_vars' );