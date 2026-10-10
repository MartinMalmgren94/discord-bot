const { getipv4Address } = require('../../services/serverStatusService/serverStatusService');
const { getAllContainerStatuses, getContainerStatus } = require('../../services/dockerService/dockerService');

async function serverStatusMessageRoute({ message }){
    try {
        // Get the IP address
        const ip = await getipv4Address();
        
        // Get all Docker container statuses
        const containerStatuses = await getAllContainerStatuses();
        
        // Format the response to show all containers
        let response = `IP: ${ip}\n`;
        
        if (containerStatuses.length === 0) {
            response += "No containers found";
        } else {
            response += "Containers:\n";
            containerStatuses.forEach(container => {
                response += `- ${container.name}: ${container.status} (ID: ${container.id})\n`;
            });
        }
        
        // Send the response with IP and all container statuses
        message.reply(response);
    } catch (error) {
        // If there's an error getting IP, still try to get container status
        try {
            const containerStatuses = await getAllContainerStatuses();
            let response = `IP: Unavailable\n`;
            
            if (containerStatuses.length === 0) {
                response += "No containers found";
            } else {
                response += "Containers:\n";
                containerStatuses.forEach(container => {
                    response += `- ${container.name}: ${container.status} (ID: ${container.id})\n`;
                });
            }
            
            message.reply(response);
        } catch (error) {
            // If both fail, return unknown for both
            message.reply(`IP: Unavailable\nNo containers found`);
        }
    }
}

module.exports = {
    serverStatusMessageRoute
};