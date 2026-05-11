# Security Specification - OdontoHub

## Data Invariants
- An Ambassador Application must have all required contact and social fields.
- `createdAt` must be set to the server time.
- Only users explicitly designated as admins can read the submissions.
- Application IDs must be valid.

## The "Dirty Dozen" Payloads (Deny Cases)
1. Creating application without `fullName`.
2. Creating application with `fullName` > 200 chars.
3. Creating application with `postsPerWeek` as a string.
4. Creating application with `createdAt` as a client-side string.
5. Attempting to update an existing application (Applications should be immutable).
6. Attempting to delete an existing application.
7. Attempting to read applications as an unauthenticated user.
8. Attempting to read applications as a non-admin authenticated user.
9. Attempting to list applications without being an admin.
10. Attempting to create an admin document as a regular user.
11. Injecting jumbo IDs for applications.
12. Shadow fields (extra keys) in application submission.

## Rules Draft
(To be implemented in firestore.rules)
