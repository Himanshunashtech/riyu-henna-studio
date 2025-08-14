
import { useState, useEffect } from 'react';
import { YouTubeLiveService } from '@/services/youtubeLiveService';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';

const LiveStatusToggle = () => {
  const [isLive, setIsLive] = useState(false);

  useEffect(() => {
    const checkStatus = async () => {
      const { isLive: live } = await YouTubeLiveService.checkIfLive();
      setIsLive(live);
    };
    checkStatus();
  }, []);

  const handleToggle = (checked: boolean) => {
    YouTubeLiveService.setLiveStatus(checked);
    setIsLive(checked);
  };

  return (
    <div className="fixed bottom-6 left-6 z-50 bg-white p-4 rounded-lg shadow-lg border">
      <div className="flex items-center space-x-2">
        <Switch
          id="live-status"
          checked={isLive}
          onCheckedChange={handleToggle}
        />
        <Label htmlFor="live-status" className="text-sm font-medium">
          {isLive ? '🔴 Live' : '⚫ Offline'}
        </Label>
      </div>
      <p className="text-xs text-gray-500 mt-1">
        Toggle for testing
      </p>
    </div>
  );
};

export default LiveStatusToggle;