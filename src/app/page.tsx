import CustomerLifecycleView from "../../customer-lifecycle-view";
import RiskPlatformBlueprint from "../../risk-platform-blueprint";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Users, Shield } from "lucide-react";

export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 p-6">
      <div className="max-w-7xl mx-auto">
        <Tabs defaultValue="customer" className="w-full">
          <div className="flex justify-center mb-10">
            <TabsList className="flex justify-center w-full max-w-2xl bg-white shadow-lg rounded-xl p-2 gap-4">
              <TabsTrigger
                value="customer"
                className="flex items-center gap-2 px-6 py-3 text-lg font-semibold rounded-lg data-[state=active]:bg-blue-100 data-[state=active]:text-blue-700 transition"
              >
                <Users className="h-6 w-6" />
                Customer Lifecycle
              </TabsTrigger>
              <TabsTrigger
                value="risk"
                className="flex items-center gap-2 px-6 py-3 text-lg font-semibold rounded-lg data-[state=active]:bg-blue-100 data-[state=active]:text-blue-700 transition"
              >
                <Shield className="h-6 w-6" />
                Risk Platform Blueprint
              </TabsTrigger>
            </TabsList>
          </div>
          <TabsContent value="customer">
            <CustomerLifecycleView />
          </TabsContent>
          <TabsContent value="risk">
            <RiskPlatformBlueprint />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}