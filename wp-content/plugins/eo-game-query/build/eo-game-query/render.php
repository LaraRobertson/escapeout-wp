<?php
/**
 * @see https://github.com/WordPress/gutenberg/blob/trunk/docs/reference-guides/block-api/block-metadata.md#render
 */

//$cityName = $attributes['cityName'];
//$link = "<a href='" + site_url() + "?city={$cityName}'>{$cityName}</a>";
$cityURL = get_query_var('city');
$locationURL = get_query_var('location');
$authorURL = get_query_var('author');
$bgColor = $attributes['bgColor'];
$cityMapLinks = $attributes['cityArray'];
//print_r($cityMapLinks);
?>

<?php
if (!$cityURL && !$locationURL && !$authorURL) {?>
	<?php
	$cities = get_terms( array(
		'taxonomy' => 'city',
		'hide_empty' => true
	) );
	?>
	<p <?php echo get_block_wrapper_attributes(); ?>>
	<h2>Find A Game</h2>
		<h3>Cities</h3>
		<?php if ( !empty($cities) ) {
			echo '<ul>';
			foreach ( $cities as $city ) {
				echo '<li><a href="'. site_url() . '/find-a-game/?city=' . $city->slug . '">' . $city->name . '</a> (' . $city->count . ')</li>';
			}
			echo '</ul>';
		}?>
	</p>

<?php
} else if ($cityURL) {
	$cityURLstrip = strtr($cityURL, '-', ' ');?>
	<p <?php echo get_block_wrapper_attributes(); ?>>
	<h2>Find A Game</h2>
	<div>City: <?php echo ucwords($cityURLstrip) ;?></div>
	<?php
	foreach ( $cityMapLinks as $mapLink ) {
		if ($mapLink['name'] === $cityURL) {
			echo '<div class="map-link"><a href="' . $mapLink['link'] . '">Map of Game Locations for ' . ucwords($cityURLstrip) . '</a></div>';
			break;
		} else {
			echo '';
		}
	}

	?>
	<?php
	$locations = get_terms( array(
		'taxonomy' => 'location',
		'hide_empty' => true
	) );
	?>
	<?php if ( !empty($locations) ) {?>
		<h4>Locations</h4>
		<?php echo '<ul>';
		foreach ( $locations as $location ) {
			if (str_contains($location->slug, $cityURL)) {
				echo '<li><a href="' . site_url() . '/find-a-game/?location=' . $location->slug . '">' . $location->name . '</a> (' . $location->count . ')</li>';
			} else {
				echo '';
			}
		}
		echo '</ul>';
	} ?>
	</p>
<?php
} else if ($locationURL) {
	$locationURLstrip = strtr($locationURL, '-', ' ');?>

	<div class="sticky-tool-bar">
		<div class="flex-button" >
			<div  class="inline-button"><button style="color:<?php echo $attributes['linkColor']?>;background-color:<?php echo $attributes['bgColor']?>" class="level-0-hide button-hide show" data-name="level-0">hide level 0</button>
				<button id="level0Show" style="color:<?php echo $attributes['linkColor']?>;background-color:<?php echo $attributes['bgColor']?>" class="level-0-show  button-show hide" data-name="level-0">show level 0</button></div>
			<div class="inline-button"><button style="color:<?php echo $attributes['linkColor']?>;background-color:<?php echo $attributes['bgColor']?>" class="level-1-hide button-hide show" data-name="level-1">hide level 1</button>
				<button style="color:<?php echo $attributes['linkColor']?>;background-color:<?php echo $attributes['bgColor']?>" class="level-1-show  button-show hide" data-name="level-1">show level 1</button></div>
			<div class="inline-button"><button style="color:<?php echo $attributes['linkColor']?>;background-color:<?php echo $attributes['bgColor']?>" class="level-2-hide button-hide show" data-name="level-2">hide level 2</button>
				<button style="color:<?php echo $attributes['linkColor']?>;background-color:<?php echo $attributes['bgColor']?>" class="level-2-show  button-show hide" data-name="level-2">show level 2</button></div>
			<div class="inline-button"><button style="color:<?php echo $attributes['linkColor']?>;background-color:<?php echo $attributes['bgColor']?>" class="level-3-hide button-hide show" data-name="level-3">hide level 3</button>
				<button style="color:<?php echo $attributes['linkColor']?>;background-color:<?php echo $attributes['bgColor']?>" class="level-3-show  button-show hide" data-name="level-3">show level 3</button></div>
			<div class="inline-button"><button style="color:<?php echo $attributes['linkColor']?>;background-color:<?php echo $attributes['bgColor']?>" class="eo-test-game-hide button-hide show" data-name="eo-test-game">hide testing</button>
				<button style="color:<?php echo $attributes['linkColor']?>;background-color:<?php echo $attributes['bgColor']?>" class="eo-test-game-show  button-show hide" data-name="eo-test-game">show testing</button></div>
		</div>
	</div>
	<div>Location: <?php echo ucwords($locationURLstrip) ;?></div>
<?php } ?>
<?php
if ($cityURL || $locationURL || $authorURL) {
	if ($cityURL && !$locationURL && !$authorURL) {
	$args = array(
		'post_type' => array( 'eo-game' ),
		'orderby' => 'meta_value',
		'order' => 'ASC',
		'meta_key' => '_wporg_meta_key',
		'tax_query' => array(
			array(
				'taxonomy' => 'city',
				'field' => 'slug',
				'terms' => $cityURL,
			)
		),
	);
	} else if ($locationURL && !$authorURL) {

	$args = array(
			'post_type' => array( 'eo-game' ),
			'orderby' => 'meta_value',
			'order' => 'ASC',
			'meta_key' => '_wporg_meta_key',
			'tax_query' => array(
				array(
					'taxonomy' => 'location',
					'field' => 'slug',
					'terms' => $locationURL,
				)
			),
		);
	} else if ($authorURL) {
		 $args = array(
			 'author__in' => array( $authorURL ),
			'post_type' => array( 'eo-game' ),
			'orderby' => 'meta_value',
			'order' => 'ASC',
			'meta_key' => '_wporg_meta_key',
		);
	}?>
	<?php
	if ($authorURL || $locationURL) {
		// The Query.
		$the_query = new WP_Query( $args );?>
		<div class="flex-games" >
		<?php
		if ( $the_query->have_posts() ) {?>
			<?php
			while ( $the_query->have_posts() ) {
				$the_query->the_post();
				$key_1_value = get_post_meta( get_the_ID(), '_wporg_meta_key', true );
				$termLevel = get_the_terms( get_the_ID(), 'level' );
				?>
				<div class="game-card show <?php echo $key_1_value; ?> <?php if ($termLevel) {echo $termLevel[0]->slug;} ?>"
				style="background-color:<?php echo $attributes['bgColor']?>">
				<div style="background-color:<?php echo $attributes['bgColor']?>;color:<?php echo $attributes['textColor']?>" class="<?php echo $key_1_value; ?>-test">TESTING</div>
				<div class="inner-game-card">
					<!-- Display the Title as a link to the Post's permalink. -->
					<div class="game-card-full" style="color:<?php echo $attributes['textColor']?>">
						<h2><a style="color:<?php echo $attributes['linkColor']?>" href="<?php the_permalink() ?>" rel="bookmark" title="Permanent Link to <?php the_title_attribute(); ?>"><?php the_title(); ?></a></h2>
						<!-- Display the date (November 16th, 2009 format) and a link to other posts by this posts author. -->

					</div>
					<div class="game-card-full small" style="color:<?php echo $attributes['textColor']?>">
						<?php echo esc_html( get_the_excerpt() ); ?>
					</div>
				</div>
				<div class="inner-game-card1">
					<?php //the_post_thumbnail('thumbnail', ['class' => 'my image classes']); ?>
					<?php
					/*add_filter( 'wp_sprintf', function( $fragment ) {
						$fragment = ( '%z' === $fragment ) ? '' : $fragment;
						return $fragment;
					} );
					$args2 = array(
						'template' => '%z%l', 'term_template' => '%2$s'
					);
					$taxonomies = get_the_taxonomies( get_the_ID(), $args2);
					//$taxonomies = get_the_taxonomies( get_the_ID(), array( 'template' => '%z%l', 'term_template' => '%2$s' ) );
					if(!empty($taxonomies)){
						foreach($taxonomies as $taxonomy){
							echo $taxonomy . ' <br /> ';
						}
					}*/
					if (!$cityURL) {
					$termCity = get_the_terms( get_the_ID(), 'city' );?>
					<div style="color:<?php echo $attributes['textColor']?>">city:
						<?php echo '<a style="color:' . $attributes['linkColor'] . '" href="'. site_url() . '/find-a-game/?city=' . $termCity[0]->slug . '">' . $termCity[0]->name . '</a></div>';
						}?>
						<div style="color:<?php echo $attributes['textColor']?>">
							<?php
							$termLocation = get_the_terms( get_the_ID(), 'location' );
							if ($termLocation) {
								echo '<a style="color:' . $attributes['linkColor'] . '" href="' . site_url() . '/find-a-game/?location=' . $termLocation[0]->slug . '">' . $termLocation[0]->name . '</a></div>';

							} else { ?>
							no location set</div>

					<?php } ?>

						<div style="color:<?php echo $attributes['textColor']?>">level:<strong>
								<?php
								if ($termLevel) {
									echo $termLevel[0]->name . '</strong></div> ';
								} else { ?>
								no level set</div>
					<?php } ?>
						<div style="color:<?php echo $attributes['textColor']?>">published on <?php the_time( 'F jS, Y' ); ?>
							by
							<?php
							$author_id = get_the_author_meta( 'ID' );
							$author_display_name = get_the_author_meta( 'display_name' );
							echo '<a style="color:' . $attributes['linkColor'] . '" href="' . get_author_posts_url($author_id) . '">' . $author_display_name . '</a>';?>
						</div>
					</div>
				</div>
				<?php
				} ?>
				<?php
			} else {
				esc_html_e( 'Sorry, no posts matched your criteria!.' );
			} ?>
		</div>
	<?php
	} ?>




	<?php
	$cities = get_terms( array(
		'taxonomy' => 'city',
		'hide_empty' => true
	) );
	?>
	<hr />
	<p <?php echo get_block_wrapper_attributes(); ?>>
		<h4>All Cities</h4>
		<?php if ( !empty($cities) ) {
			echo '<ul>';
			foreach ( $cities as $city ) {
				echo '<li><a href="'. site_url() . '/find-a-game/?city=' . $city->slug . '">' . $city->name . '</a> (' . $city->count . ')</li>';
			}
			echo '</ul>';
		}?>
	</p>
<?php
} ?>
<?php
// Restore original Post Data.
wp_reset_postdata();

