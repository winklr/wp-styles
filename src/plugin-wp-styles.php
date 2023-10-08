<?php
/**
 * Plugin Name: WP Styles
 * Plugin URI:
 * Description:
 * Author:      Martin Winkler
 * Version:     1.0.2
 */
add_action('wp_enqueue_styles', function () {
	wp_enqueue_style('plugin-wp-styles', plugins_url('index.css', __FILE__));
});
