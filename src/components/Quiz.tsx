import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { 
  CheckCircle, 
  XCircle, 
  ChevronLeft, 
  Trophy,
  Clock,
  Target,
  RotateCcw
} from "lucide-react";
import { Word } from "@/data/languageData";

interface QuizProps {
  words: Word[];
  languageName: string;
  onComplete: (score: number, results: QuizResult[]) => void;
  onBack: () => void;
}

interface QuizResult {
  word: Word;
  selectedAnswer: string;
  correctAnswer: string;
  isCorrect: boolean;
  timeSpent: number;
}

interface QuizQuestion {
  word: Word;
  options: string[];
  correctAnswer: string;
}

const Quiz = ({ words, languageName, onComplete, onBack }: QuizProps) => {
  const [questions, setQuestions] = useState<QuizQuestion[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string>("");
  const [showResult, setShowResult] = useState(false);
  const [results, setResults] = useState<QuizResult[]>([]);
  const [startTime, setStartTime] = useState<number>(Date.now());
  const [quizStartTime] = useState<number>(Date.now());

  // Generate quiz questions
  useEffect(() => {
    const generateQuestions = () => {
      const shuffledWords = [...words].sort(() => Math.random() - 0.5);
      const quizQuestions: QuizQuestion[] = [];

      shuffledWords.forEach(word => {
        // Get wrong answers from other words
        const otherWords = words.filter(w => w.id !== word.id);
        const wrongAnswers = otherWords
          .sort(() => Math.random() - 0.5)
          .slice(0, 3)
          .map(w => w.meaning);

        // Create options array with correct answer
        const options = [word.meaning, ...wrongAnswers]
          .sort(() => Math.random() - 0.5);

        quizQuestions.push({
          word,
          options,
          correctAnswer: word.meaning
        });
      });

      setQuestions(quizQuestions);
    };

    if (words.length > 0) {
      generateQuestions();
    }
  }, [words]);

  const currentQuestion = questions[currentQuestionIndex];
  const progress = questions.length > 0 ? ((currentQuestionIndex + 1) / questions.length) * 100 : 0;

  const handleAnswerSelect = (answer: string) => {
    setSelectedAnswer(answer);
  };

  const handleNextQuestion = () => {
    if (!selectedAnswer || !currentQuestion) return;

    const timeSpent = Date.now() - startTime;
    const isCorrect = selectedAnswer === currentQuestion.correctAnswer;

    const result: QuizResult = {
      word: currentQuestion.word,
      selectedAnswer,
      correctAnswer: currentQuestion.correctAnswer,
      isCorrect,
      timeSpent
    };

    setResults(prev => [...prev, result]);

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
      setSelectedAnswer("");
      setShowResult(false);
      setStartTime(Date.now());
    } else {
      // Quiz completed
      const finalResults = [...results, result];
      const score = Math.round((finalResults.filter(r => r.isCorrect).length / finalResults.length) * 100);
      onComplete(score, finalResults);
    }
  };

  const handleShowResult = () => {
    setShowResult(true);
  };

  const restartQuiz = () => {
    setCurrentQuestionIndex(0);
    setSelectedAnswer("");
    setShowResult(false);
    setResults([]);
    setStartTime(Date.now());
    
    // Regenerate questions with new random order
    const shuffledWords = [...words].sort(() => Math.random() - 0.5);
    const quizQuestions: QuizQuestion[] = [];

    shuffledWords.forEach(word => {
      const otherWords = words.filter(w => w.id !== word.id);
      const wrongAnswers = otherWords
        .sort(() => Math.random() - 0.5)
        .slice(0, 3)
        .map(w => w.meaning);

      const options = [word.meaning, ...wrongAnswers]
        .sort(() => Math.random() - 0.5);

      quizQuestions.push({
        word,
        options,
        correctAnswer: word.meaning
      });
    });

    setQuestions(quizQuestions);
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

  if (questions.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Card className="p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Loading Quiz...</h2>
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
            <h1 className="text-2xl font-bold text-foreground">{languageName} Quiz</h1>
            <p className="text-muted-foreground">
              Question {currentQuestionIndex + 1} of {questions.length}
            </p>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="outline" size="sm" onClick={restartQuiz}>
              <RotateCcw className="h-4 w-4" />
              Restart
            </Button>
            <div className="flex items-center gap-2">
              <Trophy className="h-5 w-5 text-primary" />
              <span className="font-medium">{results.filter(r => r.isCorrect).length}/{questions.length}</span>
            </div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <Progress value={progress} className="h-2" />
          <div className="flex justify-between text-sm text-muted-foreground mt-2">
            <span>Progress: {Math.round(progress)}%</span>
            <span>
              <Clock className="h-4 w-4 inline mr-1" />
              {Math.round((Date.now() - quizStartTime) / 1000)}s
            </span>
          </div>
        </div>

        {/* Question Card */}
        <Card className="p-8 mb-8 bg-gradient-card border-border/50 shadow-warm">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Badge className={getDifficultyColor(currentQuestion.word.difficulty)}>
                {currentQuestion.word.difficulty}
              </Badge>
              <Badge variant="outline">
                {getCategoryIcon(currentQuestion.word.category)} {currentQuestion.word.category}
              </Badge>
            </div>

            <h2 className="text-3xl font-bold text-foreground mb-4">
              What does this mean?
            </h2>
            
            <div className="text-6xl font-bold text-primary mb-4">
              {currentQuestion.word.native}
            </div>
            
            <div className="text-xl text-muted-foreground mb-8">
              {currentQuestion.word.pronunciation}
            </div>
          </div>

          {/* Answer Options */}
          <div className="grid md:grid-cols-2 gap-4 mb-8">
            {currentQuestion.options.map((option, index) => {
              let buttonClass = "p-6 text-left h-auto justify-start";
              
              if (showResult) {
                if (option === currentQuestion.correctAnswer) {
                  buttonClass += " bg-green-100 border-green-500 text-green-800";
                } else if (option === selectedAnswer && option !== currentQuestion.correctAnswer) {
                  buttonClass += " bg-red-100 border-red-500 text-red-800";
                }
              } else if (selectedAnswer === option) {
                buttonClass += " bg-primary/10 border-primary";
              }

              return (
                <Button
                  key={index}
                  variant="outline"
                  className={buttonClass}
                  onClick={() => !showResult && handleAnswerSelect(option)}
                  disabled={showResult}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center font-bold">
                      {String.fromCharCode(65 + index)}
                    </div>
                    <span className="text-lg">{option}</span>
                    {showResult && option === currentQuestion.correctAnswer && (
                      <CheckCircle className="h-5 w-5 text-green-600 ml-auto" />
                    )}
                    {showResult && option === selectedAnswer && option !== currentQuestion.correctAnswer && (
                      <XCircle className="h-5 w-5 text-red-600 ml-auto" />
                    )}
                  </div>
                </Button>
              );
            })}
          </div>

          {/* Action Buttons */}
          <div className="flex justify-center gap-4">
            {!showResult ? (
              <>
                <Button
                  variant="outline"
                  onClick={handleShowResult}
                  disabled={!selectedAnswer}
                >
                  <Target className="h-4 w-4" />
                  Check Answer
                </Button>
                <Button
                  onClick={handleNextQuestion}
                  disabled={!selectedAnswer}
                >
                  {currentQuestionIndex === questions.length - 1 ? 'Finish Quiz' : 'Next Question'}
                </Button>
              </>
            ) : (
              <Button onClick={handleNextQuestion}>
                {currentQuestionIndex === questions.length - 1 ? 'Complete Quiz' : 'Next Question'}
              </Button>
            )}
          </div>

          {/* Result Feedback */}
          {showResult && (
            <Card className="mt-6 p-4 bg-accent/50">
              <div className="flex items-center justify-center gap-2">
                {selectedAnswer === currentQuestion.correctAnswer ? (
                  <>
                    <CheckCircle className="h-6 w-6 text-green-600" />
                    <span className="text-lg font-medium text-green-800">Correct!</span>
                  </>
                ) : (
                  <>
                    <XCircle className="h-6 w-6 text-red-600" />
                    <span className="text-lg font-medium text-red-800">
                      Incorrect. The correct answer is: {currentQuestion.correctAnswer}
                    </span>
                  </>
                )}
              </div>
            </Card>
          )}
        </Card>
      </div>
    </div>
  );
};

export default Quiz;