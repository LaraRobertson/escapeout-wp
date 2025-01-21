<?php
/**
 * @see https://github.com/WordPress/gutenberg/blob/trunk/docs/reference-guides/block-api/block-metadata.md#render
 */

//$cityName = $attributes['cityName'];
//$link = "<a href='" + site_url() + "?city={$cityName}'>{$cityName}</a>";
$cityURL = get_query_var('city');
$locationURL = get_query_var('location');
$authorURL = get_query_var('author');
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
		<h2>Cities</h2>
		<?php if ( !empty($cities) ) {
			echo '<ul>';
			foreach ( $cities as $city ) {
				echo '<li><a href="'. site_url() . '/games/?city=' . $city->slug . '">' . $city->name . '</a> (' . $city->count . ')</li>';
			}
			echo '</ul>';
		}?>
	</p>

<?php
} else if ($cityURL) {
	$cityURLstrip = strtr($cityURL, '-', ' ');?>
	<div>City: <?php echo ucwords($cityURLstrip) ;?></div>
	<?php
	$locations = get_terms( array(
		'taxonomy' => 'location',
		'hide_empty' => true
	) );
	?>
	<div class="flex-button" >
		<div class="inline-button"><button class="level0-hide button-hide show" data-name="level0">hide level 0</button>
			<button id="level0Show" class="level0-show  button-show hide" data-name="level0">show level 0</button></div>
		<div class="inline-button"><button class="level1-hide button-hide show" data-name="level1">hide level 1</button>
			<button class="level1-show  button-show hide" data-name="level1">show level 1</button></div>
		<div class="inline-button"><button class="level2-hide button-hide show" data-name="level2">hide level 2</button>
			<button class="level2-show  button-show hide" data-name="level2">show level 2</button></div>
		<div class="inline-button"><button class="level3-hide button-hide show" data-name="level3">hide level 2</button>
			<button class="level3-show  button-show hide" data-name="level3">show level 3</button></div>
		<div class="inline-button"><button class="eo-test-game-hide button-hide show" data-name="eo-test-game">hide testing</button>
			<button class="eo-test-game-show  button-show hide" data-name="eo-test-game">show testing</button></div>
	</div>
	<p <?php echo get_block_wrapper_attributes(); ?>>
	<h2>Locations</h2>
	<?php if ( !empty($locations) ) {
		echo '<ul>';
		foreach ( $locations as $location ) {
			if (str_contains($location->slug, $cityURL)) {
				echo '<li><a href="' . site_url() . '/games/?location=' . $location->slug . '">' . $location->name . '</a> (' . $location->count . ')</li>';
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
	<div>Location: <?php echo ucwords($locationURLstrip) ;?></div>
	<div class="flex-button" >
		<div class="inline-button"><button class="level0-hide button-hide show" data-name="level0">hide level 0</button>
			<button id="level0Show" class="level0-show  button-show hide" data-name="level0">show level 0</button></div>
		<div class="inline-button"><button class="level1-hide button-hide show" data-name="level1">hide level 1</button>
			<button class="level1-show  button-show hide" data-name="level1">show level 1</button></div>
		<div class="inline-button"><button class="level2-hide button-hide show" data-name="level2">hide level 2</button>
			<button class="level2-show  button-show hide" data-name="level2">show level 2</button></div>
		<div class="inline-button"><button class="level3-hide button-hide show" data-name="level3">hide level 2</button>
			<button class="level3-show  button-show hide" data-name="level3">show level 3</button></div>
		<div class="inline-button"><button class="eo-test-game-hide button-hide show" data-name="eo-test-game">hide testing</button>
			<button class="eo-test-game-show  button-show hide" data-name="eo-test-game">show testing</button></div>
	</div>
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
	}
	// The Query.
	$the_query = new WP_Query( $args );?>
		<div class="flex-games">
	<?php
		if ( $the_query->have_posts() ) {?>
		<?php
			while ( $the_query->have_posts() ) {
			$the_query->the_post();
			$key_1_value = get_post_meta( get_the_ID(), '_wporg_meta_key', true );
			$termLevel = get_the_terms( get_the_ID(), 'level' );
			?>
			<div class="game-card show <?php echo $key_1_value; ?> <?php if ($termLevel) {echo $termLevel[0]->slug;} ?>">
				<div class="<?php echo $key_1_value; ?>-test">TESTING</div>
				<div class="inner-game-card">
				<!-- Display the Title as a link to the Post's permalink. -->
					<div class="game-card-full">
						<h2><a href="<?php the_permalink() ?>" rel="bookmark" title="Permanent Link to <?php the_title_attribute(); ?>"><?php the_title(); ?></a></h2>
						<!-- Display the date (November 16th, 2009 format) and a link to other posts by this posts author. -->

					</div>
					<div class="game-card-full small">
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
						<h4>city:
						<?php echo '<a href="'. site_url() . '/games/?city=' . $termCity[0]->slug . '">' . $termCity[0]->name . '</a></h4>';

					}?>
						<h4>location:
						<?php
						$termLocation = get_the_terms( get_the_ID(), 'location' );
						if ($termLocation) {
							echo '<a href="' . site_url() . '/games/?location=' . $termLocation[0]->slug . '">' . $termLocation[0]->name . '</a></h4>';

						} else { ?>
							no location set

						<?php } ?>

						<h4>level:
						<?php
						if ($termLevel) {
							echo $termLevel[0]->name . '</h4> ';
						} else { ?>
							no level set
						<?php } ?>
					<small><?php the_time( 'F jS, Y' ); ?> by <?php the_author_posts_link(); ?></small>
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
	$cities = get_terms( array(
		'taxonomy' => 'city',
		'hide_empty' => true
	) );
	?>
	<p <?php echo get_block_wrapper_attributes(); ?>>
	<h2>Cities</h2>
	<?php if ( !empty($cities) ) {
		echo '<ul>';
		foreach ( $cities as $city ) {
			echo '<li><a href="'. site_url() . '/games/?city=' . $city->slug . '">' . $city->name . '</a> (' . $city->count . ')</li>';
		}
		echo '</ul>';
	}?>
	</p>
<?php
} ?>
<?php
// Restore original Post Data.
wp_reset_postdata();

