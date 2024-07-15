import React from 'react';

const Copyright = () => {
  return (
    <div className="py-4 text-m border-t-4 font-medium text-center text-gray-100"style={{ backgroundColor: '#043464' }}>
      <p className="">
        &copy; {new Date().getFullYear()} Your Company Name. All Rights Reserved.
      </p>
    </div>
  );
};

export default Copyright;
