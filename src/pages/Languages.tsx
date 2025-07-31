import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Play, 
  Users, 
  BookOpen, 
  ArrowRight,
  Volume2,
  Eye,
  Brain,
  Globe,
  Sparkles
} from "lucide-react";
import { languageData } from "@/data/languageData";
import LanguageLearning from "@/components/LanguageLearning";

const Languages = () => {
  const [selectedLanguage, setSelectedLanguage] = useState<string | null>(null);
  const [currentLanguageId, setCurrentLanguageId] = useState<string | null>(null);

  // If a language is selected for learning, show the learning component
  if (currentLanguageId) {
    return (
      <LanguageLearning
        languageId={currentLanguageId}
        onBack={() => setCurrentLanguageId(null)}
      />
    );
  }

  // Transform language data for display
  const languages = languageData.map(lang => ({
    id: lang.id,
    name: lang.name,
    native: lang.native,
    description: `Learn ${lang.name} with ${lang.words.length} essential words and phrases`,
    script: lang.script,
    speakers: lang.id === 'hindi' ? '600M+' : 
              lang.id === 'marathi' ? '83M+' :
              lang.id === 'telugu' ? '82M+' :
              lang.id === 'tamil' ? '75M+' :
              lang.id === 'kannada' ? '45M+' :
              lang.id === 'malayalam' ? '38M+' : '50M+',
    difficulty: "Beginner",
    color: lang.id === 'hindi' ? "from-orange-400 to-red-500" :
           lang.id === 'kannada' ? "from-red-400 to-pink-500" :
           lang.id === 'marathi' ? "from-green-400 to-emerald-500" :
           lang.id === 'tamil' ? "from-blue-400 to-indigo-500" :
           lang.id === 'telugu' ? "from-purple-400 to-violet-500" :
           lang.id === 'malayalam' ? "from-pink-400 to-rose-500" : "from-gray-400 to-gray-500",
    bgColor: lang.id === 'hindi' ? "bg-orange-50" :
             lang.id === 'kannada' ? "bg-red-50" :
             lang.id === 'marathi' ? "bg-green-50" :
             lang.id === 'tamil' ? "bg-blue-50" :
             lang.id === 'telugu' ? "bg-purple-50" :
             lang.id === 'malayalam' ? "bg-pink-50" : "bg-gray-50",
    textColor: lang.id === 'hindi' ? "text-orange-800" :
               lang.id === 'kannada' ? "text-red-800" :
               lang.id === 'marathi' ? "text-green-800" :
               lang.id === 'tamil' ? "text-blue-800" :
               lang.id === 'telugu' ? "text-purple-800" :
               lang.id === 'malayalam' ? "text-pink-800" : "text-gray-800",
    words: lang.words.length,
    phrases: 0, // We don't have separate phrases, just words
    features: lang.id === 'hindi' ? ["Simple grammar", "Phonetic script", "Rich vocabulary"] :
              lang.id === 'kannada' ? ["Unique script", "Melodious sounds", "Cultural richness"] :
              lang.id === 'marathi' ? ["Similar to Hindi", "Rich literature", "Easy transition"] :
              lang.id === 'tamil' ? ["Ancient heritage", "Pure vocabulary", "Distinct script"] :
              lang.id === 'telugu' ? ["Melodious tone", "Rounded script", "Cultural depth"] :
              lang.id === 'malayalam' ? ["Unique curves", "Expressive sounds", "Literary richness"] :
              ["Rich culture", "Beautiful script", "Easy to learn"],
    sampleWords: lang.words.slice(0, 3).map(word => ({
      hindi: word.native,
      pronunciation: word.pronunciation,
      meaning: word.meaning
    }))
  }));

  const startLearning = (language) => {
    setCurrentLanguageId(language.id);
  };

  return (
    <div className="px-4 py-16">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6 animate-bloom">
            <Globe className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">Choose Your Language</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 animate-bloom">
            Which Language Would You
            <span className="block bg-gradient-primary bg-clip-text text-transparent">
              Like to Learn?
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-bloom">
            Each language offers a unique window into India's rich cultural heritage. 
            Start with any language that interests you most!
          </p>
        </div>

        {/* Language Grid */}
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
          {languages.map((language, index) => (
            <Card 
              key={language.id}
              className="group p-8 bg-gradient-card border-border/50 hover:shadow-warm transition-all duration-300 hover:scale-105 animate-bloom cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => setSelectedLanguage(selectedLanguage === language.id ? null : language.id)}
            >
              {/* Header */}
              <div className="text-center mb-6">
                <div className={`text-4xl font-bold mb-2 bg-gradient-to-r ${language.color} bg-clip-text text-transparent`}>
                  {language.native}
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-2">{language.name}</h3>
                <p className="text-sm text-muted-foreground">{language.description}</p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="text-center">
                  <div className="flex items-center justify-center gap-1 mb-1">
                    <Users className="h-4 w-4 text-primary" />
                    <span className="text-sm font-medium text-foreground">{language.speakers}</span>
                  </div>
                  <div className="text-xs text-muted-foreground">Speakers</div>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center gap-1 mb-1">
                    <BookOpen className="h-4 w-4 text-primary" />
                    <span className="text-sm font-medium text-foreground">{language.words}</span>
                  </div>
                  <div className="text-xs text-muted-foreground">Words</div>
                </div>
              </div>

              {/* Features */}
              <div className="mb-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="secondary" className={language.bgColor}>
                    <span className={language.textColor}>{language.script} Script</span>
                  </Badge>
                  <Badge variant="outline">{language.difficulty}</Badge>
                </div>
                <ul className="space-y-1">
                  {language.features.map((feature, i) => (
                    <li key={i} className="text-sm text-muted-foreground flex items-center gap-2">
                      <Sparkles className="h-3 w-3 text-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Expanded Content */}
              {selectedLanguage === language.id && (
                <div className="border-t border-border pt-6 mt-6 animate-bloom">
                  <h4 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                    <Eye className="h-4 w-4" />
                    Sample Words
                  </h4>
                  <div className="space-y-3 mb-6">
                    {language.sampleWords.map((word, i) => (
                      <div key={i} className="bg-accent/50 rounded-lg p-3">
                        <div className="flex justify-between items-start">
                          <div>
                            <div className="text-lg font-bold text-foreground">{word.hindi}</div>
                            <div className="text-sm text-muted-foreground">{word.pronunciation}</div>
                          </div>
                          <div className="text-right">
                            <div className="text-sm text-foreground font-medium">{word.meaning}</div>
                            <Button variant="ghost" size="sm" className="p-1 h-auto">
                              <Volume2 className="h-3 w-3" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Start Button */}
              <Button 
                onClick={(e) => {
                  e.stopPropagation();
                  startLearning(language);
                }}
                className="w-full group-hover:scale-105 transition-transform"
                variant="bloom"
              >
                <Play className="h-4 w-4" />
                Start Learning {language.name}
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Card>
          ))}
        </div>

        {/* Help Section */}
        <Card className="p-8 bg-gradient-primary text-primary-foreground text-center shadow-glow">
          <Brain className="h-12 w-12 mx-auto mb-4 text-primary-foreground/90" />
          <h3 className="text-2xl font-bold mb-4">
            Not Sure Which Language to Choose?
          </h3>
          <p className="text-primary-foreground/90 mb-6 max-w-2xl mx-auto">
            Start with Hindi if you're completely new to Indian languages - it's widely spoken and uses a phonetic script. 
            You can always learn multiple languages with Native Bloom!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary">
              Start with Hindi
            </Button>
            <Button variant="outline" className="bg-transparent border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
              Learn More About Each Language
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Languages;