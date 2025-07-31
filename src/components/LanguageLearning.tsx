import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  BookOpen, 
  Brain, 
  Trophy, 
  Play,
  ArrowLeft,
  Filter,
  Shuffle,
  Target,
  Clock,
  Award
} from "lucide-react";
import { getLanguageById, getAllCategories, getWordsByCategory, getWordsByDifficulty } from "@/data/languageData";
import Flashcard from "./Flashcard";
import Quiz from "./Quiz";
import QuizResults from "./QuizResults";

interface LanguageLearningProps {
  languageId: string;
  onBack: () => void;
}

type LearningMode = 'menu' | 'flashcards' | 'quiz' | 'results';
type FilterType = 'all' | 'category' | 'difficulty';

interface QuizResult {
  word: any;
  selectedAnswer: string;
  correctAnswer: string;
  isCorrect: boolean;
  timeSpent: number;
}

const LanguageLearning = ({ languageId, onBack }: LanguageLearningProps) => {
  const [mode, setMode] = useState<LearningMode>('menu');
  const [filterType, setFilterType] = useState<FilterType>('all');
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [selectedDifficulty, setSelectedDifficulty] = useState<'easy' | 'medium' | 'hard'>('easy');
  const [quizScore, setQuizScore] = useState<number>(0);
  const [quizResults, setQuizResults] = useState<QuizResult[]>([]);

  const language = getLanguageById(languageId);
  
  if (!language) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Card className="p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Language not found</h2>
          <Button onClick={onBack}>Go Back</Button>
        </Card>
      </div>
    );
  }

  const categories = getAllCategories(languageId);
  
  const getFilteredWords = () => {
    switch (filterType) {
      case 'category':
        return selectedCategory ? getWordsByCategory(languageId, selectedCategory) : language.words;
      case 'difficulty':
        return getWordsByDifficulty(languageId, selectedDifficulty);
      default:
        return language.words;
    }
  };

  const filteredWords = getFilteredWords();

  const handleFlashcardComplete = (score: number) => {
    setMode('menu');
    // Could save progress here
  };

  const handleQuizComplete = (score: number, results: QuizResult[]) => {
    setQuizScore(score);
    setQuizResults(results);
    setMode('results');
  };

  const startFlashcards = () => {
    if (filteredWords.length === 0) {
      alert('No words available for the selected filter. Please choose a different option.');
      return;
    }
    setMode('flashcards');
  };

  const startQuiz = () => {
    if (filteredWords.length < 4) {
      alert('Need at least 4 words to start a quiz. Please choose a different filter or add more words.');
      return;
    }
    setMode('quiz');
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

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'easy': return 'bg-green-100 text-green-800';
      case 'medium': return 'bg-yellow-100 text-yellow-800';
      case 'hard': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  // Render different modes
  if (mode === 'flashcards') {
    return (
      <Flashcard
        words={filteredWords}
        languageName={language.name}
        onComplete={handleFlashcardComplete}
        onBack={() => setMode('menu')}
      />
    );
  }

  if (mode === 'quiz') {
    return (
      <Quiz
        words={filteredWords}
        languageName={language.name}
        onComplete={handleQuizComplete}
        onBack={() => setMode('menu')}
      />
    );
  }

  if (mode === 'results') {
    return (
      <QuizResults
        score={quizScore}
        results={quizResults}
        languageName={language.name}
        onRetakeQuiz={() => setMode('quiz')}
        onBackToFlashcards={() => setMode('flashcards')}
        onBackToLanguage={() => setMode('menu')}
      />
    );
  }

  // Main menu
  return (
    <div className="min-h-screen bg-gradient-warm px-4 py-8">
      <div className="container mx-auto max-w-4xl">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <Button variant="outline" onClick={onBack}>
            <ArrowLeft className="h-4 w-4" />
            Back to Languages
          </Button>
          <div className="text-center">
            <h1 className="text-3xl font-bold text-foreground">
              Learn {language.name}
            </h1>
            <p className="text-muted-foreground">{language.native}</p>
          </div>
          <div className="w-32"></div> {/* Spacer for centering */}
        </div>

        {/* Language Info */}
        <Card className="p-6 mb-8 bg-gradient-card border-border/50 shadow-warm">
          <div className="text-center">
            <div className="text-6xl font-bold text-primary mb-4">
              {language.native}
            </div>
            <h2 className="text-2xl font-bold text-foreground mb-2">{language.name}</h2>
            <p className="text-muted-foreground mb-4">Script: {language.script}</p>
            <div className="flex justify-center gap-4 text-sm">
              <div className="flex items-center gap-1">
                <BookOpen className="h-4 w-4 text-primary" />
                <span>{language.words.length} words</span>
              </div>
              <div className="flex items-center gap-1">
                <Target className="h-4 w-4 text-primary" />
                <span>{categories.length} categories</span>
              </div>
            </div>
          </div>
        </Card>

        {/* Filter Options */}
        <Card className="p-6 mb-8 bg-gradient-card border-border/50">
          <h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
            <Filter className="h-5 w-5" />
            Choose What to Study
          </h3>
          
          <div className="space-y-4">
            {/* Filter Type Selection */}
            <div className="flex flex-wrap gap-2">
              <Button
                variant={filterType === 'all' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setFilterType('all')}
              >
                All Words ({language.words.length})
              </Button>
              <Button
                variant={filterType === 'category' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setFilterType('category')}
              >
                By Category
              </Button>
              <Button
                variant={filterType === 'difficulty' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setFilterType('difficulty')}
              >
                By Difficulty
              </Button>
            </div>

            {/* Category Selection */}
            {filterType === 'category' && (
              <div className="space-y-2">
                <p className="text-sm font-medium text-foreground">Select Category:</p>
                <div className="flex flex-wrap gap-2">
                  {categories.map(category => {
                    const categoryWords = getWordsByCategory(languageId, category);
                    return (
                      <Button
                        key={category}
                        variant={selectedCategory === category ? 'default' : 'outline'}
                        size="sm"
                        onClick={() => setSelectedCategory(category)}
                      >
                        {getCategoryIcon(category)} {category} ({categoryWords.length})
                      </Button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Difficulty Selection */}
            {filterType === 'difficulty' && (
              <div className="space-y-2">
                <p className="text-sm font-medium text-foreground">Select Difficulty:</p>
                <div className="flex gap-2">
                  {(['easy', 'medium', 'hard'] as const).map(difficulty => {
                    const difficultyWords = getWordsByDifficulty(languageId, difficulty);
                    return (
                      <Button
                        key={difficulty}
                        variant={selectedDifficulty === difficulty ? 'default' : 'outline'}
                        size="sm"
                        onClick={() => setSelectedDifficulty(difficulty)}
                      >
                        <Badge className={getDifficultyColor(difficulty)} variant="secondary">
                          {difficulty} ({difficultyWords.length})
                        </Badge>
                      </Button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Selected Filter Info */}
            <div className="p-3 bg-accent/50 rounded-lg">
              <p className="text-sm text-foreground">
                <strong>Selected:</strong> {filteredWords.length} words
                {filterType === 'category' && selectedCategory && ` from ${selectedCategory}`}
                {filterType === 'difficulty' && ` at ${selectedDifficulty} level`}
              </p>
            </div>
          </div>
        </Card>

        {/* Learning Options */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {/* Flashcards */}
          <Card className="p-6 bg-gradient-card border-border/50 hover:shadow-warm transition-all duration-300 hover:scale-105">
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <BookOpen className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">Study Flashcards</h3>
              <p className="text-muted-foreground mb-6">
                Learn new words with interactive flashcards. See the word, hear the pronunciation, and test your memory.
              </p>
              <Button onClick={startFlashcards} className="w-full" disabled={filteredWords.length === 0}>
                <Play className="h-4 w-4" />
                Start Studying ({filteredWords.length} words)
              </Button>
            </div>
          </Card>

          {/* Quiz */}
          <Card className="p-6 bg-gradient-card border-border/50 hover:shadow-warm transition-all duration-300 hover:scale-105">
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Brain className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">Take Quiz</h3>
              <p className="text-muted-foreground mb-6">
                Test your knowledge with multiple choice questions. Track your progress and identify areas to improve.
              </p>
              <Button onClick={startQuiz} className="w-full" disabled={filteredWords.length < 4}>
                <Trophy className="h-4 w-4" />
                Start Quiz ({filteredWords.length} questions)
              </Button>
              {filteredWords.length < 4 && (
                <p className="text-xs text-muted-foreground mt-2">
                  Need at least 4 words for quiz
                </p>
              )}
            </div>
          </Card>
        </div>

        {/* Progress Overview */}
        <Card className="p-6 bg-gradient-card border-border/50">
          <h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
            <Award className="h-5 w-5" />
            Learning Progress
          </h3>
          
          <div className="grid md:grid-cols-3 gap-4">
            {/* Category Progress */}
            <div>
              <h4 className="font-medium text-foreground mb-2">Categories</h4>
              <div className="space-y-2">
                {categories.slice(0, 3).map(category => {
                  const categoryWords = getWordsByCategory(languageId, category);
                  const percentage = (categoryWords.length / language.words.length) * 100;
                  return (
                    <div key={category}>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="flex items-center gap-1">
                          {getCategoryIcon(category)} {category}
                        </span>
                        <span>{categoryWords.length}</span>
                      </div>
                      <Progress value={percentage} className="h-1" />
                    </div>
                  );
                })}
                {categories.length > 3 && (
                  <p className="text-xs text-muted-foreground">
                    +{categories.length - 3} more categories
                  </p>
                )}
              </div>
            </div>

            {/* Difficulty Distribution */}
            <div>
              <h4 className="font-medium text-foreground mb-2">Difficulty</h4>
              <div className="space-y-2">
                {(['easy', 'medium', 'hard'] as const).map(difficulty => {
                  const difficultyWords = getWordsByDifficulty(languageId, difficulty);
                  const percentage = (difficultyWords.length / language.words.length) * 100;
                  return (
                    <div key={difficulty}>
                      <div className="flex justify-between text-sm mb-1">
                        <Badge className={getDifficultyColor(difficulty)} variant="secondary">
                          {difficulty}
                        </Badge>
                        <span>{difficultyWords.length}</span>
                      </div>
                      <Progress value={percentage} className="h-1" />
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Quick Stats */}
            <div>
              <h4 className="font-medium text-foreground mb-2">Quick Stats</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Total Words:</span>
                  <span className="font-medium">{language.words.length}</span>
                </div>
                <div className="flex justify-between">
                  <span>Categories:</span>
                  <span className="font-medium">{categories.length}</span>
                </div>
                <div className="flex justify-between">
                  <span>Script:</span>
                  <span className="font-medium">{language.script}</span>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default LanguageLearning;