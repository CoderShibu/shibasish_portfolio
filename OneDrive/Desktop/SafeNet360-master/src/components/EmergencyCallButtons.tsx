import React from 'react';
import { Phone, Ambulance, FireExtinguisher } from 'lucide-react';
import { Button } from '@/components/ui/button';

const EmergencyCallButtons = () => {
  const emergencyServices = [
    {
      name: 'Police',
      number: '100',
      icon: <Phone className="h-5 w-5" />,
      bgColor: 'bg-blue-600 hover:bg-blue-700',
      textColor: 'text-white'
    },
    {
      name: 'Ambulance',
      number: '102',
      icon: <Ambulance className="h-5 w-5" />,
      bgColor: 'bg-red-600 hover:bg-red-700',
      textColor: 'text-white'
    },
    {
      name: 'Fire',
      number: '101',
      icon: <FireExtinguisher className="h-5 w-5" />,
      bgColor: 'bg-orange-600 hover:bg-orange-700',
      textColor: 'text-white'
    },
    {
      name: 'Women Helpline',
      number: '1091',
      icon: <Phone className="h-5 w-5" />,
      bgColor: 'bg-pink-600 hover:bg-pink-700',
      textColor: 'text-white'
    },
    {
      name: 'Railway Helpline',
      number: '139',
      icon: <Phone className="h-5 w-5" />,
      bgColor: 'bg-green-600 hover:bg-green-700',
      textColor: 'text-white'
    }
  ];

  const handleCall = (number: string, service: string) => {
    if (navigator.userAgent.match(/Mobile|Android|iPhone|iPad/)) {
      window.location.href = `tel:${number}`;
    } else {
      alert(`Emergency Contact: ${service}\nNumber: ${number}\n\nNote: Calling functionality requires a mobile device.`);
    }
  };

  return (
    <div className="emergency-card p-4 mb-6">
      <h3 className="text-sm font-semibold mb-3 text-center text-gray-700 dark:text-gray-300">
        Emergency Quick Dial (India)
      </h3>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-2">
        {emergencyServices.map((service, index) => (
          <Button
            key={index}
            onClick={() => handleCall(service.number, service.name)}
            className={`${service.bgColor} ${service.textColor} flex flex-col items-center justify-center h-16 px-2 py-1 rounded-lg shadow-md transition-all duration-200 hover:shadow-lg hover:scale-105`}
          >
            {service.icon}
            <span className="text-xs font-medium mt-1">{service.name}</span>
          </Button>
        ))}
      </div>
      <p className="text-xs text-gray-500 dark:text-gray-400 text-center mt-2">
        Tap to call Indian emergency services directly
      </p>
    </div>
  );
};

export default EmergencyCallButtons;
