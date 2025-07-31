import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Volume2, 
  RotateCcw, 
  ChevronLeft, 
  ChevronRight,
  Eye,
  EyeOff,
  Trophy,
  BookOpen,
  Target
} from "lucide-react";
import { Word } from "@/data/languageData";

interface FlashcardProps {
  words: Word[];
  languageName: string;
  onComplete: (score: number) => void;
  onBack: () => void;
}

const Flashcard = ({ words, languageName, onComplete, onBack }: FlashcardProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [showMeaning, setShowMeaning] = useState(false);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [studiedWords, setStudiedWords] = useState<Set<string>>(new Set());

  const currentWord = words[currentIndex];
  const progress = ((currentIndex + 1) / words.length) * 100;

  const playAudio = (text: string) => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 0.8;
      utterance.pitch = 1;
      
      // Try to set appropriate language voice
      const voices = speechSynthesis.getVoices();
      const hindiVoice = voices.find(voice => 
        voice.lang.includes('hi') || voice.lang.includes('en-IN')
      );
      if (hindiVoice) {
        utterance.voice = hindiVoice;
      }
      
      speechSynthesis.speak(utterance);
    }
  };

  const handleNext = () => {
    if (currentIndex < words.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setIsFlipped(false);
      setShowMeaning(false);
    } else {
      // Complete the session
      const score = Math.round((correctAnswers / words.length) * 100);
      onComplete(score);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setIsFlipped(false);
      setShowMeaning(false);
    }
  };

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
    if (!isFlipped) {
      setStudiedWords(prev => new Set([...prev, currentWord.id]));
    }
  };

  const handleKnowIt = () => {
    setCorrectAnswers(prev => prev + 1);
    setStudiedWords(prev => new Set([...prev, currentWord.id]));
    handleNext();
  };

  const handleNeedPractice = () => {
    setStudiedWords(prev => new Set([...prev, currentWord.id]));
    handleNext();
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'easy': return 'bg-green-100 text-green-800';
      case 'medium': return 'bg-yellow-100 text-yellow-800';
      case 'hard': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'greetings': return '👋';
      case 'family': return '👨‍👩‍👧‍👦';
      case 'food': return '🍽️';
      case 'numbers': return '🔢';
      case 'colors': return '🎨';
      case 'body': return '👤';
      case 'time': return '⏰';
      case 'places': return '🏠';
      case 'actions': return '🏃';
      case 'weather': return '🌤️';
      default: return '📚';
    }
  };

  if (!currentWord) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Card className="p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">No words available</h2>
          <Button onClick={onBack}>Go Back</Button>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-warm px-4 py-8">
      <div className="container mx-auto max-w-4xl">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <Button variant="outline" onClick={onBack}>
            <ChevronLeft className="h-4 w-4" />
            Back to {languageName}
          </Button>
          <div className="text-center">
            <h1 className="text-2xl font-bold text-foreground">Learning {languageName}</h1>
            <p className="text-muted-foreground">
              {currentIndex + 1} of {words.length} words
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Trophy className="h-5 w-5 text-primary" />
            <span className="font-medium">{correctAnswers}/{words.length}</span>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <Progress value={progress} className="h-2" />
          <div className="flex justify-between text-sm text-muted-foreground mt-2">
            <span>Progress: {Math.round(progress)}%</span>
            <span>Studied: {studiedWords.size}/{words.length}</span>
          </div>
        </div>

        {/* Main Flashcard */}
        <div className="mb-8">
          <Card 
            className="relative h-96 cursor-pointer transition-all duration-500 hover:shadow-warm"
            onClick={handleFlip}
            style={{
              transformStyle: 'preserve-3d',
              transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)'
            }}
          >
            {/* Front of card */}
            <div 
              className="absolute inset-0 p-8 flex flex-col justify-center items-center backface-hidden"
              style={{ backfaceVisibility: 'hidden' }}
            >
              <div className="text-center">
                <div className="flex items-center justify-center gap-2 mb-4">
                  <Badge className={getDifficultyColor(currentWord.difficulty)}>
                    {currentWord.difficulty}
                  </Badge>
                  <Badge variant="outline">
                    {getCategoryIcon(currentWord.category)} {currentWord.category}
                  </Badge>
                </div>
                
                <div className="text-6xl font-bold text-foreground mb-4">
                  {currentWord.native}
                </div>
                
                <div className="text-xl text-muted-foreground mb-6">
                  {currentWord.pronunciation}
                </div>
                
                <Button
                  variant="outline"
                  size="lg"
                  onClick={(e) => {
                    e.stopPropagation();
                    playAudio(currentWord.pronunciation);
                  }}
                  className="mb-4"
                >
                  <Volume2 className="h-5 w-5" />
                  Play Audio
                </Button>
                
                <p className="text-muted-foreground">
                  Click to reveal meaning
                </p>
              </div>
            </div>

            {/* Back of card */}
            <div 
              className="absolute inset-0 p-8 flex flex-col justify-center items-center backface-hidden bg-primary/5"
              style={{ 
                backfaceVisibility: 'hidden',
                transform: 'rotateY(180deg)'
              }}
            >
              <div className="text-center">
                <div className="text-4xl font-bold text-foreground mb-4">
                  {currentWord.meaning}
                </div>
                
                <div className="text-xl text-muted-foreground mb-6">
                  "{currentWord.native}" means "{currentWord.meaning}"
                </div>
                
                <div className="flex gap-4">
                  <Button
                    variant="outline"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleNeedPractice();
                    }}
                  >
                    <BookOpen className="h-4 w-4" />
                    Need Practice
                  </Button>
                  <Button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleKnowIt();
                    }}
                  >
                    <Target className="h-4 w-4" />
                    I Know This!
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Navigation Controls */}
        <div className="flex justify-between items-center">
          <Button
            variant="outline"
            onClick={handlePrevious}
            disabled={currentIndex === 0}
          >
            <ChevronLeft className="h-4 w-4" />
            Previous
          </Button>

          <div className="flex gap-2">
            <Button
              variant="outline"
              onClick={() => setIsFlipped(!isFlipped)}
            >
              <RotateCcw className="h-4 w-4" />
              Flip Card
            </Button>
            
            <Button
              variant="outline"
              onClick={() => setShowMeaning(!showMeaning)}
            >
              {showMeaning ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              {showMeaning ? 'Hide' : 'Show'} Meaning
            </Button>
          </div>

          <Button
            onClick={handleNext}
            disabled={currentIndex === words.length - 1 && !isFlipped}
          >
            {currentIndex === words.length - 1 ? 'Complete' : 'Next'}
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>

        {/* Show meaning overlay */}
        {showMeaning && !isFlipped && (
          <Card className="mt-4 p-4 bg-accent/50 border-primary/20">
            <div className="text-center">
              <span className="text-lg font-medium text-foreground">
                Meaning: {currentWord.meaning}
              </span>
            </div>
          </Card>
        )}
      </div>
    </div>
  );
};

export default Flashcard;