<?php
/**
 * Plugin Name: Hide Today's Booking Date After Cutoff
 * Description: Hides today's date in the WooCommerce Bookings calendar if the current time is after the specified cutoff hour.
 * Version: 0.0.1
 * Author: Shameem Reza
 */

add_action( 'wp_enqueue_scripts', function() {
    if ( is_product() ) {
        wp_enqueue_script(
            'hide-booking-date-js',
            plugin_dir_url( __FILE__ ) . 'hide-booking-date.js',
            array( 'jquery' ),
            null,
            true
        );
    }
});
