import React from 'react';
import { healthStatuses } from '../../data/healthData';
import AnatomySection from './AnatomySection';
import HealthStatusCard from './HealthStatusCard';
import CalendarView from './CalendarView';
import UpcomingSchedule from './UpcomingSchedule';
import ActivityFeed from './ActivityFeed';

const Dashboard: React.FC = () => {
  const statusCards = healthStatuses.filter(status => status.icon);

  return (
    <div className="flex h-[calc(100vh-10px)] bg-blue-50">
      {/* Sidebar */}
      <aside className="w-64 hidden lg:block">
        <div className="h-[calc(100vh-10px)] p-6 flex flex-col">
          {/* Sidebar content with icons and section titles (placeholder) */}
          <div className="font-bold text-xl mb-4 text-blue-500">Health<span className="text-black">care.</span></div>
          <div className="text-xs text-gray-400 mb-1">GENERAL</div>
          <nav className="flex flex-col gap-1 mb-4">
            <div className="flex items-center gap-3 font-semibold text-blue-600 bg-blue-100 rounded-xl px-3 py-1.5"><span>🏠</span> Dashboard</div>
            <div className="flex items-center gap-3 text-gray-600 px-3 py-1.5 hover:bg-blue-100 rounded-xl cursor-pointer"><span>🕑</span> History</div>
            <div className="flex items-center gap-3 text-gray-600 px-3 py-1.5 hover:bg-blue-100 rounded-xl cursor-pointer"><span>📅</span> Calendar</div>
            <div className="flex items-center gap-3 text-gray-600 px-3 py-1.5 hover:bg-blue-100 rounded-xl cursor-pointer"><span>📋</span> Appointments</div>
            <div className="flex items-center gap-3 text-gray-600 px-3 py-1.5 hover:bg-blue-100 rounded-xl cursor-pointer"><span>📊</span> Statistics</div>
          </nav>
          <div className="text-xs text-gray-400 mb-1">TOOLS</div>
          <nav className="flex flex-col gap-1">
            <div className="flex items-center gap-3 text-gray-600 px-3 py-1.5 hover:bg-blue-100 rounded-xl cursor-pointer"><span>💬</span> Chat</div>
            <div className="flex items-center gap-3 text-gray-600 px-3 py-1.5 hover:bg-blue-100 rounded-xl cursor-pointer"><span>🛟</span> Support</div>
          </nav>
          <div className="mt-1 text-xs text-gray-400 mb-1 pt-6">SETTINGS</div>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col">
        <h1 className="text-2xl font-bold p-6">Dashboard</h1>
        <div className="flex gap-6 px-6">
          {/* Left section: Anatomy + Health Cards + Activity */}
          <div className="flex-1 flex flex-col gap-6">
            {/* Anatomy + Health Cards */}
            <div className="bg-blue-50 bg-opacity-80 border border-blue-100 rounded-2xl shadow p-4 lg:p-6 flex flex-col lg:flex-row gap-4 lg:gap-6 items-stretch justify-between min-h-[325px] max-h-[450px] mb-2" style={{backgroundColor: 'rgba(239, 246, 255, 0.8)'}}>
              {/* Anatomy image left */}
              <div className="flex flex-col justify-center items-center flex-shrink-0">
                <AnatomySection />
              </div>
              {/* Health Status Cards right */}
              <div className="flex flex-col gap-4 justify-center flex-1">
                {statusCards.map(status => (
                  <HealthStatusCard key={status.id} status={status} />
                ))}
              </div>
            </div>
            {/* Activity Card */}
            <div className="bg-white rounded-2xl shadow p-4 flex flex-col flex-1 min-h-0 max-h-[300px]">
              <ActivityFeed />
            </div>
          </div>

          {/* Right section: Calendar, Appointments, Upcoming Schedule */}
          <div className="w-[700px] h-[calc(100vh-6rem-10px)] flex-shrink-0 flex flex-col gap-6">
            <div className="text-xs text-gray-400 mb-1"></div>
            <div className="min-h-[400px] max-h-[450]">
              <CalendarView />
            </div>
            <div className="text-xs text-gray-400 mb-1"></div>
            <div className="bg-blue-50 bg-opacity-95 rounded-2xl shadow p-4 min-h-[245px]">
              <UpcomingSchedule />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;