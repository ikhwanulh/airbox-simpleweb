import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/home";
import PrivacyPolicy from "@/pages/privacy-policy";
import Team from "@/pages/team";
import Kru from "@/pages/kru";
import JurnalPintar from "@/pages/jurnal-pintar";
import KurirPintar from "@/pages/kurir-pintar";
import InteractiveDashboard from "@/pages/interactive-dashboard";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/privacy-policy" component={PrivacyPolicy} />
      <Route path="/team" component={Team} />
      <Route path="/kru" component={Kru} />
      <Route path="/jurnal-pintar" component={JurnalPintar} />
      <Route path="/kurir-pintar" component={KurirPintar} />
      <Route path="/interactive-dashboard" component={InteractiveDashboard} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
