<?php
    $topic = $_POST['topic'];
    $visitor_email = $_POST['email'];
    $message = $_POST['message'];

    $email_subject = "New Form submission, topic: $topic.";
    $email_body = "$message";
    $headers = 'From: <front.devel06@gmail.com>' . "\r\n" . 'Reply-To: <$visitor_email>';
    $to = 'front.devel06@gmail.com';

    mail($to, $email_subject, $email_body, $headers);
?>
