import { Header } from "@/components/layout/Header";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Gift, Trophy, Star, Crown, Target, Users, DollarSign, Award } from "lucide-react";

// Dummy rewards data
const rewardsData = {
  totalPoints: 850,
  nextRewardPoints: 1000,
  unlockedRewards: 4,
  totalRewards: 8
};

const rewards = [
  {
    id: 1,
    name: "Early Bird",
    description: "Complete your first donation within 24 hours",
    points: 100,
    icon: Star,
    unlocked: true,
    category: "Getting Started"
  },
  {
    id: 2,
    name: "Team Player",
    description: "Refer 10 people to the platform",
    points: 200,
    icon: Users,
    unlocked: true,
    category: "Referrals"
  },
  {
    id: 3,
    name: "Rising Star",
    description: "Reach $2,000 in total donations",
    points: 300,
    icon: DollarSign,
    unlocked: true,
    category: "Donations"
  },
  {
    id: 4,
    name: "Champion",
    description: "Reach top 3 in leaderboard",
    points: 250,
    icon: Trophy,
    unlocked: true,
    category: "Achievement"
  },
  {
    id: 5,
    name: "Top Performer",
    description: "Reach $5,000 in total donations",
    points: 500,
    icon: Target,
    unlocked: false,
    category: "Donations",
    progress: 49 // 2450/5000 = 49%
  },
  {
    id: 6,
    name: "Super Referrer",
    description: "Refer 25 people to the platform",
    points: 400,
    icon: Crown,
    unlocked: false,
    category: "Referrals",
    progress: 48 // 12/25 = 48%
  },
  {
    id: 7,
    name: "Elite Fundraiser",
    description: "Reach $10,000 in total donations",
    points: 750,
    icon: Award,
    unlocked: false,
    category: "Donations",
    progress: 24.5 // 2450/10000 = 24.5%
  },
  {
    id: 8,
    name: "Leaderboard King",
    description: "Reach #1 on the leaderboard",
    points: 1000,
    icon: Crown,
    unlocked: false,
    category: "Achievement",
    progress: 0
  }
];

const categories = ["All", "Getting Started", "Donations", "Referrals", "Achievement"];

export const Rewards = () => {
  const progressToNext = (rewardsData.totalPoints / rewardsData.nextRewardPoints) * 100;

  return (
    <div className="min-h-screen bg-background">
      <Header currentPath="/rewards" />
      
      <main className="container mx-auto px-4 py-8">
        {/* Header Section */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-2 flex items-center gap-3">
            <Gift className="w-8 h-8 text-primary" />
            Rewards & Achievements
          </h2>
          <p className="text-muted-foreground">Track your progress and unlock amazing rewards</p>
        </div>

        {/* Progress Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="bg-gradient-card border-border/50 shadow-elegant">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Points</CardTitle>
              <Star className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-primary">{rewardsData.totalPoints}</div>
              <p className="text-xs text-muted-foreground">Points earned</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card border-border/50 shadow-elegant">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Unlocked Rewards</CardTitle>
              <Trophy className="h-4 w-4 text-accent" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-accent">
                {rewardsData.unlockedRewards}/{rewardsData.totalRewards}
              </div>
              <p className="text-xs text-muted-foreground">Achievements earned</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card border-border/50 shadow-elegant">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Next Reward</CardTitle>
              <Target className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-primary">{rewardsData.nextRewardPoints - rewardsData.totalPoints}</div>
              <p className="text-xs text-muted-foreground">Points remaining</p>
            </CardContent>
          </Card>
        </div>

        {/* Progress to Next Reward */}
        <Card className="bg-gradient-card border-border/50 shadow-elegant mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target className="w-5 h-5 text-primary" />
              Progress to Next Reward
            </CardTitle>
            <CardDescription>
              {rewardsData.nextRewardPoints - rewardsData.totalPoints} points until your next reward
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>{rewardsData.totalPoints} points</span>
                <span>{rewardsData.nextRewardPoints} points</span>
              </div>
              <Progress value={progressToNext} className="h-3" />
            </div>
          </CardContent>
        </Card>

        {/* Rewards Grid */}
        <Card className="bg-gradient-card border-border/50 shadow-elegant">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Award className="w-5 h-5 text-accent" />
              All Rewards & Achievements
            </CardTitle>
            <CardDescription>Complete tasks to unlock rewards and earn points</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {rewards.map((reward) => {
                const IconComponent = reward.icon;
                return (
                  <div
                    key={reward.id}
                    className={`p-6 rounded-lg border transition-all ${
                      reward.unlocked
                        ? "border-primary/30 bg-primary/5 shadow-glow"
                        : "border-border/50 bg-muted/20"
                    }`}
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                        reward.unlocked 
                          ? "bg-primary/20 text-primary" 
                          : "bg-muted text-muted-foreground"
                      }`}>
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <div className="flex flex-col items-end gap-2">
                        <Badge 
                          variant={reward.unlocked ? "default" : "secondary"}
                          className={reward.unlocked ? "bg-primary/20 text-primary border-primary/30" : ""}
                        >
                          {reward.unlocked ? "Unlocked" : "Locked"}
                        </Badge>
                        <span className="text-sm font-medium text-primary">+{reward.points} pts</span>
                      </div>
                    </div>
                    
                    <h3 className="font-semibold mb-2">{reward.name}</h3>
                    <p className="text-sm text-muted-foreground mb-3">{reward.description}</p>
                    
                    <Badge variant="outline" className="text-xs mb-3">
                      {reward.category}
                    </Badge>
                    
                    {!reward.unlocked && reward.progress !== undefined && (
                      <div className="space-y-2">
                        <div className="flex justify-between text-xs">
                          <span>Progress</span>
                          <span>{reward.progress}%</span>
                        </div>
                        <Progress value={reward.progress} className="h-2" />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default Rewards;