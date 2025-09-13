
import IntegrationsManagement from '@/components/integrations-management';

export default function IntegrationsPage() {
    return (
        <div className="space-y-8">
             <div>
                <h1 className="text-3xl font-bold tracking-tight font-headline">Integrations</h1>
                <p className="text-muted-foreground">Connect ManoMitra with your existing institutional systems.</p>
            </div>
            <IntegrationsManagement />
        </div>
    );
}
