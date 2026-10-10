const { getContainerStatus } = require('../services/dockerService/dockerService');

// This is just a basic test structure - actual Docker tests would need Docker daemon running
describe('Docker Service', () => {
  test('getContainerStatus should return "unknown" when Docker is not reachable', async () => {
    // This test will always pass with "unknown" since we can't guarantee Docker daemon is running in test environment
    const status = await getContainerStatus();
    expect(status).toBe('unknown');
  });
});