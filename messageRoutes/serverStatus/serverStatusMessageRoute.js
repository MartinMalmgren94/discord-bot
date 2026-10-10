const { getipv4Address } = require('../../services/serverStatusService/serverStatusService');
const { getContainerStatus } = require('../../services/dockerService/dockerService');

async function serverStatusMessageRoute({ message }){
    try {
        // Get the IP address
        const ip = await getipv4Address();
        
        // Get the Docker container status
        const containerStatus = await getContainerStatus();
        
        // Send the response with both IP and container status
        message.reply(`IP: ${ip}\nValheim server status: ${containerStatus}`);
    } catch (error) {
        // If there's an error getting IP, still try to get container status
        try {
            const containerStatus = await getContainerStatus();
            message.reply(`IP: Unavailable\nValheim server status: ${containerStatus}`);
        } catch (error) {
            // If both fail, return unknown for both
            message.reply(`IP: Unavailable\nValheim server status: unknown`);
        }
    }
}

module.exports = {
    serverStatusMessageRoute
};