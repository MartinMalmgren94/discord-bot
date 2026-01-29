export async function getipv4Address() {
  // Fetching IPv4 address
  return await fetch("https://api.ipify.org").then(res => res.text());
}