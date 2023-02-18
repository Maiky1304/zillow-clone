import React from 'react';
import AppLayout from '@/Layouts/AppLayout';
import { InertiaSharedProps } from '@/types';

type DashboardProps = {
    test: number;
};

export default function Dashboard(props: InertiaSharedProps<DashboardProps>) {
    return (
        <AppLayout
            title="Dashboard"
            renderHeader={() => (
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Dashboard
                </h2>
            )}
        >
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div>Hello world!</div>
                </div>
            </div>
        </AppLayout>
    );
}
