import React from 'react';
import { InertiaSharedProps } from '@/types';
import { Head } from '@inertiajs/inertia-react';
import Navbar from '@/Components/Home/Navbar';
import Hero from '@/Components/Home/Hero';

export default function Welcome(props: InertiaSharedProps) {
    return (
        <>
            <Navbar auth={props.auth} />
            <Hero />
        </>
    );
}
