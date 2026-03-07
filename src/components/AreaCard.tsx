import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { type AreaData } from "@/data/areas";
import {
  Home, GraduationCap, Hospital, TrainFront, Car, ShoppingBag, Shield, Users, Phone,
} from "lucide-react";

const AreaCard = ({ area }: { area: AreaData }) => {
  return (
    <Card className="group overflow-hidden border border-border transition-all duration-300 hover:shadow-[var(--card-hover-shadow)]">
      <CardHeader className="bg-gradient-to-r from-primary/10 to-accent/10 pb-3">
        <div className="flex items-start justify-between">
          <CardTitle className="text-lg text-foreground">{area.name}</CardTitle>
          <Badge variant={area.gatedCommunities === "High" ? "default" : "secondary"} className="text-xs">
            {area.gatedCommunities} Gated
          </Badge>
        </div>
        <div className="flex items-center gap-1 text-sm text-muted-foreground">
          <Phone className="h-3.5 w-3.5" />
          <span>{area.contactNo}</span>
        </div>
      </CardHeader>
      <CardContent className="grid gap-3 pt-4 text-sm">
        <Row icon={<Home className="h-4 w-4 text-primary" />} label="2BHK" value={area.rent2BHK} />
        <Row icon={<Home className="h-4 w-4 text-primary" />} label="3BHK" value={area.rent3BHK} />
        <Row icon={<GraduationCap className="h-4 w-4 text-primary" />} label="Schools" value={area.schools.join(", ")} />
        <Row icon={<Hospital className="h-4 w-4 text-primary" />} label="Hospitals" value={area.hospitals.join(", ")} />
        <Row icon={<TrainFront className="h-4 w-4 text-primary" />} label="Metro" value={area.metroAccess ? "Yes ✅" : "No ❌"} />
        <Row icon={<Car className="h-4 w-4 text-primary" />} label="Commute" value={`WF: ${area.commuteWhitefield}m · EC: ${area.commuteElecCity}m · ORR: ${area.commuteORR}m`} />
        <Row icon={<ShoppingBag className="h-4 w-4 text-primary" />} label="Malls" value={area.mallsMarkets.join(", ")} />
        <div className="flex gap-4 pt-1">
          <div className="flex items-center gap-1.5">
            <Shield className="h-4 w-4 text-accent" />
            <span className="text-muted-foreground">Safety:</span>
            <span className="font-semibold text-foreground">{area.safetyScore}/10</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Users className="h-4 w-4 text-accent" />
            <span className="text-muted-foreground">Family:</span>
            <span className="font-semibold text-foreground">{area.familyFriendly}/10</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const Row = ({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) => (
  <div className="flex items-start gap-2">
    <div className="mt-0.5 shrink-0">{icon}</div>
    <div>
      <span className="font-medium text-foreground">{label}: </span>
      <span className="text-muted-foreground">{value}</span>
    </div>
  </div>
);

export default AreaCard;
