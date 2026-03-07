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
  {
    name: "Koramangala",
    rent2BHK: "₹30,000–50,000",
    rent3BHK: "₹45,000–80,000",
    schools: ["Bethany High", "National Public School"],
    hospitals: ["St. John's", "Apollo Spectra"],
    metroAccess: false,
    commuteWhitefield: 60,
    commuteElecCity: 30,
    commuteORR: 25,
    safetyScore: 8.5,
    familyFriendly: 9,
    mallsMarkets: ["Forum Nexus Mall", "Oasis Centre"],
    gatedCommunities: "Medium",
    contactNo: "+91 98765 43214",
    categories: ["rent", "schools", "hospitals", "commute", "malls", "safety", "family", "food"],
  },
  {
    name: "Indiranagar",
    rent2BHK: "₹35,000–60,000",
    rent3BHK: "₹50,000–90,000",
    schools: ["Frank Anthony Public School", "NPS Indiranagar"],
    hospitals: ["Manipal Hospital", "CMTI"],
    metroAccess: true,
    commuteWhitefield: 40,
    commuteElecCity: 60,
    commuteORR: 30,
    safetyScore: 9,
    familyFriendly: 8.5,
    mallsMarkets: ["100ft Road Shopping", "Garuda Mall (nearby)"],
    gatedCommunities: "Low",
    contactNo: "+91 98765 43215",
    categories: ["rent", "schools", "hospitals", "metro", "commute", "malls", "safety", "food", "nightlife"],
  },
  {
    name: "HSR Layout",
    rent2BHK: "₹28,000–45,000",
    rent3BHK: "₹40,000–70,000",
    schools: ["NPS HSR", "VIBGYOR High"],
    hospitals: ["Narayana Multispeciality", "Greenview Medical Center"],
    metroAccess: false,
    commuteWhitefield: 50,
    commuteElecCity: 20,
    commuteORR: 10,
    safetyScore: 9,
    familyFriendly: 9.5,
    mallsMarkets: ["HSR BDA Complex", "Agara Lake Market"],
    gatedCommunities: "Medium",
    contactNo: "+91 98765 43216",
    categories: ["rent", "schools", "hospitals", "commute", "malls", "safety", "family", "parks"],
  },
];
