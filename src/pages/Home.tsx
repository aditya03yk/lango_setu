import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useAuth } from "@/hooks/useAuth";
import { 
  BookOpen, 
  Users, 
  Trophy, 
  Globe, 
  Sparkles, 
  PlayCircle,
  ArrowRight,
  Star,
  User
} from "lucide-react";

const Home = () => {
  const { isAuthenticated, user } = useAuth();

  const features = [
    {
      icon: BookOpen,
      title: "Interactive Flashcards",
      description: "Learn with beautiful cards showing native scripts, pronunciation, and meanings"
    },
    {
      icon: Globe,
      title: "6 Indian Languages",
      description: "Hindi, Kannada, Marathi, Tamil, Telugu, and Malayalam at your fingertips"
    },
    {
      icon: Trophy,
      title: "Progress Tracking",
      description: "Take quizzes and track your learning journey with detailed scores"
    },
    {
      icon: Users,
      title: "Beginner Friendly",
      description: "Perfect for absolute beginners with 50-60 essential words and phrases"
    }
  ];

  const languages = [
    { name: "Hindi", native: "हिन्दी", color: "bg-orange-100 text-orange-800" },
    { name: "Kannada", native: "ಕನ್ನಡ", color: "bg-red-100 text-red-800" },
    { name: "Marathi", native: "मराठी", color: "bg-green-100 text-green-800" },
    { name: "Tamil", native: "தமிழ்", color: "bg-blue-100 text-blue-800" },
    { name: "Telugu", native: "తెలుగు", color: "bg-purple-100 text-purple-800" },
    { name: "Malayalam", native: "മലയാളം", color: "bg-pink-100 text-pink-800" }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative px-4 pt-20 pb-32 overflow-hidden">
        <div className="container mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-8 animate-bloom">
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">Learn Indian Languages</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 animate-bloom">
            {isAuthenticated ? `Welcome back, ${user?.name?.split(' ')[0]}!` : 'Let Your Language'}
            <span className="block bg-gradient-primary bg-clip-text text-transparent">
              {isAuthenticated ? 'Continue Learning' : 'Blossom'}
            </span>
          </h1>
          
          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto animate-bloom">
            {isAuthenticated 
              ? 'Continue your journey mastering essential words and phrases in beautiful Indian languages.'
              : 'Master essential words and phrases in 6 beautiful Indian languages. Perfect for beginners who want to connect with India\'s rich linguistic heritage.'
            }
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-bloom">
            <Button variant="hero" asChild>
              <Link to="/languages">
                <PlayCircle className="h-5 w-5" />
                {isAuthenticated ? 'Continue Learning' : 'Start Learning'}
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/features">
                Learn More
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>

          {/* Language Preview */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 max-w-4xl mx-auto">
            {languages.map((lang, index) => (
              <div 
                key={lang.name}
                className="animate-bloom p-4 bg-card/50 backdrop-blur-sm rounded-xl border border-border hover:shadow-card transition-all duration-300 hover:scale-105"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-2xl font-bold text-foreground mb-1">{lang.native}</div>
                <div className="text-sm text-muted-foreground">{lang.name}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Background Decorations */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-primary-glow/10 rounded-full blur-xl animate-float" style={{ animationDelay: '1s' }}></div>
      </section>

      {/* Features Section */}
      <section className="px-4 py-20 bg-card/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Choose Native Bloom?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our scientifically-designed approach makes learning Indian languages enjoyable and effective
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card 
                key={feature.title}
                className="p-6 bg-gradient-card border-border/50 hover:shadow-warm transition-all duration-300 hover:scale-105 animate-bloom"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="bg-primary/10 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="px-4 py-20">
        <div className="container mx-auto">
          <div className="bg-gradient-primary rounded-3xl p-12 text-center text-primary-foreground shadow-glow">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Start Your Language Journey Today
            </h2>
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div>
                <div className="text-4xl font-bold mb-2">50+</div>
                <div className="text-primary-foreground/80">Essential Words</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">6</div>
                <div className="text-primary-foreground/80">Indian Languages</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">100%</div>
                <div className="text-primary-foreground/80">Free to Start</div>
              </div>
            </div>
            <Button variant="secondary" size="lg" asChild>
              <Link to="/languages">
                Choose Your Language
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;