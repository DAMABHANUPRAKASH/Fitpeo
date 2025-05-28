import React from 'react';
import { activityData } from '../../data/appointmentData';

const ActivityFeed: React.FC = () => {
  const maxCount = Math.max(...activityData.map(item => item.count));
  
  return (
    <div className="flex flex-col h-full">
      {/* Header Section at Top */}
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-lg font-semibold">Activity</h2>
        <div className="text-sm text-gray-500">
          {activityData.reduce((sum, item) => sum + item.count, 0)} appointments on this week
        </div>
      </div>
      {/* Chart Section */}
      <div className="flex-1 flex items-end justify-between pb-2">
        {activityData.map((item, index) => {
          const height = `${(item.count / maxCount) * 100}%`;
          return (
            <div key={index} className="flex flex-col items-center justify-end h-full">
              <div 
                className={`w-4 rounded-t-full ${index % 2 === 0 ? 'bg-cyan-400' : 'bg-indigo-600'}`} 
                style={{ height }}
              ></div>
            </div>
          );
        })}
      </div>
      {/* Week Day Names at Bottom */}
      <div className="flex justify-between mt-1">
        {activityData.map((item, index) => (
          <div key={index} className="text-xs text-gray-500 w-4 text-center">
            {item.day}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActivityFeed;