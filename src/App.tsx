import React, { useState } from 'react';
import { EnvelopeView } from './components/EnvelopeView';
import { MessageView } from './components/MessageView';
import { PhotoView } from './components/PhotoView';
import { YouTubeView } from './components/YouTubeView';
import { HeartConfetti } from './components/HeartConfetti';

type ViewType = 'envelope' | 'message' | 'photo' | 'youtube';

function App() {
  const [currentView, setCurrentView] = useState<ViewType>('envelope');

  const handleNext = (view: ViewType) => () => setCurrentView(view);
  const handleReset = () => setCurrentView('envelope');

  const views: Record<ViewType, JSX.Element> = {
    envelope: <EnvelopeView onNext={handleNext('message')} />,
    message: <MessageView onNext={handleNext('photo')} />,
    photo: <PhotoView onNext={handleNext('youtube')} />,
    youtube: <YouTubeView onReset={handleReset} />
  };

  return (
    <div className="min-h-screen bg-pink-50 flex items-center justify-center p-4">
      <HeartConfetti />
      {views[currentView]}
    </div>
  );
}

export default App;