export type Risk = "Critical" | "High" | "Medium" | "Low";
export type Classification = "Industrial" | "Natural" | "Other";

export interface Hotspot {
  id: string;
  name: string;
  state: string;
  lat: number;
  lng: number;
  brightness: number;
  frp: number;
  detected: string;
  persistence: number;
  proximity: number;
  criticality: number;
  classification: Classification;
  confidence: number;
  probabilities: [number, number, number];
  risk: Risk;
  score: number;
  status: "New" | "Monitoring" | "Acknowledged";
  context: string;
  active: boolean;
}

export const hotspots: Hotspot[] = [
  { id:"FIR-260914", name:"Taloja MIDC Cluster", state:"Maharashtra", lat:19.08, lng:73.10, brightness:412.8, frp:38.4, detected:"14 min ago", persistence:6.2, proximity:0.4, criticality:92, classification:"Industrial", confidence:94, probabilities:[94,4,2], risk:"Critical", score:91, status:"New", context:"Dense industrial estate · chemical processing", active:true },
  { id:"FIR-260907", name:"Korba Thermal Belt", state:"Chhattisgarh", lat:22.35, lng:82.68, brightness:389.4, frp:31.2, detected:"31 min ago", persistence:11.5, proximity:0.8, criticality:87, classification:"Industrial", confidence:91, probabilities:[91,3,6], risk:"High", score:84, status:"Monitoring", context:"Power generation · coal handling", active:true },
  { id:"FIR-260901", name:"Chandrapur Industrial Zone", state:"Maharashtra", lat:19.96, lng:79.30, brightness:374.1, frp:24.7, detected:"48 min ago", persistence:4.8, proximity:1.2, criticality:78, classification:"Industrial", confidence:86, probabilities:[86,8,6], risk:"High", score:78, status:"Monitoring", context:"Industrial land cover · refinery assets", active:true },
  { id:"FIR-260889", name:"Similipal Forest Edge", state:"Odisha", lat:21.78, lng:86.34, brightness:362.7, frp:18.1, detected:"1h 12m ago", persistence:2.4, proximity:18.2, criticality:45, classification:"Natural", confidence:89, probabilities:[5,89,6], risk:"Medium", score:58, status:"Acknowledged", context:"Forest edge · dry deciduous cover", active:true },
  { id:"FIR-260875", name:"Jamnagar Refinery Periphery", state:"Gujarat", lat:22.38, lng:69.97, brightness:351.9, frp:14.5, detected:"2h 08m ago", persistence:18.3, proximity:0.3, criticality:95, classification:"Other", confidence:74, probabilities:[19,7,74], risk:"Medium", score:64, status:"Monitoring", context:"Known persistent thermal source · refinery flare", active:true },
  { id:"FIR-260862", name:"Bandipur Buffer", state:"Karnataka", lat:11.68, lng:76.63, brightness:338.6, frp:9.8, detected:"3h 22m ago", persistence:1.1, proximity:24.0, criticality:39, classification:"Natural", confidence:92, probabilities:[2,92,6], risk:"Low", score:33, status:"Acknowledged", context:"Protected forest buffer · vegetation", active:false },
  { id:"FIR-260851", name:"Bokaro Steel Area", state:"Jharkhand", lat:23.67, lng:86.15, brightness:367.8, frp:21.3, detected:"4h 05m ago", persistence:8.7, proximity:0.6, criticality:83, classification:"Industrial", confidence:88, probabilities:[88,4,8], risk:"High", score:80, status:"Monitoring", context:"Steel manufacturing · industrial asset", active:true },
  { id:"FIR-260840", name:"Panipat Industrial Estate", state:"Haryana", lat:29.39, lng:76.96, brightness:344.2, frp:11.2, detected:"5h 40m ago", persistence:3.6, proximity:0.9, criticality:76, classification:"Other", confidence:68, probabilities:[24,8,68], risk:"Medium", score:55, status:"Acknowledged", context:"Industrial estate · possible process heat", active:false },
];

export const riskClass: Record<Risk, string> = {
  Critical: "risk-critical", High: "risk-high", Medium: "risk-medium", Low: "risk-low"
};

export function makeSimulatedHotspot(sequence: number): Hotspot {
  const sites = [
    ["Navi Mumbai Industrial Corridor", "Maharashtra", 19.02, 73.03],
    ["Dahej Chemical Estate", "Gujarat", 21.71, 72.59],
    ["Visakhapatnam Industrial Belt", "Andhra Pradesh", 17.69, 83.18],
  ] as const;
  const site = sites[sequence % sites.length];
  return { id:`SIM-${26170+sequence}`, name:site[0], state:site[1], lat:site[2], lng:site[3], brightness:401.6, frp:34.9, detected:"just now", persistence:5.4, proximity:0.5, criticality:89, classification:"Industrial", confidence:92, probabilities:[92,5,3], risk:"Critical", score:89, status:"New", context:"Industrial land cover · OSM asset match", active:true };
}