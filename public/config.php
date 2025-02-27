<?php
// SMTP Configuration
define('SMTP_HOST', 'your-actual-smtp-host');  // e.g., smtp.gmail.com
define('SMTP_PORT', 587);
define('SMTP_USER', 'your-actual-email@domain.com');
define('SMTP_PASS', 'your-actual-password');
define('MAIL_FROM', 'your-site@yourdomain.com');
define('MAIL_TO', 'your-business@email.com');

// Optional: Add your reCAPTCHA keys if using Google reCAPTCHA
define('RECAPTCHA_SECRET', 'your-recaptcha-secret-key');
define('RECAPTCHA_SITE_KEY', 'your-recaptcha-site-key');
