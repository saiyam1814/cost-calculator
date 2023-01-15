export type ServiceType = typeof services[number]
export const services = [
  "Kubernetes",
  "Compute Instance",
  "Object Store",
  "Volumes",
  "Load balancers",
] as const ;