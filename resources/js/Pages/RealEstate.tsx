import AppLayout from '@/Layouts/AppLayout';
import React from 'react';

const RealEstate = () => {
  return (
    <AppLayout
      title="Real Estate"
      renderHeader={() => (
        <h2 className="font-semibold text-xl text-gray-800 leading-tight">
          Real Estate
        </h2>
      )}
    >
      <div className="py-12">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div>Real Estate</div>
        </div>
      </div>
    </AppLayout>
  );
};

export default RealEstate;
