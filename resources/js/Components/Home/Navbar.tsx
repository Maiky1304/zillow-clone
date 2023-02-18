import { InertiaSharedProps } from '@/types';
import { InertiaLink } from '@inertiajs/inertia-react';
import React from 'react';
import route from 'ziggy-js';
import ApplicationMark from '../Dashboard/ApplicationMark';

type Props = {
    auth: InertiaSharedProps['auth'];
};

const Navbar = (props: Props) => {
    return (
        <header>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
                <div className="flex justify-between">
                    <nav
                        className="flex items-center gap-x-6 text-md"
                        aria-describedby="first part of navigation"
                    >
                        <a className="hover:cursor-pointer hover:text-zillow">
                            Buy
                        </a>
                        <a className="hover:cursor-pointer hover:text-zillow">
                            Rent
                        </a>
                        <a className="hover:cursor-pointer hover:text-zillow">
                            Sell
                        </a>
                        <a className="hover:cursor-pointer hover:text-zillow">
                            Home Loans
                        </a>
                        <a className="hover:cursor-pointer hover:text-zillow">
                            Agent finder
                        </a>
                    </nav>

                    <InertiaLink href={route('home')}>
                        <ApplicationMark className="h-9 w-40" />
                    </InertiaLink>

                    <nav
                        className="flex items-center gap-x-6 text-md"
                        aria-describedby="second part of navigation"
                    >
                        <a className="hover:cursor-pointer hover:text-zillow">
                            Manage Rentals
                        </a>
                        <a className="hover:cursor-pointer hover:text-zillow">
                            Advertise
                        </a>
                        <a className="hover:cursor-pointer hover:text-zillow">
                            Help
                        </a>
                        {props.auth.user ? (
                            <InertiaLink
                                href={route('dashboard')}
                                className="hover:cursor-pointer hover:text-zillow"
                            >
                                Dashboard
                            </InertiaLink>
                        ) : (
                            <InertiaLink
                                href={route('login')}
                                className="hover:cursor-pointer hover:text-zillow"
                            >
                                Sign In
                            </InertiaLink>
                        )}
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
