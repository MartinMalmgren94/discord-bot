const Docker = require('dockerode');

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
  getContainerStatus
};