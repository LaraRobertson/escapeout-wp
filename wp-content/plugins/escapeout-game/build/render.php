<?php
/**
 * PHP file to use when rendering the block type on the server to show on the front end.
 *
 * The following variables are exposed to the file:
 *     $attributes (array): The block attributes.
 *     $content (string): The block default content.
 *     $block (WP_Block): The block instance.
 *
 * @see https://github.com/WordPress/gutenberg/blob/trunk/docs/reference-guides/block-api/block-metadata.md#render
 */


// Generates a unique id for aria-controls.
$unique_id = wp_unique_id( 'p-' );

// Function to iteratively search for a
// given key=>value


$clue_icon = array(
    array(
        'id'    => 'diary',
        'label' => __( 'Diary' ),
        'icon'  => '<svg height="40" width="40" viewBox="230 230 750 750"
                        xmlns="http://www.w3.org/2000/svg">
                        <g>
                            <rect width="1200" height="1200" fill="transparent"/>
                            <path
                                d="m864.8 252.38h-469.66c-37.785 0-68.457 26.688-68.457 59.395v539.04c0 0.91406 0.23437 1.7422 0.29687 2.6562-0.23437 1.9766-0.29687 4.0156-0.29687 6.0508 0 33.562 27.277 60.84 60.84 60.84h123.48v13.816c0 5.0781 2.7148 9.5938 7.0273 11.867 4.8984 2.4805 10.746 1.3594 14.438-2.8047l25.477-28.426 26.895 28.871c2.4219 2.5664 5.5781 3.9258 8.8555 3.9258 1.8906 0 3.7773-0.44141 5.5195-1.3594 4.2227-2.1836 6.8789-6.7305 6.8789-11.777l-0.03125-14.051h258.74c4.6953 0 8.4727-3.7773 8.4727-8.4727v-27.129c0-4.6953-3.7773-8.4727-8.4727-8.4727h-18.656v-33.477h18.656c4.6953 0 8.4727-3.7773 8.4727-8.4727v-573.55c0.089844-4.6953-3.7773-8.4727-8.4727-8.4727zm-8.4414 546.3h-417.92v-529.29h417.92zm-512.71-486.91c0-23.438 23.113-42.391 51.453-42.391h26.301v529.39h-33.918c-17.238 0-32.797 7.2617-43.895 18.805v-505.8zm167.32 564.51h-123.48c-9.0625 0-16.77-7.7031-16.77-16.77 0-9.0625 7.7031-16.77 16.77-16.77h123.48zm78.141 47.172-19.719-21.168c-3.1016-3.3359-7.1719-5.1367-11.484-5.1367h-0.14844c-4.3672 0.089844-8.5312 1.9766-11.57 5.3711l-18.215 20.34v-80.059h61.137zm267.24-20.043h-250.24v-10.215h250.27l0.03125 10.215zm-27.16-27.129h-223.09v-33.477h223.17v33.477zm27.16-50.48h-468.87c-18.598 0-33.711 15.113-33.711 33.711 0 18.598 15.113 33.711 33.711 33.711h123.48v10.215l-123.48-0.03125c-24.176 0-43.895-19.66-43.895-43.895 0-24.176 19.66-43.895 43.895-43.895h468.84zm-369.03-100.34c17.152 0 31.055 13.992 31.055 31.055 0 4.6953 3.7773 8.4727 8.4727 8.4727h240.91c4.6953 0 8.4727-3.7773 8.4727-8.4727 0-17.152 13.992-31.055 31.055-31.055 4.6953 0 8.4727-3.7773 8.4727-8.4727v-365.84c0-4.6953-3.7773-8.4727-8.4727-8.4727-17.152 0-31.055-13.992-31.055-31.055 0-4.6953-3.7773-8.4727-8.4727-8.4727h-240.86c-4.6953 0-8.4727 3.7773-8.4727 8.4727 0 17.152-13.992 31.055-31.055 31.055-4.6953 0-8.4727 3.7773-8.4727 8.4727v365.84c-0.058594 4.6055 3.7188 8.4727 8.4141 8.4727zm8.5312-366.61c19.719-3.543 35.305-19.129 38.848-38.848h225.5c3.543 19.719 19.129 35.305 38.848 38.848v350.34c-19.719 3.543-35.305 19.129-38.848 38.848h-225.57c-3.543-19.719-19.129-35.305-38.848-38.848v-350.34zm52.754 161.8h197.55c4.6953 0 8.4727-3.7773 8.4727-8.4727v-94.465c0-4.6953-3.7773-8.4727-8.4727-8.4727l-197.55 0.03125c-4.6953 0-8.4727 3.7773-8.4727 8.4727v94.375c0 4.7539 3.7773 8.5312 8.4727 8.5312zm8.4727-94.465h180.55v77.461h-180.55zm4.6055 188.78c0-4.6953 3.7773-8.4727 8.4727-8.4727h85.168c4.6953 0 8.4727 3.7773 8.4727 8.4727 0 4.6953-3.7773 8.4727-8.4727 8.4727h-85.109c-4.6641 0-8.5312-3.7773-8.5312-8.4727zm132.19 8.4727c-4.6953 0-8.4727-3.7773-8.4727-8.4727 0-4.6953 3.7773-8.4727 8.4727-8.4727h28.637c4.6953 0 8.4727 3.7773 8.4727 8.4727 0 4.6953-3.7773 8.4727-8.4727 8.4727zm-72.414 34.895c0 4.6953-3.7773 8.4727-8.4727 8.4727h-42.773c-4.6953 0-8.4727-3.7773-8.4727-8.4727 0-4.6953 3.7773-8.4727 8.4727-8.4727h42.773c4.6055 0.03125 8.4727 3.8086 8.4727 8.4727zm109.49 0c0 4.6953-3.7773 8.4727-8.4727 8.4727h-71.023c-4.6953 0-8.4727-3.7773-8.4727-8.4727 0-4.6953 3.7773-8.4727 8.4727-8.4727h71.023c4.6953 0.03125 8.4727 3.8086 8.4727 8.4727z"/>
                        </g>
                    </svg> ',
    ),
    array(
        'id'    => 'tornPaper',
        'label' => __( 'A Torn Piece of Paper' ),
        'icon'  => '<svg width="40" height="40" viewBox="15 15 512 512" xmlns="http://www.w3.org/2000/svg">
                     <path d="m85.332 437.33c0 2.3086 0.75 4.5547 2.1328 6.4023l40 53.332c2.0156 2.6875 5.1797 4.2656 8.5352 4.2656s6.5195-1.5781 8.5352-4.2656l31.465-41.973 31.465 41.973c2.0977 2.5547 5.2305 4.0352 8.5352 4.0352s6.4375-1.4805 8.5352-4.0352l31.465-41.973 31.465 41.973c2.0977 2.5547 5.2305 4.0352 8.5352 4.0352s6.4375-1.4805 8.5352-4.0352l31.465-41.973 31.465 41.973c2.0156 2.6875 5.1797 4.2656 8.5352 4.2656s6.5195-1.5781 8.5352-4.2656l40-53.332c1.3828-1.8477 2.1328-4.0938 2.1328-6.4023v-320c0.082031-0.65234 0.082031-1.3164 0-1.9727-0.18359-0.90625-0.48828-1.7891-0.90625-2.6133l-0.53516-0.74609c-0.46094-0.82422-1.0352-1.5781-1.707-2.2383l-96-96c-0.64844-0.65234-1.3828-1.207-2.1875-1.6562l-0.58594-0.32031c-0.82812-0.5-1.7266-0.875-2.668-1.1172-0.6875-0.09375-1.3867-0.09375-2.0781 0h-202.67c-8.4844 0-16.625 3.3711-22.625 9.3711-6.0039 6-9.375 14.141-9.375 22.629zm304.91-330.66h-52.801 0.003906c-1.7969 0-3.5195-0.71484-4.7891-1.9844-1.2734-1.2695-1.9844-2.9922-1.9844-4.7891v-52.801zm-283.57-64c0-5.8906 4.7734-10.668 10.664-10.668h192v67.895c0 7.4531 2.9609 14.602 8.2344 19.875 5.2695 5.2695 12.418 8.2305 19.875 8.2305h67.891v305.76l-29.332 39.148-31.52-41.977c-2.0039-2.6719-5.1406-4.25-8.4805-4.2656-3.3555 0-6.5195 1.5781-8.5352 4.2656l-31.465 41.973-31.465-41.973c-2.0977-2.5547-5.2305-4.0352-8.5352-4.0352s-6.4375 1.4805-8.5352 4.0352l-31.465 41.973-31.465-41.973c-2.0156-2.6875-5.1797-4.2656-8.5352-4.2656s-6.5195 1.5781-8.5352 4.2656l-31.465 41.973-29.332-39.145z"/>
                     <path d="m138.67 106.67h122.66c5.8906 0 10.668-4.7773 10.668-10.668s-4.7773-10.668-10.668-10.668h-122.66c-5.8906 0-10.668 4.7773-10.668 10.668s4.7773 10.668 10.668 10.668z"/>
                     <path d="m138.67 186.67h229.33c5.8906 0 10.668-4.7773 10.668-10.668s-4.7773-10.668-10.668-10.668h-229.33c-5.8906 0-10.668 4.7773-10.668 10.668s4.7773 10.668 10.668 10.668z"/>
                     <path d="m138.67 246.67h229.33c5.8906 0 10.668-4.7773 10.668-10.668s-4.7773-10.668-10.668-10.668h-229.33c-5.8906 0-10.668 4.7773-10.668 10.668s4.7773 10.668 10.668 10.668z"/>
                     <path d="m138.67 306.67h229.33c5.8906 0 10.668-4.7773 10.668-10.668s-4.7773-10.668-10.668-10.668h-229.33c-5.8906 0-10.668 4.7773-10.668 10.668s4.7773 10.668 10.668 10.668z"/>
                     <path d="m368 366.67c5.8906 0 10.668-4.7773 10.668-10.668s-4.7773-10.668-10.668-10.668h-229.33c-5.8906 0-10.668 4.7773-10.668 10.668s4.7773 10.668 10.668 10.668z"/>
                    </svg>',
    ),
);

$nonce = wp_create_nonce( 'wp-rest' );
// Adds the global state.

$playZones = array();
$puzzleArray = array();
$clueArray = array();
$hintArray = array();
// need to concatenate puzzle arrays from all zones...
$paIndex = 0;
$caIndex = 0;
for ($i = 0; $i < count($attributes['playZones']); $i++) {
    if ($attributes['playZones'][$i]["disabled"] === "No") {
        $playZones[$i]['index'] = $i;
        $playZones[$i]['id'] = $attributes['playZones'][$i]["id"];
	    $playZones[$i]['zoneID'] = $attributes['playZones'][$i]["id"];
        $playZones[$i]['name'] = $attributes['playZones'][$i]["name"];
        $playZones[$i]['description'] = $attributes['playZones'][$i]["description"];
        $playZones[$i]['order'] = $attributes['playZones'][$i]["order"];
	    $playZones[$i]['lat'] = $attributes['playZones'][$i]["lat"];
	    $playZones[$i]['long'] = $attributes['playZones'][$i]["long"];
        $playZones[$i]['imageID'] = $attributes['playZones'][$i]["imageID"];
        if ($attributes['playZones'][$i]["imageID"] != '') {
            $playZones[$i]['zoneHasImage'] = true;
        } else {
            $playZones[$i]['zoneHasImage'] = false;
        }
        if (!empty($attributes['playZones'][$i]['puzzleArray'])) {
            for ($j = 0; $j < count($attributes['playZones'][$i]['puzzleArray']); $j++) {
                // index would be 1,2,3 (zone 2, pa1) - so length would be 3
                // don't need disabled ones
                if ($attributes['playZones'][$i]['puzzleArray'][$j]["disabled"] === "No") {
                    $puzzleArray[$paIndex]["puzzleID"] = 'input' . $paIndex;
                    $puzzleArray[$paIndex]["zoneID"] = $attributes['playZones'][$i]["id"];
                    $puzzleArray[$paIndex]['name'] = $attributes['playZones'][$i]['puzzleArray'][$j]["name"];
                    $puzzleArray[$paIndex]['description'] = $attributes['playZones'][$i]['puzzleArray'][$j]["description"];
                    $puzzleArray[$paIndex]['question'] = $attributes['playZones'][$i]['puzzleArray'][$j]["question"];
                    $puzzleArray[$paIndex]['answer'] = $attributes['playZones'][$i]['puzzleArray'][$j]["answer"];
                    $puzzleArray[$paIndex]['order'] = $attributes['playZones'][$i]['puzzleArray'][$j]["order"];
                    $puzzleArray[$paIndex]['modalOpen'] = false;
                    $puzzleArray[$paIndex]['guess'] = "";
                    $puzzleArray[$paIndex]['solved'] = false;
                    $paIndex++;
                }
            }
        }
        if (!empty($attributes['playZones'][$i]['clueArray'])) {
            for ($j = 0; $j < count($attributes['playZones'][$i]['clueArray']); $j++) {
                // index would be 1,2,3 (zone 2, pa1) - so length would be 3
                if ($attributes['playZones'][$i]['clueArray'][$j]["disabled"] === "No") {
                    $clueArray[$caIndex]["clueID"] = 'clue' . $caIndex;
                    $clueArray[$caIndex]["zoneID"] = $attributes['playZones'][$i]["id"];
                    $clueArray[$caIndex]['name'] = $attributes['playZones'][$i]['clueArray'][$j]["name"];
                    $clueArray[$caIndex]['text'] = $attributes['playZones'][$i]['clueArray'][$j]["text"];
                    $clueArray[$caIndex]['iconPath'] = $attributes['playZones'][$i]['clueArray'][$j]["iconPath"];
                    $clueArray[$caIndex]['imageID'] = $attributes['playZones'][$i]['clueArray'][$j]["imageID"];
                    if ($attributes['playZones'][$i]['clueArray'][$j]["imageID"] != '') {
                        $clueArray[$caIndex]['clueHasImage'] = true;
                    } else {
                        $clueArray[$caIndex]['clueHasImage'] = false;
                    }
                    $clueArray[$caIndex]['order'] = $attributes['playZones'][$i]['clueArray'][$j]["order"];
                    $clueArray[$caIndex]['clueDisplayOn'] = false;
                    $caIndex++;
                }
            }
        }
        if (!empty($attributes['playZones'][$i]['hintArray'])) {
            for ($j = 0; $j < count($attributes['playZones'][$i]['hintArray']); $j++) {
                // index would be 1,2,3 (zone 2, pa1) - so length would be 3
                if ($attributes['playZones'][$i]['hintArray'][$j]["disabled"] === "No") {
                $hintArray[$caIndex]["hintID"] = 'hint' . $caIndex;
                $hintArray[$caIndex]["zoneID"] = $attributes['playZones'][$i]["id"];
                $hintArray[$caIndex]['name'] = $attributes['playZones'][$i]['hintArray'][$j]["name"];
                $hintArray[$caIndex]['text'] = $attributes['playZones'][$i]['hintArray'][$j]["text"];
                $hintArray[$caIndex]['order'] = $attributes['playZones'][$i]['hintArray'][$j]["order"];
                $hintArray[$caIndex]['disabled'] = $attributes['playZones'][$i]['hintArray'][$j]["disabled"];
                $hintArray[$caIndex]['hintDisplayOn'] = false;
                $hintArray[$caIndex]['hintUsed'] = false;
                $caIndex++;
                }
            }
        }
    }
}
$siteUrl = get_site_url();
wp_interactivity_state(
    'create-block',
    array(
        'isDark'    => false,
        'darkText'  => esc_html__( 'Switch to Light', 'game-block' ),
        'lightText' => esc_html__( 'Switch to Dark', 'game-block' ),
        'themeText'	=> esc_html__( 'Switch to Dark', 'game-block' ),
        'userID' => get_current_user_id(),
        'user' => get_current_user(),
        'zoneID' => '',
        'zoneDescription' => $playZones[0]['description'],
        'puzzleModalVisible' => false,
        'puzzleAnswer' => '',
        'alertVisible' => false,
        'alertText' => '',
        'quitVisible' => false,
        'hintWarningVisible'=> false,
        'helpVisible' => false,
        'zoneHelpVisible'=> false,
        'teamHelpVisible'=> false,
        'modalPublicMapOpen'=> false,
        'modalPublicImageOpen'=> false,
        'modalGameMapOpen'=> false,
        'solvedCount' => 0,
        'puzzleTotal' => count($puzzleArray),
        'showWaiver' => false,
        'errorMessage' => '',
        'startTime' => '',
        'gameScoreID' => '',
        'hintTime' => 0,
        'gameScore' => '',
        'showGameScore' => false,
        'firstTime' => '',
        'siteURL' => $siteUrl,
        'nonce' => $nonce
    )
);
//print_r($attributes);
//https://stackoverflow.com/questions/2699086/sort-a-2d-array-by-a-column-value
usort($playZones, fn($a, $b) => $a['order'] <=> $b['order']);
usort($puzzleArray, fn($a, $b) => $a['order'] <=> $b['order']);
usort($clueArray, fn($a, $b) => $a['order'] <=> $b['order']);
$current_user_id = get_current_user_id();
$current_user = wp_get_current_user();
$user_email = $current_user->user_email;
$designer_email = get_the_author_meta('user_email', get_the_author_meta( 'ID' ));
$designer_name = get_the_author_meta('display_name', get_the_author_meta( 'ID' ));
$gamePost_id = get_the_ID();
$upload_dir   = wp_upload_dir();

$assetDir = "/wp-content/plugins/escapeout-game/assets/";
$firstZoneID = $playZones[0]['id'];
$ourContext = array('teamName' => '', "waiverSigned" => $attributes["waiverSigned"], 'showClueArray' => [], 'firstZoneID' => $firstZoneID, 'hintArray' => $hintArray, 'clueArray' => $clueArray, 'puzzleArray' => $puzzleArray, 'playZones' => $playZones, 'gameStart' => false, 'gameID' => $attributes['gameID'], 'gameName' => $attributes['gameName'], 'userEmail' => $user_email, 'designerEmail' => $designer_email, 'designerName' => $designer_name, 'userID' => $current_user_id, 'postID' => $gamePost_id, 'solved' => false, 'showCongrats' => false, 'showSorry' => false);
//print_r($ourContext);
?>
<div
    class="game-block-frontend"
    style="background-color:<?php echo $attributes['bgColor']?>"
	<?php echo get_block_wrapper_attributes(); ?>
	data-wp-interactive="create-block"
	<?php echo wp_interactivity_data_wp_context( $ourContext); ?>
	data-wp-watch="callbacks.checkGameStart"
	data-wp-class--dark-theme="state.isDark"
>
	<div class="game-start-bar"
		id="<?php echo esc_attr( $unique_id ); ?>"
		data-wp-bind--hidden="context.gameStart"
	>
            <!--<a href="<?php echo $siteUrl ?>">home</a>-->
        <h2><?php echo $attributes['gameName'] ?></h2>
        <div>
            <?php echo $content; ?>
	    </div>
        <div class="details">
            <ul>

                <li><div>Public Map shows some Zone Locations, others may be revealed in game:</div>
            <button class="button"
                    data-wp-on-async--click="actions.togglePublicMap"
                    aria-controls="<?php echo esc_attr( $unique_id ); ?>"
            >
		        <?php esc_html_e( 'View Public Map', 'game-block' ); ?>
            </button>
                    <button class="button"
                            data-wp-on-async--click="actions.togglePublicImage"
                            aria-controls="<?php echo esc_attr( $unique_id ); ?>"
                    >
		                <?php esc_html_e( 'View Zone 1 Image', 'game-block' ); ?>
                    </button>
                </li>
                <li>
            <strong>walking distance</strong>: <?php echo $attributes['walkingDistance'] ?>
                </li>
            </ul>
        </div>
            <hr/>
        <div class="show-score" data-wp-bind--hidden="!state.showGameScore" >
            <div class="game-score" data-wp-text="state.gameScore"></div>
            <div>You can play again but only scores where first time = "yes" are counted for the leader board.</div>
            <hr />
        </div>
        <div class="game-text">Before Starting the Game you must Sign the Waiver and Pick a Team Name
            <img data-wp-on--click="actions.setTeamHelpVisible" class="question" src="<?php echo $siteUrl . $assetDir . "question-FFFFFF.svg" ?>" alt="question about zones" data-wp-bind--hidden="!state.isDark" />
            <img data-wp-on--click="actions.setTeamHelpVisible" class="question"  src="<?php echo $siteUrl . $assetDir . "question.svg" ?>" alt="question about zones" data-wp-bind--hidden="state.isDark" />
            </div>
        <ul>

            <li>
        <div>Pick Team Name</div>
        <input
                id="team-name"
                aria-invalid="false"
                type="text"
                value="<?php echo $ourContext['teamName'] ?>"
        />
        </li>
            <li>
                <div>Waiver:
                    <span class="red-alert" data-wp-bind--hidden="context.waiverSigned">waiver needs to be signed</span>
                    <span class="red-alert" data-wp-bind--hidden="!context.waiverSigned">waiver is signed</span></div>
                <button class="button"
                        data-wp-bind--hidden="state.showWaiver"
                        data-wp-on-async--click="actions.showWaiverToggle"
                        aria-controls="<?php echo esc_attr( $unique_id ); ?>"
                >
			        <?php esc_html_e( 'Show Waiver', 'game-block' ); ?>
                </button>
                <div class="waiver-container" data-wp-bind--hidden="!state.showWaiver">
                    <div class="waiver-top"><?php echo $attributes["waiverTop"] ?></div>
                    <div class="waiver-body"><?php echo $attributes["waiverBody"] ?></div>
                    <button class="button"
                            data-wp-bind--hidden="context.waiverSigned"
                            data-wp-on-async--click="actions.signWaiver"
                            aria-controls="<?php echo esc_attr( $unique_id ); ?>"
                    >
				        <?php esc_html_e( 'Sign Waiver', 'game-block' ); ?>
                    </button>
                    <button class="button"
                            data-wp-bind--hidden="!context.waiverSigned"
                            data-wp-on-async--click="actions.showWaiverToggle"
                            aria-controls="<?php echo esc_attr( $unique_id ); ?>"
                    >
				        <?php esc_html_e( 'Close Waiver', 'game-block' ); ?>
                    </button>
                </div>
            </li>
        </ul>
        <div class="red-alert" data-wp-text="state.errorMessage"></div>
        <div>
            <button class="button"
                    data-wp-bind--aria-expanded="context.isOpen"
                    data-wp-on-async--click="actions.gameStart"
                    aria-controls="<?php echo esc_attr( $unique_id ); ?>"
            >
                <?php esc_html_e( 'Start Game - Time Starts', 'game-block' ); ?>
            </button>
        </div>
        <div class="help-container-start" data-wp-bind--hidden="!state.helpVisible">
            <div class='help-inner'>
                <div data-wp-bind--hidden="!state.teamHelpVisible">
                    Making the player sign the waiver helps the player understand that they should not harm their surroundings.
                    <br ><br />
                    The Team Name is the public name for game results. Your team can be 1 person or many.
                    It is simply the name associated with the playing of this game, this time.
                </div>
                <button class="button"
                        data-wp-on--click="actions.closeHelp"
                        aria-controls="<?php echo esc_attr( $unique_id ); ?>"
                >
					<?php esc_html_e( 'Close', 'game-block' ); ?>
                </button>
            </div>
        </div>
        <div>
            <div class="modalContainerMap" data-wp-class--showmodal="state.modalPublicMapOpen" data-wp-on--click="actions.togglePublicMap">
                <div class="modal from-right">
                    <header class="modal_header">
                        <div><strong>Public Map</strong> <span class="small">(click on right arrow or icons for zone name(s))</span> </div>
                    </header>
                    <main class="modal_content">
                        <iframe src="<?php echo $attributes['map1'] ?>" width="100%" height="400px"></iframe>
                    </main>
                    <footer class="modal_footer">
                        <button class="modal-close">Close</button>
                    </footer>
                </div>
            </div>
            <div class="modalContainerMap" data-wp-class--showmodal="state.modalPublicImageOpen" data-wp-on--click="actions.togglePublicImage">
                <div class="modal from-right">
                    <header class="modal_header">
                        <div><strong>First Zone - Image of Center</strong></div>
                    </header>
                    <main class="modal_content">
	        <?php echo wp_get_attachment_image( $attributes['playZones'][0]["imageID"], "thumbnail", "", array( "class" => "img-responsive" ) );  ?>
                        <footer class="modal_footer">
                            <button class="modal-close">Close</button>
                        </footer>
                </div>
        </div>
    </div>
    <!-- end game start bar - hidden while playing game -->
    <!--<div class="game-containerx" data-wp-class--hide-game-container="!context.gameStart">gameStart true</div><br />
    <div class="game-containery" data-wp-class--hide-game-container="context.gameStart">gameStart false</div>-->

    <div class="modalContainer2 gameModal"
         data-wp-class--showmodal="context.gameStart" >
        <div class="modal from-top">

    <div class="game-container"
         style="background-color:<?php echo $attributes['bgColor']?>"
         data-wp-class--dark-theme="state.isDark">
        <div class="puzzle-solved" data-wp-context='{ "counter": 0 }' data-wp-watch="callbacks.logCounter">
            <p>Puzzles Solved? <span data-wp-text="state.solvedCount"></span>/<span data-wp-text="state.puzzleTotal"></span></p>
            <!--<button data-wp-on--click="actions.increaseCounter">+</button>
            <button data-wp-on--click="actions.decreaseCounter">-</button>-->
        </div>
        <div class="button-bar">
            <!-- check if gameMap (context true/false -> added a game map block and created an anchor) -->
            <!-- <a href="#gameMap" class="button">Zone Map</a>-->
            <button class="button" data-wp-on--click="">
                Zone Map
            </button>
            <button class="button"
                    data-wp-on--click="actions.toggleTheme"
                    data-wp-text="state.themeText"
            ></button>
            <button class="button"
                    data-wp-on--click="actions.quitAlertOpen"
                    aria-controls="<?php echo esc_attr( $unique_id ); ?>"
            >
                <?php esc_html_e( 'Quit', 'game-block' ); ?>
            </button>
        </div>
        <div aria-label="Time" class="time">
            <div class="small">time started: <span data-wp-text="state.formattedTimeStart"></span> | hint time: <span data-wp-text="state.hintTime"></span> </div>
        </div>
        <div class="item-header" >Zone
            <img  data-wp-on--click="actions.setZoneHelpVisible" class="question" src="<?php echo $siteUrl . $assetDir . "question-FFFFFF.svg" ?>" alt="question about zones" data-wp-bind--hidden="!state.isDark" />
            <img data-wp-on--click="actions.setZoneHelpVisible" class="question"  src="<?php echo $siteUrl . $assetDir . "question.svg" ?>" alt="question about zones" data-wp-bind--hidden="state.isDark" />
        </div>
        <div class="zone-holder">
            <?php foreach($ourContext['playZones'] as $playZone) { ?>
                <div data-wp-on--click="actions.setZoneVisible" <?php echo wp_interactivity_data_wp_context($playZone) ?> data-wp-class--zone-border="callbacks.zoneBorder" class="zone-icon-container">
                    <img src="<?php echo $siteUrl . $assetDir . "zone-FFFFFF.svg" ?>" alt="<?php echo $playZone['name'] ?>" data-wp-bind--hidden="!state.isDark" />
                    <img src="<?php echo $siteUrl . $assetDir . "zone.svg" ?>" alt="<?php echo $playZone['name'] ?>" data-wp-bind--hidden="state.isDark" />
                    <div class="zone-text"><?php echo $playZone['name'] ?></div>
                </div>

            <?php } ?>
        </div>
       <!--<div class="zone-description" data-wp-bind--hidden="callbacks.zoneDescription"><?php echo $playZone['description'] ?>7</div>-->
        <div class="zone-description" data-wp-text="state.zoneDescription" data-wp-bind--hidden="!callbacks.zoneDescription"></div>
	    <?php foreach($ourContext['playZones'] as $playZone) { ?>
            <div class="zone-description" <?php echo wp_interactivity_data_wp_context($playZone) ?>>
                <div data-wp-bind--hidden="callbacks.hideItemByZone">
				    <?php echo wp_get_attachment_image( $playZone["imageID"], "thumbnail", "", array( "class" => "img-responsive" ) );  ?>
                </div>
            </div>
	    <?php } ?>

        <div class="item-header">Puzzles</div>
        <div class="puzzle-holder">
            <?php foreach($ourContext['puzzleArray'] as $puzzle) { ?>
            <div  <?php echo wp_interactivity_data_wp_context($puzzle) ?>>
                <div data-wp-bind--hidden="callbacks.hideItemByZone">
                    <div>
                        <div class="puzzle-item" data-wp-on--click="actions.setPuzzleModalVisible"  data-wp-bind--hidden="context.solved">
                            <svg width="80" height="80" version="1.1" viewBox="0 0 1200 1200" xmlns="http://www.w3.org/2000/svg">
                                <g>
                                    <rect width="1200" height="1200" fill="transparent"/>
                                    <path d="m839.8 323.2h-479.61c-11.562 0-22.09 4.6719-29.715 12.191-7.6328 7.5195-12.371 17.887-12.371 29.285v411.08c0 11.395 4.7383 21.766 12.371 29.285 7.6328 7.5195 18.152 12.191 29.715 12.191h479.61c11.562 0 22.09-4.6719 29.715-12.191 7.6328-7.5195 12.371-17.887 12.371-29.285v-411.08c0-11.395-4.7383-21.766-12.371-29.285-7.6328-7.5195-18.152-12.191-29.715-12.191zm-463.49 88.375c4.3594 0 8.3359 1.7617 11.215 4.6094 2.8867 2.8398 4.6797 6.7578 4.6797 11.055v63.547c0 4.3008-1.793 8.2148-4.6797 11.055s-6.8555 4.6094-11.215 4.6094-8.3359-1.7695-11.215-4.6094c-2.8867-2.8398-4.6797-6.7578-4.6797-11.055v-63.547c0-4.3008 1.793-8.2148 4.6797-11.055 2.8867-2.8398 6.8555-4.6094 11.215-4.6094zm0 222.42c4.3594 0 8.3359 1.7695 11.215 4.6094 2.8867 2.8398 4.6797 6.7578 4.6797 11.055v63.547c0 4.3008-1.793 8.2148-4.6797 11.055-2.8867 2.8398-6.8555 4.6094-11.215 4.6094s-8.3359-1.7617-11.215-4.6094c-2.8789-2.8477-4.6797-6.7578-4.6797-11.055v-63.547c0-4.3008 1.793-8.2148 4.6797-11.055 2.8867-2.8398 6.8555-4.6094 11.215-4.6094zm-8.2891 110.15c-5.6211-1.4648-10.656-4.3906-14.652-8.3359-5.8789-5.7969-9.5312-13.801-9.5312-22.609v-63.547c0-8.8125 3.6484-16.816 9.5312-22.609 3.9961-3.9375 9.0312-6.8633 14.652-8.3359v-96.996c-5.6211-1.4648-10.656-4.3906-14.652-8.3359-5.8789-5.7969-9.5312-13.801-9.5312-22.609v-63.547c0-8.8125 3.6484-16.816 9.5312-22.609 3.9961-3.9375 9.0312-6.8633 14.652-8.3359v-26.648c0-4.5117 3.7109-8.168 8.2891-8.168h447.36c4.5781 0 8.2891 3.6562 8.2891 8.168v401.15c0 4.5117-3.7109 8.168-8.2891 8.168l-447.36-0.003906c-4.5781 0-8.2891-3.6562-8.2891-8.168v-26.648zm16.582-125.43v-96.996c5.6211-1.4648 10.656-4.3906 14.652-8.3359 5.8789-5.7969 9.5312-13.801 9.5312-22.609v-63.547c0-8.8125-3.6484-16.816-9.5312-22.609-3.9961-3.9375-9.0312-6.8633-14.652-8.3359v-18.477h430.78v384.81l-430.78-0.003906v-18.477c5.6211-1.4648 10.656-4.3906 14.652-8.3359 5.8789-5.7969 9.5312-13.801 9.5312-22.609v-63.547c0-8.8125-3.6484-16.816-9.5312-22.609-3.9961-3.9375-9.0312-6.8633-14.652-8.3359zm306.92 53.09 10.066 44.535c0.1875 0.72656 0.28125 1.4805 0.25781 2.2656-0.12891 4.4961-3.9219 8.0391-8.4883 7.9141l-43.18-1.2305c-0.55859 0.007813-1.125-0.039063-1.6914-0.13672-4.4883-0.83203-7.4453-5.0859-6.6055-9.5156l8.125-41.98c-2.9609-2.2812-5.4922-5.0547-7.4805-8.1992-3.0469-4.8359-4.8047-10.52-4.8047-16.59 0-8.6914 3.5742-16.559 9.3555-22.254 5.7812-5.6992 13.762-9.2188 22.582-9.2188 8.8203 0 16.801 3.5234 22.582 9.2188 5.7812 5.6992 9.3555 13.566 9.3555 22.254 0 5.4648-1.4297 10.625-3.9453 15.137-1.625 2.9102-3.6953 5.5391-6.1289 7.793zm-31.566 37.469 7.3242-37.824c0.11328-0.53516 0.17188-1.0898 0.17969-1.625v-0.17188-0.007812c-0.015625-1.125-0.27344-2.2148-0.72656-3.2109v-0.023437l-0.066406-0.12109-0.039063-0.082031-0.039062-0.074219-0.054688-0.10547-0.03125-0.054687-0.074218-0.13672c-0.53516-0.96094-1.2695-1.8203-2.1758-2.5078h-0.007812l-0.14453-0.11328c-0.42188-0.30859-0.88281-0.58203-1.3672-0.80859-2.5156-1.2539-4.6484-3.1875-6.1445-5.5625-1.4453-2.2969-2.2812-5.0273-2.2812-7.9648 0-4.1797 1.7148-7.9648 4.4961-10.699s6.6211-4.4297 10.859-4.4297 8.0781 1.6914 10.859 4.4297c2.7812 2.7344 4.4961 6.5234 4.4961 10.699 0 2.6602-0.67969 5.1445-1.875 7.2852-1.2461 2.2383-3.0625 4.1328-5.2539 5.5-3.2266 2.0195-4.5586 5.8711-3.4766 9.3047l8.8125 38.973-23.27-0.66406zm-128.73-232.87c25.383 0 48.367 10.141 65 26.531 16.633 16.391 26.926 39.039 26.926 64.055s-10.285 47.664-26.926 64.055c-16.633 16.391-39.613 26.531-65 26.531-25.383 0-48.359-10.141-65-26.531-16.633-16.391-26.926-39.039-26.926-64.055s10.285-47.664 26.926-64.055c16.633-16.391 39.613-26.531 65-26.531zm34.469 56.617c8.8203 8.6914 14.277 20.707 14.277 33.969 0 13.27-5.457 25.277-14.277 33.969-8.8203 8.6914-21.008 14.07-34.469 14.07-13.461 0-25.648-5.3789-34.469-14.07-8.8203-8.6914-14.277-20.707-14.277-33.969 0-13.27 5.457-25.277 14.277-33.969 8.8203-8.6914 21.008-14.07 34.469-14.07 13.461 0 25.648 5.3789 34.469 14.07zm-74.301-17.062-7.1055-7.043c10.844-8.5234 24.121-14.156 38.648-15.727v9.9297c-11.781 1.4727-22.582 6.0312-31.543 12.84zm-24.977 42.863h-10.074c1.6094-14.457 7.4297-27.668 16.219-38.414l7.1055 7.043c-7.0273 8.8867-11.742 19.633-13.254 31.371zm11.949 46.016-7.3398 6.8086c-7.9336-10.375-13.18-22.875-14.691-36.477h10.074c1.4141 10.996 5.6445 21.129 11.949 29.668zm44.566 26.027v9.9297c-15.395-1.6641-29.391-7.8906-40.566-17.281l7.3398-6.8086c9.2812 7.5352 20.699 12.598 33.23 14.16zm48.125-12.84 7.1055 7.043c-10.844 8.5234-24.121 14.156-38.648 15.727v-9.9297c11.781-1.4727 22.582-6.0312 31.543-12.84zm24.977-42.863h10.074c-1.6094 14.457-7.4297 27.668-16.219 38.414l-7.1055-7.043c7.0273-8.8867 11.742-19.633 13.246-31.371zm-11.949-46.016 7.3398-6.8086c7.9336 10.375 13.18 22.875 14.691 36.477h-10.074c-1.4141-10.996-5.6445-21.129-11.949-29.668zm-44.566-26.027v-9.9297c15.395 1.6641 29.391 7.8906 40.566 17.281l-7.3398 6.8086c-9.2812-7.5352-20.699-12.598-33.23-14.16zm223.96-12.113c2.3516 0 4.4961 0.95312 6.0547 2.4922 1.5586 1.5352 2.5312 3.6484 2.5312 5.9688v133.55c0 2.3203-0.96875 4.4297-2.5312 5.9688-1.5625 1.543-3.7031 2.4922-6.0625 2.4922s-4.4961-0.95312-6.0547-2.4922c-1.5586-1.5352-2.5312-3.6484-2.5312-5.9688v-133.55c0-2.3203 0.96875-4.4375 2.5312-5.9688 1.5586-1.5352 3.7031-2.4922 6.0625-2.4922zm0-16.34c6.9297 0 13.227 2.7891 17.781 7.2773 4.5586 4.4883 7.3828 10.691 7.3828 17.523v133.55c0 6.832-2.8281 13.027-7.3828 17.523-4.5586 4.4883-10.852 7.2773-17.781 7.2773-6.9297 0-13.227-2.7891-17.781-7.2773-4.5586-4.4883-7.3828-10.691-7.3828-17.523v-133.55c0-6.832 2.8281-13.027 7.3828-17.523 4.5586-4.4883 10.852-7.2773 17.781-7.2773zm-214.38 74.719c4.5703 4.5039 7.3984 10.73 7.3984 17.609s-2.8281 13.105-7.3984 17.609c-4.5703 4.5039-10.891 7.293-17.863 7.293-6.9766 0-13.293-2.7891-17.863-7.293-4.5703-4.5039-7.3984-10.73-7.3984-17.609s2.8281-13.105 7.3984-17.609c4.5703-4.5039 10.891-7.293 17.863-7.293 6.9766 0 13.293 2.7891 17.863 7.293zm-17.863-23.633c11.555 0 22.016 4.6172 29.594 12.078 7.5703 7.4648 12.258 17.773 12.258 29.164 0 11.387-4.6836 21.695-12.258 29.164-7.5703 7.4648-18.039 12.078-29.594 12.078-11.555 0-22.016-4.6172-29.594-12.078-7.5703-7.4648-12.258-17.773-12.258-29.164 0-11.387 4.6836-21.695 12.258-29.164 7.5703-7.4648 18.039-12.078 29.594-12.078zm-98.719 307.82h-43.871v43.234h43.871zm380.86 0h-43.871v43.234h43.871z" fill-rule="evenodd"/>
                                </g>
                            </svg>
                        </div>
                        <div class="puzzle-item" data-wp-bind--hidden="!context.solved">

                            <svg width="80" height="80" version="1.1" viewBox="0 0 1200 1200" xmlns="http://www.w3.org/2000/svg">
                                <defs>
                                    <clipPath id="a">
                                        <path d="m222.14 235h755.71v730h-755.71z"/>
                                    </clipPath>
                                </defs>
                                <rect width="1200" height="1200" fill="transparent"/>
                                <g clip-path="url(#a)">
                                    <path d="m953.43 298.79h-135.53l-108.7-61.211-3.6523-1.7656h-3.2734c-7.8125 0-14.109 6.3008-14.109 14.109v11.082h-100.76v37.785h-340.83c-13.477 0-24.434 10.961-24.434 24.438v555.57c0 13.602 10.957 24.562 24.434 24.562h0.75781v50.383h125.95v-50.383h214.12v37.785h100.76v9.0703c0 7.8086 6.2969 14.105 14.105 14.105l4.0312-0.25 107.82-60.711h12.594v50.383h125.95v-50.383h0.75391c13.477 0 24.434-10.957 24.434-24.434l0.003906-555.7c0-13.477-10.957-24.438-24.434-24.438zm-605.33 629.76h-75.57v-25.191h75.57zm25.191-49.875v-0.50391h-125.95v0.75391l-0.75781-554.95h340.83v25.191h-285.28c-16.375 0-29.598 13.223-29.598 29.598v444.61c0 16.375 13.223 29.598 29.598 29.598h285.28v25.191zm214.12-378.36h-37.785v-113.36h-226.71v113.36h-25.191v-121.54c0-2.3906 2.0156-4.4062 4.4102-4.4062h285.28zm-239.31 277.1h50.383v12.594h-50.383zm50.379-25.191h-50.383v-12.594h50.383zm-50.379 62.977h50.383v12.594h-50.383zm75.57-75.57h25.191v88.168h-25.191zm50.383 37.785h50.383v12.594h-50.383zm50.379-25.191h-50.383v-12.594h50.383zm-50.379 62.977h50.383v12.594h-50.383zm75.57-100.76h-226.71v113.36h-20.781c-2.3945 0-4.4102-2.0156-4.4102-4.4062v-134.14h289.69v138.55h-37.785zm-25.191-88.168h-50.383v-12.594h50.383zm-50.379 25.191h50.383v12.594h-50.383zm50.379-62.977h-50.383v-12.594h50.383zm-75.57 75.57h-25.191v-88.168h25.191zm-100.76-50.379h50.383v12.594h-50.383zm50.379-25.191h-50.383v-12.594h50.383zm-50.379 62.977h50.383v12.594h-50.383zm239.31 12.594h-37.785v-113.36h-226.71v113.36h-25.191v-138.55h289.69zm-62.977-201.52h-50.383v-12.594h50.383zm-50.379 25.191h50.383v12.594h-50.383zm50.379-62.977h-50.383v-12.594h50.383zm-75.57 75.57h-25.191v-88.168h25.191zm-100.76-50.379h50.383v12.594h-50.383zm50.379-25.191h-50.383v-12.594h50.383zm-50.379 62.977h50.383v12.594h-50.383zm264.5 428.24v-629.76h75.57v629.76zm100.76-647.02 53.152 29.848h-1.8906l125.07 70.281v43.078c-6.9258 0-12.594 5.668-12.594 12.594s5.668 12.594 12.594 12.594v12.594c-6.9258 0-12.594 5.668-12.594 12.594s5.668 12.594 12.594 12.594v251.91c-6.9258 0-12.594 5.668-12.594 12.594s5.668 12.594 12.594 12.594v12.594c-6.9258 0-12.594 5.668-12.594 12.594s5.668 12.594 12.594 12.594v41.941l-176.33 99.25zm214.12 659.61h-75.57v-25.191h75.57zm25.191-50.379h-91.82l54.035-30.48v-57.688h12.594c6.9258 0 12.594-5.668 12.594-12.594s-5.668-12.594-12.594-12.594h-12.594v-12.594h12.594c6.9258 0 12.594-5.668 12.594-12.594s-5.668-12.594-12.594-12.594h-12.594v-251.91h12.594c6.9258 0 12.594-5.668 12.594-12.594 0-6.9258-5.668-12.594-12.594-12.594h-12.594v-12.594h12.594c6.9258 0 12.594-5.668 12.594-12.594 0-6.9258-5.668-12.594-12.594-12.594h-12.594v-58.828l-52.648-29.598 90.434-0.50391z"/>
                                </g>
                                <path d="m662.98 310.38c0 6.957-5.6367 12.594-12.594 12.594-6.957 0-12.594-5.6367-12.594-12.594s5.6367-12.598 12.594-12.598c6.957 0 12.594 5.6406 12.594 12.598"/>
                                <path d="m662.98 385.95c0 6.957-5.6367 12.594-12.594 12.594-6.957 0-12.594-5.6367-12.594-12.594 0-6.957 5.6367-12.594 12.594-12.594 6.957 0 12.594 5.6367 12.594 12.594"/>
                                <path d="m662.98 814.18c0 6.957-5.6367 12.594-12.594 12.594-6.957 0-12.594-5.6367-12.594-12.594 0-6.957 5.6367-12.594 12.594-12.594 6.957 0 12.594 5.6367 12.594 12.594"/>
                                <path d="m662.98 738.61c0 6.957-5.6367 12.594-12.594 12.594-6.957 0-12.594-5.6367-12.594-12.594s5.6367-12.598 12.594-12.598c6.957 0 12.594 5.6406 12.594 12.598"/>
                                <path d="m662.98 461.52c0 6.957-5.6367 12.598-12.594 12.598-6.957 0-12.594-5.6406-12.594-12.598 0-6.9531 5.6367-12.594 12.594-12.594 6.957 0 12.594 5.6406 12.594 12.594"/>
                                <path d="m662.98 889.75c0 6.957-5.6367 12.598-12.594 12.598-6.957 0-12.594-5.6406-12.594-12.598 0-6.9531 5.6367-12.594 12.594-12.594 6.957 0 12.594 5.6406 12.594 12.594"/>
                                <path d="m738.55 663.04c-6.9258 0-12.594 5.668-12.594 12.594 0 6.9258 5.668 12.594 12.594 12.594 27.836 0 50.508-22.672 50.508-50.508v-75.32c0-27.836-22.672-50.508-50.508-50.508-6.9258 0-12.594 5.668-12.594 12.594s5.668 12.594 12.594 12.594c13.98 0 25.316 11.336 25.316 25.316v75.32c0 13.863-11.336 25.324-25.316 25.324z"/>
                                <path d="m738.55 461.52c-6.9258 0-12.594 5.668-12.594 12.594s5.668 12.594 12.594 12.594c41.691 0 75.699 34.008 75.699 75.699v75.32c0 41.691-34.008 75.699-75.699 75.699-6.9258 0-12.594 5.668-12.594 12.594s5.668 12.594 12.594 12.594c55.672 0 100.89-45.219 100.89-100.89v-75.32c0-55.668-45.219-100.89-100.89-100.89z"/>
                            </svg>
                        </div>
                    </div>
                </div>
                <!-- puzzle modal / puzzle needs an id-->

                <div>
                    <div class="modalContainerPuzzle" data-wp-class--showmodal="context.modalOpen" data-wp-bind--hidden="context.solved">
                        <div class="modal from-right">
                            <header class="modal_header">
                                <div class="modal_header-clueDetails"><?php echo $puzzle["name"] ?></div>
                                <button class="close" data-wp-on--click="actions.setPuzzleModalHidden">
                                    close</button>
                            </header>
                            <main class="modal_content">

                                <label><?php echo $puzzle["question"] ?></label><br />
                                <input
                                        id="<?php echo $puzzle["puzzleID"] ?>"
                                        aria-invalid="false"
                                        type="text"
                                        value="<?php echo $puzzle["guess"] ?>"
                                /><br />
                                <button data-wp-on--click="actions.guessAttempt" class="modal-close">check answer</button>
                                <div class="correct-message" data-wp-class--correct-message--visible="context.solved">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" class="bi bi-emoji-smile" viewBox="0 0 16 16">
                                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                                        <path d="M4.285 9.567a.5.5 0 0 1 .683.183A3.498 3.498 0 0 0 8 11.5a3.498 3.498 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.498 4.498 0 0 1 8 12.5a4.498 4.498 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5z" />
                                    </svg>
                                    <p>That is correct!</p>
                                </div>
                                <div class="incorrect-message" data-wp-class--incorrect-message--visible='context.showSorry'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" class="bi bi-emoji-frown" viewBox="0 0 16 16">
                                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                                        <path d="M4.285 12.433a.5.5 0 0 0 .683-.183A3.498 3.498 0 0 1 8 10.5c1.295 0 2.426.703 3.032 1.75a.5.5 0 0 0 .866-.5A4.498 4.498 0 0 0 8 9.5a4.5 4.5 0 0 0-3.898 2.25.5.5 0 0 0 .183.683zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5z" />
                                    </svg>
                                    <p>Sorry, try again.</p>
                                </div>
                            </main>
                            <footer class="modal_footer">
                                <button data-wp-on--click="actions.setPuzzleModalHidden" class="modal-close">Close</button>
                            </footer>
                        </div>
                    </div>
                </div>

            </div>
            <?php } ?>
        </div>
        <div class="item-header">Clues</div>
        <div class="clue-holder">
            <?php foreach($ourContext['clueArray'] as $clue) { ?>
                <div class="clue-item"  <?php echo wp_interactivity_data_wp_context($clue) ?> data-wp-bind--hidden="callbacks.hideItemByZone">
                        <div>
                            <div data-wp-on--click="actions.setClueDisplayToggle" data-wp-bind--hidden="!state.isDark">
                                white icon
                            </div>
                            <div data-wp-on--click="actions.setClueDisplayToggle" data-wp-bind--hidden="state.isDark">
                              <img src="<?php echo $siteUrl . $clue["iconPath"] . ".svg" ?>" alt="<?php echo $clue["name"] ?>" />
                            </div>
                            <div class="clue-item" data-wp-bind--hidden="!context.clueDisplayOn">
                                <div><?php echo $clue["text"] ?></div>
                                <div data-wp-bind--hidden="!context.clueHasImage" data-wp-on--click="actions.setClueBigImageToggle">
                                    <?php echo wp_get_attachment_image( $clue["imageID"], "thumbnail", "", array( "class" => "img-responsive" ) );  ?>
                                </div>
                                <button class="button"
                                        data-wp-on--click="actions.setClueDisplayToggle"
                                        aria-controls="<?php echo esc_attr( $unique_id ); ?>"
                                >
                                    <?php esc_html_e( 'Close Help', 'game-block' ); ?>
                                </button>
                            </div>
                        </div>
                </div>
            <?php } ?>
        </div>
        <div class="item-header">Hints</div>
        <div class="hint-holder">
            <?php foreach($ourContext['hintArray'] as $hint) { ?>
                <div class="hint-item"  <?php echo wp_interactivity_data_wp_context($hint) ?> data-wp-bind--hidden="callbacks.hideItemByZone">
                    <div>
                        <button class="button"
                                data-wp-on--click="actions.setHintDisplayOn"
                                aria-controls="<?php echo esc_attr( $unique_id ); ?>"
                        >
                            <?php echo $hint["name"] ?>
                        </button>
                        <div class="hint-item" data-wp-bind--hidden="!context.hintDisplayOn">
                            <div><?php echo $hint["text"] ?></div>
                            <button class="button"
                                    data-wp-on--click="actions.setHintDisplayToggle"
                                    aria-controls="<?php echo esc_attr( $unique_id ); ?>"
                            >
                                <?php esc_html_e( 'Close', 'game-block' ); ?>
                            </button>
                        </div>
                    </div>
                    <div class="alert-container" data-wp-bind--hidden="!state.hintWarningVisible">
                        <div class='alert-inner'>Do You Really Want To See Hint? It adds 5 minutes to your score.<br/>
                            <button class="button"
                                    data-wp-on--click="actions.openHint"
                                    aria-controls="<?php echo esc_attr( $unique_id ); ?>"
                            >
                                <?php esc_html_e( 'Yes', 'game-block' ); ?>
                            </button>
                            <button class="button"
                                    data-wp-on--click="actions.quitWarningClose"
                                    aria-controls="<?php echo esc_attr( $unique_id ); ?>"
                            >
                                <?php esc_html_e( 'No', 'game-block' ); ?>
                            </button>
                        </div>
                    </div>
                </div>
            <?php } ?>
        </div>

    </div>
        <div class="help-container" data-wp-bind--hidden="!state.helpVisible">
            <div class='help-inner'>
                <div data-wp-bind--hidden="!state.zoneHelpVisible"><?php echo $attributes["zoneText"] ?></div>
                <button class="button"
                        data-wp-on--click="actions.closeHelp"
                        aria-controls="<?php echo esc_attr( $unique_id ); ?>"
                >
                    <?php esc_html_e( 'Close', 'game-block' ); ?>
                </button>
            </div>
        </div>
        <div class="alert-container" data-wp-bind--hidden="!state.alertVisible">
            <div class='alert-inner' data-wp-text="state.alertText"></div>
        </div>
        <div class="alert-container" data-wp-bind--hidden="!state.quitVisible">
        <div class='alert-inner'>Do You Really Want To Quit?<br/>
            <button class="button"
                    data-wp-on--click="actions.quit"
                    aria-controls="<?php echo esc_attr( $unique_id ); ?>"
            >
                <?php esc_html_e( 'Yes', 'game-block' ); ?>
            </button>
            <button class="button"
                    data-wp-on--click="actions.quitAlertClose"
                    aria-controls="<?php echo esc_attr( $unique_id ); ?>"
            >
                <?php esc_html_e( 'No', 'game-block' ); ?>
            </button>
        </div>
        </div>
    </div>


        </div>
    </div>

</div>