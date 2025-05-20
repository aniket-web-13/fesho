
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contactForm");

    form.addEventListener("submit", (e) => {
        e.preventDefault();

       const formData = new FormData(form);
        const data = {
            firstName: formData.get("firstName"),
            lastName: formData.get("lastName"),
            email: formData.get("email"),
            phone: formData.get("phone"),
            message: formData.get("message"),
        };

        if (!data.firstName || !data.lastName || !data.email || !data.message) {
            alert("Please fill in all required fields.");
            return;
        }

        console.log("Form submitted successfully:", data);
        alert("Your message has been sent!");

        form.reset(); 
    });

    form.addEventListener("reset", () => {
        console.log("Form has been reset.");
    });
});
