import { Header } from "@/components/layout/Header";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { DollarSign, Users, Copy, Trophy, Target, Gift } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

// Dummy data
const internData = {
  name: "Piyush Shukla",
  referralCode: "PIYUSH2025",
  totalDonations: 2450,
  donationGoal: 5000,
  referrals: 12,
  rank: 3
};

const rewards = [
  { name: "Early Bird", description: "First 100 donations", unlocked: true },
  { name: "Team Player", description: "Refer 10 people", unlocked: true },
  { name: "Rising Star", description: "Reach $2000", unlocked: true },
  { name: "Top Performer", description: "Reach $5000", unlocked: false },
  { name: "Champion", description: "Top 3 in leaderboard", unlocked: true },
];

export const Dashboard = () => {
  const { toast } = useToast();

  const copyReferralCode = () => {
    navigator.clipboard.writeText(internData.referralCode);
    toast({
      title: "Copied!",
      description: "Referral code copied to clipboard",
    });
  };

  const progressPercentage = (internData.totalDonations / internData.donationGoal) * 100;

  return (
    <div className="min-h-screen bg-background">
      <Header currentPath="/" />
      
      <main className="container mx-auto px-4 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-2">Welcome back, {internData.name}! 👋</h2>
          <p className="text-muted-foreground">Here's your current progress and achievements</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="bg-gradient-card border-border/50 shadow-elegant">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Donations</CardTitle>
              <DollarSign className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-primary">${internData.totalDonations.toLocaleString()}</div>
              <p className="text-xs text-muted-foreground">
                {progressPercentage.toFixed(1)}% of goal
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card border-border/50 shadow-elegant">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Referrals</CardTitle>
              <Users className="h-4 w-4 text-accent" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-accent">{internData.referrals}</div>
              <p className="text-xs text-muted-foreground">People referred</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card border-border/50 shadow-elegant">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Current Rank</CardTitle>
              <Trophy className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-primary">#{internData.rank}</div>
              <p className="text-xs text-muted-foreground">On leaderboard</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card border-border/50 shadow-elegant">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Rewards Unlocked</CardTitle>
              <Gift className="h-4 w-4 text-accent" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-accent">
                {rewards.filter(r => r.unlocked).length}
              </div>
              <p className="text-xs text-muted-foreground">Out of {rewards.length}</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Referral Code Section */}
          <Card className="bg-gradient-card border-border/50 shadow-elegant">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="w-5 h-5 text-primary" />
                Your Referral Code
              </CardTitle>
              <CardDescription>Share this code to earn referral bonuses</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-4 p-4 bg-primary/5 rounded-lg border border-primary/20">
                <code className="text-lg font-mono font-bold text-primary flex-1">
                  {internData.referralCode}
                </code>
                <Button onClick={copyReferralCode} size="sm" variant="outline">
                  <Copy className="w-4 h-4 mr-2" />
                  Copy
                </Button>
              </div>
              
              <div className="mt-6">
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-medium">Goal Progress</span>
                  <span className="text-sm text-muted-foreground">
                    ${internData.totalDonations} / ${internData.donationGoal}
                  </span>
                </div>
                <Progress value={progressPercentage} className="h-2" />
              </div>
            </CardContent>
          </Card>

          {/* Rewards Section */}
          <Card className="bg-gradient-card border-border/50 shadow-elegant">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Gift className="w-5 h-5 text-accent" />
                Rewards & Achievements
              </CardTitle>
              <CardDescription>Track your unlocked rewards and milestones</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {rewards.map((reward, index) => (
                  <div key={index} className="flex items-center justify-between p-3 rounded-lg border border-border/50">
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <h4 className="font-medium">{reward.name}</h4>
                        <Badge variant={reward.unlocked ? "default" : "secondary"}>
                          {reward.unlocked ? "Unlocked" : "Locked"}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">{reward.description}</p>
                    </div>
                    <Trophy className={`w-5 h-5 ${reward.unlocked ? 'text-accent' : 'text-muted-foreground'}`} />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;