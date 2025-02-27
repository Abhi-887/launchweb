<?php
session_start();

function isAuthenticated()
{
    if (!isset($_SESSION['admin']) || !$_SESSION['admin']) {
        return false;
    }

    // Check session timeout (30 minutes)
    $timeout = 30 * 60;
    if (time() - ($_SESSION['admin_time'] ?? 0) > $timeout) {
        session_destroy();
        return false;
    }

    // Update last activity time
    $_SESSION['admin_time'] = time();
    return true;
}

function requireAuth()
{
    if (!isAuthenticated()) {
        header('Location: login.php');
        exit;
    }
}
