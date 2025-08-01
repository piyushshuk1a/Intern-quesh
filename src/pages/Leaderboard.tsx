import { Header } from "@/components/layout/Header";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Trophy, Medal, Award, TrendingUp } from "lucide-react";

// Dummy leaderboard data
const leaderboardData = [
  { 
    rank: 1, 
    name: "Sarah Chen", 
    donations: 8750, 
    referrals: 28, 
    avatar: "", 
    change: "+2" 
  },
  { 
    rank: 2, 
    name: "Mike Rodriguez", 
    donations: 6200, 
    referrals: 22, 
    avatar: "", 
    change: "-1" 
  },
  { 
    rank: 3, 
    name: "Alex Johnson", 
    donations: 2450, 
    referrals: 12, 
    avatar: "", 
    change: "+1",
    isCurrentUser: true 
  },
  { 
    rank: 4, 
    name: "Emma Davis", 
    donations: 4800, 
    referrals: 18, 
    avatar: "", 
    change: "0" 
  },
  { 
    rank: 5, 
    name: "David Kim", 
    donations: 4100, 
    referrals: 15, 
    avatar: "", 
    change: "-2" 
  },
  { 
    rank: 6, 
    name: "Lisa Wang", 
    donations: 3600, 
    referrals: 14, 
    avatar: "", 
    change: "+3" 
  },
  { 
    rank: 7, 
    name: "James Miller", 
    donations: 3200, 
    referrals: 11, 
    avatar: "", 
    change: "-1" 
  },
  { 
    rank: 8, 
    name: "Anna Brown", 
    donations: 2900, 
    referrals: 9, 
    avatar: "", 
    change: "0" 
  }
];

const getRankIcon = (rank: number) => {
  switch (rank) {
    case 1:
      return <Trophy className="w-6 h-6 text-yellow-500" />;
    case 2:
      return <Medal className="w-6 h-6 text-gray-400" />;
    case 3:
      return <Award className="w-6 h-6 text-amber-600" />;
    default:
      return <span className="w-6 h-6 flex items-center justify-center text-lg font-bold text-muted-foreground">#{rank}</span>;
  }
};

const getChangeIndicator = (change: string) => {
  if (change.startsWith("+")) {
    return <Badge variant="default" className="bg-green-500/10 text-green-600 border-green-500/20">↗ {change}</Badge>;
  } else if (change.startsWith("-")) {
    return <Badge variant="destructive" className="bg-red-500/10 text-red-600 border-red-500/20">↘ {change}</Badge>;
  } else {
    return <Badge variant="secondary" className="bg-gray-500/10 text-gray-600 border-gray-500/20">→ {change}</Badge>;
  }
};

export const Leaderboard = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header currentPath="/leaderboard" />
      
      <main className="container mx-auto px-4 py-8">
        {/* Header Section */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-2 flex items-center gap-3">
            <Trophy className="w-8 h-8 text-primary" />
            Leaderboard
          </h2>
          <p className="text-muted-foreground">See how you rank against other interns</p>
        </div>

        {/* Top 3 Podium */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {leaderboardData.slice(0, 3).map((intern) => (
            <Card 
              key={intern.rank} 
              className={`bg-gradient-card border-border/50 shadow-elegant ${
                intern.rank === 1 ? 'ring-2 ring-primary/20 shadow-glow' : ''
              } ${intern.isCurrentUser ? 'ring-2 ring-accent/30' : ''}`}
            >
              <CardHeader className="text-center">
                <div className="flex justify-center mb-4">
                  {getRankIcon(intern.rank)}
                </div>
                <Avatar className="w-16 h-16 mx-auto mb-4 ring-2 ring-primary/20">
                  <AvatarImage src={intern.avatar} />
                  <AvatarFallback className="bg-primary/10 text-primary font-semibold">
                    {intern.name.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                <CardTitle className="text-lg">{intern.name}</CardTitle>
                {intern.isCurrentUser && (
                  <Badge variant="secondary" className="bg-accent/10 text-accent border-accent/20">
                    You
                  </Badge>
                )}
              </CardHeader>
              <CardContent className="text-center space-y-3">
                <div>
                  <div className="text-2xl font-bold text-primary">${intern.donations.toLocaleString()}</div>
                  <div className="text-sm text-muted-foreground">Total Donations</div>
                </div>
                <div>
                  <div className="text-lg font-semibold text-accent">{intern.referrals}</div>
                  <div className="text-sm text-muted-foreground">Referrals</div>
                </div>
                <div className="flex justify-center">
                  {getChangeIndicator(intern.change)}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Full Leaderboard */}
        <Card className="bg-gradient-card border-border/50 shadow-elegant">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-primary" />
              Full Rankings
            </CardTitle>
            <CardDescription>Complete leaderboard with all participants</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {leaderboardData.map((intern, index) => (
                <div 
                  key={intern.rank}
                  className={`flex items-center gap-4 p-4 rounded-lg border border-border/50 transition-all hover:bg-muted/50 ${
                    intern.isCurrentUser ? 'bg-accent/5 border-accent/30' : ''
                  }`}
                >
                  <div className="flex items-center justify-center w-10">
                    {getRankIcon(intern.rank)}
                  </div>
                  
                  <Avatar className="w-10 h-10">
                    <AvatarImage src={intern.avatar} />
                    <AvatarFallback className="bg-primary/10 text-primary text-sm">
                      {intern.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <h4 className="font-medium">{intern.name}</h4>
                      {intern.isCurrentUser && (
                        <Badge variant="secondary" className="bg-accent/10 text-accent border-accent/20">
                          You
                        </Badge>
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground">{intern.referrals} referrals</p>
                  </div>
                  
                  <div className="text-right">
                    <div className="font-bold text-primary">${intern.donations.toLocaleString()}</div>
                    <div className="text-sm text-muted-foreground">Total</div>
                  </div>
                  
                  <div className="w-20">
                    {getChangeIndicator(intern.change)}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default Leaderboard;