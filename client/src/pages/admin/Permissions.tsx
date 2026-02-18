import { MainLayout } from "@/components/layout/MainLayout";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Shield, Lock, Eye, Edit3, Trash2, Save } from "lucide-react";

const permissions = [
  { module: "Grievances", actions: ["View", "Create", "Edit", "Delete", "Resolve"] },
  { module: "Projects", actions: ["View", "Create", "Edit", "Delete", "Budget Approve"] },
  { module: "Institutions", actions: ["View", "Create", "Edit", "Delete"] },
  { module: "Community", actions: ["View", "Edit"] },
  { module: "Reports", actions: ["View", "Export", "Schedule"] },
];

export default function Permissions() {
  return (
    <MainLayout title="Roles & Permissions">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
        <div>
          <h2 className="text-2xl font-bold font-heading">Role Configuration</h2>
          <p className="text-muted-foreground text-sm">Define what each user role can access and perform</p>
        </div>
        <Button className="gap-2">
          <Save className="h-4 w-4" />
          Save Changes
        </Button>
      </div>

      <Tabs defaultValue="staff" className="w-full">
        <TabsList className="bg-muted/50 p-1 rounded-xl mb-8">
          <TabsTrigger value="mla" className="px-6">MLA / MP</TabsTrigger>
          <TabsTrigger value="staff" className="px-6">Office Staff</TabsTrigger>
          <TabsTrigger value="admin" className="px-6">Super Admin</TabsTrigger>
        </TabsList>

        <TabsContent value="staff">
          <div className="grid gap-6">
            {permissions.map((p) => (
              <Card key={p.module} className="glass-card border-none shadow-sm overflow-hidden">
                <div className="bg-muted/30 px-6 py-3 border-b border-border/50">
                   <h3 className="font-bold flex items-center gap-2">
                      <Shield className="h-4 w-4 text-primary" />
                      {p.module} Module
                   </h3>
                </div>
                <CardContent className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {p.actions.map((action) => (
                      <div key={action} className="flex items-center justify-between space-x-4 p-3 rounded-lg hover:bg-muted/30 transition-colors">
                        <div className="flex flex-col space-y-0.5">
                          <Label className="text-sm font-medium leading-none cursor-pointer" htmlFor={`${p.module}-${action}`}>
                            {action}
                          </Label>
                          <span className="text-[10px] text-muted-foreground uppercase">Permission</span>
                        </div>
                        <Switch id={`${p.module}-${action}`} defaultChecked={action === 'View' || action === 'Create' || action === 'Edit'} />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="mla">
          <Card className="glass-card p-12 text-center flex flex-col items-center justify-center border-dashed">
            <Lock className="h-12 w-12 text-muted-foreground mb-4" />
            <h3 className="text-xl font-bold font-heading">MLA Role Permissions</h3>
            <p className="text-muted-foreground max-w-sm mx-auto mt-2">
              The MLA role is typically read-only for monitoring and approval. Most write permissions are disabled by default.
            </p>
          </Card>
        </TabsContent>
      </Tabs>
    </MainLayout>
  );
}
