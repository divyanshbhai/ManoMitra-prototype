
"use client";

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import Image from 'next/image';
import { useState } from 'react';
import { CheckCircle, ExternalLink, XCircle } from 'lucide-react';

type Integration = {
    name: string;
    description: string;
    logoUrl: string;
    connected: boolean;
};

const mockIntegrations: Integration[] = [
    {
        name: 'PeopleSoft Campus',
        description: 'Sync student data and wellness alerts with your PeopleSoft system.',
        logoUrl: '/peoplesoft-logo.png', // Note: This logo needs to be created
        connected: true,
    },
    {
        name: 'Banner by Ellucian',
        description: 'Integrate with Banner to correlate wellness data with academic performance.',
        logoUrl: '/banner-logo.png', // Note: This logo needs to be created
        connected: false,
    },
    {
        name: 'Workday HCM',
        description: 'Connect with Workday for a holistic view of employee well-being and performance.',
        logoUrl: '/workday-logo.png', // Note: This logo needs to be created
        connected: false,
    },
     {
        name: 'Generic HRIS API',
        description: 'Use our generic API to connect to any other HR Information System.',
        logoUrl: '/api-logo.png', // Note: This logo needs to be created
        connected: false,
    },
];

export default function IntegrationsManagement() {
    const [integrations, setIntegrations] = useState(mockIntegrations);

    const toggleIntegration = (name: string) => {
        setIntegrations(integrations.map(int => 
            int.name === name ? { ...int, connected: !int.connected } : int
        ));
    };

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {integrations.map(integration => (
                <Card key={integration.name}>
                    <CardHeader className="flex flex-row items-start gap-4">
                        {/* Placeholder for actual logos */}
                        <div className="w-16 h-16 bg-muted rounded-lg flex items-center justify-center">
                            <span className="text-xs text-muted-foreground text-center">Logo</span>
                        </div>
                        <div>
                            <CardTitle>{integration.name}</CardTitle>
                            <CardDescription>{integration.description}</CardDescription>
                        </div>
                    </CardHeader>
                    <CardContent className="flex items-center justify-between">
                         <div className="flex items-center gap-2 text-sm">
                            {integration.connected ? (
                                <>
                                    <CheckCircle className="h-5 w-5 text-green-500" />
                                    <span className="text-green-600 font-medium">Connected</span>
                                </>
                            ) : (
                                <>
                                    <XCircle className="h-5 w-5 text-destructive" />
                                    <span className="text-destructive font-medium">Not Connected</span>
                                </>
                            )}
                        </div>
                        <div className="flex items-center gap-2">
                             <Button variant="ghost" size="sm">
                                <ExternalLink className="h-4 w-4 mr-2" />
                                Learn More
                            </Button>
                            <Switch
                                checked={integration.connected}
                                onCheckedChange={() => toggleIntegration(integration.name)}
                                aria-label={`Connect to ${integration.name}`}
                            />
                        </div>
                    </CardContent>
                </Card>
            ))}
        </div>
    );
}
