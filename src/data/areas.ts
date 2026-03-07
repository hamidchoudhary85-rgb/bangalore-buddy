export interface AreaData {
  name: string;
  rent2BHK: string;
  rent3BHK: string;
  schools: string[];
  hospitals: string[];
  metroAccess: boolean;
  commuteWhitefield: number;
  commuteElecCity: number;
  commuteORR: number;
  safetyScore: number;
  familyFriendly: number;
  mallsMarkets: string[];
  gatedCommunities: "High" | "Medium" | "Low";
  contactNo: string;
  categories: string[];
}

export const areas: AreaData[] = [
  {
    name: "Outer Ring Road (ORR) Corridor",
    rent2BHK: "₹35,000–65,000",
    rent3BHK: "₹45,000–95,000",
    schools: ["New Horizon Gurukul", "Orchids"],
    hospitals: ["Bengaluru Baptist Hospital", "Kauvery Hospital"],
    metroAccess: false,
    commuteWhitefield: 30,
    commuteElecCity: 50,
    commuteORR: 10,
    safetyScore: 8,
    familyFriendly: 8,
    mallsMarkets: ["Gopalan Grand Mall", "Phoenix Mall Of Asia"],
    gatedCommunities: "High",
    contactNo: "+91 98765 43210",
    categories: ["rent", "schools", "hospitals", "commute", "malls", "safety", "family"],
  },
  {
    name: "Whitefield",
    rent2BHK: "₹25,000–35,000",
    rent3BHK: "₹35,000–50,000",
    schools: ["The Deens Academy", "National Public School"],
    hospitals: ["Vydehi", "Manipal Hospital"],
    metroAccess: true,
    commuteWhitefield: 10,
    commuteElecCity: 50,
    commuteORR: 20,
    safetyScore: 8.5,
    familyFriendly: 9,
    mallsMarkets: ["Phoenix Marketcity", "VR Bengaluru"],
    gatedCommunities: "High",
    contactNo: "+91 98765 43211",
    categories: ["rent", "schools", "hospitals", "metro", "commute", "malls", "safety", "family"],
  },
  {
    name: "Electronic City",
    rent2BHK: "₹18,000–28,000",
    rent3BHK: "₹25,000–38,000",
    schools: ["Treamis", "Delhi Public School"],
    hospitals: ["Narayana Multispeciality", "Apollo Spectra"],
    metroAccess: true,
    commuteWhitefield: 50,
    commuteElecCity: 10,
    commuteORR: 55,
    safetyScore: 8,
    familyFriendly: 8,
    mallsMarkets: ["The Forum Mall", "Gopalan Innovation Mall"],
    gatedCommunities: "Medium",
    contactNo: "+91 98765 43212",
    categories: ["rent", "schools", "hospitals", "metro", "commute", "malls", "safety", "family", "budget"],
  },
  {
    name: "North Bangalore",
    rent2BHK: "₹25,000–45,000",
    rent3BHK: "₹35,000–65,000",
    schools: ["NPS HSR", "Delhi Public School", "Kendriya Vidyalaya"],
    hospitals: ["Manipal HSR", "Aster CMI", "Prolife Multispeciality"],
    metroAccess: true,
    commuteWhitefield: 45,
    commuteElecCity: 60,
    commuteORR: 15,
    safetyScore: 8,
    familyFriendly: 9,
    mallsMarkets: ["RMZ Galleria Mall", "Elements Mall"],
    gatedCommunities: "High",
    contactNo: "+91 98765 43213",
    categories: ["rent", "schools", "hospitals", "metro", "commute", "malls", "safety", "family"],
  },
];
