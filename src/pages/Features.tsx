import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  BookOpen, 
  Brain, 
  Trophy, 
  Volume2, 
  Eye, 
  Repeat,
  CheckCircle,
  ArrowRight,
  Sparkles,
  Globe,
  Users,
  Clock
} from "lucide-react";

const Features = () => {
  const mainFeatures = [
    {
      icon: BookOpen,
      title: "Smart Flashcards",
      description: "Interactive cards with native script, pronunciation guides, meaning, and example usage for comprehensive learning",
      benefits: ["Native script display", "Audio pronunciation", "Context examples", "Visual memory aids"]
    },
    {
      icon: Brain,
      title: "Adaptive Learning",
      description: "Our system adapts to your learning pace, focusing on words you find challenging while reinforcing what you know",
      benefits: ["Personalized pace", "Difficulty adjustment", "Progress tracking", "Smart repetition"]
    },
    {
      icon: Trophy,
      title: "Interactive Quizzes",
      description: "Test your knowledge with engaging quizzes that reinforce learning and track your progress over time",
      benefits: ["Multiple quiz types", "Instant feedback", "Score tracking", "Progress analytics"]
    }
  ];

  const learningMethods = [
    {
      icon: Eye,
      title: "Visual Learning",
      description: "Beautiful native scripts help you recognize and remember words through visual association"
    },
    {
      icon: Volume2,
      title: "Audio Pronunciation",
      description: "Hear correct pronunciation to develop authentic speaking skills from day one"
    },
    {
      icon: Repeat,
      title: "Spaced Repetition",
      description: "Scientific repetition intervals ensure long-term retention of vocabulary"
    },
    {
      icon: CheckCircle,
      title: "Progress Tracking",
      description: "Monitor your learning journey with detailed statistics and achievement milestones"
    }
  ];

  const languageSupport = [
    { name: "Hindi", native: "हिन्दी", speakers: "600M+", script: "Devanagari" },
    { name: "Kannada", native: "ಕನ್ನಡ", speakers: "45M+", script: "Kannada" },
    { name: "Marathi", native: "मराठी", speakers: "83M+", script: "Devanagari" },
    { name: "Tamil", native: "தமிழ்", speakers: "75M+", script: "Tamil" },
    { name: "Telugu", native: "తెలుగు", speakers: "82M+", script: "Telugu" },
    { name: "Malayalam", native: "മലയാളം", speakers: "38M+", script: "Malayalam" }
  ];

  return (
    <div className="px-4 py-16">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6 animate-bloom">
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">Powerful Features</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 animate-bloom">
            Everything You Need to
            <span className="block bg-gradient-primary bg-clip-text text-transparent">
              Master Indian Languages
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-bloom">
            Native Bloom combines proven language learning techniques with modern technology 
            to make learning Indian languages effective and enjoyable.
          </p>
        </div>

        {/* Main Features */}
        <section className="mb-20">
          <div className="grid lg:grid-cols-3 gap-8">
            {mainFeatures.map((feature, index) => (
              <Card 
                key={feature.title}
                className="p-8 bg-gradient-card border-border/50 hover:shadow-warm transition-all duration-300 hover:scale-105 animate-bloom"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="bg-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                  <feature.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">{feature.title}</h3>
                <p className="text-muted-foreground mb-6">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-foreground">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </section>

        {/* Learning Methods */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              How You'll Learn
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our multi-sensory approach engages different learning styles for maximum retention
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {learningMethods.map((method, index) => (
              <Card 
                key={method.title}
                className="p-6 text-center bg-card/50 backdrop-blur-sm border-border/50 hover:shadow-card transition-all duration-300 hover:scale-105 animate-bloom"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="bg-primary/10 w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <method.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{method.title}</h3>
                <p className="text-sm text-muted-foreground">{method.description}</p>
              </Card>
            ))}
          </div>
        </section>

        {/* Language Support */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Supported Languages
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Learn from India's most spoken languages, each with its unique script and cultural heritage
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {languageSupport.map((lang, index) => (
              <Card 
                key={lang.name}
                className="p-6 bg-gradient-card border-border/50 hover:shadow-warm transition-all duration-300 hover:scale-105 animate-bloom"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-center">
                  <div className="text-3xl font-bold text-foreground mb-2">{lang.native}</div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">{lang.name}</h3>
                  <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-1">
                      <Users className="h-4 w-4" />
                      {lang.speakers}
                    </div>
                    <div className="flex items-center gap-1">
                      <Globe className="h-4 w-4" />
                      {lang.script}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <Card className="p-12 bg-gradient-primary text-primary-foreground shadow-glow">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Start Your Language Journey?
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              Join thousands of learners who are discovering the beauty of Indian languages with Native Bloom
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg" asChild>
                <Link to="/languages">
                  <Clock className="h-5 w-5" />
                  Start Learning Now
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="bg-transparent border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                <Link to="/about">
                  Learn More About Us
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default Features;