import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Heart, 
  Globe, 
  Users, 
  BookOpen, 
  Target,
  Lightbulb,
  ArrowRight,
  Sparkles,
  Award,
  Clock
} from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Cultural Preservation",
      description: "We believe in preserving and celebrating India's rich linguistic heritage for future generations"
    },
    {
      icon: Globe,
      title: "Accessibility",
      description: "Making Indian languages accessible to everyone, regardless of background or experience level"
    },
    {
      icon: Users,
      title: "Community",
      description: "Building bridges between cultures through the universal language of learning and connection"
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Combining traditional language learning with modern technology for effective education"
    }
  ];

  const team = [
    {
      name: "Priya Sharma",
      role: "Founder & Language Expert",
      description: "Polyglot with expertise in 8 Indian languages and a passion for cultural preservation",
      languages: "Hindi, Marathi, Gujarati, Sanskrit"
    },
    {
      name: "Rajesh Kumar",
      role: "Educational Designer",
      description: "Former university professor specializing in language acquisition and pedagogical methods",
      languages: "Telugu, Tamil, Kannada"
    },
    {
      name: "Anita Nair",
      role: "Cultural Consultant",
      description: "Anthropologist and cultural researcher ensuring authentic and respectful language representation",
      languages: "Malayalam, Tamil, Hindi"
    }
  ];

  const stats = [
    { number: "6", label: "Languages Supported", icon: Globe },
    { number: "350+", label: "Words & Phrases", icon: BookOpen },
    { number: "10K+", label: "Happy Learners", icon: Users },
    { number: "95%", label: "Success Rate", icon: Award }
  ];

  return (
    <div className="px-4 py-16">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6 animate-bloom">
            <Heart className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">Our Story</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 animate-bloom">
            Connecting Cultures Through
            <span className="block bg-gradient-primary bg-clip-text text-transparent">
              Language Learning
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-bloom">
            Native Bloom was born from a simple belief: everyone should have the opportunity 
            to connect with India's beautiful languages and rich cultural heritage.
          </p>
        </div>

        {/* Mission Section */}
        <section className="mb-20">
          <Card className="p-12 bg-gradient-card border-border/50 shadow-warm">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-primary/10 p-3 rounded-xl">
                    <Target className="h-8 w-8 text-primary" />
                  </div>
                  <h2 className="text-3xl font-bold text-foreground">Our Mission</h2>
                </div>
                <p className="text-lg text-muted-foreground mb-6">
                  To make learning Indian languages accessible, enjoyable, and meaningful for everyone. 
                  We envision a world where language barriers disappear and cultural understanding flourishes.
                </p>
                <p className="text-muted-foreground">
                  Through carefully crafted lessons, authentic pronunciation guides, and cultural context, 
                  we help learners not just memorize words, but truly understand and appreciate the 
                  languages they're learning.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, index) => (
                  <Card 
                    key={stat.label}
                    className="p-6 text-center bg-card/50 backdrop-blur-sm hover:shadow-card transition-all duration-300 animate-bloom"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <stat.icon className="h-8 w-8 text-primary mx-auto mb-3" />
                    <div className="text-2xl font-bold text-foreground mb-1">{stat.number}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </Card>
                ))}
              </div>
            </div>
          </Card>
        </section>

        {/* Values Section */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Values
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do at Native Bloom
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card 
                key={value.title}
                className="p-6 text-center bg-gradient-card border-border/50 hover:shadow-warm transition-all duration-300 hover:scale-105 animate-bloom"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="bg-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <value.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </Card>
            ))}
          </div>
        </section>

        {/* Team Section */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Meet Our Team
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Passionate language experts and educators dedicated to your learning success
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card 
                key={member.name}
                className="p-8 text-center bg-gradient-card border-border/50 hover:shadow-warm transition-all duration-300 hover:scale-105 animate-bloom"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-20 h-20 bg-gradient-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-primary-foreground">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">{member.name}</h3>
                <div className="text-primary font-medium mb-3">{member.role}</div>
                <p className="text-sm text-muted-foreground mb-4">{member.description}</p>
                <div className="text-xs text-muted-foreground">
                  <strong>Languages:</strong> {member.languages}
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Story Section */}
        <section className="mb-20">
          <Card className="p-12 bg-gradient-primary text-primary-foreground shadow-glow">
            <div className="max-w-4xl mx-auto text-center">
              <Sparkles className="h-12 w-12 mx-auto mb-6 text-primary-foreground/90" />
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Why We Started Native Bloom
              </h2>
              <div className="text-lg text-primary-foreground/90 space-y-4 text-left max-w-3xl mx-auto">
                <p>
                  Growing up in a multilingual family, our founder Priya noticed how younger generations 
                  were losing touch with their regional languages. Despite India's incredible linguistic 
                  diversity, there were few accessible ways to learn these beautiful languages.
                </p>
                <p>
                  Traditional language classes were often rigid and focused on grammar rather than 
                  practical communication. Online resources were scattered and lacked cultural context. 
                  We knew there had to be a better way.
                </p>
                <p>
                  Native Bloom was created to bridge this gap - combining the best of traditional 
                  language teaching with modern, interactive technology. Our goal is simple: help 
                  people fall in love with Indian languages through engaging, practical learning.
                </p>
              </div>
            </div>
          </Card>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Ready to Begin Your Journey?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Join thousands of learners who are discovering the joy of Indian languages with Native Bloom
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" asChild>
                <Link to="/languages">
                  <Clock className="h-5 w-5" />
                  Start Learning Today
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/features">
                  Explore Features
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;