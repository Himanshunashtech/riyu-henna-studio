
import { useState, useEffect } from 'react';
import { Play, X, Youtube } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { YouTubeLiveService } from '@/services/youtubeLiveService';

const LiveButton = () => {
  const [isLive, setIsLive] = useState(false);
  const [showLiveStream, setShowLiveStream] = useState(false);
  const [liveUrl, setLiveUrl] = useState<string>('');

  useEffect(() => {
    const checkLiveStatus = async () => {
      const { isLive: live, liveUrl: url } = await YouTubeLiveService.checkIfLive();
      setIsLive(live);
      if (url) setLiveUrl(url);
    };

    // Check immediately
    checkLiveStatus();

    // Set up interval to check periodically
    const interval = setInterval(checkLiveStatus, 60000); // Check every minute

    return () => clearInterval(interval);
  }, []);

  const handleLiveClick = () => {
    setShowLiveStream(true);
  };

  // Get YouTube embed URL from live URL
  const getEmbedUrl = (url: string) => {
    // Extract video ID or use live endpoint
    return `https://www.youtube.com/embed/live_stream?channel=UCYourChannelID&autoplay=1`;
  };

  if (!isLive) {
    return null;
  }

  return (
    <>
      {/* Floating Live Button */}
      <div className="fixed bottom-6 right-6 z-50 animate-pulse">
        <button
          onClick={handleLiveClick}
          className="bg-red-600 hover:bg-red-700 text-white rounded-full p-4 shadow-lg hover:shadow-xl transition-all duration-300 flex items-center space-x-2 group"
        >
          <div className="relative">
            <Youtube className="w-6 h-6" />
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-white rounded-full animate-ping"></div>
          </div>
          <div className="hidden group-hover:block">
            <span className="font-medium text-sm whitespace-nowrap">LIVE NOW</span>
          </div>
        </button>
        
        {/* Live indicator dot */}
        <div className="absolute -top-2 -right-2 w-4 h-4 bg-red-500 rounded-full animate-pulse border-2 border-white"></div>
      </div>

      {/* Live Stream Dialog */}
      <Dialog open={showLiveStream} onOpenChange={setShowLiveStream}>
        <DialogContent className="max-w-4xl w-full h-[600px]">
          <DialogHeader>
            <div className="flex items-center justify-between">
              <DialogTitle className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                <span>Live Stream - Riyu.Riya Henna Artist</span>
              </DialogTitle>
              <button
                onClick={() => setShowLiveStream(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </DialogHeader>
          
          <div className="flex-1 mt-4">
            <div className="w-full h-full bg-black rounded-lg overflow-hidden">
              <iframe
                src={`https://www.youtube.com/embed/live_stream?channel=UC_YOUR_CHANNEL_ID&autoplay=1`}
                className="w-full h-full"
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen
                title="Live Stream"
              ></iframe>
            </div>
            
            {/* Live Stream Info */}
            <div className="mt-4 p-4 bg-gray-50 rounded-lg">
              <p className="text-sm text-gray-600">
                🔴 You're watching live! Don't forget to like and subscribe for more henna tutorials.
              </p>
              <div className="mt-2 flex space-x-4">
                <a
                  href={liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-red-600 hover:text-red-700 text-sm font-medium"
                >
                  Watch on YouTube
                </a>
                <a
                  href="https://youtube.com/@riyuhennaartist?sub_confirmation=1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-red-600 hover:text-red-700 text-sm font-medium"
                >
                  Subscribe
                </a>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default LiveButton;