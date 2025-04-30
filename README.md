# Booking Cutoff for WooCommerce Bookings

This mini plugin disables same-day bookings after a specific cutoff time in WooCommerce Bookings.

## What It Does

Once the current time passes the defined cutoff hour (e.g. 14:00), today's date will be blocked from selection on the booking calendar.

## How It Works

The plugin uses JavaScript to hide today’s date on the calendar UI if the current time (based on WordPress timezone) is equal to or later than the set cutoff hour.

## Setup

1. Upload the plugin ZIP in **Plugins → Add New → Upload Plugin**.
2. Activate the plugin.
3. By default, the cutoff is set to `14` (2 PM). You can edit this in `booking-cutoff.js` inside the plugin’s `assets` folder: `const cutoffHour = 14;`

## Notes
- This works for Bookable Products using the Date Picker only.
- Make sure your WordPress timezone is set correctly under Settings → General.
- Caching may affect script visibility, test in a private/incognito window.

## Support
This is a custom solution provided as-is. For advanced changes, I recommend hiring a developer or [WooExpert](https://woocommerce.com/development-services/).