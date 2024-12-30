export async function signInHelper(email, password) {
    // Prepare the request body
    const requestBody = {
        email,
        password,
    };

    try {
        // Send POST request to the backend
        const response = await fetch("http://localhost:3000/api/signin", {
            method: "POST",  // Use POST method for sending login data
            headers: {
                "Content-Type": "application/json",  // Set content type as JSON
            },
            body: JSON.stringify(requestBody),  // Convert request body to JSON
        });

        // Check if the response is OK (status code 200)
        if (!response.ok) {
            throw new Error("Failed to sign in");
        }

        // Parse the response data (assumed to be user data in JSON format)
        const user = await response.json();

        // Return the user data
        return user;
    } catch (error) {
        // Handle errors (e.g., network errors, authentication errors)
        console.error("Error during sign-in:", error);
        throw new Error("Error during sign-in");
    }
}
