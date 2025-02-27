<?php
require '../db_config.php';
require 'auth.php';

requireAuth();  // Add this line to enforce authentication

session_start();

$conn = getDbConnection();
$submissions = [];

if ($conn) {
    try {
        $stmt = $conn->query("
            SELECT * FROM contact_submissions 
            ORDER BY created_at DESC
        ");
        $submissions = $stmt->fetchAll(PDO::FETCH_ASSOC);
    } catch (PDOException $e) {
        $error = "Failed to load submissions";
    }
}
?>

<!DOCTYPE html>
<html>

<head>
    <title>Contact Submissions</title>
    <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
</head>

<body class="bg-gray-100">
    <div class="container mx-auto px-4 py-8">
        <div class="flex justify-between items-center mb-6">
            <h1 class="text-2xl font-bold">Contact Form Submissions</h1>
            <a href="logout.php"
                class="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
                Logout
            </a>
        </div>

        <div class="bg-white rounded-lg shadow overflow-x-auto">
            <table class="min-w-full">
                <thead>
                    <tr class="bg-gray-50">
                        <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                        <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                        <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                        <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Message</th>
                        <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                    </tr>
                </thead>
                <tbody class="bg-white divide-y divide-gray-200">
                    <?php foreach ($submissions as $submission): ?>
                        <tr>
                            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                <?= htmlspecialchars($submission['created_at']) ?>
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap">
                                <?= htmlspecialchars($submission['name']) ?>
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap">
                                <a href="mailto:<?= htmlspecialchars($submission['email']) ?>" class="text-blue-600 hover:text-blue-900">
                                    <?= htmlspecialchars($submission['email']) ?>
                                </a>
                            </td>
                            <td class="px-6 py-4">
                                <?= nl2br(htmlspecialchars($submission['message'])) ?>
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap">
                                <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                    <?= htmlspecialchars($submission['status']) ?>
                                </span>
                            </td>
                        </tr>
                    <?php endforeach; ?>
                </tbody>
            </table>
        </div>
    </div>
</body>

</html>