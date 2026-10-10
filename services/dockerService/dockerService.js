const { exec } = require('child_process');

async function getAllContainerStatuses() {
  try {
    // Run docker ps command to get container information
    const { stdout, stderr } = await new Promise((resolve, reject) => {
      exec("docker ps --format '{{.Names}}\\t{{.Status}}\\t{{.ID}}'", (error, stdout, stderr) => {
        if (error) {
          reject(error);
          return;
        }
        if (stderr) {
          reject(new Error(stderr));
          return;
        }
        resolve({ stdout, stderr });
      });
    });

    // Parse the output
    const lines = stdout.trim().split('\n');
    
    // Skip the header line if it exists (it would be the first line with "NAMES")
    const containerLines = lines.filter(line => 
      line.trim() !== '' && !line.startsWith('NAMES')
    );
    
    // Map container information to a readable format
    const containerStatuses = containerLines.map(line => {
      // Split by tab, but be careful with multi-word status fields
      const parts = line.split('\t');
      if (parts.length >= 3) {
        const name = parts[0].trim();
        const status = parts[1].trim();
        const id = parts[2].trim();
        
        if (name && status && id) {
          return {
            name: name.replace('/', ''), // Remove leading slash from name if present
            status: status,
            id: id.substring(0, 12) // Shortened ID
          };
        }
      }
      return null;
    }).filter(container => container !== null); // Filter out any null entries
    
    return containerStatuses;
  } catch (error) {
    // If any error occurs (Docker not reachable, etc.), return empty array
    console.error('Error getting container statuses:', error);
    return [];
  }
}

async function getContainerStatus(containerName = 'valheim') {
  try {
    // Run docker ps command to check if the specific container exists and get its status
    const { stdout, stderr } = await new Promise((resolve, reject) => {
      exec(`docker ps --format '{{.Names}}\\t{{.Status}}' | grep "^${containerName}$"`, (error, stdout, stderr) => {
        if (error) {
          reject(error);
          return;
        }
        if (stderr) {
          reject(new Error(stderr));
          return;
        }
        resolve({ stdout, stderr });
      });
    });

    // If we found a matching container, parse its status
    const lines = stdout.trim().split('\n');
    
    if (lines.length > 0 && lines[0].trim() !== '') {
      // The output format is "container_name status" 
      const parts = lines[0].trim().split('\t');
      if (parts.length >= 2) {
        // Return the status part (everything after the first tab)
        return parts.slice(1).join(' ').trim();
      }
    }
    
    return 'unknown';
  } catch (error) {
    // If any error occurs (Docker not reachable, container not found, etc.), return "unknown"
    console.error('Error getting container status:', error);
    return 'unknown';
  }
}

module.exports = {
  getAllContainerStatuses,
  getContainerStatus
};