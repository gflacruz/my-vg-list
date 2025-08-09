# Task 01: Implement Password Recovery

This document outlines the steps to implement the password recovery feature.

## Backend

1.  **Create a new database table `password_reset_tokens`:**
    *   `id` (primary key)
    *   `user_id` (foreign key to `users` table)
    *   `token` (unique, indexed)
    *   `expires_at` (timestamp)
2.  **Create an API endpoint `/api/auth/request-password-reset`:**
    *   Accepts the user's email address.
    *   Generates a unique, secure token.
    *   Stores the hashed token in the `password_reset_tokens` table with an expiration date (e.g., 1 hour).
    *   Sends an email to the user with a link containing the token (e.g., `https://my-vg-list.com/reset-password?token=...`).
3.  **Create an API endpoint `/api/auth/reset-password`:**
    *   Accepts the new password and the token from the URL.
    *   Verifies the token:
        *   Find the token in the `password_reset_tokens` table.
        *   Check if the token has expired.
        *   If valid, hash the new password and update the user's password in the `users` table.
        *   Delete the token from the `password_reset_tokens` table.
    *   Returns a success or error message.

## Frontend

1.  **Create a "Forgot Password" page:**
    *   A form with an email input field.
    *   Calls the `/api/auth/request-password-reset` endpoint.
    *   Displays a message to the user to check their email.
2.  **Create a "Reset Password" page:**
    *   A form with two password input fields (new password and confirm password).
    *   Retrieves the token from the URL query parameters.
    *   Calls the `/api/auth/reset-password` endpoint with the new password and token.
    *   Displays a success message and redirects the user to the login page.

## Email Service

*   Integrate an email service (e.g., Resend, SendGrid) to send the password reset emails.
*   Create an email template for the password reset link.
