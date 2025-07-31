import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Trophy, 
  Target, 
  Clock, 
  CheckCircle, 
  XCircle,
  RotateCcw,
  BookOpen,
  TrendingUp,
  Award
} from "lucide-react";

interface QuizResult {
  word: any;
  selectedAnswer: string;
  correctAnswer: string;
  isCorrect: boolean;
  timeSpent: number;
}

interface QuizResultsProps {
  score: number;
  results: QuizResult[];
  languageName: string;
  onRetakeQuiz: () => void;
  onBackToFlashcards: () => void;
  onBackToLanguage: () => void;
}

const QuizResults = ({ 
  score, 
  results, 
  languageName, 
  onRetakeQuiz, 
  onBackToFlashcards, 
  onBackToLanguage 
}: QuizResultsProps) => {
  const correctAnswers = results.filter(r => r.isCorrect).length;
  const totalQuestions = results.length;
  const averageTime = results.reduce((acc, r) => acc + r.timeSpent, 0) / results.length / 1000;
  
  const getScoreColor = (score: number) => {
    if (score >= 90) return "text-green-600";
    if (score >= 70) return "text-yellow-600";
    return "text-red-600";
  };

  const getScoreBadge = (score: number) => {
    if (score >= 90) return { text: "Excellent!", color: "bg-green-100 text-green-800" };
    if (score >= 70) return { text: "Good Job!", color: "bg-yellow-100 text-yellow-800" };
    if (score >= 50) return { text: "Keep Practicing", color: "bg-orange-100 text-orange-800" };
    return { text: "Need More Practice", color: "bg-red-100 text-red-800" };
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

  const scoreBadge = getScoreBadge(score);

  return (
    <div className="min-h-screen bg-gradient-warm px-4 py-8">
      <div className="container mx-auto max-w-4xl">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6">
            <Trophy className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">Quiz Complete</span>
          </div>
          <h1 className="text-4xl font-bold text-foreground mb-4">
            {languageName} Quiz Results
          </h1>
        </div>

        {/* Score Summary */}
        <Card className="p-8 mb-8 bg-gradient-primary text-primary-foreground shadow-glow">
          <div className="text-center">
            <div className="text-6xl font-bold mb-4">{score}%</div>
            <Badge className={`${scoreBadge.color} mb-4`}>
              {scoreBadge.text}
            </Badge>
            <div className="grid md:grid-cols-3 gap-6 mt-6">
              <div className="text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Target className="h-5 w-5" />
                  <span className="font-medium">Accuracy</span>
                </div>
                <div className="text-2xl font-bold">{correctAnswers}/{totalQuestions}</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Clock className="h-5 w-5" />
                  <span className="font-medium">Avg. Time</span>
                </div>
                <div className="text-2xl font-bold">{averageTime.toFixed(1)}s</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Award className="h-5 w-5" />
                  <span className="font-medium">Grade</span>
                </div>
                <div className="text-2xl font-bold">
                  {score >= 90 ? 'A' : score >= 80 ? 'B' : score >= 70 ? 'C' : score >= 60 ? 'D' : 'F'}
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* Progress Breakdown */}
        <Card className="p-6 mb-8 bg-gradient-card border-border/50">
          <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
            <TrendingUp className="h-5 w-5" />
            Performance Breakdown
          </h3>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span>Correct Answers</span>
                <span>{correctAnswers}/{totalQuestions}</span>
              </div>
              <Progress value={(correctAnswers / totalQuestions) * 100} className="h-2" />
            </div>
            
            {/* Category breakdown */}
            {(() => {
              const categoryStats = results.reduce((acc, result) => {
                const category = result.word.category;
                if (!acc[category]) {
                  acc[category] = { correct: 0, total: 0 };
                }
                acc[category].total++;
                if (result.isCorrect) {
                  acc[category].correct++;
                }
                return acc;
              }, {} as Record<string, { correct: number; total: number }>);

              return Object.entries(categoryStats).map(([category, stats]) => (
                <div key={category}>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="flex items-center gap-2">
                      <span>{getCategoryIcon(category)}</span>
                      {category.charAt(0).toUpperCase() + category.slice(1)}
                    </span>
                    <span>{stats.correct}/{stats.total}</span>
                  </div>
                  <Progress value={(stats.correct / stats.total) * 100} className="h-2" />
                </div>
              ));
            })()}
          </div>
        </Card>

        {/* Detailed Results */}
        <Card className="p-6 mb-8 bg-gradient-card border-border/50">
          <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
            <BookOpen className="h-5 w-5" />
            Detailed Results
          </h3>
          <div className="space-y-4 max-h-96 overflow-y-auto">
            {results.map((result, index) => (
              <div 
                key={index}
                className={`p-4 rounded-lg border ${
                  result.isCorrect 
                    ? 'bg-green-50 border-green-200' 
                    : 'bg-red-50 border-red-200'
                }`}
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      {result.isCorrect ? (
                        <CheckCircle className="h-5 w-5 text-green-600" />
                      ) : (
                        <XCircle className="h-5 w-5 text-red-600" />
                      )}
                      <Badge className={getDifficultyColor(result.word.difficulty)}>
                        {result.word.difficulty}
                      </Badge>
                      <Badge variant="outline">
                        {getCategoryIcon(result.word.category)} {result.word.category}
                      </Badge>
                    </div>
                    
                    <div className="mb-2">
                      <span className="text-2xl font-bold text-foreground mr-3">
                        {result.word.native}
                      </span>
                      <span className="text-muted-foreground">
                        ({result.word.pronunciation})
                      </span>
                    </div>
                    
                    <div className="text-sm">
                      <div className="mb-1">
                        <strong>Correct Answer:</strong> {result.correctAnswer}
                      </div>
                      {!result.isCorrect && (
                        <div className="text-red-600">
                          <strong>Your Answer:</strong> {result.selectedAnswer}
                        </div>
                      )}
                    </div>
                  </div>
                  
                  <div className="text-right text-sm text-muted-foreground">
                    <Clock className="h-4 w-4 inline mr-1" />
                    {(result.timeSpent / 1000).toFixed(1)}s
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="outline" onClick={onBackToLanguage}>
            Back to {languageName}
          </Button>
          <Button variant="outline" onClick={onBackToFlashcards}>
            <BookOpen className="h-4 w-4" />
            Study Flashcards
          </Button>
          <Button onClick={onRetakeQuiz}>
            <RotateCcw className="h-4 w-4" />
            Retake Quiz
          </Button>
        </div>
      </div>
    </div>
  );
};

export default QuizResults;