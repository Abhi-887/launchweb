<?php
require 'config.php';
require 'db_config.php';

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json');

function saveToDatabase($name, $email, $message)
{
    $conn = getDbConnection();
    if (!$conn) {
        return false;
    }

    try {
        $stmt = $conn->prepare("
            INSERT INTO contact_submissions (name, email, message, ip_address)
            VALUES (:name, :email, :message, :ip)
        ");

        $ip = $_SERVER['REMOTE_ADDR'];

        $stmt->execute([
            ':name' => $name,
            ':email' => $email,
            ':message' => $message,
            ':ip' => $ip
        ]);

        return true;
    } catch (PDOException $e) {
        error_log("Database error: " . $e->getMessage());
        return false;
    }
}

function sendEmail($name, $email, $message)
{
    $to = MAIL_TO;
    $subject = "New Contact Form Submission from $name";
    $headers = "From: " . MAIL_FROM . "\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: text/html; charset=UTF-8\r\n";

    $emailBody = "
    <html>
    <body>
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> $name</p>
        <p><strong>Email:</strong> $email</p>
        <p><strong>Message:</strong><br>$message</p>
        <hr>
        <p><small>This message is stored in database for reference.</small></p>
    </body>
    </html>
    ";

    return mail($to, $subject, $emailBody, $headers);
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed']);
    exit;
}

$data = json_decode(file_get_contents('php://input'), true);

// Validate inputs
$name = filter_var($data['name'] ?? '', FILTER_SANITIZE_STRING);
$email = filter_var($data['email'] ?? '', FILTER_SANITIZE_EMAIL);
$message = filter_var($data['message'] ?? '', FILTER_SANITIZE_STRING);

if (empty($name) || empty($email) || empty($message)) {
    http_response_code(400);
    echo json_encode(['error' => 'All fields are required']);
    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['error' => 'Invalid email format']);
    exit;
}

// Save to database first
$savedToDb = saveToDatabase($name, $email, $message);

// Try to send email
$emailSent = sendEmail($name, $email, $message);

if ($savedToDb || $emailSent) {
    echo json_encode([
        'success' => true,
        'message' => 'Message received successfully' .
            ($savedToDb ? '' : ' (but database storage failed)') .
            ($emailSent ? '' : ' (but email notification failed)')
    ]);
} else {
    http_response_code(500);
    echo json_encode([
        'error' => 'Failed to process message'
    ]);
}
