# Task 02: Create User Profiles

This document outlines the steps to implement user profiles.

## Backend

1.  **Update the `users` table:**
    *   Add new fields to the `users` table in `src/db/schema.ts` to store profile information (e.g., `bio`, `avatar_url`, `location`).
2.  **Create an API endpoint `/api/users/[userId]`:**
    *   `GET`: Fetches a user's profile information.
    *   `PUT`: Updates a user's profile information. This should be a protected endpoint, only allowing the authenticated user to update their own profile.

## Frontend

1.  **Create a "Profile" page `src/app/profile/[userId]/page.tsx`:**
    *   Displays the user's profile information (name, bio, avatar, etc.).
    *   If the user is viewing their own profile, it should display an "Edit Profile" button.
2.  **Create an "Edit Profile" page `src/app/profile/edit/page.tsx`:**
    *   A form to update the user's profile information.
    *   Calls the `PUT /api/users/[userId]` endpoint to save the changes.
