<?php
/**
 * Plugin Name:       EscapeOut Game
 * Description:       Allows user to create a game
 * Version:           0.1.0
 * Requires at least: 6.6
 * Requires PHP:      7.2
 * Author:            The WordPress Contributors
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       escapeout-game
 *
 * @package           create-block
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

/**
 * used handle for game-block/index.js
 * looked at source code to find handle  - it  is the id without the -js
 */
function my_enqueue_scripts(){
    wp_localize_script(
        'create-block-escapeout-game-editor-script',
        'my_data',
        [
            'siteUrl' => get_site_url(),
            'restBase' => get_rest_url(),
        ]
    );
    wp_localize_script( 'wp-api', 'wpApiSettings', array(
        'root' => esc_url_raw( rest_url() ),
        'nonce' => wp_create_nonce( 'wp_rest' )
    ) );
}
add_action( 'enqueue_block_editor_assets',  'my_enqueue_scripts' );


register_activation_hook( __FILE__, 'escapeout_table' );
function escapeout_table() {
    global $wpdb;
    $table_name = $wpdb->prefix . 'game_score';

    $sql = "CREATE TABLE $table_name (
      id mediumint(9) NOT NULL AUTO_INCREMENT,
      postID varchar (100) NOT NULL,
      userID varchar (100) NOT NULL,
      gameID varchar (200) NOT NULL,
      userEmail varchar (200) NOT NULL,
      gameName varchar (200) NOT NULL,
      gameLink varchar (200) NOT NULL,
      designerEmail varchar (200) NOT NULL,
      designerName varchar (200),
      gameComments text,
      timeStart varchar (100),
      formattedDate varchar (100),
      timeEnd varchar (100),
      totalTime varchar (100),
      hintTime varchar (100),
      firstTime varchar (100),
      teamName varchar (100),
      completed varchar (100),
      PRIMARY KEY  (id)
    )";

    require_once( ABSPATH . 'wp-admin/includes/upgrade.php' );
    dbDelta( $sql );
}

/**
 * Register the REST API wp-learn-form-submissions-api/v1/form-submission routes
 * https://learn.wordpress.org/tutorial/wordpress-rest-api-custom-routes-endpoints/
 */
add_action( 'rest_api_init', 'escapeout_register_routes' );
function escapeout_register_routes() {
    // Register the routes
    register_rest_route(
        'escapeout/v1',
        '/game-score/',
        array(
            'methods'  => 'GET',
            'callback' => 'escapeout_get_game_score',
            'permission_callback' => '__return_true'
        )
    );
    /**
     * POST
     */
    register_rest_route(
        'escapeout/v1',
        '/game-score/',
        array(
            'methods'  => 'POST',
            'callback' => 'escapeout_create_game_score',
            'permission_callback' => '__return_true'
        )
    );

    /**
     * GET single
     */
    register_rest_route(
        'escapeout/v1',
        '/game-score/(?P<id>\d+)',
        array(
            'methods'  => 'PUT',
            'callback' => 'escapeout_update_game_score',
            'permission_callback' => '__return_true'
        )
    );

    /**
     * Update single
     *
     * ?P<{name}>{regex-pattern}
     *
     * The start of the path variable is a query string using an upper case P as the query parameter
     * name is the name of the placeholder. This will be used to create the property on the $request object, to access the path variable value
     * regex-pattern is the regular expression pattern that the value should match. In this case, \d+ means that the value should be a number.
     */
    register_rest_route(
        'escapeout/v1',
        '/game-score/(?P<id>\d+)',
        array(
            'methods'  => 'GET',
            'callback' => 'escapeout_get_game_score_by_id',
            'permission_callback' => '__return_true'
        )
    );
}
function escapeout_admin_require_permissions() {
    return current_user_can( 'edit_posts' );
}

/**
 * GET callback for the wp-learn-form-submissions-api/v1/form-submission route
 *
 * @return array|object|stdClass[]|null
 */
function escapeout_get_game_score($request) {
    $postID = $request->get_param('postID');
    $userID = $request->get_param('userID');
	$gameID = $request->get_param('gameID');
	$gameName = $request->get_param('gameName');
	$gameLink = $request->get_param('gameLink');
	$designerEmail = $request->get_param('designerEmail');
	$designerName = $request->get_param('designerName');
	$gameComments = $request->get_param('gameComments');
	$userEmail = $request->get_param('userEmail');
    $timeStart = $request->get_param('timeStart');
    $firstTime = $request->get_param('firstTime');
    $completed = $request->get_param('completed');

    global $wpdb;
    $table_name = $wpdb->prefix . 'game_score';

    if ($userEmail && $gameID) {
		if ($timeStart) {
			$results = $wpdb->get_results("SELECT * FROM `$table_name` WHERE `gameID` = '$gameID' AND `userEmail` = '$userEmail' AND `timeStart` = '$timeStart'");
		} else {
			$results = $wpdb->get_results( "SELECT * FROM `$table_name` WHERE `gameID` = '$gameID' AND `userEmail` = '$userEmail'" );
		}
    } else {
		/* is this what I really want? */
        $results = $wpdb->get_results("SELECT * FROM $table_name");
    }
    return $results;

}

/**
 * POST callback for the wp-learn-form-submissions-api/v1/form-submission route
 *
 * @param $request
 *
 * @return void
 */
function escapeout_create_game_score( $request ){
    global $wpdb;
    $table_name = $wpdb->prefix . 'game_score';

    $rows = $wpdb->insert(
        $table_name,
        array(
            'postID' => $request['postID'],
            'userID' => $request['userID'],
            'gameID' => $request['gameID'],
            'gameName' => $request['gameName'],
            'gameComments' => $request['gameComments'],
            'userEmail' => $request['userEmail'],
            'designerEmail' => $request['designerEmail'],
            'designerName' => $request['designerName'],
            'timeStart' => $request['timeStart'],
            'formattedDate' => $request['formattedDate'],
            'timeEnd' => $request['timeEnd'],
            'totalTime' => $request['totalTime'],
            'hintTime' => $request['hintTime'],
            'firstTime' => $request['firstTime'],
            'teamName' => $request['teamName'],
            'completed' => $request['completed'],
        )
    );

    return $rows;
}
function escapeout_get_game_score_by_id( $request ) {
    $id = $request['id'];
    global $wpdb;
    $table_name = $wpdb->prefix . 'game_score';

    $results = $wpdb->get_results( "SELECT * FROM $table_name WHERE id = $id" );

    return $results[0];
}


function escapeout_update_game_score( $request ) {
    global $wpdb;
    $table_name = $wpdb->prefix . 'game_score';

    $rows = $wpdb->update(
        $table_name,
        array(
            'timeEnd' => $request['timeEnd'],
            'totalTime' => $request['totalTime'],
            'hintTime' => $request['hintTime'],
            'completed' => $request['completed'],
        ),

        array(
            'id' => $request['id'],
        ),
    );

    return $rows;
}
/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function create_block_game_block_block_init() {
	register_block_type_from_metadata( __DIR__ . '/build' );
}
add_action( 'init', 'create_block_game_block_block_init' );
