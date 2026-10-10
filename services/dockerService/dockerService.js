const Docker = require('dockerode');

async function getAllContainerStatuses() {
  try {
    // Create Docker instance
    const docker = new Docker();
    
    // Check if Docker daemon is reachable
    await docker.version();
    
    // Get list of all containers
    const containers = await docker.listContainers({ all: true });
    
    // Map container information to a readable format
    const containerStatuses = containers.map(container => {
      return {
        name: container.Names[0].replace('/', ''), // Remove leading slash from name
        status: container.Status,
        id: container.ID.substring(0, 12) // Shortened ID
      };
    });
    
    return containerStatuses;
  } catch (error) {
    // If any error occurs (Docker not reachable, etc.), return empty array
    return [];
  }
}

async function getContainerStatus(containerName = 'valheim') {
  try {
    // Create Docker instance
    const docker = new Docker();
    
    // Check if Docker daemon is reachable
    await docker.version();
    
    // Try to get the container
    const container = docker.getContainer(containerName);
    
    // Inspect the container to get its status
    const inspectData = await container.inspect();
    
    // Return the container status
    return inspectData.State.Status || 'unknown';
  } catch (error) {
    // If any error occurs (Docker not reachable, container not found, etc.), return "unknown"
    return 'unknown';
  }
}

module.exports = {
  getAllContainerStatuses,
  getContainerStatus
};