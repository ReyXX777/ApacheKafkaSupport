// Lightbox handling
function openLightbox(feature) {
    const lightbox = document.getElementById('lightbox');
    const content = document.getElementById('lightbox-text');
    
    // Define content based on the feature
    switch (feature) {
        case 'training':
            content.innerHTML = "<h3>Internal Training Programs</h3><p>We provide Kafka workshops, online courses, and hands-on practice for your team.</p>";
            break;
        case 'certifications':
            content.innerHTML = "<h3>Kafka Certifications</h3><p>Pursue Kafka certifications to validate your expertise.</p>";
            break;
        case 'consultants':
            content.innerHTML = "<h3>Consultants and Contractors</h3><p>Hire experts for Kafka setup and implementation.</p>";
            break;
        case 'specializedStaff':
            content.innerHTML = "<h3>Hiring Specialized Staff</h3><p>Recruit individuals with specific experience in Kafka and real-time data processing.</p>";
            break;
        case 'community':
            content.innerHTML = "<h3>Kafka Community</h3><p>Engage with the Kafka community through forums, user groups, and conferences.</p>";
            break;
        case 'professionalSupport':
            content.innerHTML = "<h3>Professional Support</h3><p>Purchase support subscriptions from Kafka service providers like Confluent.</p>";
            break;
        case 'ansible':
            content.innerHTML = "<h3>Ansible Automation</h3><p>Use Ansible to automate the deployment and management of Kafka clusters.</p>";
            break;
        case 'terraform':
            content.innerHTML = "<h3>Terraform Automation</h3><p>Manage Kafka infrastructure using Terraform for Infrastructure as Code.</p>";
            break;
        case 'kubernetes':
            content.innerHTML = "<h3>Kubernetes Deployment</h3><p>Deploy Kafka using Kubernetes with Helm charts or manifests.</p>";
            break;
        case 'prometheus':
            content.innerHTML = "<h3>Prometheus Monitoring</h3><p>Set up Prometheus to scrape and visualize Kafka metrics.</p>";
            break;
        case 'grafana':
            content.innerHTML = "<h3>Grafana Dashboards</h3><p>Visualize Kafka metrics with Grafana dashboards.</p>";
            break;
        case 'datadog':
            content.innerHTML = "<h3>Datadog Monitoring</h3><p>Monitor Kafka clusters using Datadog agents and dashboards.</p>";
            break;
        default:
            content.innerHTML = "<p>Feature not available yet.</p>";
    }
    
    lightbox.style.display = "block";
}

function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    lightbox.style.display = "none";
}

// Confirmation modal logic
let currentAction = null;

function confirmAction(action) {
    currentAction = action;
    document.getElementById('modal-text').innerText = `Are you sure you want to ${action.replace(/([A-Z])/g, ' $1').toLowerCase()}?`;
    document.getElementById('confirmationModal').style.display = 'flex';
}

function closeModal() {
    document.getElementById('confirmationModal').style.display = 'none';
}

function executeAction() {
    showLoadingSpinner();
    setTimeout(() => {
        document.getElementById('confirmationModal').style.display = 'none';
        hideLoadingSpinner();
        showNotification(`Action "${currentAction}" completed successfully!`);
    }, 2000);
}

// Loading spinner logic
function showLoadingSpinner() {
    document.getElementById('loadingSpinner').style.display = 'block';
}

function hideLoadingSpinner() {
    document.getElementById('loadingSpinner').style.display = 'none';
}

// Search feature to filter buttons
function filterFeatures() {
    let input = document.getElementById('searchInput').value.toLowerCase();
    let buttons = document.querySelectorAll('.btn');
    
    buttons.forEach(button => {
        if (button.innerText.toLowerCase().includes(input)) {
            button.style.display = 'inline-block';
        } else {
            button.style.display = 'none';
        }
    });
}

// Notification system logic
function showNotification(message) {
    const notification = document.getElementById('notification');
    notification.innerText = message;
    notification.style.display = 'block';
    
    setTimeout(() => {
        notification.style.display = 'none';
    }, 3000);
}

// Collapsible sections logic
let collapsibles = document.querySelectorAll(".collapsible h2");

collapsibles.forEach(collapsible => {
    collapsible.addEventListener("click", function () {
        this.nextElementSibling.classList.toggle("collapsible-content");
    });
});

// Dark Mode Toggle
const darkModeToggle = document.getElementById('darkModeToggle');

darkModeToggle.addEventListener('click', function () {
    document.body.classList.toggle('dark-mode');
    darkModeToggle.innerText = document.body.classList.contains('dark-mode') ? 'Light Mode' : 'Dark Mode';
});
