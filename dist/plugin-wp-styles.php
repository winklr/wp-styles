<?php
/**
 * Plugin Name: WP Styles
 * Plugin URI:
 * Description:
 * Author:      Martin Winkler
 * Version:     1.0.3
 */
add_action( 'wp_enqueue_scripts', 'addStyles' );
add_action( 'admin_enqueue_scripts', 'addStyles' );

function addStyles() {
	$path = plugin_dir_path( __FILE__ );
	$url = plugins_url( 'styles.css', __FILE__ );
	wp_enqueue_style( 'plugin-wp-styles', $url, array(), filemtime( $path ) );
}

add_action('body_class', function ($classes) {
  $classes[] = 'plugin-wsc';
  return $classes;
});