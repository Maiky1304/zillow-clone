import React, { ImgHTMLAttributes } from 'react';
import ZillowLogo from '@/Images/zillow-logo.svg';

export default function ApplicationMark(
    props: ImgHTMLAttributes<HTMLImageElement>,
) {
    return <img {...props} src={ZillowLogo} />;
}
